'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Info, ArrowUp, ArrowDown } from 'lucide-react';

import { useI18n } from '@/lib/i18n-context';

export function PhoneticGuide() {
  const { t, language } = useI18n();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground px-2 sm:px-3"
        >
          <Info className="h-4 w-4 sm:mr-1.5" />
          <span className="hidden sm:inline">{t.app.guide}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-5xl max-h-[80vh] overflow-y-auto w-full hide-scrollbar">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {t.guide.title}
          </DialogTitle>
          <DialogDescription>
            {t.guide.desc}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Basic Vowels */}
          <section>
            <h3 className="font-semibold text-foreground mb-3">{t.guide.vowels}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="text-lg font-medium">a</span> → <span className="text-primary text-lg">অ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="text-lg font-medium">aa/A</span> → <span className="text-primary text-lg">আ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="text-lg font-medium">i</span> → <span className="text-primary text-lg">ই</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="text-lg font-medium">ee/I</span> → <span className="text-primary text-lg">ঈ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="text-lg font-medium">u</span> → <span className="text-primary text-lg">উ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="text-lg font-medium">oo/U</span> → <span className="text-primary text-lg">ঊ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="text-lg font-medium">ri/rri</span> → <span className="text-primary text-lg">ঋ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="text-lg font-medium">e</span> → <span className="text-primary text-lg">এ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="text-lg font-medium">o</span> → <span className="text-primary text-lg">ও</span> (Initial)
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="text-lg font-medium">oi/OI</span> → <span className="text-primary text-lg">ঐ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="text-lg font-medium">ou/OU</span> → <span className="text-primary text-lg">ঔ</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Note: &apos;o&apos; after a consonant is usually inherent (e.g. <code className="font-mono">k</code> = ক, <code className="font-mono">ko</code> = ক). Use <code className="font-mono">O</code> for explicit O-kar (ো).
            </p>
          </section>

          {/* Consonants */}
          <section>
            <h3 className="font-semibold text-foreground mb-3">{t.guide.consonants}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">k</span> → <span className="text-primary">ক</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">kh</span> → <span className="text-primary">খ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">g</span> → <span className="text-primary">গ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">gh</span> → <span className="text-primary">ঘ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">ch</span> → <span className="text-primary">ছ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">j</span> → <span className="text-primary">জ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">t</span> → <span className="text-primary">ত</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">T</span> → <span className="text-primary">ট</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">d</span> → <span className="text-primary">দ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">D</span> → <span className="text-primary">ড</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">n</span> → <span className="text-primary">ন</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">N</span> → <span className="text-primary">ণ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">p</span> → <span className="text-primary">প</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">ph/f</span> → <span className="text-primary">ফ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">b</span> → <span className="text-primary">ব</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">bh/v</span> → <span className="text-primary">ভ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">m</span> → <span className="text-primary">ম</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">z</span> → <span className="text-primary">য</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">r</span> → <span className="text-primary">র</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">l</span> → <span className="text-primary">ল</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">s/sh</span> → <span className="text-primary">স/শ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">S</span> → <span className="text-primary">শ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">h</span> → <span className="text-primary">হ</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">ng</span> → <span className="text-primary">ং</span>
              </div>
              <div className="p-2 bg-muted rounded-lg text-center">
                <span className="font-medium">y</span> → <span className="text-primary">য়</span>
              </div>
            </div>
          </section>

          {/* Example Words */}
          <section>
            <h3 className="font-semibold text-foreground mb-3">{t.guide.examples}</h3>
            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="p-3 bg-muted/50 rounded-lg flex justify-between items-center">
                  <code className="font-mono bg-background px-2 py-1 rounded">ami</code>
                  <div className="flex flex-col items-end">
                    <span className="text-primary text-lg">আমি</span>
                    <span className="text-muted-foreground text-xs">(I)</span>
                  </div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg flex justify-between items-center">
                  <code className="font-mono bg-background px-2 py-1 rounded">bangla</code>
                  <div className="flex flex-col items-end">
                    <span className="text-primary text-lg">বাংলা</span>
                    <span className="text-muted-foreground text-xs">(Bengali)</span>
                  </div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg flex justify-between items-center">
                  <code className="font-mono bg-background px-2 py-1 rounded">brriShTi</code>
                  <div className="flex flex-col items-end">
                    <span className="text-primary text-lg">বৃষ্টি</span>
                    <span className="text-muted-foreground text-xs">(Rain)</span>
                  </div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg flex justify-between items-center">
                  <code className="font-mono bg-background px-2 py-1 rounded">obhro</code>
                  <div className="flex flex-col items-end">
                    <span className="text-primary text-lg">অভ্র</span>
                    <span className="text-muted-foreground text-xs">(Avro)</span>
                  </div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg flex justify-between items-center">
                  <code className="font-mono bg-background px-2 py-1 rounded">kotha</code>
                  <div className="flex flex-col items-end">
                    <span className="text-primary text-lg">কথা</span>
                    <span className="text-muted-foreground text-xs">(Talk)</span>
                  </div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg flex justify-between items-center">
                  <code className="font-mono bg-background px-2 py-1 rounded">sundor</code>
                  <div className="flex flex-col items-end">
                    <span className="text-primary text-lg">সুন্দর</span>
                    <span className="text-muted-foreground text-xs">(Beautiful)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tips */}
          <section>
            <h3 className="font-semibold text-foreground mb-3">{t.guide.tips}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                {t.guide.tip_space}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="flex items-center gap-1.5">
                  {language === 'en' ? 'Use' : 'নেভিগেট করতে'} <ArrowUp className="h-3.5 w-3.5" /> <ArrowDown className="h-3.5 w-3.5" /> {language === 'en' ? 'arrows to navigate suggestions' : 'অ্যারো কি ব্যবহার করুন'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                {t.guide.tip_backspace}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                {t.guide.tip_caps}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                {t.guide.tip_z}
              </li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
