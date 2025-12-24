'use client';

import { useRef, useEffect, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { SuggestionList } from './suggestion-list';
import { usePhoneticInput } from '@/hooks/use-phonetic-input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n-context';
import { Copy, Check } from 'lucide-react';

interface PhoneticInputProps {
  placeholder?: string;
}

export function PhoneticInput({ placeholder }: PhoneticInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  
  const {
    displayValue,
    currentPhonetic,
    outputText,
    suggestions,
    selectedIndex,
    showSuggestions,
    handleInputChange,
    handleKeyDown,
    selectSuggestion,
    closeSuggestions,
    clearAll,
  } = usePhoneticInput();

  // Focus textarea on mount
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleCopy = () => {
    if (outputText) {
      navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.phonetic-input-container')) {
        closeSuggestions();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeSuggestions]);

  return (
    <div className="w-full max-w-2xl md:max-w-5xl mx-auto space-y-8 px-4 md:px-0 animate-reveal-up">
      {/* Input Section */}
      <Card className="relative overflow-visible glass-card border-white/10 shadow-premium !py-0 transition-all duration-300">
        <CardContent className="p-4">
          <div className="space-y-4">
            {/* Label */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-muted-foreground">
                {t.app.input_label}
              </label>
              {displayValue && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAll}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  {t.app.clear}
                </Button>
              )}
            </div>
            
            {/* Textarea with suggestions */}
            <div className="relative phonetic-input-container">
              <Textarea
                ref={textareaRef}
                value={displayValue}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder || t.app.placeholder}
                className="min-h-[160px] md:min-h-[200px] text-lg md:text-xl px-5 py-4 bg-background/30 border-white/5 focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 resize-none rounded-xl"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
              
              {/* Suggestions dropdown */}
              <SuggestionList
                suggestions={suggestions}
                selectedIndex={selectedIndex}
                onSelect={selectSuggestion}
                visible={showSuggestions}
              />
            </div>

            {/* Current word hint */}
            {currentPhonetic && (
              <div className="pt-2 border-t border-border/30">
                <p className="text-xs text-muted-foreground">
                  {t.app.typing_hint} <span className="text-foreground font-mono">{currentPhonetic}</span>
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Output Section */}
      <Card className="glass-card border-white/10 shadow-premium !py-0 transition-all duration-300">
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-muted-foreground">
                {t.app.output_label}
              </label>
              {outputText && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="text-xs text-muted-foreground hover:text-foreground h-7"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 mr-1" />
                      {t.app.copied}
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 mr-1" />
                      {t.app.copy}
                    </>
                  )}
                </Button>
              )}
            </div>
            <div className="min-h-[160px] md:min-h-[200px] p-6 rounded-xl bg-background/30 border border-white/5 backdrop-blur-sm">
              {outputText ? (
                <p className="text-2xl md:text-3xl leading-relaxed text-foreground whitespace-pre-wrap break-words tracking-wide">
                  {outputText}
                </p>
              ) : (
                <p className="text-lg text-muted-foreground/40 italic">
                  {t.app.empty_output}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
