'use client';

import { useState } from 'react';
import { Check, Tag } from 'lucide-react';
import { Button } from '@/components/Button';
import { Text } from '@/components/Text';

const subtotal = 102;
const apiBase = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api').replace(/\/$/, '');
const money = (amount) => `$${Number(amount).toFixed(2)}`;

export function CartSummary() {
  const [code, setCode] = useState('');
  const [promo, setPromo] = useState(null);
  const [message, setMessage] = useState('');
  const [isApplying, setIsApplying] = useState(false);

  async function applyPromo(event) {
    event.preventDefault();
    setMessage('');
    setPromo(null);
    if (!code.trim()) {
      setMessage('Enter a promo code first.');
      return;
    }

    setIsApplying(true);
    try {
      const response = await fetch(`${apiBase}/promos/validate/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim(), subtotal: subtotal.toFixed(2) }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'This promo code could not be applied.');
      setPromo(data);
      setMessage(`${data.code} applied — ${data.discount_percent}% off.`);
    } catch (error) {
      setMessage(error.message || 'Could not connect to the store. Check that the backend is running.');
    } finally {
      setIsApplying(false);
    }
  }

  const total = promo ? Number(promo.new_total) : subtotal;

  return (
    <div className="lg:col-span-1">
      <div className="bg-white p-8 md:p-10 rounded-[40px] soft-shadow sticky top-32">
        <h3 className="text-2xl font-lora font-bold mb-7">Order Summary</h3>

        <div className="mb-7 rounded-3xl bg-cream/70 p-5">
          <div className="flex items-center gap-2 text-earth font-bold mb-3">
            <Tag className="w-4 h-4 text-sage" />
            <span className="text-sm">Promo code</span>
          </div>
          <form onSubmit={applyPromo} className="flex gap-2">
            <input
              aria-label="Promo code"
              autoComplete="off"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              placeholder="Enter code"
              className="min-w-0 flex-1 rounded-full border border-sage/20 bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
            />
            <button
              type="submit"
              disabled={isApplying}
              className="rounded-full bg-sage px-5 py-3 text-sm font-bold text-white transition hover:bg-sage/90 disabled:cursor-wait disabled:opacity-60"
            >
              {isApplying ? '...' : 'Apply'}
            </button>
          </form>
          {message && (
            <p aria-live="polite" className={`mt-3 flex items-center gap-1.5 text-xs ${promo ? 'text-sage' : 'text-terracotta'}`}>
              {promo && <Check className="h-3.5 w-3.5 shrink-0" />}
              {message}
            </p>
          )}
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between text-earth/60">
            <Text>Subtotal</Text>
            <Text>{money(subtotal)}</Text>
          </div>
          <div className="flex justify-between text-earth/60">
            <Text>Shipping</Text>
            <Text variant="bold" className="text-sage font-bold">Free</Text>
          </div>
          {promo && (
            <div className="flex justify-between text-sage">
              <Text>Discount ({promo.code})</Text>
              <Text>-{money(promo.discount_amount)}</Text>
            </div>
          )}
          <div className="pt-4 border-t border-sage/10 flex justify-between text-xl font-lora font-bold">
            <Text>Total</Text>
            <Text>{money(total)}</Text>
          </div>
        </div>
        <Button contentKey="cta_12" className="w-full bg-sage text-white py-5 rounded-full font-bold hover:bg-sage/90 transition-all shadow-lg shadow-sage/20 mb-6">Checkout Now</Button>
        <p className="text-[10px] text-center text-earth/40 uppercase tracking-widest">Secure payment powered by Stripe</p>
      </div>
    </div>
  );
}
