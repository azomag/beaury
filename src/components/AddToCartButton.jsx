'use client';

import { useState } from 'react';
import { Check, Plus, ShoppingBag } from 'lucide-react';
import { addProductToCart } from '@/lib/cart';

export function AddToCartButton({ product, quantity = 1, className = '', compact = false }) {
  const [message, setMessage] = useState('');

  function add() {
    try {
      addProductToCart(product, quantity);
      setMessage('Added to bag');
      window.setTimeout(() => setMessage(''), 1800);
    } catch (error) {
      setMessage(error.message);
      window.setTimeout(() => setMessage(''), 2600);
    }
  }

  return (
    <div className={compact ? 'absolute bottom-6 right-6' : 'relative'}>
      <button type="button" onClick={add} disabled={!product || Number(product.stock_quantity) < 1} className={className} aria-label={`Add ${product?.name || 'product'} to bag`}>
        {message === 'Added to bag' ? <Check className="h-5 w-5" /> : compact ? <Plus className="h-5 w-5" /> : <><ShoppingBag className="h-4 w-4" /> Add to Bag</>}
      </button>
      {message && <span role="status" className="absolute bottom-full right-0 z-10 mb-2 w-max max-w-52 rounded-full bg-earth px-3 py-1.5 text-xs font-medium text-white">{message}</span>}
    </div>
  );
}
