export type Language = 'en' | 'bn';

export const translations = {
  en: {
    app: {
      title: "MuktoLipi",
      description: "Type Bengali using phonetics (Avro style)",
      placeholder: "Type here... (e.g. ami banglay gan gai)",
      guide: "Guide",
      theme: "Theme",
      copy: "Copy",
      copied: "Copied!",
      clear: "Clear",
      suggestion_guide: "Suggestion Guide",
      input_label: "Type in English (Press Space to convert)",
      output_label: "Bengali Output (বাংলা)",
      empty_output: "Your Bengali text will appear here...",
      typing_hint: "Currently typing:",
      hero_pill: "Start typing to see the magic",
      hero_title_prefix: "Type ",
      hero_title_suffix: " Easily",
      hero_desc: "Write Bengali using your regular English keyboard. Just type how you speak, and watch it transform into beautiful Bengali script.",
      card_type_title: "Just Type",
      card_type_desc: 'Type "ami" to get "আমি"',
      card_suggest_title: "Smart Suggestions",
      card_suggest_desc: "Use arrows to navigate",
      card_realtime_title: "Real-time",
      card_realtime_desc: "See Bengali as you type",
      footer_prefix: "Made with ",
      footer_suffix: " for Bengali speakers worldwide",
      suggestion_hint: "Use arrow keys to navigate, Enter to select",
      avro_credit: "Inspired by Avro",
      license: "MIT License",
      motto: "ভাষা হোক উন্মুক্ত"
    },
    license_page: {
      title: "License Information",
      subtitle: "Open Source Heritage",
      content: `MIT License

Copyright (c) 2024 MuktoLipi Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
      back: "Back to Home"
    },
    guide: {
      title: "How to Type Bengali using Phonetics",
      desc: "Type Bengali words using English letters based on how they sound.",
      powered_by: "Powered by the Official Avro Phonetic Engine",
      vowels: "Vowels (স্বরবর্ণ)",
      consonants: "Common Consonants (ব্যঞ্জনবর্ণ)",
      examples: "Example Words",
      tips: "Quick Tips",
      tip_space: "Use Space or Enter to convert a word",
      tip_arrow: "Use arrow keys to navigate suggestions",
      tip_backspace: "Press Backspace to revert Bengali back to English",
      tip_caps: "Capital letters (T, D, N, S, H) often produce retroflex or hard sounds",
      tip_z: "z maps to য"
    }
  },
  bn: {
    app: {
      title: "মুক্তলিপি",
      description: "ফোনেটিক ব্যবহার করে বাংলায় লিখুন (অভ্র স্টাইল)",
      placeholder: "এখানে লিখুন... (যেমন: ami banglay gan gai)",
      guide: "নির্দেশিকা",
      theme: "থিম",
      copy: "কপি",
      copied: "কপি হয়েছে!",
      clear: "মুছুন",
      suggestion_guide: "সাজেশন নির্দেশিকা",
      input_label: "ইংরেজিতে লিখুন (কনভার্ট করতে স্পেস চাপুন)",
      output_label: "বাংলা আউটপুট",
      empty_output: "আপনার বাংলা লেখা এখানে দেখা যাবে...",
      typing_hint: "লেখা হচ্ছে:",
      hero_pill: "ম্যাজিক দেখতে টাইপ শুরু করুন",
      hero_title_prefix: "সহজেই ",
      hero_title_suffix: " লিখুন",
      hero_desc: "আপনার সাধারণ ইংরেজি কিবোর্ড দিয়ে বাংলা লিখুন। ঠিক যেভাবে বলেন সেভাবে টাইপ করুন, আর দেখুন কিভাবে তা সুন্দর বাংলা লেখায় রূপান্তরিত হয়।",
      card_type_title: "লিখুন",
      card_type_desc: '"ami" লিখলে "আমি" হবে',
      card_suggest_title: "স্মার্ট সাজেশন",
      card_suggest_desc: "নেভিগেট করতে অ্যারো ব্যবহার করুন",
      card_realtime_title: "রিয়েল-টাইম",
      card_realtime_desc: "টাইপ করার সাথে সাথে বাংলা দেখুন",
      footer_prefix: "বিশ্বজুড়ে বাংলা ভাষাভাষীদের জন্য ",
      footer_suffix: " দিয়ে তৈরি",
      suggestion_hint: "নেভিগেট করতে অ্যারো কি এবং সিলেক্ট করতে Enter ব্যবহার করুন",
      avro_credit: "অভ্র থেকে অনুপ্রাণিত",
      license: "এমআইটি লাইসেন্স",
      motto: "ভাষা হোক উন্মুক্ত"
    },
    license_page: {
      title: "লাইসেন্স সংক্রান্ত তথ্য",
      subtitle: "মুক্ত সফটওয়্যারের ঐতিহ্য",
      content: `এমআইটি লাইসেন্স

কপিরাইট (গ) ২০২৪ মুক্তলিপি অবদানকারীগণ

এতদ্বারা অনুমতি প্রদান করা হচ্ছে যে কোনো ব্যক্তি এটি নিখরচায় পাওয়ার জন্য এবং কোনো বিধিনিষেধ ছাড়াই এই সফটওয়্যারের কপি বা অনুলিপি ব্যবহার করতে পারবে। যার মধ্যে ব্যবহার করার অধিকার, কপি করা, পরিবর্তন করা, একত্রিত করা, প্রকাশ করা, বিতরণ করা, সাবলাইসেন্স দেওয়া এবং/অথবা সফটওয়্যারের কপি বিক্রি করার অন্তর্ভুক্ত।

উপরোক্ত কপিরাইট নোটিশ এবং এই অনুমতি সংক্রান্ত বিজ্ঞপ্তিটি এই সফটওয়্যারের সকল কপি বা উল্লেখযোগ্য অংশে অন্তর্ভুক্ত থাকতে হবে।

সফটওয়্যারটি "যেমন আছে" তেমনভাবে প্রদান করা হয়েছে, কোনো ধরনের ওয়ারেন্টি ছাড়াই। কোনো অবস্থাতেই লেখক বা কপিরাইট হোল্ডাররা কোনো দাবি, ক্ষতি বা অন্য কোনো দায়বদ্ধতার জন্য দায়ী থাকবেন না।`,
      back: "হোমপেজে ফিরে যান"
    },
    guide: {
      title: "কিভাবে ফোনেটিক দিয়ে বাংলা লিখবেন",
      desc: "উচ্চারণ অনুযায়ী ইংরেজি অক্ষর ব্যবহার করে বাংলা শব্দ লিখুন।",
      powered_by: "অফিসিয়াল অভ্র ফোনেটিক ইঞ্জিন দ্বারা চালিত",
      vowels: "স্বরবর্ণ (Vowels)",
      consonants: "ব্যঞ্জনবর্ণ (Consonants)",
      examples: "উদাহরণ (Examples)",
      tips: "পরামর্শ (Tips)",
      tip_space: "শব্দ রূপান্তর করতে Space বা Enter চাপুন",
      tip_arrow: "সাজেশন দেখতে অ্যারো কি ব্যবহার করুন",
      tip_backspace: "বাংলা থেকে ইংরেজিতে ফিরে যেতে Backspace চাপুন",
      tip_caps: "বড় হাতের অক্ষর (T, D, N, S, H) সাধারণত মূর্ধন্য বা ভারী ধ্বনি তৈরি করে",
      tip_z: "z বর্ণটি য এর জন্য ব্যবহৃত হয়"
    }
  }
};
