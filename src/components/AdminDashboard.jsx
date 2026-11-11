'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ImagePlus, Leaf, Loader2, PackagePlus, Pencil, Trash2, UploadCloud } from 'lucide-react';
import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { AccountMenu } from '@/components/AccountMenu';

const apiBase = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api').replace(/\/$/, '');
const emptyProduct = { name: '', slug: '', category: 'cleanser', price: '', stock_quantity: '0', description: '', is_active: true };
const inputClass = 'mt-2 w-full rounded-2xl border border-sage/15 bg-cream/70 px-4 py-3 text-sm text-earth outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15';

function slugify(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function AdminDashboard() {
  const [accessToken, setAccessToken] = useState('');
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyProduct);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [draggingImage, setDraggingImage] = useState(false);
  const [editingSlug, setEditingSlug] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const imageInput = useRef(null);

  useEffect(() => {
    return () => {
      if (imagePreview.startsWith('blob:')) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  useEffect(() => {
    const syncAuth = () => {
      let savedUser;
      try {
        savedUser = JSON.parse(localStorage.getItem('botanicalGlowUser') || 'null');
      } catch {
        savedUser = null;
      }
      setUser(savedUser);
      setAccessToken(localStorage.getItem('botanicalGlowAccess') || '');
      setChecking(false);
    };
    syncAuth();
    window.addEventListener('botanical-auth-changed', syncAuth);
    window.addEventListener('storage', syncAuth);
    return () => {
      window.removeEventListener('botanical-auth-changed', syncAuth);
      window.removeEventListener('storage', syncAuth);
    };
  }, []);

  const loadProducts = useCallback(async () => {
    if (!accessToken) return;
    setLoadingProducts(true);
    setError('');
    try {
      const response = await fetch(`${apiBase}/products/`, { headers: { Authorization: `Bearer ${accessToken}` } });
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'Could not load products.');
      setProducts(Array.isArray(data) ? data : data.results || []);
    } catch (requestError) {
      setError(requestError.message || 'Could not connect to the product API.');
    } finally {
      setLoadingProducts(false);
    }
  }, [accessToken]);

  useEffect(() => {
    if (user?.is_superuser && accessToken) loadProducts();
  }, [user, accessToken, loadProducts]);

  function editProduct(product) {
    setEditingSlug(product.slug);
    setForm({
      name: product.name,
      slug: product.slug,
      category: product.category,
      price: String(product.price),
      stock_quantity: String(product.stock_quantity),
      description: product.description || '',
      is_active: product.is_active,
    });
    setImageFile(null);
    setImagePreview(product.image_url || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function resetForm() {
    setForm(emptyProduct);
    setEditingSlug(null);
    setImageFile(null);
    setImagePreview('');
  }

  function selectImage(file) {
    if (!file) return;
    if (!['image/jpeg', 'image/png', 'image/webp', 'image/avif'].includes(file.type)) {
      setError('Choose a JPG, PNG, WebP, or AVIF image.');
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      setError('Images must be 8 MB or smaller.');
      return;
    }
    setError('');
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  async function saveProduct(event) {
    event.preventDefault();
    setSaving(true);
    setError('');
    setNotice('');
    const payload = new FormData();
    Object.entries({
      ...form,
      slug: form.slug || slugify(form.name),
      price: Number(form.price).toFixed(2),
      stock_quantity: Number.parseInt(form.stock_quantity, 10) || 0,
    }).forEach(([key, value]) => payload.append(key, String(value)));
    if (imageFile) payload.append('image', imageFile);
    try {
      const response = await fetch(`${apiBase}/products/${editingSlug ? `${encodeURIComponent(editingSlug)}/` : ''}`, {
        method: editingSlug ? 'PATCH' : 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        body: payload,
      });
      const data = await response.json();
      if (!response.ok) {
        const details = data.detail || Object.values(data).flat().join(' ');
        throw new Error(details || 'Product could not be saved.');
      }
      setNotice(editingSlug ? 'Product updated. It is now reflected in the shop.' : 'Product added to the shop catalog.');
      resetForm();
      await loadProducts();
    } catch (requestError) {
      setError(requestError.message || 'Could not save the product.');
    } finally {
      setSaving(false);
    }
  }

  async function deleteProduct(product) {
    if (!window.confirm(`Delete ${product.name}?`)) return;
    setError('');
    setNotice('');
    try {
      const response = await fetch(`${apiBase}/products/${encodeURIComponent(product.slug)}/`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || 'Product could not be deleted.');
      }
      setProducts((current) => current.filter((item) => item.id !== product.id));
      setNotice('Product removed from the shop catalog.');
      if (editingSlug === product.slug) resetForm();
    } catch (requestError) {
      setError(requestError.message || 'Could not delete the product.');
    }
  }

  if (checking) {
    return <div className="grid min-h-screen place-items-center bg-cream text-earth"><Loader2 className="h-7 w-7 animate-spin text-sage" /></div>;
  }

  if (!accessToken || !user?.is_superuser) {
    return (
      <main className="grid min-h-screen place-items-center bg-cream px-6 text-earth">
        <section className="max-w-md rounded-[36px] bg-white p-10 text-center soft-shadow">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-sage text-white"><Leaf /></div>
          <h1 className="font-lora text-2xl font-bold">Admin access required</h1>
          <p className="mt-3 text-sm text-earth/60">Sign in with the store superuser account to manage products and stock.</p>
          <Link href="login.html" className="mt-7 inline-flex rounded-full bg-sage px-7 py-3 text-sm font-bold text-white">Sign in</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream px-4 py-8 text-earth sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[32px] border border-sage/10 bg-white px-6 py-5 soft-shadow md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage text-white"><Leaf className="h-6 w-6" /></div>
            <div><p className="font-lora text-xl font-bold">Botanical Glow</p><p className="text-xs uppercase tracking-[0.18em] text-earth/45">Store dashboard</p></div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden text-earth/55 sm:inline">Signed in as <strong className="text-earth">{user.username}</strong></span>
            <Link href="shop.html" className="rounded-full border border-sage/25 px-5 py-2.5 font-bold text-sage transition hover:bg-sage hover:text-white">View shop</Link>
            <AccountMenu />
          </div>
        </header>

        <div className="mb-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-[28px] bg-white p-6 soft-shadow"><p className="text-xs font-bold uppercase tracking-widest text-earth/45">Products</p><p className="mt-2 font-lora text-3xl font-bold">{products.length}</p></div>
          <div className="rounded-[28px] bg-white p-6 soft-shadow"><p className="text-xs font-bold uppercase tracking-widest text-earth/45">Units in stock</p><p className="mt-2 font-lora text-3xl font-bold">{products.reduce((sum, product) => sum + Number(product.stock_quantity || 0), 0)}</p></div>
          <div className="rounded-[28px] bg-white p-6 soft-shadow"><p className="text-xs font-bold uppercase tracking-widest text-earth/45">Low stock</p><p className="mt-2 font-lora text-3xl font-bold text-terracotta">{products.filter((product) => Number(product.stock_quantity) < 5).length}</p></div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <section className="rounded-[32px] bg-white p-6 soft-shadow md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10 text-sage"><PackagePlus className="h-5 w-5" /></div>
              <div><h1 className="font-lora text-2xl font-bold">{editingSlug ? 'Edit product' : 'Add a product'}</h1><p className="text-sm text-earth/50">Changes appear in the shop catalog.</p></div>
            </div>
            <form onSubmit={saveProduct} className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-earth/55">Product name
                <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value, slug: editingSlug ? form.slug : slugify(event.target.value) })} className={inputClass} placeholder="Rosewater Dew Mist" />
              </label>
              <label className="block text-xs font-bold uppercase tracking-wider text-earth/55">Product slug
                <input required value={form.slug} onChange={(event) => setForm({ ...form, slug: slugify(event.target.value) })} className={inputClass} placeholder="rosewater-dew-mist" />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-earth/55">Category
                  <select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} className={inputClass}>
                    <option value="cleanser">Cleanser</option><option value="serum">Serum</option><option value="moisturizer">Moisturizer</option><option value="other">Other</option>
                  </select>
                </label>
                <label className="block text-xs font-bold uppercase tracking-wider text-earth/55">Price ($)
                  <input required min="0" step="0.01" type="number" value={form.price} onChange={(event) => setForm({ ...form, price: event.target.value })} className={inputClass} placeholder="24.00" />
                </label>
              </div>
              <label className="block text-xs font-bold uppercase tracking-wider text-earth/55">Stock quantity
                <input required min="0" step="1" type="number" value={form.stock_quantity} onChange={(event) => setForm({ ...form, stock_quantity: event.target.value })} className={inputClass} />
              </label>
              <label className="block text-xs font-bold uppercase tracking-wider text-earth/55">Description
                <textarea rows="4" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className={`${inputClass} resize-y`} placeholder="Describe the formula and benefits..." />
              </label>
              <div>
                <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-earth/55"><ImagePlus className="h-4 w-4 text-sage" /> Product image</p>
                <input
                  ref={imageInput}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/avif"
                  className="sr-only"
                  onChange={(event) => selectImage(event.target.files?.[0])}
                />
                <div
                  onDragOver={(event) => { event.preventDefault(); setDraggingImage(true); }}
                  onDragLeave={() => setDraggingImage(false)}
                  onDrop={(event) => { event.preventDefault(); setDraggingImage(false); selectImage(event.dataTransfer.files?.[0]); }}
                  className={`rounded-3xl border-2 border-dashed p-4 text-center transition ${draggingImage ? 'border-sage bg-sage/10' : 'border-sage/25 bg-cream/60'}`}
                >
                  {imagePreview ? (
                    <div className="mb-3 overflow-hidden rounded-2xl bg-white">
                      <Image src={imagePreview} alt="Product image preview" width={640} height={360} className="max-h-52 w-full object-contain" />
                    </div>
                  ) : <UploadCloud className="mx-auto mb-2 h-7 w-7 text-sage" />}
                  <p className="text-sm font-semibold text-earth">{imageFile ? imageFile.name : 'Drop an image here'}</p>
                  <p className="mt-1 text-xs text-earth/50">JPG, PNG, WebP, or AVIF · up to 8 MB</p>
                  <button type="button" onClick={() => imageInput.current?.click()} className="mt-3 rounded-full border border-sage/25 bg-white px-4 py-2 text-xs font-bold text-sage transition hover:bg-sage hover:text-white">
                    {imagePreview ? 'Choose a different image' : 'Browse images'}
                  </button>
                </div>
              </div>
              <label className="flex items-center gap-3 rounded-2xl bg-cream/70 px-4 py-3 text-sm font-semibold">
                <input type="checkbox" checked={form.is_active} onChange={(event) => setForm({ ...form, is_active: event.target.checked })} className="h-4 w-4 accent-[#8DAA91]" /> Visible in shop
              </label>
              {error && <p role="alert" className="rounded-2xl bg-terracotta/10 px-4 py-3 text-sm text-terracotta">{error}</p>}
              {notice && <p role="status" className="rounded-2xl bg-sage/10 px-4 py-3 text-sm text-sage">{notice}</p>}
              <div className="flex gap-3 pt-2">
                <button disabled={saving} className="flex-1 rounded-full bg-sage px-6 py-4 font-bold text-white transition hover:bg-sage/90 disabled:opacity-60">{saving ? 'Saving…' : editingSlug ? 'Save changes' : 'Add product'}</button>
                {editingSlug && <button type="button" onClick={resetForm} className="rounded-full border border-sage/25 px-5 py-4 font-bold text-sage">Cancel</button>}
              </div>
            </form>
          </section>

          <section className="rounded-[32px] bg-white p-6 soft-shadow md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div><h2 className="font-lora text-2xl font-bold">Product inventory</h2><p className="mt-1 text-sm text-earth/50">Manage prices, visibility, and quantities.</p></div>
              <button onClick={loadProducts} aria-label="Refresh inventory" className="rounded-full border border-sage/20 px-4 py-2 text-sm font-bold text-sage hover:bg-sage/10">Refresh</button>
            </div>
            {loadingProducts ? <p className="py-10 text-center text-earth/50">Loading inventory…</p> : products.length === 0 ? <p className="py-10 text-center text-earth/50">No products yet. Add your first product with the form.</p> : (
              <div className="space-y-3">
                {products.map((product) => (
                  <article key={product.id} className="flex flex-wrap items-center gap-4 rounded-3xl border border-sage/10 p-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-cream">
                      {product.image_url ? <Image src={product.image_url} alt={product.name} width={100} height={100} className="h-full w-full object-cover" /> : <div className="grid h-full place-items-center text-sage"><Leaf /></div>}
                    </div>
                    <div className="min-w-[130px] flex-1">
                      <h3 className="font-bold">{product.name}</h3>
                      <p className="text-xs capitalize text-earth/50">{product.category} · ${Number(product.price).toFixed(2)}</p>
                      <p className={`mt-1 text-xs font-bold ${Number(product.stock_quantity) < 5 ? 'text-terracotta' : 'text-sage'}`}>{product.stock_quantity} in stock{!product.is_active && ' · Hidden'}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => editProduct(product)} aria-label={`Edit ${product.name}`} className="grid h-10 w-10 place-items-center rounded-full bg-cream text-earth hover:bg-sage/15"><Pencil className="h-4 w-4" /></button>
                      <button onClick={() => deleteProduct(product)} aria-label={`Delete ${product.name}`} className="grid h-10 w-10 place-items-center rounded-full bg-terracotta/10 text-terracotta hover:bg-terracotta/20"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
