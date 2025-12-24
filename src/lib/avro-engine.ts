import { AVRO_DATA } from './avro-data';

type Scope = "punctuation" | "vowel" | "consonant" | "exact";

export class AvroEngine {
    private patterns = AVRO_DATA.patterns;
    private vowels = AVRO_DATA.vowel;
    private consonants = AVRO_DATA.consonant;
    private caseSensitive = AVRO_DATA.casesensitive;
    private punctuation = "|()[]{}^$*+?.~!@#%&-_='\";<>/\\,:`"; // Derived from avroregexlib ignore list

    constructor() {}

    private isVowel = (c: string) => c !== "" && this.vowels.includes(c.toLowerCase());
    private isConsonant = (c: string) => c !== "" && this.consonants.includes(c.toLowerCase());
    private isPunctuation = (c: string) => {
        return !(this.isVowel(c) || this.isConsonant(c)) && c !== ' '; 
        // fallback: check extracted punctuation list or just !alphanum?
        // simple heuristic: if not vowel/consonant and not space.
        // But what about numbers? numbers are not punct.
        // Let's use the explicit list from regexlib for safety + standard symbols.
        // return this.punctuation.includes(c);
    };
    
    // Exact check might be case sensitive depending on original char?
    // The engine's fixString converts to lower case if not case sensitive.
    // So 'c' passed to tests is already fixed.

    private fixString(input: string): string {
        let fixed = "";
        for (let i = 0; i < input.length; i++) {
            const c = input[i];
            if (this.caseSensitive.includes(c.toLowerCase())) {
                fixed += c;
            } else {
                fixed += c.toLowerCase();
            }
        }
        return fixed;
    }

    public toBengali(input: string): string {
        const fixedInput = this.fixString(input);
        let output = "";
        let i = 0;

        // Cast to any to handle mixed structure in patterns generic logic
        const patterns: readonly any[] = this.patterns;

        while (i < fixedInput.length) {
            let matchFound = false;

            // Iterate patterns (assumed to be ordered by priority/length in JSON)
            for (const pattern of patterns) {
                const find = pattern.find;

                
                // Check if pattern matches at current position
                if (fixedInput.startsWith(find, i)) {
                    let replace = pattern.replace;

                    // Check rules if any
                    // @ts-ignore - inferred type from JSON might be optional
                    if (pattern.rules) {
                        for (const rule of pattern.rules) {
                            let ruleMatch = true;
                            for (const match of rule.matches) {
                                let scope = match.scope;
                                const type = match.type;
                                const value = match.value;
                                
                                // Determine character to check based on type (prefix/suffix)
                                let searchIndex = -1;
                                if (type === "prefix") {
                                    searchIndex = i - 1;
                                } else if (type === "suffix") {
                                    searchIndex = i + find.length;
                                }

                                const checkChar = (searchIndex >= 0 && searchIndex < fixedInput.length) 
                                                  ? fixedInput[searchIndex] 
                                                  : ""; // Boundary is empty string? Or undefined.

                                // Handle negative scope (starts with !)
                                let negative = false;
                                if (scope.startsWith("!")) {
                                    negative = true;
                                    scope = scope.substring(1);
                                }
                                
                                let conditionMet = false;

                                if (scope === "exact") {
                                    if (value) {
                                         // value check
                                         // value in JSON is string, compare with checkChar
                                         // 'value' in JSON usually 'a', '`', etc.
                                         // We should compare exactly?
                                         // checkChar is from fixedInput. value should be compared as is.
                                         conditionMet = (checkChar === value);
                                    }
                                } else if (scope === "punctuation") {
                                    // Punctuation check
                                    // If searchIndex out of bounds? 
                                    // Avro usually treats boundary as punctuation or empty?
                                    // Let's assume boundary/empty is punctuation?
                                    if (searchIndex < 0 || searchIndex >= fixedInput.length) {
                                        conditionMet = true; // Start/End of string treated as boundary/punctuation
                                    } else {
                                        conditionMet = this.isPunctuation(checkChar);
                                    }
                                } else if (scope === "vowel") {
                                     conditionMet = this.isVowel(checkChar);
                                } else if (scope === "consonant") {
                                     conditionMet = this.isConsonant(checkChar);
                                }

                                if (negative) {
                                    conditionMet = !conditionMet;
                                }

                                if (!conditionMet) {
                                    ruleMatch = false;
                                    break;
                                }
                            }

                            if (ruleMatch) {
                                replace = rule.replace;
                                // console.log(`Matched rule for ${find}:`, replace);
                                break; // Use first matching rule
                            }
                        }
                    } else {
                        // console.log(`No rules for ${find}, using default:`, replace);
                    }

                    output += replace;
                    i += find.length;
                    matchFound = true;
                    // console.log(`Pattern matched: ${find} -> ${replace}. Output: ${output}`);
                    break; // Break patterns loop
                }
            }


            if (!matchFound) {
                // Determine fallback
                // If no pattern matches, preserve character?
                // Avro default behavior for unknown char is pass-through.
                output += fixedInput[i];
                i++;
            }
        }
        
        return output;
    }
}
