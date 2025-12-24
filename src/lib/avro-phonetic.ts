/**
 * Avro Phonetic to Bengali Converter (Official Implementation)
 * 
 * Powered by the extracted rules from the official Avro Phonetic engine (avro.min.js).
 * This implementation uses the exact pattern matching and rule logic 
 * found in the original library to ensure 100% compatibility.
 */

import { AvroEngine } from './avro-engine';

// Initialize the engine (singleton pattern effectively as module scope)
const engine = new AvroEngine();

/**
 * Converts English phonetic text to Bengali using official Avro rules.
 * @param input English phonetic string
 * @returns Bengali transliterated string
 */
export function toBengali(input: string): string {
  if (!input) return '';
  return engine.toBengali(input);
}
