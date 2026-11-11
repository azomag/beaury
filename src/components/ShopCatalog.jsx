'use client';

import { useEffect, useState } from 'react';
import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { AddToCartButton } from '@/components/AddToCartButton';

const apiBase = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api').replace(/\/$/, '');
const categories = [
  { label: 'All Products', value: '' },
  { label: 'Cleansers', value: 'cleanser' },
  { label: 'Serums', value: 'serum' },
  { label: 'Moisturizers', value: 'moisturizer' },
  { label: 'Other', value: 'other' },
];
export function ShopCatalog() {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const query = category ? `?category=${encodeURIComponent(category)}` : '';
    setLoading(true);
    setError(false);
    fetch(`${apiBase}/products/${query}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Catalog request failed');
        return response.json();
      })
      .then((data) => {
        setProducts(Array.isArray(data) ? data : data.results || []);
        setConnected(true);
        setError(false);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setProducts([]);
          setConnected(false);
          setError(true);
        }
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [category]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((item) => (
          <button
            key={item.value || 'all'}
            type="button"
            onClick={() => setCategory(item.value)}
            aria-pressed={category === item.value}
            className={`rounded-full px-7 py-3 text-sm font-bold transition-colors ${category === item.value ? 'bg-sage text-white soft-shadow' : 'bg-white text-earth/60 hover:text-sage'}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      {!connected && error && <p role="alert" className="mb-8 text-center text-sm text-terracotta">The live catalog is unavailable. Please try again in a moment.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {!loading && products.map((product) => (
          <article className="group" key={product.id}>
            <Link className="block" href={`/product-detail/?slug=${encodeURIComponent(product.slug)}`}>
              <div className="relative mb-6 aspect-square overflow-hidden rounded-[32px] bg-white soft-shadow">
                {product.image_url && <Image variant="cover" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={product.image_url} alt={product.name} width={600} height={600} />}
                {connected && <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-earth">{product.stock_quantity > 0 ? `${product.stock_quantity} in stock` : 'Out of stock'}</span>}
              </div>
              <h3 className="mb-1 text-lg font-lora font-bold">{product.name}</h3>
              <p className="mb-2 line-clamp-2 text-sm text-earth/60">{product.description || product.category}</p>
              <p className="font-bold text-sage">${Number(product.price).toFixed(2)}</p>
            </Link>
            <AddToCartButton product={product} className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-bold text-white transition hover:bg-sage/90 disabled:cursor-not-allowed disabled:opacity-50" />
          </article>
        ))}
        {(loading || products.length === 0) && !error && (
          <p className="col-span-full py-10 text-center text-earth/55">{loading ? 'Loading products…' : 'No products in this collection yet. Add one from the store admin.'}</p>
        )}
      </div>
    </>
  );
}
