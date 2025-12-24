'use client';

import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n-context';

export function LanguageToggle() {
  const { language, setLanguage } = useI18n();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
      className="w-9"
    >
      <span className="font-bold">
        {language === 'en' ? 'EN' : 'বাং'}
      </span>
      <span className="sr-only">Toggle language</span>
    </Button>
  );
}
