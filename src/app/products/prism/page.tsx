'use client';

import { ArrowRight, Lock, BrainCircuit, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InteractiveCard } from '@/components/interactive-card';
import { PrismAnimation } from '@/components/prism-animation';

const features = [
  {
    icon: Lock,
    title: 'Total Data State Protection',
    description:
      'Secures data in all states—at-rest, in-transit, and in-use—by applying robust PQC and AI-driven policies across your entire data lifecycle.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Threat Mitigation',
    description:
      'Leverages a sophisticated AI for real-time threat classification and mitigation, forming an intelligent shield for your Data Loss Prevention strategy.',
  },
  {
    icon: Zap,
    title: 'Hybrid PQC Encryption',
    description:
      'Future-proof your organization with a state-of-the-art hybrid encryption model, combining classical and quantum-resistant algorithms for ultimate security.',
  },
];

export default function PrismPage() {
  return (
    <div className="bg-background">
      <section className="pt-32 pb-16">
        <header className="container text-center">
          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
            PRISM
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Post-quantum Resilient Intelligent Security Mainframe
          </p>
        </header>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex items-center justify-center min-h-[400px]">
              <PrismAnimation />
            </div>
            <div className="text-lg text-muted-foreground space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-foreground">
                Unified AI and Post-Quantum Security
              </h2>
              <p>
                PRISM, our Post-quantum Resilient Intelligent Security
                Mainframe, provides comprehensive protection for your data,
                regardless of its state—in-transit, at-rest, or in-use.
              </p>
              <p>
                It integrates a powerful AI engine for advanced threat
                mitigation and classification, specifically tailored for Data
                Loss Prevention (DLP). This allows PRISM to intelligently
                identify and neutralize threats before they can compromise your
                data.
              </p>
              <p>
                At its core, PRISM utilizes a hybrid Post-Quantum Cryptography
                (PQC) model, ensuring your data is shielded from the immense
                processing power of future quantum computers. This
                groundbreaking solution is in its final stages of development
                and is slated for release soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <h2 className="text-center text-4xl font-bold tracking-tighter">
            Core Capabilities
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title}>
                  <InteractiveCard className="h-full">
                    <div
                      className="h-full rounded-lg border bg-secondary/50 p-6 text-left"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div style={{ transform: 'translateZ(50px)' }}>
                        <Icon className="h-10 w-10 text-foreground mb-4" />
                      </div>
                      <h3
                        className="text-xl font-semibold text-foreground"
                        style={{ transform: 'translateZ(40px)' }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="mt-2 text-muted-foreground"
                        style={{ transform: 'translateZ(20px)' }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </InteractiveCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter">
            Prepare for the Quantum Leap
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            PRISM is more than a product; it's your strategic advantage in the
            quantum era. Full specifications and integration guides will be
            available at launch.
          </p>
          <div>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">
                Request an Early Access Briefing <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
