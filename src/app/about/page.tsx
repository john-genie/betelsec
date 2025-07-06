'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { InteractiveCard } from '@/components/interactive-card';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="pt-32 pb-16">
        <header className="container text-center">
          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
            About BetelSec
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Pioneering the future of digital security in the quantum era.
          </p>
        </header>
      </section>

      <section className="bg-secondary py-24">
        <div className="container grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold tracking-tighter">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              At BetelSec AI Guardian, our mission is to provide impenetrable,
              forward-thinking security solutions that safeguard critical data
              against both present and future threats. We are committed to
              empowering organizations to operate with confidence in an
              increasingly complex digital landscape.
            </p>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Team collaborating"
              width={600}
              height={400}
              className="rounded-lg"
              data-ai-hint="office workspace"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <h2 className="text-center text-4xl font-bold tracking-tighter">
            Our Core Values
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-3">
            <div>
              <InteractiveCard>
                <div
                  className="h-full rounded-lg border bg-secondary/50 p-8 text-center"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div style={{ transform: 'translateZ(50px)' }}>
                    <CheckCircle className="mx-auto h-10 w-10 text-foreground" />
                  </div>
                  <h3
                    className="mt-4 text-xl font-semibold"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    Innovation
                  </h3>
                  <p
                    className="mt-2 text-muted-foreground"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    We are relentless in our pursuit of cutting-edge technology
                    to stay ahead of emerging threats.
                  </p>
                </div>
              </InteractiveCard>
            </div>
            <div>
              <InteractiveCard>
                <div
                  className="h-full rounded-lg border bg-secondary/50 p-8 text-center"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div style={{ transform: 'translateZ(50px)' }}>
                    <CheckCircle className="mx-auto h-10 w-10 text-foreground" />
                  </div>
                  <h3
                    className="mt-4 text-xl font-semibold"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    Integrity
                  </h3>
                  <p
                    className="mt-2 text-muted-foreground"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    We operate with unwavering ethical standards, building trust
                    through transparency and reliability.
                  </p>
                </div>
              </InteractiveCard>
            </div>
            <div>
              <InteractiveCard>
                <div
                  className="h-full rounded-lg border bg-secondary/50 p-8 text-center"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div style={{ transform: 'translateZ(50px)' }}>
                    <CheckCircle className="mx-auto h-10 w-10 text-foreground" />
                  </div>
                  <h3
                    className="mt-4 text-xl font-semibold"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    Resilience
                  </h3>
                  <p
                    className="mt-2 text-muted-foreground"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    We design robust solutions that ensure our clients' security
                    and operational continuity.
                  </p>
                </div>
              </InteractiveCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
