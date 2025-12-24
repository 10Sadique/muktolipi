/**
 * Bengali Dictionary for word suggestions
 * Contains common Bengali words with their phonetic representations
 */

export interface DictionaryEntry {
  bengali: string;
  phonetic: string[];
  frequency?: number;
}

// Common Bengali words dictionary
// Each entry has the Bengali word and possible phonetic representations
export const dictionary: DictionaryEntry[] = [
  // Pronouns
  { bengali: 'আমি', phonetic: ['ami'], frequency: 100 },
  { bengali: 'আমার', phonetic: ['amar'], frequency: 100 },
  { bengali: 'আমাকে', phonetic: ['amake'], frequency: 90 },
  { bengali: 'আমাদের', phonetic: ['amader'], frequency: 90 },
  { bengali: 'তুমি', phonetic: ['tumi'], frequency: 100 },
  { bengali: 'তোমার', phonetic: ['tomar'], frequency: 100 },
  { bengali: 'তোমাকে', phonetic: ['tomake'], frequency: 90 },
  { bengali: 'তোমাদের', phonetic: ['tomader'], frequency: 80 },
  { bengali: 'সে', phonetic: ['se', 'she'], frequency: 100 },
  { bengali: 'তার', phonetic: ['tar'], frequency: 100 },
  { bengali: 'তাকে', phonetic: ['take'], frequency: 90 },
  { bengali: 'তাদের', phonetic: ['tader'], frequency: 80 },
  { bengali: 'আপনি', phonetic: ['apni'], frequency: 100 },
  { bengali: 'আপনার', phonetic: ['apnar'], frequency: 100 },
  { bengali: 'আপনাকে', phonetic: ['apnake'], frequency: 90 },
  { bengali: 'এটা', phonetic: ['eta'], frequency: 90 },
  { bengali: 'ওটা', phonetic: ['ota'], frequency: 80 },
  { bengali: 'কে', phonetic: ['ke'], frequency: 90 },
  { bengali: 'কি', phonetic: ['ki'], frequency: 100 },
  { bengali: 'কেন', phonetic: ['keno', 'ken'], frequency: 90 },

  // Common verbs
  { bengali: 'করা', phonetic: ['kora'], frequency: 100 },
  { bengali: 'করি', phonetic: ['kori'], frequency: 90 },
  { bengali: 'করে', phonetic: ['kore'], frequency: 90 },
  { bengali: 'করছি', phonetic: ['korchi'], frequency: 85 },
  { bengali: 'করছে', phonetic: ['korche'], frequency: 85 },
  { bengali: 'করেছি', phonetic: ['korechi'], frequency: 80 },
  { bengali: 'করেছে', phonetic: ['koreche'], frequency: 80 },
  { bengali: 'করব', phonetic: ['korbo', 'korob'], frequency: 80 },
  { bengali: 'করবে', phonetic: ['korbe'], frequency: 80 },
  { bengali: 'যাওয়া', phonetic: ['jaowa', 'jawa'], frequency: 90 },
  { bengali: 'যাই', phonetic: ['jai'], frequency: 90 },
  { bengali: 'যায়', phonetic: ['jay'], frequency: 90 },
  { bengali: 'যাচ্ছি', phonetic: ['jacchi'], frequency: 85 },
  { bengali: 'যাচ্ছে', phonetic: ['jacche'], frequency: 85 },
  { bengali: 'গেছি', phonetic: ['gechi'], frequency: 80 },
  { bengali: 'গেছে', phonetic: ['geche'], frequency: 80 },
  { bengali: 'যাব', phonetic: ['jabo', 'jab'], frequency: 80 },
  { bengali: 'যাবে', phonetic: ['jabe'], frequency: 80 },
  { bengali: 'আসা', phonetic: ['asa'], frequency: 90 },
  { bengali: 'আসি', phonetic: ['asi'], frequency: 85 },
  { bengali: 'আসে', phonetic: ['ase'], frequency: 85 },
  { bengali: 'আসছি', phonetic: ['aschi'], frequency: 80 },
  { bengali: 'আসছে', phonetic: ['asche'], frequency: 80 },
  { bengali: 'এসেছি', phonetic: ['esechi'], frequency: 75 },
  { bengali: 'এসেছে', phonetic: ['eseche'], frequency: 75 },
  { bengali: 'বলা', phonetic: ['bola'], frequency: 90 },
  { bengali: 'বলি', phonetic: ['boli'], frequency: 85 },
  { bengali: 'বলে', phonetic: ['bole'], frequency: 85 },
  { bengali: 'বলছি', phonetic: ['bolchi'], frequency: 80 },
  { bengali: 'বলছে', phonetic: ['bolche'], frequency: 80 },
  { bengali: 'বলেছি', phonetic: ['bolechi'], frequency: 75 },
  { bengali: 'বলেছে', phonetic: ['boleche'], frequency: 75 },
  { bengali: 'দেখা', phonetic: ['dekha'], frequency: 90 },
  { bengali: 'দেখি', phonetic: ['dekhi'], frequency: 85 },
  { bengali: 'দেখে', phonetic: ['dekhe'], frequency: 85 },
  { bengali: 'দেখছি', phonetic: ['dekhchi'], frequency: 80 },
  { bengali: 'দেখেছি', phonetic: ['dekhechi'], frequency: 75 },
  { bengali: 'খাওয়া', phonetic: ['khaowa', 'khawa'], frequency: 85 },
  { bengali: 'খাই', phonetic: ['khai'], frequency: 80 },
  { bengali: 'খায়', phonetic: ['khay'], frequency: 80 },
  { bengali: 'খাচ্ছি', phonetic: ['khacchi'], frequency: 75 },
  { bengali: 'খেয়েছি', phonetic: ['kheyechi'], frequency: 70 },
  { bengali: 'পড়া', phonetic: ['pora'], frequency: 85 },
  { bengali: 'পড়ি', phonetic: ['pori'], frequency: 80 },
  { bengali: 'পড়ে', phonetic: ['pore'], frequency: 80 },
  { bengali: 'লেখা', phonetic: ['lekha'], frequency: 85 },
  { bengali: 'লিখি', phonetic: ['likhi'], frequency: 80 },
  { bengali: 'লিখে', phonetic: ['likhe'], frequency: 80 },
  { bengali: 'শোনা', phonetic: ['shona'], frequency: 80 },
  { bengali: 'শুনি', phonetic: ['shuni'], frequency: 75 },
  { bengali: 'শুনে', phonetic: ['shune'], frequency: 75 },
  { bengali: 'জানা', phonetic: ['jana'], frequency: 85 },
  { bengali: 'জানি', phonetic: ['jani'], frequency: 80 },
  { bengali: 'জানে', phonetic: ['jane'], frequency: 80 },
  { bengali: 'চাওয়া', phonetic: ['chaowa', 'chawa'], frequency: 80 },
  { bengali: 'চাই', phonetic: ['chai'], frequency: 85 },
  { bengali: 'চায়', phonetic: ['chay'], frequency: 80 },
  { bengali: 'থাকা', phonetic: ['thaka'], frequency: 85 },
  { bengali: 'থাকি', phonetic: ['thaki'], frequency: 80 },
  { bengali: 'থাকে', phonetic: ['thake'], frequency: 80 },
  { bengali: 'আছি', phonetic: ['achi'], frequency: 90 },
  { bengali: 'আছে', phonetic: ['ache'], frequency: 95 },
  { bengali: 'আছো', phonetic: ['acho'], frequency: 85 },
  { bengali: 'নেই', phonetic: ['nei'], frequency: 90 },
  { bengali: 'হওয়া', phonetic: ['howa', 'hoa'], frequency: 85 },
  { bengali: 'হয়', phonetic: ['hoy'], frequency: 85 },
  { bengali: 'হচ্ছে', phonetic: ['hochche'], frequency: 80 },
  { bengali: 'হয়েছে', phonetic: ['hoyeche'], frequency: 75 },
  { bengali: 'হবে', phonetic: ['hobe'], frequency: 80 },
  { bengali: 'নেওয়া', phonetic: ['neowa', 'newa'], frequency: 75 },
  { bengali: 'দেওয়া', phonetic: ['deowa', 'dewa'], frequency: 75 },
  { bengali: 'রাখা', phonetic: ['rakha'], frequency: 75 },
  { bengali: 'ধরা', phonetic: ['dhora'], frequency: 70 },
  { bengali: 'পাওয়া', phonetic: ['paowa', 'pawa'], frequency: 80 },
  { bengali: 'পাই', phonetic: ['pai'], frequency: 75 },
  { bengali: 'পায়', phonetic: ['pay'], frequency: 75 },
  { bengali: 'পেয়েছি', phonetic: ['peyechi'], frequency: 70 },
  { bengali: 'পারা', phonetic: ['para'], frequency: 80 },
  { bengali: 'পারি', phonetic: ['pari'], frequency: 75 },
  { bengali: 'পারে', phonetic: ['pare'], frequency: 75 },
  { bengali: 'ভালোবাসা', phonetic: ['valobasa', 'bhalobasa'], frequency: 85 },
  { bengali: 'ভালোবাসি', phonetic: ['valobasi', 'bhalobasi'], frequency: 80 },

  // Common nouns
  { bengali: 'মানুষ', phonetic: ['manush'], frequency: 90 },
  { bengali: 'লোক', phonetic: ['lok'], frequency: 85 },
  { bengali: 'বাবা', phonetic: ['baba'], frequency: 90 },
  { bengali: 'মা', phonetic: ['ma'], frequency: 95 },
  { bengali: 'ভাই', phonetic: ['bhai'], frequency: 90 },
  { bengali: 'বোন', phonetic: ['bon'], frequency: 85 },
  { bengali: 'বন্ধু', phonetic: ['bondhu'], frequency: 90 },
  { bengali: 'বাড়ি', phonetic: ['bari'], frequency: 90 },
  { bengali: 'ঘর', phonetic: ['ghor'], frequency: 85 },
  { bengali: 'দেশ', phonetic: ['desh'], frequency: 90 },
  { bengali: 'শহর', phonetic: ['shohor'], frequency: 80 },
  { bengali: 'গ্রাম', phonetic: ['gram'], frequency: 80 },
  { bengali: 'রাস্তা', phonetic: ['rasta'], frequency: 75 },
  { bengali: 'পথ', phonetic: ['poth'], frequency: 70 },
  { bengali: 'পানি', phonetic: ['pani'], frequency: 85 },
  { bengali: 'জল', phonetic: ['jol'], frequency: 80 },
  { bengali: 'খাবার', phonetic: ['khabar'], frequency: 85 },
  { bengali: 'ভাত', phonetic: ['bhat'], frequency: 80 },
  { bengali: 'মাছ', phonetic: ['mach'], frequency: 80 },
  { bengali: 'মাংস', phonetic: ['mangsho', 'mangso'], frequency: 75 },
  { bengali: 'ফল', phonetic: ['fol', 'phol'], frequency: 75 },
  { bengali: 'গাছ', phonetic: ['gach'], frequency: 75 },
  { bengali: 'ফুল', phonetic: ['ful', 'phul'], frequency: 75 },
  { bengali: 'নদী', phonetic: ['nodi'], frequency: 75 },
  { bengali: 'সাগর', phonetic: ['sagor'], frequency: 70 },
  { bengali: 'আকাশ', phonetic: ['akash'], frequency: 75 },
  { bengali: 'সূর্য', phonetic: ['surjo', 'surja'], frequency: 70 },
  { bengali: 'চাঁদ', phonetic: ['chand'], frequency: 70 },
  { bengali: 'তারা', phonetic: ['tara'], frequency: 70 },
  { bengali: 'বই', phonetic: ['boi'], frequency: 85 },
  { bengali: 'কলম', phonetic: ['kolom'], frequency: 75 },
  { bengali: 'কাগজ', phonetic: ['kagoj'], frequency: 70 },
  { bengali: 'স্কুল', phonetic: ['school', 'skul'], frequency: 80 },
  { bengali: 'কলেজ', phonetic: ['college', 'kolej'], frequency: 75 },
  { bengali: 'বিশ্ববিদ্যালয়', phonetic: ['bishwobidyaloy', 'bishshobiddaloy'], frequency: 65 },
  { bengali: 'অফিস', phonetic: ['office', 'ofis'], frequency: 80 },
  { bengali: 'কাজ', phonetic: ['kaj'], frequency: 90 },
  { bengali: 'টাকা', phonetic: ['taka'], frequency: 90 },
  { bengali: 'সময়', phonetic: ['somoy'], frequency: 85 },
  { bengali: 'দিন', phonetic: ['din'], frequency: 90 },
  { bengali: 'রাত', phonetic: ['rat'], frequency: 85 },
  { bengali: 'সকাল', phonetic: ['sokal'], frequency: 80 },
  { bengali: 'বিকাল', phonetic: ['bikal'], frequency: 75 },
  { bengali: 'সন্ধ্যা', phonetic: ['sondhya'], frequency: 70 },
  { bengali: 'আজ', phonetic: ['aj'], frequency: 90 },
  { bengali: 'কাল', phonetic: ['kal'], frequency: 85 },
  { bengali: 'বছর', phonetic: ['bochor', 'bochhor'], frequency: 80 },
  { bengali: 'মাস', phonetic: ['mas', 'mash'], frequency: 80 },
  { bengali: 'সপ্তাহ', phonetic: ['soptaho', 'soptah'], frequency: 70 },
  { bengali: 'জীবন', phonetic: ['jibon'], frequency: 85 },
  { bengali: 'মৃত্যু', phonetic: ['mrittu', 'mrityu'], frequency: 65 },
  { bengali: 'প্রেম', phonetic: ['prem'], frequency: 80 },
  { bengali: 'ভালোবাসা', phonetic: ['valobasa', 'bhalobasa'], frequency: 85 },
  { bengali: 'স্বপ্ন', phonetic: ['swopno', 'shopno'], frequency: 75 },
  { bengali: 'আশা', phonetic: ['asha'], frequency: 75 },
  { bengali: 'সুখ', phonetic: ['sukh'], frequency: 75 },
  { bengali: 'দুঃখ', phonetic: ['dukkho', 'dukho'], frequency: 70 },
  { bengali: 'কথা', phonetic: ['kotha'], frequency: 90 },
  { bengali: 'কাহিনী', phonetic: ['kahini'], frequency: 60 },
  { bengali: 'গল্প', phonetic: ['golpo'], frequency: 75 },

  // Common adjectives
  { bengali: 'ভালো', phonetic: ['valo', 'bhalo'], frequency: 95 },
  { bengali: 'খারাপ', phonetic: ['kharap'], frequency: 85 },
  { bengali: 'বড়', phonetic: ['boro'], frequency: 85 },
  { bengali: 'ছোট', phonetic: ['choto'], frequency: 85 },
  { bengali: 'নতুন', phonetic: ['notun'], frequency: 85 },
  { bengali: 'পুরাতন', phonetic: ['puraton', 'purano'], frequency: 70 },
  { bengali: 'সুন্দর', phonetic: ['sundor'], frequency: 90 },
  { bengali: 'কঠিন', phonetic: ['kothin'], frequency: 70 },
  { bengali: 'সহজ', phonetic: ['sohoj'], frequency: 75 },
  { bengali: 'দ্রুত', phonetic: ['druto'], frequency: 65 },
  { bengali: 'ধীর', phonetic: ['dhir'], frequency: 60 },
  { bengali: 'গরম', phonetic: ['gorom'], frequency: 75 },
  { bengali: 'ঠান্ডা', phonetic: ['thanda'], frequency: 75 },
  { bengali: 'সাদা', phonetic: ['sada'], frequency: 70 },
  { bengali: 'কালো', phonetic: ['kalo'], frequency: 70 },
  { bengali: 'লাল', phonetic: ['lal'], frequency: 70 },
  { bengali: 'সবুজ', phonetic: ['sobuj'], frequency: 70 },
  { bengali: 'নীল', phonetic: ['nil'], frequency: 70 },
  { bengali: 'হলুদ', phonetic: ['holud'], frequency: 65 },

  // Common adverbs and particles
  { bengali: 'এখন', phonetic: ['ekhon'], frequency: 90 },
  { bengali: 'তখন', phonetic: ['tokhon'], frequency: 80 },
  { bengali: 'এখানে', phonetic: ['ekhane'], frequency: 85 },
  { bengali: 'সেখানে', phonetic: ['sekhane'], frequency: 80 },
  { bengali: 'কোথায়', phonetic: ['kothay'], frequency: 85 },
  { bengali: 'কখন', phonetic: ['kokhon'], frequency: 80 },
  { bengali: 'কেমন', phonetic: ['kemon'], frequency: 85 },
  { bengali: 'খুব', phonetic: ['khub'], frequency: 90 },
  { bengali: 'অনেক', phonetic: ['onek'], frequency: 90 },
  { bengali: 'কম', phonetic: ['kom'], frequency: 80 },
  { bengali: 'বেশি', phonetic: ['beshi'], frequency: 85 },
  { bengali: 'শুধু', phonetic: ['shudhu'], frequency: 80 },
  { bengali: 'মাত্র', phonetic: ['matro'], frequency: 75 },
  { bengali: 'আবার', phonetic: ['abar'], frequency: 80 },
  { bengali: 'সব', phonetic: ['sob'], frequency: 90 },
  { bengali: 'কিছু', phonetic: ['kichu'], frequency: 90 },
  { bengali: 'আগে', phonetic: ['age'], frequency: 80 },
  { bengali: 'পরে', phonetic: ['pore'], frequency: 80 },
  { bengali: 'সাথে', phonetic: ['sathe'], frequency: 85 },
  { bengali: 'জন্য', phonetic: ['jonno', 'jonne'], frequency: 85 },
  { bengali: 'থেকে', phonetic: ['theke'], frequency: 85 },
  { bengali: 'পর্যন্ত', phonetic: ['porjonto'], frequency: 70 },
  { bengali: 'মধ্যে', phonetic: ['moddhe', 'modhdhe'], frequency: 75 },
  { bengali: 'উপর', phonetic: ['upor'], frequency: 75 },
  { bengali: 'নিচে', phonetic: ['niche'], frequency: 70 },
  { bengali: 'সামনে', phonetic: ['samne'], frequency: 75 },
  { bengali: 'পিছনে', phonetic: ['pichone'], frequency: 70 },
  { bengali: 'এবং', phonetic: ['ebong'], frequency: 90 },
  { bengali: 'আর', phonetic: ['ar'], frequency: 95 },
  { bengali: 'কিন্তু', phonetic: ['kintu'], frequency: 85 },
  { bengali: 'তবে', phonetic: ['tobe'], frequency: 80 },
  { bengali: 'যদি', phonetic: ['jodi'], frequency: 80 },
  { bengali: 'তাহলে', phonetic: ['tahole', 'tahle'], frequency: 80 },
  { bengali: 'কারণ', phonetic: ['karon'], frequency: 80 },
  { bengali: 'তাই', phonetic: ['tai'], frequency: 85 },
  { bengali: 'হ্যাঁ', phonetic: ['hya', 'hyan', 'ha'], frequency: 95 },
  { bengali: 'না', phonetic: ['na'], frequency: 100 },
  { bengali: 'হয়তো', phonetic: ['hoyto'], frequency: 70 },
  
  // Greetings and expressions
  { bengali: 'ধন্যবাদ', phonetic: ['dhonnobad', 'dhonnyobad'], frequency: 90 },
  { bengali: 'স্বাগতম', phonetic: ['swagatom', 'shagatom'], frequency: 75 },
  { bengali: 'শুভ', phonetic: ['shubho', 'shubh'], frequency: 80 },
  { bengali: 'নমস্কার', phonetic: ['nomoskar', 'namaskar'], frequency: 75 },
  { bengali: 'আসসালামু', phonetic: ['assalamu'], frequency: 70 },
  { bengali: 'আলাইকুম', phonetic: ['alaikum'], frequency: 70 },
  { bengali: 'কেমন', phonetic: ['kemon'], frequency: 85 },
  { bengali: 'আছেন', phonetic: ['achen'], frequency: 85 },
  { bengali: 'মাফ', phonetic: ['maf'], frequency: 70 },
  { bengali: 'দুঃখিত', phonetic: ['dukkhito', 'dukhito'], frequency: 70 },
  { bengali: 'অভিনন্দন', phonetic: ['obhinondon', 'abhinandan'], frequency: 60 },
  { bengali: 'শুভকামনা', phonetic: ['shubhokamona'], frequency: 65 },
  { bengali: 'জন্মদিন', phonetic: ['jonmodin'], frequency: 75 },
  
  // Bangla specific words
  { bengali: 'বাংলা', phonetic: ['bangla', 'bangala'], frequency: 95 },
  { bengali: 'বাংলাদেশ', phonetic: ['bangladesh'], frequency: 95 },
  { bengali: 'ঢাকা', phonetic: ['dhaka'], frequency: 85 },
  { bengali: 'কলকাতা', phonetic: ['kolkata', 'calcutta'], frequency: 80 },
  { bengali: 'বাঙালি', phonetic: ['bangali'], frequency: 85 },
  { bengali: 'বাঙালী', phonetic: ['bangali'], frequency: 80 },
  
  // Numbers in words
  { bengali: 'এক', phonetic: ['ek'], frequency: 80 },
  { bengali: 'দুই', phonetic: ['dui'], frequency: 80 },
  { bengali: 'তিন', phonetic: ['tin'], frequency: 75 },
  { bengali: 'চার', phonetic: ['char'], frequency: 75 },
  { bengali: 'পাঁচ', phonetic: ['pach', 'panch'], frequency: 75 },
  { bengali: 'ছয়', phonetic: ['chhoy', 'choy', 'soy'], frequency: 70 },
  { bengali: 'সাত', phonetic: ['sat'], frequency: 70 },
  { bengali: 'আট', phonetic: ['at'], frequency: 70 },
  { bengali: 'নয়', phonetic: ['noy'], frequency: 70 },
  { bengali: 'দশ', phonetic: ['dosh'], frequency: 70 },
  { bengali: 'শত', phonetic: ['shot', 'shoto'], frequency: 65 },
  { bengali: 'হাজার', phonetic: ['hajar', 'hazar'], frequency: 65 },
  { bengali: 'লক্ষ', phonetic: ['lokkho', 'lakh'], frequency: 60 },
  { bengali: 'কোটি', phonetic: ['koti'], frequency: 60 },
  
  // Common English loanwords transliterated to Bengali
  { bengali: 'ফোন', phonetic: ['phone', 'fon'], frequency: 90 },
  { bengali: 'মোবাইল', phonetic: ['mobile', 'mobail'], frequency: 90 },
  { bengali: 'কম্পিউটার', phonetic: ['computer', 'komputer'], frequency: 85 },
  { bengali: 'ইন্টারনেট', phonetic: ['internet'], frequency: 85 },
  { bengali: 'ফেসবুক', phonetic: ['facebook', 'fesbook'], frequency: 85 },
  { bengali: 'ইমেইল', phonetic: ['email', 'imail'], frequency: 80 },
  { bengali: 'মেসেজ', phonetic: ['message', 'mesej'], frequency: 80 },
  { bengali: 'ভিডিও', phonetic: ['video', 'bhideo'], frequency: 80 },
  { bengali: 'অডিও', phonetic: ['audio', 'odio'], frequency: 70 },
  { bengali: 'ছবি', phonetic: ['chobi'], frequency: 85 },
  { bengali: 'ফটো', phonetic: ['photo', 'foto'], frequency: 80 },
];

/**
 * Get suggestions for a phonetic input
 */
export function getSuggestions(phoneticInput: string, limit: number = 5): DictionaryEntry[] {
  if (!phoneticInput || phoneticInput.length < 1) return [];
  
  const input = phoneticInput.toLowerCase();
  
  // Find matching entries
  const matches = dictionary.filter(entry => 
    entry.phonetic.some(p => p.toLowerCase().startsWith(input))
  );
  
  // Sort by frequency (higher first) and match quality
  matches.sort((a, b) => {
    const aExact = a.phonetic.some(p => p.toLowerCase() === input);
    const bExact = b.phonetic.some(p => p.toLowerCase() === input);
    
    if (aExact && !bExact) return -1;
    if (!aExact && bExact) return 1;
    
    return (b.frequency || 0) - (a.frequency || 0);
  });
  
  return matches.slice(0, limit);
}

/**
 * Check if an exact match exists in the dictionary
 */
export function hasExactMatch(phoneticInput: string): DictionaryEntry | undefined {
  const input = phoneticInput.toLowerCase();
  return dictionary.find(entry => 
    entry.phonetic.some(p => p.toLowerCase() === input)
  );
}
