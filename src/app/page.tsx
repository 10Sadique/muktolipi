'use client';

import { Header } from "@/components/header";
import { PhoneticInput } from "@/components/phonetic-input";
import { useI18n } from "@/lib/i18n-context";
import { Keyboard, Lightbulb, Sparkles, Heart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { t, language } = useI18n();

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-flow-bg" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/10 rounded-full blur-[120px] animate-flow-bg" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="px-4 py-8 md:py-16">
          {/* Hero Section */}
          <div className="max-w-2xl md:max-w-5xl mx-auto text-center mb-16 animate-reveal-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 tracking-wide">
                {t.app.hero_pill}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight-titles mb-6 leading-[1.1]">
              {t.app.hero_title_prefix}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 animate-flow-bg">
                {language === 'en' ? 'Bengali' : 'বাংলা'}
              </span>
              {t.app.hero_title_suffix}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg md:max-w-3xl mx-auto leading-relaxed opacity-80">
              {t.app.hero_desc}
            </p>
          </div>

          {/* Main Input Component */}
          <PhoneticInput />

          {/* Quick Tips */}
          <div className="max-w-2xl md:max-w-5xl mx-auto mt-24 animate-reveal-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group p-6 rounded-2xl glass-card border-white/5 shadow-premium hover:border-emerald-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <Keyboard className="h-5 w-5 text-emerald-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 tracking-tight">{t.app.card_type_title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic opacity-80">{t.app.card_type_desc}</p>
              </div>

              <div className="group p-6 rounded-2xl glass-card border-white/5 shadow-premium hover:border-teal-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 group-hover:-rotate-12 transition-transform">
                  <Lightbulb className="h-5 w-5 text-teal-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 tracking-tight">{t.app.card_suggest_title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic opacity-80">{t.app.card_suggest_desc}</p>
              </div>

              <div className="group p-6 rounded-2xl glass-card border-white/5 shadow-premium hover:border-cyan-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="h-5 w-5 text-cyan-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 tracking-tight">{t.app.card_realtime_title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic opacity-80">{t.app.card_realtime_desc}</p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="py-16 md:py-24 px-4 text-center space-y-8 animate-reveal-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm font-medium text-muted-foreground flex items-center justify-center gap-2 group">
              {t.app.footer_prefix}
              <Heart className="h-4 w-4 text-red-500 fill-red-500 group-hover:scale-125 transition-transform duration-300" />
              {t.app.footer_suffix}
            </p>
            
            <div className="flex flex-col items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-border to-transparent mb-2" />
              <p className="text-xs font-medium text-muted-foreground/40 tracking-wider">
                {t.app.avro_credit} |{' '}
                <Link 
                  href="/license" 
                  className="hover:text-primary transition-colors underline underline-offset-4 decoration-primary/20 hover:decoration-primary"
                >
                  {t.app.license}
                </Link>
              </p>
              <p className="text-base md:text-lg font-bold text-primary/60 tracking-[0.3em] uppercase mt-4 opacity-50 select-none">
                {t.app.motto}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
