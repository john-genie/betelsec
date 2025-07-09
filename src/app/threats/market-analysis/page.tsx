'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, FileText, BarChart3 } from 'lucide-react';
import { InteractiveCard } from '@/components/interactive-card';

export default function ProductAnalysisPage() {
  return (
    <div className="bg-background">
      <section className="pt-32 pb-16">
        <header className="container text-center">
          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
            Product Analysis: PRISM
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            A deep dive into the PRISM blueprint, its market landscape, and patentable innovations.
          </p>
        </header>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-4xl space-y-24">
          
          {/* BetelSec Product Blueprint */}
          <div className="space-y-6 text-lg text-muted-foreground">
             <div className="flex items-center gap-4">
                <Cpu className="h-10 w-10 text-primary" />
                <h2 className="text-4xl font-bold tracking-tight text-foreground">
                  PRISM Product Blueprint
                </h2>
            </div>
            <p>
              The Post-quantum Resilient Intelligent Security Mainframe (PRISM) is engineered as an integrated, multi-layered defense system designed to provide comprehensive post-quantum security. The blueprint is based on three strategic pillars: anticipating threats, neutralizing attacks, and fortifying digital assets.
            </p>
            <p>
              PRISM acts as the central intelligence core for an organization's security posture. It secures data across all states—in-transit, at-rest, and in-use—by applying robust PQC and AI-driven policies. This creates a cohesive architecture that is both resilient and crypto-agile, allowing for seamless adaptation to the evolving security landscape.
            </p>
          </div>

          {/* Market Analysis */}
           <div className="space-y-6 text-lg text-muted-foreground">
            <div className="flex items-center gap-4">
                <BarChart3 className="h-10 w-10 text-primary" />
                <h2 className="text-4xl font-bold tracking-tight text-foreground">
                  Market Analysis for PRISM
                </h2>
            </div>
            <p>
              The cybersecurity market is grappling with a paradigm shift. The rise of sophisticated ransomware and the looming threat of quantum computing have rendered many traditional security solutions inadequate. The global cost of cybercrime is projected to exceed $10 trillion annually, creating an urgent and expanding market for next-generation security.
            </p>
             <p>
              PRISM directly addresses this market need by offering a comprehensive and readily deployable PQC solution. Key sectors such as finance, healthcare, defense, and critical infrastructure are now mandated by emerging regulations to adopt quantum-resistant technologies. This creates a significant first-mover advantage for a unified solution like PRISM.
            </p>
          </div>


          {/* Patentable Components */}
           <div className="space-y-6 text-lg text-muted-foreground">
            <div className="flex items-center gap-4">
                <FileText className="h-10 w-10 text-primary" />
                <h2 className="text-4xl font-bold tracking-tight text-foreground">
                  Patentable Components in PRISM
                </h2>
            </div>
            <p>
              PRISM's innovation is anchored in several patentable technologies that create a strong competitive moat. These include:
            </p>
            <ul className="list-disc list-inside space-y-4">
                <li>
                    <strong>AI-Powered Threat Classification Engine:</strong> A proprietary machine learning model within PRISM that analyzes encrypted traffic patterns to identify and mitigate threats without decryption, specializing in Data Loss Prevention (DLP) for the quantum era.
                </li>
                 <li>
                    <strong>Dynamic Crypto-Agility Framework:</strong> A system integrated into PRISM that allows for the seamless and automated rotation of cryptographic algorithms, ensuring long-term resilience against future vulnerabilities.
                </li>
                 <li>
                    <strong>Hybrid PQC Encryption Model:</strong> The core architecture of PRISM combines classical and multiple post-quantum algorithms in a hybrid model, providing layered defense against both current and future computational threats.
                </li>
            </ul>
          </div>

        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter">
            Secure Your Competitive Edge
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our innovative approach with PRISM provides a strategic advantage in the quantum era. Engage with us to learn how BetelSec can fortify your organization.
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
