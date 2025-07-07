'use client';

import { ArrowRight, Network, Zap, Scaling } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InteractiveCard } from '@/components/interactive-card';
import { SynapseAnimation } from '@/components/synapse-animation';

const features = [
  {
    icon: Network,
    title: 'Post-Quantum Tunneling',
    description:
      'Establishes secure communication channels fortified with next-generation quantum-resistant algorithms, protecting all data in transit from HNDL attacks.',
  },
  {
    icon: Zap,
    title: 'Real-time Traffic Analysis',
    description:
      'Utilizes advanced analytics to continuously monitor data streams, detecting and mitigating threats as they emerge without compromising performance.',
  },
  {
    icon: Scaling,
    title: 'Lightweight & Scalable',
    description:
      'Engineered for high-performance environments, ensuring seamless integration and minimal latency across distributed networks and cloud infrastructures.',
  },
];

export default function SynapsePage() {
  return (
    <div className="bg-background">
      <section className="pt-32 pb-16">
        <header className="container text-center">
          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
            SYNAPSE
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Quantum-Resistant Security for Data in Motion
          </p>
        </header>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 text-lg text-muted-foreground space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-foreground">
                A Quantum-Resistant Shield for Your Data in Motion
              </h2>
              <p>
                SYNAPSE is a forward-thinking security solution engineered to
                protect data in transit from both current and future threats. As
                data moves between servers, across clouds, and to end-users,
                SYNAPSE creates an impenetrable, high-speed tunnel fortified
                with post-quantum cryptography.
              </p>
              <p>
                By securing the connections themselves, SYNAPSE ensures that
                sensitive information remains confidential and integral,
                neutralizing the risk of "Harvest Now, Decrypt Later" attacks.
                It provides a vital layer of defense for APIs, network traffic,
                and all forms of digital communication.
              </p>
              <p>
                Currently in its final development stages, SYNAPSE is scheduled
                for launch soon. It will provide organizations with the critical
                advantage needed to secure their data in motion for the quantum
                era.
              </p>
            </div>
            <div className="order-1 md:order-2 flex items-center justify-center min-h-[400px]">
              <SynapseAnimation />
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
            Prepare for the Quantum Leap
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            SYNAPSE is your proactive defense for data on the move. Prepare your
            network for the quantum age.
          </p>
          <div>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">
                Join the Early Access Program <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
