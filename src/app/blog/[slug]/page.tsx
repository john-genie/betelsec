'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// In a real application, you would fetch this data based on the slug
const blogPosts = [
  {
    slug: 'google-quantum-rsa-breakthrough',
    title: 'Google Quantum AI: A New Era for Breaking RSA-2048',
    content: `
        <p>The timeline for quantum computers breaking modern encryption has been a topic of intense debate. For years, the consensus was that millions of physical qubits would be required, placing the threat in the distant future. However, a groundbreaking 2023 paper from Google's quantum AI team has dramatically altered the landscape. Their research suggests that breaking the widely used RSA-2048 encryption standard may require far fewer resources than previously thought.</p>
        <h3 class="text-2xl font-bold mt-8 mb-4">From 20 Million to 1 Million Qubits</h3>
        <p>Previous estimates, such as the one published in a 2019 Google paper, placed the number of stable, error-corrected qubits needed to factor a 2048-bit RSA integer at around 20 million. This immense number provided a sense of security, as building such a machine seemed decades away. The new research introduces a more efficient method for performing the quantum computations, effectively reducing the estimated number of required qubits to the low millions, or potentially even less under ideal conditions. This represents a monumental leap forward in quantum algorithm efficiency.</p>
        <h3 class="text-2xl font-bold mt-8 mb-4">The Implications of a Shorter Timeline</h3>
        <p>This reduction doesn't mean RSA is broken today, but it does mean the "Harvest Now, Decrypt Later" threat is more urgent than ever. Adversaries collecting encrypted data today are now operating on a much shorter timeline for when they can expect to decrypt it. For data that needs to remain secure for more than a decade—such as government secrets, financial records, and healthcare data—the risk has become acute.</p>
        <p>The key takeaway is that the transition to Post-Quantum Cryptography (PQC) is no longer a theoretical exercise for the future; it is a practical necessity for the present. Organizations must begin the process of identifying their cryptographic assets and planning their migration to NIST-approved PQC standards immediately.</p>
      `,
    sources: [
      {
        name: 'Google AI Blog: "A new era for quantum computing"',
        url: 'https://ai.googleblog.com/',
      },
      {
        name: 'ArXiv: "Factoring 2048-bit RSA Integers in 177 Days with 13,436 Qubits"',
        url: 'https://arxiv.org/abs/2303.06737',
      },
    ],
  },
  {
    slug: 'psiquantum-ecc-reduction',
    title: 'PsiQuantum: 700× Reduction in Resources to Break ECC',
    content: `
        <p>Elliptic Curve Cryptography (ECC) is the backbone of modern digital security, protecting everything from web traffic (TLS) to cryptocurrencies. While generally considered more efficient and secure than RSA at similar key sizes, it is equally vulnerable to attack by a sufficiently powerful quantum computer. In a stunning announcement, photonic quantum computing company PsiQuantum revealed a 700x reduction in the quantum resources required to break ECC-256.</p>
        <h3 class="text-2xl font-bold mt-8 mb-4">What is ECC and Why Does This Matter?</h3>
        <p>ECC relies on the mathematical difficulty of the elliptic-curve discrete logarithm problem. A quantum computer running Shor's algorithm can solve this problem efficiently, revealing the private key and compromising the entire system. PsiQuantum's research focuses on optimizing the compilation of quantum algorithms for their fault-tolerant photonic architecture, drastically reducing the overhead and number of physical qubits needed.</p>
        <p>This 700-fold reduction means that a quantum computer capable of breaking ECC could be smaller, built faster, and become a reality sooner than most predictions accounted for. It puts immense pressure on industries that rely heavily on ECC for digital signatures and secure key exchange.</p>
      `,
    sources: [
        { name: 'PsiQuantum Blog: "700x smaller quantum computers to break elliptic curve encryption"', url: 'https://psiquantum.com/news/700x-smaller-quantum-computers-to-break-elliptic-curve-encryption' }
    ],
  },
  {
    slug: 'nist-pqc-standards-finalized',
    title: 'NIST Finalizes PQC Standards: The Deprecation of RSA/ECC is Coming',
    content: `
        <p>After a multi-year global competition, the U.S. National Institute of Standards and Technology (NIST) has announced its first suite of standardized post-quantum cryptographic algorithms. This marks the most significant milestone to date in the global transition to a quantum-resistant security infrastructure and serves as the official starting gun for the deprecation of classical algorithms like RSA and ECC.</p>
        <h3 class="text-2xl font-bold mt-8 mb-4">The First PQC Standards</h3>
        <p>The initial set of algorithms chosen for standardization includes:</p>
        <ul class="list-disc list-inside space-y-2 mt-4">
            <li><strong>CRYSTALS-Kyber:</strong> Chosen for general encryption and key establishment, this algorithm is noted for its small key sizes and speed.</li>
            <li><strong>CRYSTALS-Dilithium, FALCON, and SPHINCS+:</strong> Chosen for digital signatures. These algorithms offer a range of trade-offs between signature size and performance to suit different use cases.</li>
        </ul>
        <h3 class="text-2xl font-bold mt-8 mb-4">The Mandate for Migration</h3>
        <p>With these standards now in place, the path forward is clear. Government agencies and contractors will soon be mandated to transition to these new standards. For the private sector, this provides a clear and vetted roadmap for securing data against the quantum threat. The question is no longer "if" organizations need to migrate, but "how quickly" they can do so. A crypto-agile approach, supported by solutions like those from BetelSec, is essential for a smooth and secure transition.</p>
      `,
    sources: [
      { name: 'NIST Post-Quantum Cryptography Project', url: 'https://csrc.nist.gov/projects/post-quantum-cryptography' },
      { name: 'NIST Announcement of First Four PQC Algorithms', url: 'https://www.nist.gov/news-events/news/2022/07/pqc-power-nist-announces-first-four-quantum-resistant-cryptographic' }
    ],
  },
   {
    slug: 'change-healthcare-ransomware-attack',
    title: 'Change Healthcare Ransomware Attack: A Multi-Billion Dollar Crisis',
    content: `
      <p>In February 2024, the U.S. healthcare system was rocked by a catastrophic ransomware attack against Change Healthcare, a subsidiary of UnitedHealth Group. The attack, orchestrated by the notorious ALPHV/BlackCat ransomware gang, caused unprecedented disruption across the nation.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Scale and Impact</h3>
      <p>The breach impacted an estimated 100 million patients, crippling essential services. For weeks, pharmacies were unable to process prescriptions, and insurance claims processing ground to a halt. This not only created a logistical nightmare but also posed significant risks to patient care and safety.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">The Staggering Financial Cost</h3>
      <p>To regain control of their systems, UnitedHealth paid a ransom of approximately $22 million. However, this was just the tip of the iceberg. The direct financial damages from the incident quickly surpassed $800 million. With ongoing recovery efforts and litigation, the total cost of the attack is projected to exceed a staggering $2.4 billion, making it one of the costliest cyberattacks in history. The event serves as a stark reminder of the extreme vulnerability of critical healthcare infrastructure and the devastating financial and societal consequences of a single breach.</p>
    `,
    sources: [
      { name: 'Prolion: Change Healthcare Attack Analysis', url: 'https://prolion.com' },
      { name: 'BlackFog: The Cost of the Change Healthcare Breach', url: 'https://blackfog.com' },
      { name: 'CyberInt: ALPHV/BlackCat and the Healthcare Sector', url: 'https://cyberint.com' }
    ],
  },
  {
    slug: 'cdk-global-ransomware-attack',
    title: 'CDK Global Hack: How BlackSuit Paralyzed 15,000 Car Dealerships',
    content: `
      <p>In June 2024, a major cyberattack on CDK Global, a key technology provider for the automotive industry, brought vehicle sales and services to a standstill across North America. The ransomware group known as BlackSuit claimed responsibility for the attack, which disabled operations for approximately 15,000 car dealerships.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Widespread Disruption</h3>
      <p>The attack crippled the software that dealerships rely on for nearly every aspect of their business, from sales and financing to repairs and parts management. This led to significant operational chaos, with many dealerships reverting to manual processes, causing massive delays and revenue loss.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">High-Stakes Ransom and Economic Fallout</h3>
      <p>Reports indicate that CDK Global paid a ransom of $25 million in Bitcoin to the attackers. The direct losses incurred by the affected dealerships were estimated at $605 million. This incident highlighted the profound vulnerability of supply chains that are heavily dependent on single technology providers and demonstrated how a targeted attack can have cascading effects across an entire economic sector.</p>
    `,
    sources: [
      { name: 'Wikipedia: CDK Global cyberattack', url: 'https://en.wikipedia.org' },
      { name: 'TechTarget: CDK Global ransomware attack explained', url: 'https://www.techtarget.com' },
      { name: 'Prolion: BlackSuit and the CDK Attack', url: 'https://prolion.com' }
    ],
  },
  {
    slug: 'synnovis-nhs-ransomware-attack',
    title: 'Synnovis/NHS Attack: How Qilin Crippled London Lab Services',
    content: `
      <p>In June 2024, a devastating ransomware attack targeted Synnovis, a critical provider of lab services to the UK's National Health Service (NHS). The attack, attributed to the Russian ransomware group Qilin, caused massive disruptions across major London hospitals.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Widespread Disruption and Data Theft</h3>
      <p>The incident affected multiple NHS trusts, leading to the cancellation of thousands of medical appointments and critical operations. The attackers exfiltrated approximately 400 GB of sensitive patient data, escalating the crisis from operational disruption to a major data breach. With lab services crippled, medical staff were forced to revert to manual processes, causing significant delays in patient care.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Financial Fallout</h3>
      <p>The financial impact of the attack was severe, with initial cost estimates reaching £32.7 million (around $42 million). This figure is particularly stark when compared to the provider's recent profits, highlighting the disproportionate damage a single cyberattack can inflict on an organization's financial stability and its ability to serve the public.</p>
    `,
    sources: [
      { name: 'Prolion: Synnovis Attack Details', url: 'https://prolion.com' },
      { name: 'Financial Times: NHS Cyber-Attack Costs', url: 'https://ft.com' },
      { name: 'Sangfor: Qilin Ransomware Group Analysis', url: 'https://sangfor.com' }
    ],
  },
  {
    slug: 'the-role-of-ai-in-post-quantum-security',
    title: 'The Role of AI in Post-Quantum Security with PRISM',
    content: `
        <p>PRISM combines the defensive power of PQC with the proactive intelligence of AI. Learn how this synergy works to not only encrypt data across all states but also to identify, classify, and mitigate threats before they can cause damage.</p>
      `,
    sources: [{ name: 'Placeholder Source', url: '#' }],
  },
  {
    slug: 'anonymous-communication-in-the-quantum-age',
    title: 'Anonymous Communication: The Power of QRC-84',
    content: `
        <p>Privacy is paramount. QRC-84 is our solution for truly anonymous and ephemeral communications. This post explains the cryptographic principles behind it, including the use of PQC Key Encapsulation Mechanisms (KEMs) to establish secure channels without long-term identifiers.</p>
      `,
    sources: [{ name: 'Placeholder Source', url: '#' }],
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="bg-background min-h-screen">
        <section className="pt-32 pb-16">
          <div className="container text-center">
            <h1 className="text-4xl font-bold tracking-tighter">
              Article Not Found
            </h1>
            <p className="mt-4 text-muted-foreground">
              The requested blog post could not be found.
            </p>
            <Button asChild className="mt-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <section className="pt-32 pb-16">
        <header className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
            {post.title}
          </h1>
        </header>
      </section>

      <article className="prose prose-invert mx-auto max-w-4xl px-4 pb-24 text-lg text-muted-foreground">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        <h3 className="text-2xl font-bold mt-12 mb-4 text-foreground">
          Sources
        </h3>
        <ul className="list-disc list-inside space-y-2">
          {post.sources.map((source, index) => (
            <li key={index}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {source.name}
              </a>
            </li>
          ))}
        </ul>
      </article>

      <section className="container mx-auto max-w-4xl pb-24">
        <Button asChild variant="outline">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </section>
    </div>
  );
}
