'use client';

import { useRef, useEffect, useState } from 'react';
import { LanguageToggle } from './language-toggle';
import { useI18n } from '@/lib/i18n-context';

import { cn } from '@/lib/utils';
import { PhoneticGuide } from './phonetic-guide';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'w-full sticky top-0 z-50 transition-all duration-500 ease-in-out px-4 py-4',
        className
      )}
    >
      <div 
        className={cn(
          'mx-auto transition-all duration-500 ease-in-out pointer-events-auto glass-card rounded-full border-white/20',
          scrolled 
            ? 'max-w-4xl' 
            : 'max-w-5xl'
        )}
      >
        <div className={cn(
          "mx-auto flex items-center justify-between transition-all duration-500 px-3 py-3",
        )}>
          {/* Logo & Title */}
          <div className="flex items-center gap-3 min-w-0">
            {/* Icon */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 border border-white/20">
                <span className="text-white font-bold text-base md:text-lg drop-shadow-sm">ম</span>
              </div>
            </div>
            
            {/* Title */}
            <div className="flex flex-col min-w-0">
              <h1 className={cn(
                "font-bold text-foreground tracking-tight-titles leading-tight truncate transition-all duration-300",
                scrolled ? "text-sm md:text-base" : "text-base md:text-xl"
              )}>
                {t.app.title}
              </h1>
              <p className={cn(
                "text-[9px] md:text-xs text-muted-foreground truncate hidden xs:block font-medium opacity-70 transition-all duration-300",
                scrolled ? "max-h-0 opacity-0 overflow-hidden" : "max-h-10 opacity-70"
              )}>
                {t.app.description}
              </p>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
          {/* GitHub Link */}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-muted-foreground hover:text-foreground h-9 w-9 rounded-full hover:bg-white/10"
          >
            <a
              href="https://github.com/10Sadique/muktolipi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
            >
              <Github className="h-[1.1rem] w-[1.1rem]" />
            </a>
          </Button>
          
          <LanguageToggle />
          <PhoneticGuide />
        </div>
      </div>
    </div>
  </header>
  );
}
