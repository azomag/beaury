'use client';

import { useEffect, useState } from 'react';
import { cartItemCount, readCart } from '@/lib/cart';

export function CartCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const refresh = () => setCount(cartItemCount(readCart()));
    refresh();
    window.addEventListener('botanical-cart-changed', refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener('botanical-cart-changed', refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  return <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#D68C78] px-1 text-[10px] text-white">{count}</span>;
}
