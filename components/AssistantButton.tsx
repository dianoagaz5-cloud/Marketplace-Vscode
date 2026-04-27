'use client';

import { useState } from 'react';
import { MessageCircle, Sparkles, X } from 'lucide-react';

const suggestions = [
  'Montre-moi comment acheter un ebook.',
  'Comment commencer à vendre un service ?',
  'Où sont les vendeurs validés au Bénin ?'
];

export function AssistantButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">Assistant IA</p>
              <p className="text-xs text-slate-500">Je peux vous aider à naviguer.</p>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {suggestions.map((item) => (
              <button key={item} className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-left transition hover:bg-slate-50">
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-brand-500/30 transition hover:bg-brand-700"
      >
        <Sparkles className="h-4 w-4" />
        Assistant IA
      </button>
    </div>
  );
}
