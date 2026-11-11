'use client';

import { useEffect, useState } from 'react';
import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { AddToCartButton } from '@/components/AddToCartButton';

const apiBase = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api').replace(/\/$/, '');
export function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${apiBase}/products/`)
      .then((response) => response.ok ? response.json() : Promise.reject(new Error('Catalog unavailable')))
      .then((data) => setProducts((Array.isArray(data) ? data : data.results || []).slice(0, 3)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="rounded-3xl bg-white p-8 text-center text-earth/55">Loading the collection…</p>;
  if (error) return <p className="rounded-3xl bg-white p-8 text-center text-earth/55">The product catalog is temporarily unavailable.</p>;
  if (products.length === 0) return <p className="rounded-3xl bg-white p-8 text-center text-earth/55">New products are coming soon.</p>;

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
      {products.map((product) => (
        <article className="group" key={product.id}>
          <div className="relative mb-8 aspect-[4/5] overflow-hidden rounded-[40px] bg-white soft-shadow">
            <Link href={`/product-detail/?slug=${encodeURIComponent(product.slug)}`} className="block h-full">
              {product.image_url && <Image variant="cover" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={product.image_url} alt={product.name} width={600} height={750} />}
            </Link>
            <AddToCartButton product={product} compact className="grid h-12 w-12 place-items-center rounded-full bg-white text-sage shadow-lg transition hover:bg-sage hover:text-white disabled:opacity-50" />
          </div>
          <Link href={`/product-detail/?slug=${encodeURIComponent(product.slug)}`}>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-sage">{product.category}</p>
            <h3 className="mb-2 font-lora text-xl font-bold">{product.name}</h3>
            <p className="text-sm text-earth/55">{product.description || 'Botanical care for your daily routine.'}</p>
            <p className="mt-4 font-bold text-sage">${Number(product.price).toFixed(2)}</p>
          </Link>
        </article>
      ))}
    </div>
  );
}
