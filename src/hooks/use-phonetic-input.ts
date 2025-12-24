'use client';

import { toBengali } from '@/lib/avro-phonetic';
import { DictionaryEntry, getSuggestions } from '@/lib/bangla-dictionary';
import { useCallback, useMemo, useState } from 'react';

// Structure to track word segments (English phonetic -> Bengali)
interface WordSegment {
  phonetic: string;  // Original English phonetic
  bengali: string;   // Converted Bengali
  isPunctuation?: boolean; // Whether this is punctuation (no space before)
}

export interface UsePhoneticInputReturn {
  // Input state - now shows mixed Bengali + current English word
  displayValue: string;
  
  // Raw phonetic for current word being typed
  currentPhonetic: string;
  
  // Full converted output
  outputText: string;
  
  // Suggestions (optional - can work without dictionary)
  suggestions: DictionaryEntry[];
  selectedIndex: number;
  showSuggestions: boolean;
  
  // Actions
  handleInputChange: (value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  selectSuggestion: (index: number) => void;
  closeSuggestions: () => void;
  clearAll: () => void;
}

// Punctuation characters that should attach without space
const PUNCTUATION_CHARS = /^[.,!?;:।॥'"()\-\/]+$/;

function isPunctuation(text: string): boolean {
  return PUNCTUATION_CHARS.test(text);
}

export function usePhoneticInput(): UsePhoneticInputReturn {
  // Store word segments: each completed word is stored with its phonetic and bengali form
  const [segments, setSegments] = useState<WordSegment[]>([]);
  // Current word being typed (still in English)
  const [currentWord, setCurrentWord] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  // Get suggestions for current word (optional feature)
  const suggestions = useMemo(() => {
    if (!currentWord || currentWord.length < 2) return [];
    // Don't show suggestions for punctuation
    if (isPunctuation(currentWord)) return [];
    try {
      return getSuggestions(currentWord, 5);
    } catch {
      return []; // Dictionary not available
    }
  }, [currentWord]);
  
  // Build display value: Bengali segments (with proper spacing) + current English word
  const displayValue = useMemo(() => {
    let result = '';
    
    segments.forEach((seg, index) => {
      if (index === 0) {
        result = seg.bengali;
      } else if (seg.isPunctuation) {
        // No space before punctuation
        result += seg.bengali;
      } else {
        // Space before regular words
        result += ' ' + seg.bengali;
      }
    });
    
    if (currentWord) {
      if (result && !isPunctuation(currentWord)) {
        result += ' ' + currentWord;
      } else if (result && isPunctuation(currentWord)) {
        result += currentWord;
      } else {
        result = currentWord;
      }
    } else if (result) {
      result += ' '; // Trailing space for cursor positioning
    }
    
    return result;
  }, [segments, currentWord]);
  
  // Build full output (for output display)
  const outputText = useMemo(() => {
    let result = '';
    
    segments.forEach((seg, index) => {
      if (index === 0) {
        result = seg.bengali;
      } else if (seg.isPunctuation) {
        result += seg.bengali;
      } else {
        result += ' ' + seg.bengali;
      }
    });
    
    if (currentWord) {
      const currentBengali = toBengali(currentWord);
      if (result && !isPunctuation(currentWord)) {
        result += ' ' + currentBengali;
      } else if (result && isPunctuation(currentWord)) {
        result += currentBengali;
      } else {
        result = currentBengali;
      }
    }
    
    return result;
  }, [segments, currentWord]);
  
  // Convert current word and add to segments
  const finalizeCurrentWord = useCallback((selectedBengali?: string, asPunctuation?: boolean) => {
    if (!currentWord.trim() && !isPunctuation(currentWord)) return;
    
    const wordToFinalize = currentWord.trim() || currentWord;
    const bengali = selectedBengali || toBengali(wordToFinalize);
    const isPunct = asPunctuation ?? isPunctuation(wordToFinalize);
    
    setSegments(prev => [...prev, {
      phonetic: wordToFinalize,
      bengali: bengali,
      isPunctuation: isPunct,
    }]);
    setCurrentWord('');
    setShowSuggestions(false);
    setSelectedIndex(0);
  }, [currentWord]);
  
  // Build expected display for comparison
  const buildExpectedDisplay = useCallback(() => {
    let result = '';
    segments.forEach((seg, index) => {
      if (index === 0) {
        result = seg.bengali;
      } else if (seg.isPunctuation) {
        result += seg.bengali;
      } else {
        result += ' ' + seg.bengali;
      }
    });
    return result;
  }, [segments]);
  
  // Handle input change
  const handleInputChange = useCallback((newValue: string) => {
    const bengaliPart = buildExpectedDisplay();
    const expectedBase = bengaliPart ? bengaliPart + ' ' : '';
    
    // Case 1: User is typing after the Bengali part
    if (newValue.startsWith(expectedBase) || (!bengaliPart && !newValue.includes(' '))) {
      const newCurrentWord = bengaliPart ? newValue.slice(expectedBase.length) : newValue;
      
      // Check if user typed a space at the end
      if (newCurrentWord.endsWith(' ') && currentWord.trim()) {
        // Finalize the current word
        const wordToFinalize = newCurrentWord.trim();
        const bengali = toBengali(wordToFinalize);
        const isPunct = isPunctuation(wordToFinalize);
        
        setSegments(prev => [...prev, {
          phonetic: wordToFinalize,
          bengali: bengali,
          isPunctuation: isPunct,
        }]);
        setCurrentWord('');
        setShowSuggestions(false);
        setSelectedIndex(0);
        return;
      }
      
      // Check for punctuation typed immediately (no space needed)
      if (isPunctuation(newCurrentWord) && newCurrentWord.length === 1) {
        // Immediately convert single punctuation
        const bengali = toBengali(newCurrentWord);
        setSegments(prev => [...prev, {
          phonetic: newCurrentWord,
          bengali: bengali,
          isPunctuation: true,
        }]);
        setCurrentWord('');
        setShowSuggestions(false);
        return;
      }
      
      setCurrentWord(newCurrentWord);
      
      // Only show suggestions for non-punctuation words of sufficient length
      if (!isPunctuation(newCurrentWord) && newCurrentWord.length >= 2) {
        try {
          const newSuggestions = getSuggestions(newCurrentWord, 5);
          setShowSuggestions(newSuggestions.length > 0);
        } catch {
          setShowSuggestions(false);
        }
      } else {
        setShowSuggestions(false);
      }
      setSelectedIndex(0);
      return;
    }
    
    // Handle typing directly after punctuation (no space)
    if (newValue.startsWith(bengaliPart) && bengaliPart) {
      const afterBengali = newValue.slice(bengaliPart.length);
      if (afterBengali.startsWith(' ')) {
        const newCurrentWord = afterBengali.slice(1);
        setCurrentWord(newCurrentWord);
        if (!isPunctuation(newCurrentWord) && newCurrentWord.length >= 2) {
          try {
            const newSuggestions = getSuggestions(newCurrentWord, 5);
            setShowSuggestions(newSuggestions.length > 0);
          } catch {
            setShowSuggestions(false);
          }
        } else {
          setShowSuggestions(false);
        }
        setSelectedIndex(0);
        return;
      }
    }
    
    // Case 2: User deleted something (backspace)
    if (newValue.length < displayValue.length) {
      // Check if we're deleting into the Bengali part
      if (newValue.length <= bengaliPart.length && segments.length > 0 && currentWord === '') {
        // Pop the last segment and restore its phonetic
        const lastSegment = segments[segments.length - 1];
        const newSegments = segments.slice(0, -1);
        
        let restoredPhonetic = lastSegment.phonetic;
        
        // Remove last character from phonetic if we deleted into it
        if (restoredPhonetic.length > 0) {
          restoredPhonetic = restoredPhonetic.slice(0, -1);
        }
        
        setSegments(newSegments);
        setCurrentWord(restoredPhonetic);
        
        if (!isPunctuation(restoredPhonetic) && restoredPhonetic.length >= 2) {
          try {
            const newSuggestions = getSuggestions(restoredPhonetic, 5);
            setShowSuggestions(newSuggestions.length > 0);
          } catch {
            setShowSuggestions(false);
          }
        } else {
          setShowSuggestions(false);
        }
        setSelectedIndex(0);
        return;
      }
      
      // Normal backspace within current word
      if (newValue.startsWith(bengaliPart)) {
        const remaining = newValue.slice(bengaliPart.length).trimStart();
        setCurrentWord(remaining);
        
        if (!isPunctuation(remaining) && remaining.length >= 2) {
          try {
            const newSuggestions = getSuggestions(remaining, 5);
            setShowSuggestions(newSuggestions.length > 0);
          } catch {
            setShowSuggestions(false);
          }
        } else {
          setShowSuggestions(false);
        }
        setSelectedIndex(0);
        return;
      }
    }
    
    // Case 3: Value doesn't match expected pattern - reset
    setSegments([]);
    setCurrentWord(newValue);
    
    if (!isPunctuation(newValue) && newValue.length >= 2) {
      try {
        const newSuggestions = getSuggestions(newValue, 5);
        setShowSuggestions(newSuggestions.length > 0);
      } catch {
        setShowSuggestions(false);
      }
    } else {
      setShowSuggestions(false);
    }
    setSelectedIndex(0);
  }, [segments, currentWord, displayValue, buildExpectedDisplay]);
  
  // Select a suggestion
  const selectSuggestion = useCallback((index: number) => {
    if (index < 0 || index >= suggestions.length) return;
    
    const selected = suggestions[index];
    if (!selected) return;
    
    // Finalize with selected Bengali word
    finalizeCurrentWord(selected.bengali, false);
  }, [suggestions, finalizeCurrentWord]);
  
  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    // Space handling - finalize current word with space
    if (e.key === ' ' && currentWord.trim()) {
      e.preventDefault();
      
      // If there are suggestions and one is selected, use that
      if (showSuggestions && suggestions.length > 0) {
        finalizeCurrentWord(suggestions[selectedIndex]?.bengali, false);
      } else {
        finalizeCurrentWord();
      }
      return;
    }
    
    if (!showSuggestions || suggestions.length === 0) {
      return;
    }
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
        
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
        
      case 'Enter':
        e.preventDefault();
        selectSuggestion(selectedIndex);
        break;
        
      case 'Escape':
        e.preventDefault();
        setShowSuggestions(false);
        break;
        
      case 'Tab':
        e.preventDefault();
        selectSuggestion(selectedIndex);
        break;
    }
  }, [showSuggestions, suggestions, selectedIndex, selectSuggestion, currentWord, finalizeCurrentWord]);
  
  // Close suggestions
  const closeSuggestions = useCallback(() => {
    setShowSuggestions(false);
    setSelectedIndex(0);
  }, []);
  
  // Clear all
  const clearAll = useCallback(() => {
    setSegments([]);
    setCurrentWord('');
    setShowSuggestions(false);
    setSelectedIndex(0);
  }, []);
  
  return {
    displayValue,
    currentPhonetic: currentWord,
    outputText,
    suggestions,
    selectedIndex,
    showSuggestions,
    handleInputChange,
    handleKeyDown,
    selectSuggestion,
    closeSuggestions,
    clearAll,
  };
}
