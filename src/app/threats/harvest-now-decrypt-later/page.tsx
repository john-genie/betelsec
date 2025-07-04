'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HndlAnimation } from '@/components/hndl-animation';

export default function HarvestNowDecryptLaterPage() {
  return (
    <div className="bg-background">
      <section className="pt-32 pb-16">
        <header className="container text-center">
          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
            Harvest Now, Decrypt Later
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Understanding the immediate threat to long-term data security in the
            quantum era.
          </p>
        </header>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="h-[400px] w-full max-w-4xl mx-auto">
              <HndlAnimation />
            </div>
            <div className="space-y-8 text-lg text-muted-foreground">
              <h2 className="text-4xl font-bold tracking-tight text-foreground">
                The Anatomy of a Quantum Data Heist
              </h2>
              <p>
                "Harvest Now, Decrypt Later" (HNDL) is not a future
                vulnerability; it is an active threat campaign happening today.
                Adversaries, ranging from state-sponsored groups to
                sophisticated ransomware gangs, are siphoning and stockpiling
                vast quantities of encrypted data. They are playing a long game,
                fully aware that the data, though unreadable today, is a ticking
                time bomb. Once a cryptographically relevant quantum computer is
                operational, the locks protecting this data will crumble.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 text-lg text-muted-foreground">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              How the Attack Unfolds: A Technical Deep Dive
            </h3>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>The Harvest:</strong> Attackers breach a network and
                position themselves to intercept data in transit—for example,
                between application servers and databases, or during off-site
                backups. They don't need to understand the data; they just need
                to copy the encrypted packets. This activity is stealthy and
                often indistinguishable from normal network traffic, leaving no
                immediate trace of a breach.
              </li>
              <li>
                <strong>The Hoard:</strong> The harvested data, measured in
                terabytes or even petabytes, is exfiltrated to secure storage
                controlled by the adversary. This trove of encrypted
                information—trade secrets, patient records, government
                intelligence—sits dormant, its value appreciating as the dawn of
                quantum computing approaches.
              </li>
              <li>
                <strong>The Quantum Unlock:</strong> The arrival of a powerful
                quantum computer will render current public-key encryption
                obsolete. Using algorithms like Shor's, adversaries will be able
                to efficiently calculate the private keys from the public keys
                they harvested alongside the encrypted data. The digital vaults
                will be opened, and the secrets from years past will be laid
                bare.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 text-lg text-muted-foreground">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              Scenario 1: The Healthcare Blackmail Paradox
            </h2>
            <p>
              Imagine a sophisticated ransomware gang breaches a leading
              pharmaceutical company's network. They quietly exfiltrate years of
              encrypted data: clinical trial results for a breakthrough drug,
              patient genomic data, and proprietary research formulas.
            </p>
            <p>
              Instead of locking the files and demanding a typical ransom, they
              present a new kind of ultimatum. They send a single, encrypted
              file back to the company—a small sample of their own data,
              decrypted. The message is clear: "We have your crown jewels. We
              know you believe this data is safe for another decade. We will
              contact you again in five years. The price then will be ten times
              what it is today. Or you can pay us now to delete our copy."
            </p>
            <p>
              This is the new face of quantum-era blackmail. The threat isn't
              immediate business disruption; it's the guaranteed future collapse
              of patient trust, regulatory standing, and market position. The
              data's shelf-life far exceeds the timeline for quantum readiness,
              making the threat both credible and catastrophic.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 text-lg text-muted-foreground">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              Scenario 2: The Government Secrets Time Bomb
            </h2>
            <p>
              A state-sponsored adversary targets a defense contractor,
              exfiltrating encrypted communications and project files related to
              a next-generation weapons system. The data is protected by today's
              strongest encryption, and its secrecy is vital for the next 25-50
              years.
            </p>
            <p>
              The adversary does nothing with the data immediately. They wait. A
              decade later, armed with quantum capabilities, they decrypt the
              entire cache. Suddenly, they possess the complete design
              specifications, operational weaknesses, and communication
              protocols of a critical national security asset.
            </p>
            <p>
              This isn't just espionage; it's strategic subversion. They can
              replicate the technology, develop perfect countermeasures, or even
              blackmail officials whose encrypted communications were part of
              the harvest. The security measures of the past become the
              strategic vulnerabilities of the future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-lg text-muted-foreground">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              The Solution is Not in the Future—It's Now
            </h2>
            <p>
              These scenarios illustrate a critical point: any data encrypted
              with classical algorithms today is already compromised if its
              confidentiality must be maintained into the quantum era. Waiting
              for quantum computers to arrive before acting is like buying a fire
              extinguisher after your house has already burned down.
            </p>
            <p>
              The only effective defense against HNDL attacks is to migrate to
              quantum-resistant cryptography (PQC). By protecting data with
              algorithms that are secure against both classical and quantum
              computers, you render the harvested data permanently useless.
              BetelSec's suite of solutions is built on this principle of
              proactive defense, allowing you to fortify your organization today
              against the threats of tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter">
            Secure Your Future
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't wait for the quantum threat to become a reality. Protect your
            most valuable data with a proactive, forward-thinking security
            strategy.
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
