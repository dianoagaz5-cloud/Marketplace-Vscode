'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingBag, User, ChevronDown, Search } from 'lucide-react';

const menu = [
  { label: 'Accueil', href: '/' },
  { label: 'Boutique', href: '/boutique' },
  { label: 'Services', href: '/services' },
  { label: 'Ebooks', href: '/ebooks' },
  { label: 'Vendeurs', href: '/vendeurs' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3 font-semibold text-slate-900">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-lg">M</span>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Marketplace</p>
            <p className="text-base font-semibold text-slate-900">Bénin</p>
          </div>
        </Link>

        <div className="flex flex-1 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm md:max-w-xl">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="search"
            placeholder="Rechercher produits, services, ebooks..."
            className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
          />
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-600">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand-500 hover:text-brand-600">
            <ShoppingBag className="h-5 w-5" />
          </button>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand-500 hover:text-brand-600">
            <User className="h-5 w-5" />
          </button>
          <div className="relative">
            <button
              onClick={() => setOpen((value) => !value)}
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700"
            >
              Commencer à vendre
              <ChevronDown className="h-4 w-4" />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-56 rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
                <Link href="/dashboard" className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50">
                  Vendre des produits
                </Link>
                <Link href="/dashboard" className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50">
                  Proposer un service
                </Link>
                <Link href="/dashboard" className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50">
                  Vendre un ebook
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
