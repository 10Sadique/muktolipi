'use client';

import { DictionaryEntry } from '@/lib/bangla-dictionary';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n-context';
import { ArrowUp, ArrowDown, CornerDownLeft } from 'lucide-react';
import { CaretCoordinates } from '@/lib/textarea-caret';

interface SuggestionListProps {
  suggestions: DictionaryEntry[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  visible: boolean;
  position?: CaretCoordinates | null;
}

export function SuggestionList({
  suggestions,
  selectedIndex,
  onSelect,
  visible,
  position,
}: SuggestionListProps) {
  const { t, language } = useI18n();
  if (!visible || suggestions.length === 0) return null;

  return (
    <div 
      className="absolute z-[100] animate-in fade-in slide-in-from-top-1 duration-200 pointer-events-none"
      style={{
        top: position ? position.top + position.height + 8 : '100%',
        left: position ? Math.max(0, Math.min(position.left, 300)) : 0,
        width: 'max-content',
        minWidth: '180px',
        maxWidth: '260px',
      }}
    >
      <div className="bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden pointer-events-auto p-1">
        {/* Suggestions List */}
        <ul className="space-y-0.5">
          {suggestions.map((entry, index) => (
            <li key={`${entry.bengali}-${index}`}>
              <button
                type="button"
                onClick={() => onSelect(index)}
                className={cn(
                  'w-full px-3 py-2 flex items-center justify-between gap-6 transition-all duration-100 rounded-md',
                  index === selectedIndex 
                    ? 'bg-emerald-500/15 text-emerald-400' 
                    : 'text-foreground hover:bg-white/5'
                )}
              >
                <div className="flex flex-col items-start leading-none">
                  <span className={cn(
                    "text-lg font-semibold tracking-tight transition-colors",
                    index === selectedIndex ? "text-emerald-400" : "text-white"
                  )}>
                    {entry.bengali}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-muted-foreground/40 mt-1">
                    {entry.phonetic[0]}
                  </span>
                </div>
                
                {index === selectedIndex && (
                  <div className="flex items-center gap-1 opacity-60">
                    <span className="text-[10px] font-mono border border-emerald-500/30 px-1 rounded bg-emerald-500/5">↵</span>
                  </div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
