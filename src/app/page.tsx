'use client';

import { Header } from "@/components/header";
import { PhoneticInput } from "@/components/phonetic-input";
import { useI18n } from "@/lib/i18n-context";
import { Keyboard, Lightbulb, Sparkles, Heart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="px-4 py-8 md:py-16">
          {/* Hero Section */}
          <div className="max-w-2xl md:max-w-5xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">
                {t.app.hero_pill}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              {t.app.hero_title_prefix}<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">বাংলা</span>{t.app.hero_title_suffix}
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg md:max-w-3xl mx-auto">
              {t.app.hero_desc}
            </p>
          </div>

          {/* Main Input Component */}
          <PhoneticInput />

          {/* Quick Tips */}
          <div className="max-w-2xl md:max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                  <Keyboard className="h-5 w-5 text-emerald-500" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{t.app.card_type_title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.app.card_type_desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center mb-3">
                  <Lightbulb className="h-5 w-5 text-teal-500" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{t.app.card_suggest_title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.app.card_suggest_desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                  <Sparkles className="h-5 w-5 text-cyan-500" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{t.app.card_realtime_title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.app.card_realtime_desc}
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 px-4 text-center space-y-4">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            {t.app.footer_prefix}
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            {t.app.footer_suffix}
          </p>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-muted-foreground/60">
              {t.app.avro_credit} |{' '}
              <Link 
                href="/license" 
                className="hover:text-primary transition-colors underline underline-offset-4"
              >
                {t.app.license}
              </Link>
            </p>
            <p className="text-sm font-medium text-primary/80 tracking-widest mt-2 mb-2">
              {t.app.motto}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
