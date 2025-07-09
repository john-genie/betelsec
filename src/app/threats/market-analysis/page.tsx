'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function MarketAnalysisPage() {
  return (
    <div className="bg-background">
      <section className="pt-32 pb-16">
        <header className="container text-center">
          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
            Cybersecurity Market Analysis
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            An overview of the escalating landscape of digital threats and their
            economic impact on key global sectors.
          </p>
        </header>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl space-y-16">
          <div className="space-y-6 text-lg text-muted-foreground">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              The Trillion-Dollar Problem
            </h2>
            <p>
              Cybercrime is projected to cost the world trillions of dollars
              annually, a figure that surpasses the GDP of most nations. This
              is not merely a technological issue; it is a profound economic
              and national security crisis. Ransomware attacks, in particular,
              have evolved from nuisance-level threats to catastrophic events
              capable of paralyzing entire industries, from healthcare to
              critical infrastructure.
            </p>
            <p>
              Recent high-profile attacks have demonstrated the fragility of
              our interconnected systems, where a single breach can cause
              billions in damages and disrupt supply chains globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
             <div>
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="Cyber attack analysis"
                    width={600}
                    height={400}
                    className="rounded-lg"
                    data-ai-hint="cyber security"
                />
            </div>
            <div className="space-y-6 text-lg text-muted-foreground">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  The Ransomware Epidemic
                </h3>
                <p>
                  Groups like ALPHV/BlackCat, BlackSuit, and Qilin have
                  professionalized cyber extortion, operating with a level of
                  sophistication once reserved for state actors. Their tactics
                  have shifted from simple data encryption to a multi-pronged
                  approach involving data exfiltration, public shaming, and
                  direct threats to patients and customers.
                </p>
                <Button asChild variant="link" className="px-0 text-lg">
                    <Link href="/blog">
                        Read recent case studies <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter">
            Anticipating the Next Wave
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The current landscape is merely a prelude to the quantum era. Our
            strategic approach is designed to counter these existing threats
            while building resilience for the future.
          </p>
          <div>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">
                Request a Confidential Briefing <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
