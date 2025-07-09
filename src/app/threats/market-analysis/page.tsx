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
            Product Analysis
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            An overview of the BetelSec product blueprint, market landscape, and patentable innovations.
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
                  BetelSec Product Blueprint
                </h2>
            </div>
            <p>
              Our product suite is engineered as an integrated, multi-layered defense system designed to provide comprehensive post-quantum security. The blueprint is based on three strategic pillars: anticipating threats, neutralizing attacks, and fortifying digital assets. Each product—PRISM, SYNAPSE, DSG, and QRC-84—addresses a critical vulnerability in the data lifecycle.
            </p>
            <p>
              PRISM acts as the central intelligence core, SYNAPSE secures data in motion, DSG protects data at rest, and QRC-84 enables untraceable communication. Together, they form a cohesive architecture that is both resilient and crypto-agile, allowing for seamless adaptation to the evolving security landscape.
            </p>
          </div>

          {/* Market Analysis */}
           <div className="space-y-6 text-lg text-muted-foreground">
            <div className="flex items-center gap-4">
                <BarChart3 className="h-10 w-10 text-primary" />
                <h2 className="text-4xl font-bold tracking-tight text-foreground">
                  Market Analysis
                </h2>
            </div>
            <p>
              The cybersecurity market is grappling with a paradigm shift. The rise of sophisticated ransomware and the looming threat of quantum computing have rendered many traditional security solutions inadequate. The global cost of cybercrime is projected to exceed $10 trillion annually, creating an urgent and expanding market for next-generation security.
            </p>
             <p>
              Key sectors such as finance, healthcare, defense, and critical infrastructure are now mandated by emerging regulations to adopt quantum-resistant technologies. This creates a significant first-mover advantage for companies like BetelSec that offer a comprehensive and readily deployable PQC solution.
            </p>
          </div>


          {/* Patentable Components */}
           <div className="space-y-6 text-lg text-muted-foreground">
            <div className="flex items-center gap-4">
                <FileText className="h-10 w-10 text-primary" />
                <h2 className="text-4xl font-bold tracking-tight text-foreground">
                  Patentable Components
                </h2>
            </div>
            <p>
              BetelSec's innovation is anchored in several patentable technologies that create a strong competitive moat. These include:
            </p>
            <ul className="list-disc list-inside space-y-4">
                <li>
                    <strong>AI-Powered Threat Classification Engine (PRISM):</strong> A proprietary machine learning model that analyzes encrypted traffic patterns to identify and mitigate threats without decryption, specializing in DLP for the quantum era.
                </li>
                 <li>
                    <strong>Dynamic Crypto-Agility Framework:</strong> A system that allows for the seamless and automated rotation of cryptographic algorithms across the entire product suite, ensuring long-term resilience against future vulnerabilities.
                </li>
                 <li>
                    <strong>Anonymous Key-Sharing Protocol (QRC-84):</strong> A novel method for establishing secure communication channels using PQC KEMs that eliminates the need for persistent identifiers, leaving no metadata trail.
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
            Our innovative approach provides a strategic advantage in the quantum era. Engage with us to learn how BetelSec can fortify your organization.
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
