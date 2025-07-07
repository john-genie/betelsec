'use client';

import { ArrowRight, ShieldCheck, DatabaseZap, KeyRound } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InteractiveCard } from '@/components/interactive-card';
import { DsgAnimation } from '@/components/dsg-animation';

const features = [
  {
    icon: ShieldCheck,
    title: 'PQC Encryption Engine',
    description:
      'Automatically encrypts all data-at-rest using NIST-selected quantum-resistant algorithms, securing your storage for the long term.',
  },
  {
    icon: DatabaseZap,
    title: 'Transparent Gateway',
    description:
      'Integrates seamlessly with your existing databases and file storage systems, providing protection without requiring application rewrites.',
  },
  {
    icon: KeyRound,
    title: 'Granular Access Control',
    description:
      'Enforce detailed, policy-based access controls, ensuring that only authorized users and applications can decrypt and view sensitive data.',
  },
];

export default function DsgPage() {
  return (
    <div className="bg-background">
      <section className="pt-32 pb-16">
        <header className="container text-center">
          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
            DSG
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Data Security Gateway for Post-Quantum Data-at-Rest
          </p>
        </header>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex items-center justify-center min-h-[400px]">
              <DsgAnimation />
            </div>
            <div className="text-lg text-muted-foreground space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-foreground">
                The Quantum-Proof Vault for Your Data
              </h2>
              <p>
                The DSG (Data Security Gateway) is your last line of defense, a
                powerful gatekeeper that protects your most valuable
                asset—data at rest. In an era where "Harvest Now, Decrypt Later"
                is a real and present danger, DSG ensures that stored data,
                whether in databases, data lakes, or file systems, is rendered
                useless to adversaries.
              </p>
              <p>
                Operating transparently between your applications and your
                storage, DSG automatically encrypts and decrypts data using
                cutting-edge, quantum-resistant cryptographic algorithms. This
                secures your sensitive information for decades to come,
                irrespective of future advances in computing.
              </p>
              <p>
                DSG is currently in its final stages of development and is slated
                for release soon. Prepare to fortify your data archives with the
                ultimate quantum-proof vault.
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
                      className="h-full rounded-lg border border-primary bg-secondary/50 p-6 text-left"
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
            Fortify Your Foundations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            DSG is the critical layer of protection for your stored data. Secure
            your archives against the quantum threat.
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
