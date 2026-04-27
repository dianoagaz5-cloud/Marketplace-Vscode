'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Marketplace</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Marketplace Bénin</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            Une place de marché locale, multi-vendeurs et conçue pour le Bénin. Produits, services,
            ebooks et chat en direct pour simplifier le commerce.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Navigation</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li><Link href="/boutique" className="transition hover:text-white">Boutique</Link></li>
            <li><Link href="/services" className="transition hover:text-white">Services</Link></li>
            <li><Link href="/ebooks" className="transition hover:text-white">Ebooks</Link></li>
            <li><Link href="/vendeurs" className="transition hover:text-white">Vendeurs</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Contact local</h3>
          <div className="mt-4 space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-brand-400" />
              <span>Cotonou, Abomey-Calavi, Porto-Novo</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-brand-400" />
              <span>+229 90 12 34 56</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-brand-400" />
              <span>support@marketplace.bj</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
        © 2026 Marketplace. Tous droits réservés. Commission configurable, retrait vendeur, sécurité FCFA.
      </div>
    </footer>
  );
}
