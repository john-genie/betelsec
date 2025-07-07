'use client';

import { useState, useEffect } from 'react';
import { ContactForm } from '@/components/contact-form';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { InteractiveCard } from '@/components/interactive-card';

export default function ContactPage() {
  const officeAddress = `//: PRIMARY_NODE_LOCATION
[BETELSEC // HYD.NODE]
WeWork, Kondapur Main Rd,
Laxmi Nagar, Kondapur,
Hyderabad, Telangana 500084
[STATUS: OPERATIONAL]`;

  const [displayedAddress, setDisplayedAddress] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedAddress((current) => {
        if (current.length < officeAddress.length) {
          return officeAddress.slice(0, current.length + 1);
        }
        clearInterval(intervalId);
        return current;
      });
    }, 25); // Typing speed

    return () => clearInterval(intervalId);
  }, [officeAddress]);

  return (
    <div className="bg-background">
      <section className="pt-32 pb-16">
        <header className="container text-center">
          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We're here to help. Reach out to discuss your security needs.
          </p>
        </header>
      </section>

      <section className="bg-secondary py-24">
        <div className="container grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Direct Contact Channels
              </h2>
              <p className="mt-2 text-muted-foreground">
                Connect with us directly, or send a secure message using the
                form.
              </p>
              <div className="mt-8 space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <a
                      href="mailto:karthik@betelsec.com"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      karthik@betelsec.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Linkedin className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">
                      Follow us on LinkedIn
                    </h3>
                    <a
                      href="https://www.linkedin.com/company/betelsec/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      linkedin.com/company/betelsec
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">Office</h3>
                    <pre className="mt-2 p-4 rounded-md bg-background font-code text-sm text-muted-foreground whitespace-pre-wrap border min-h-[10rem]">
                      {displayedAddress}
                      {displayedAddress.length < officeAddress.length && (
                        <span className="animate-pulse">_</span>
                      )}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <InteractiveCard className="h-full">
              <div className="h-full rounded-lg bg-background p-8 shadow-sm border border-primary">
                <ContactForm />
              </div>
            </InteractiveCard>
          </div>
        </div>
      </section>
    </div>
  );
}
