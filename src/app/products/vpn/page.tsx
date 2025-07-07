'use client';

import { ArrowRight, Lock, Zap, Cog } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InteractiveCard } from '@/components/interactive-card';
import { VpnAnimation } from '@/components/vpn-animation';

const features = [
  {
    icon: Lock,
    title: 'Quantum-Resistant Tunneling',
    description:
      'All traffic is encrypted within a secure tunnel fortified with NIST-selected post-quantum cryptographic algorithms.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    description:
      "Engineered for minimal latency, our VPN ensures that robust security doesn't come at the cost of network performance.",
  },
  {
    icon: Cog,
    title: 'Centralized Policy Management',
    description:
      'Easily configure and enforce access policies across your entire organization from a single, intuitive dashboard.',
  },
];

export default function VpnPage() {
  return (
    <div className="bg-background">
      <section className="pt-32 pb-16">
        <header className="container text-center">
          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
            Post-Quantum VPN
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            The Future of Secure Remote Access
          </p>
        </header>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex items-center justify-center min-h-[400px]">
              <VpnAnimation />
            </div>
            <div className="text-lg text-muted-foreground space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-foreground">
                An Impenetrable Tunnel for Your Network
              </h2>
              <p>
                Our Post-Quantum VPN establishes an impenetrable tunnel for your
                remote workforce and site-to-site connections. By integrating
                next-generation, quantum-resistant algorithms, it ensures that
                all data in transit is shielded from "Harvest Now, Decrypt
                Later" threats.
              </p>
              <p>
                This provides secure, seamless, and performant access to your
                critical network resources, safeguarding your communications
                against the adversaries of today and tomorrow. This product is
                currently under development.
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
            Secure Your Remote Workforce
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Provide your team with secure, reliable access to your network from
            anywhere in the world.
          </p>
          <div>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">
                Request a Demo <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
