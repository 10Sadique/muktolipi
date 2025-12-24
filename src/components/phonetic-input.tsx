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
    <div className="w-full max-w-2xl md:max-w-5xl mx-auto space-y-6 px-2 md:px-0">
      {/* Input Section */}
      <Card className="relative overflow-visible bg-gradient-to-br from-card to-card/80 border-border/50 shadow-xl !py-0">
        <CardContent className="p-3">
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
                className="min-h-[160px] md:min-h-[200px] text-lg px-4 py-3 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
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
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-xl !py-0">
        <CardContent className="p-3">
          <div className="space-y-3">
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
            <div className="min-h-[160px] md:min-h-[200px] p-4 rounded-lg bg-background/50 border border-border/30">
              {outputText ? (
                <p className="text-2xl leading-relaxed text-foreground whitespace-pre-wrap break-words">
                  {outputText}
                </p>
              ) : (
                <p className="text-lg text-muted-foreground/50 italic">
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
