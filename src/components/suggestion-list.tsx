'use client';

import { DictionaryEntry } from '@/lib/bangla-dictionary';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n-context';
import { ArrowUp, ArrowDown, CornerDownLeft } from 'lucide-react';

interface SuggestionListProps {
  suggestions: DictionaryEntry[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  visible: boolean;
}

export function SuggestionList({
  suggestions,
  selectedIndex,
  onSelect,
  visible,
}: SuggestionListProps) {
  const { t, language } = useI18n();
  if (!visible || suggestions.length === 0) return null;

  return (
    <div className="absolute left-0 right-0 top-full mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl overflow-hidden">
        {/* Header hint */}
        <div className="px-4 py-2 border-b border-border/30 bg-muted/30">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5 flex-wrap">
            {language === 'en' ? 'Use' : 'ব্যবহার করুন'} 
            <ArrowUp className="h-3 w-3 inline" /> 
            <ArrowDown className="h-3 w-3 inline" /> 
            {language === 'en' ? 'to navigate,' : 'নেভিগেট করতে,'} 
            <CornerDownLeft className="h-3 w-3 inline" /> 
            {language === 'en' ? 'Enter to select' : 'Enter সিলেক্ট করতে'}
          </p>
        </div>
        
        {/* Suggestions */}
        <ul className="py-1">
          {suggestions.map((entry, index) => (
            <li key={`${entry.bengali}-${index}`}>
              <button
                type="button"
                onClick={() => onSelect(index)}
                className={cn(
                  'w-full px-4 py-3 flex items-center justify-between gap-4 transition-all duration-150',
                  'hover:bg-primary/10',
                  index === selectedIndex && 'bg-primary/15 border-l-2 border-primary'
                )}
              >
                <span className="text-xl font-medium text-foreground">
                  {entry.bengali}
                </span>
                <span className="text-sm text-muted-foreground font-mono">
                  {entry.phonetic[0]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
