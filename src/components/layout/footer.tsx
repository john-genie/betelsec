import Link from 'next/link';
import { Logo } from '../icons/logo';

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-12">
            <div className='col-span-12 md:col-span-3'>
                 <div className="flex items-center gap-2">
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold">BetelSec</span>
                </div>
                 <p className="text-sm text-muted-foreground mt-4">
                    &copy; {new Date().getFullYear()} BetelSec. All rights reserved.
                </p>
            </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-2 gap-8 text-sm sm:grid-cols-4">
            <div>
                <h4 className="font-medium">Products</h4>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li><Link href="/products/prism" className="hover:text-foreground">PRISM</Link></li>
                    <li><Link href="/products/synapse" className="hover:text-foreground">SYNAPSE</Link></li>
                    <li><Link href="/products/dsg" className="hover:text-foreground">DSG</Link></li>
                    <li><Link href="/products/vpn" className="hover:text-foreground">Post-Quantum VPN</Link></li>
                    <li><Link href="/products/qrc-84" className="hover:text-foreground">QRC-84</Link></li>
                </ul>
            </div>
             <div>
                <h4 className="font-medium">Company</h4>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                    <li><Link href="/contact" className="hover:text-foreground">Contact Us</Link></li>
                </ul>
            </div>
             <div>
                <h4 className="font-medium">Resources</h4>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li><Link href="/threats/harvest-now-decrypt-later" className="hover:text-foreground">Threat Analysis</Link></li>
                    <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
