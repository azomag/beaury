'use client';

import { useEffect, useState } from 'react';
import { Check, Minus, Plus } from 'lucide-react';
import { AddToCartButton } from '@/components/AddToCartButton';
import { Image } from '@/components/Image';
import { Link } from '@/components/Link';

const apiBase = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api').replace(/\/$/, '');

export function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const slug = new URLSearchParams(window.location.search).get('slug');
    const url = slug
      ? `${apiBase}/products/${encodeURIComponent(slug)}/`
      : `${apiBase}/products/`;
    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('This product could not be found.');
        return response.json();
      })
      .then((data) => {
        const selected = Array.isArray(data) ? data[0] : data;
        if (!selected) throw new Error('There are no products in the catalog yet.');
        setProduct(selected);
      })
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') setError(requestError.message || 'Could not connect to the product catalog.');
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  if (loading) return <div className="mx-auto max-w-7xl px-6 py-32 text-center text-earth/55">Loading product…</div>;
  if (error || !product) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <p className="text-terracotta">{error || 'Product unavailable.'}</p>
        <Link href="shop.html" className="mt-6 inline-flex rounded-full bg-sage px-7 py-3 font-bold text-white">Back to shop</Link>
      </div>
    );
  }

  const inStock = Number(product.stock_quantity) > 0;

  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="aspect-square overflow-hidden rounded-[40px] bg-white soft-shadow">
            {product.image_url && <Image src={product.image_url} alt={product.name} width={900} height={900} className="h-full w-full object-cover" />}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-5">
            {[0, 1, 2].map((thumbnail) => (
              <div key={thumbnail} className={`aspect-square overflow-hidden rounded-2xl bg-white soft-shadow ${thumbnail === 0 ? 'border-2 border-sage' : ''}`}>
                {product.image_url && <Image src={product.image_url} alt={`${product.name} view ${thumbnail + 1}`} width={300} height={300} className="h-full w-full object-cover" />}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-sage">{product.category}</p>
          <h1 className="mb-5 font-lora text-4xl font-bold leading-tight md:text-5xl">{product.name}</h1>
          <p className="mb-6 text-3xl font-lora font-bold text-sage">${Number(product.price).toFixed(2)}</p>
          <p className="mb-8 leading-relaxed text-earth/70">{product.description || 'A botanical formula thoughtfully made for your daily skincare ritual.'}</p>
          <p className={`mb-7 text-sm font-semibold ${inStock ? 'text-sage' : 'text-terracotta'}`}>
            {inStock ? `${product.stock_quantity} available` : 'Currently out of stock'}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-5 rounded-full border border-sage/20 bg-white px-5 py-3">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity" className="text-sage"><Minus className="h-4 w-4" /></button>
              <span className="min-w-4 text-center font-bold">{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => Math.min(Number(product.stock_quantity), value + 1))} aria-label="Increase quantity" disabled={!inStock || quantity >= Number(product.stock_quantity)} className="text-sage disabled:opacity-35"><Plus className="h-4 w-4" /></button>
            </div>
            <AddToCartButton product={product} quantity={quantity} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sage px-8 py-4 font-bold text-white soft-shadow transition hover:bg-sage/90 disabled:cursor-not-allowed disabled:opacity-50" />
          </div>
          <div className="mt-10 space-y-4 border-t border-sage/10 pt-8">
            {['Plant-based ingredients', 'Thoughtfully made for daily use', 'Stock updated by Botanical Glow'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-medium text-earth/75">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sage/10 text-sage"><Check className="h-4 w-4" /></span>{item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-[36px] bg-white p-8 soft-shadow md:p-12">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-sage">Product details</p>
        <h2 className="mb-4 font-lora text-3xl font-bold">A little more about {product.name}</h2>
        <p className="max-w-3xl leading-relaxed text-earth/65">{product.description || 'Add a product description in the admin dashboard to share the formula details with your customers.'}</p>
      </div>
    </section>
  );
}
