'use client';

import { useEffect, useState } from 'react';
import { Image } from '@/components/Image';
import { Link } from '@/components/Link';

const apiBase = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api').replace(/\/$/, '');
const categories = [
  { label: 'All Products', value: '' },
  { label: 'Cleansers', value: 'cleanser' },
  { label: 'Serums', value: 'serum' },
  { label: 'Moisturizers', value: 'moisturizer' },
  { label: 'Other', value: 'other' },
];
const previewProducts = [
  { id: 'cleanser-preview', name: 'Velvet Cloud Cleanser', category: 'cleanser', description: 'A gentle daily cleanser for soft, refreshed skin.', price: '38.00', stock_quantity: 24, image_url: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&q=80' },
  { id: 'oil-preview', name: 'Midnight Recovery Oil', category: 'serum', description: 'A nourishing botanical oil for your evening routine.', price: '64.00', stock_quantity: 18, image_url: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&q=80' },
];

export function ShopCatalog() {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState(previewProducts);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const query = category ? `?category=${encodeURIComponent(category)}` : '';
    fetch(`${apiBase}/products/${query}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Catalog request failed');
        return response.json();
      })
      .then((data) => {
        setProducts(Array.isArray(data) ? data : data.results || []);
        setConnected(true);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setProducts(category ? previewProducts.filter((product) => product.category === category) : previewProducts);
          setConnected(false);
        }
      });
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
      {!connected && <p className="mb-8 text-center text-xs text-earth/45">Showing preview products. Start the Django backend to load your live catalog and stock.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div className="group" key={product.id}>
            <Link className="block" href="product-detail.html">
              <div className="relative mb-6 aspect-square overflow-hidden rounded-[32px] bg-white soft-shadow">
                {product.image_url && <Image variant="cover" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={product.image_url} alt={product.name} width={600} height={600} />}
                {connected && <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-earth">{product.stock_quantity > 0 ? `${product.stock_quantity} in stock` : 'Out of stock'}</span>}
              </div>
              <h3 className="mb-1 text-lg font-lora font-bold">{product.name}</h3>
              <p className="mb-2 line-clamp-2 text-sm text-earth/60">{product.description || product.category}</p>
              <p className="font-bold text-sage">${Number(product.price).toFixed(2)}</p>
            </Link>
          </div>
        ))}
        {products.length === 0 && (
          <p className="col-span-full py-10 text-center text-earth/55">No products in this collection yet. Add one from the store admin.</p>
        )}
      </div>
    </>
  );
}
