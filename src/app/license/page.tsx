'use client';

import { Header } from "@/components/header";
import { useI18n } from "@/lib/i18n-context";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LicensePage() {
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

        <main className="max-w-4xl mx-auto px-4 py-8 md:py-16">
          <div className="mb-8">
            <Button variant="ghost" asChild className="gap-2 mb-6">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                {t.license_page.back}
              </Link>
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">
              {t.license_page.title}
            </h1>
            <p className="text-muted-foreground italic">
              {t.license_page.subtitle}
            </p>
          </div>

          <Card className="bg-card/50 border-border/50 backdrop-blur-sm overflow-hidden shadow-xl">
            <CardContent className="p-6 md:p-10">
              <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-foreground/90 leading-relaxed text-base md:text-lg bg-transparent border-none p-0">
                  {t.license_page.content}
                </pre>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-xl font-medium text-primary/80 tracking-widest">
              {t.app.motto}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
