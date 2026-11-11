'use client';

import { useEffect, useState } from 'react';
import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { CartSummary } from '@/components/CartSummary';
import { cartSubtotal, readCart, saveCart, setCartQuantity } from '@/lib/cart';

const apiBase = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api').replace(/\/$/, '');
const money = (amount) => `$${Number(amount).toFixed(2)}`;

export function CartPageContent() {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => setItems(readCart());
    sync();
    setReady(true);
    window.addEventListener('botanical-cart-changed', sync);
    window.addEventListener('storage', sync);

    const saved = readCart();
    if (saved.length) {
      fetch(`${apiBase}/products/`)
        .then((response) => response.ok ? response.json() : Promise.reject(new Error('Catalog unavailable')))
        .then((data) => {
          const catalog = Array.isArray(data) ? data : data.results || [];
          const currentCart = readCart();
          const refreshed = currentCart.flatMap((item) => {
            const currentProduct = catalog.find((product) => String(product.id) === String(item.id));
            if (!currentProduct || Number(currentProduct.stock_quantity) < 1) return [];
            return [{ ...currentProduct, quantity: Math.min(Number(item.quantity) || 1, Number(currentProduct.stock_quantity)) }];
          });
          saveCart(refreshed);
          setItems(refreshed);
        })
        .catch(() => {});
    }

    return () => {
      window.removeEventListener('botanical-cart-changed', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  function changeQuantity(item, amount) {
    setCartQuantity(item.id, amount);
  }

  function removeItem(item) {
    setCartQuantity(item.id, 0);
  }

  const subtotal = cartSubtotal(items);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
      <div className="space-y-6 lg:col-span-2">
        {!ready ? <p className="text-earth/55">Loading your bag…</p> : items.length === 0 ? (
          <div className="rounded-[36px] bg-white p-10 text-center soft-shadow">
            <p className="font-lora text-2xl font-bold">Your bag is waiting for a little glow.</p>
            <p className="mt-3 text-sm text-earth/55">Products you add from the collection will appear here.</p>
            <Link href="shop.html" className="mt-7 inline-flex rounded-full bg-sage px-7 py-3 font-bold text-white">Browse products</Link>
          </div>
        ) : items.map((item) => (
          <article key={item.id} className="flex flex-col items-center gap-6 rounded-[36px] bg-white p-6 soft-shadow sm:flex-row sm:p-8">
            <div className="h-28 w-28 shrink-0 overflow-hidden rounded-3xl bg-cream">
              {item.image_url && <Image variant="cover" className="h-full w-full object-cover" src={item.image_url} alt={item.name} width={180} height={180} />}
            </div>
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h2 className="font-lora text-xl font-bold">{item.name}</h2>
              <p className="mt-1 text-sm capitalize text-earth/55">{item.category}</p>
              <p className="mt-4 text-xs text-sage">{item.stock_quantity} available</p>
              <div className="mt-4 flex items-center justify-center gap-4 sm:justify-start">
                <div className="flex items-center gap-4 rounded-full border border-sage/20 px-3 py-1.5">
                  <button onClick={() => changeQuantity(item, item.quantity - 1)} aria-label={`Decrease ${item.name} quantity`} className="text-lg font-semibold text-sage">−</button>
                  <span className="min-w-4 text-center text-sm font-bold">{item.quantity}</span>
                  <button onClick={() => changeQuantity(item, item.quantity + 1)} disabled={Number(item.quantity) >= Number(item.stock_quantity)} aria-label={`Increase ${item.name} quantity`} className="text-lg font-semibold text-sage disabled:opacity-35">+</button>
                </div>
                <button onClick={() => removeItem(item)} className="text-xs font-bold uppercase tracking-widest text-terracotta hover:underline">Remove</button>
              </div>
            </div>
            <p className="font-lora text-xl font-bold">{money(Number(item.price) * Number(item.quantity))}</p>
          </article>
        ))}
      </div>
      <CartSummary subtotal={subtotal} />
    </div>
  );
}
