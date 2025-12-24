'use client';

import { LanguageToggle } from './language-toggle';
import { useI18n } from '@/lib/i18n-context';

import { cn } from '@/lib/utils';
import { useTheme } from './theme-provider';
import { PhoneticGuide } from './phonetic-guide';
import { Switch } from '@/components/ui/switch';
import { Sun, Moon, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();

  return (
    <header className={cn('w-full py-4 px-4 sticky top-0 bg-background/80 backdrop-blur-md z-50 border-b border-border/10', className)}>
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-2">
        {/* Logo & Title */}
        <div className="flex items-center gap-2 min-w-0">
          {/* Icon */}
          <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
            <span className="text-white font-bold text-base md:text-lg">ম</span>
          </div>
          
          {/* Title */}
          <div className="flex flex-col min-w-0">
            <h1 className="text-base md:text-xl font-bold text-foreground tracking-tight leading-tight truncate">
              {t.app.title}
            </h1>
            <p className="text-[9px] md:text-xs text-muted-foreground truncate hidden xs:block">
              {t.app.description}
            </p>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-1.5 md:gap-4 shrink-0">
          {/* GitHub Link */}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-muted-foreground hover:text-foreground h-8 w-8"
          >
            <a
              href="https://github.com/10Sadique/muktolipi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          
          <LanguageToggle />
          <PhoneticGuide />
          
          {/* Theme Switcher */}
          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-border/50">
            <span className="text-muted-foreground">
              {theme === 'dark' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </span>
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              aria-label="Toggle dark mode"
            />
          </div>
          {/* Mobile Theme Toggle (Simple button if switch is too big) */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="sm:hidden h-8 w-8"
          >
            {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
