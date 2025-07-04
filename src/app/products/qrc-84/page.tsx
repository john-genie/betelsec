'use client';

import { ArrowRight, ShieldOff, LockKeyhole, Eraser } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InteractiveCard } from '@/components/interactive-card';
import { Qrc84Animation } from '@/components/qrc84-animation';

const features = [
  {
    icon: ShieldOff,
    title: 'Anonymous Key Exchange',
    description:
      'Leverages PQC KEM to establish secure session keys over public channels without requiring long-term personal identifiers for authentication.',
  },
  {
    icon: LockKeyhole,
    title: 'Real-time Encrypted Communication',
    description:
      'Protects voice, video, and text chats with end-to-end, quantum-resistant encryption, ensuring your conversations are shielded from all adversaries.',
  },
  {
    icon: Eraser,
    title: 'Ephemeral & Traceless',
    description:
      'All communication is session-based. Once a conversation ends, the cryptographic keys are destroyed, leaving no data or metadata trail to be harvested.',
  },
];

export default function Qrc84Page() {
  return (
    <div className="bg-background">
      <section className="pt-32 pb-16">
        <header className="container text-center">
          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
            QRC-84
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Anonymous Post-Quantum Communication Channel
          </p>
        </header>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 flex items-center justify-center min-h-[400px]">
              <Qrc84Animation />
            </div>
            <div className="order-1 md:order-2 text-lg text-muted-foreground space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-foreground">
                Untraceable Communication for the Quantum Age
              </h2>
              <p>
                QRC-84 provides a revolutionary secure communication channel for
                calls, chats, and video, built for an era of quantum threats. It
                ensures that sensitive conversations remain completely private
                and untraceable.
              </p>
              <p>
                At its core, QRC-84 utilizes a Post-Quantum Cryptography Key
                Encapsulation Mechanism (KEM). This allows two parties to
                establish a shared, secret key over an untrusted network without
                pre-existing credentials. The process is entirely anonymous and
                session-based, leaving no metadata trail.
              </p>
              <p>
                QRC-84 is in its final development phase and will be launched
                soon, offering a new paradigm for secure, untraceable
                communications.
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
                    <div className="h-full rounded-lg border bg-secondary/50 p-6 text-left">
                      <Icon className="h-10 w-10 text-foreground mb-4" />
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
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
            Communicate with Absolute Confidence
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Secure your most critical conversations against the threats of today
            and tomorrow.
          </p>
          <div>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">
                Inquire About Early Access <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
