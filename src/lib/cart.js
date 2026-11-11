const CART_KEY = 'botanicalGlowCart';

export function readCart() {
  if (typeof window === 'undefined') return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem(CART_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveCart(items) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event('botanical-cart-changed'));
}

export function addProductToCart(product, amount = 1) {
  const stock = Number(product.stock_quantity || 0);
  if (stock < 1) throw new Error('This product is currently out of stock.');

  const cart = readCart();
  const existing = cart.find((item) => String(item.id) === String(product.id));
  const nextQuantity = (existing?.quantity || 0) + amount;
  if (nextQuantity > stock) throw new Error(`Only ${stock} item${stock === 1 ? '' : 's'} available.`);

  const productData = {
    id: product.id,
    slug: product.slug,
    name: product.name,
    category: product.category,
    description: product.description,
    price: product.price,
    image_url: product.image_url,
    stock_quantity: stock,
    quantity: nextQuantity,
  };
  saveCart(existing
    ? cart.map((item) => String(item.id) === String(product.id) ? productData : item)
    : [...cart, productData]);
}

export function setCartQuantity(productId, quantity) {
  const cart = readCart();
  const item = cart.find((entry) => String(entry.id) === String(productId));
  if (!item) return;
  if (quantity <= 0) {
    saveCart(cart.filter((entry) => String(entry.id) !== String(productId)));
    return;
  }
  const safeQuantity = Math.min(quantity, Number(item.stock_quantity || 0));
  saveCart(cart.map((entry) => String(entry.id) === String(productId)
    ? { ...entry, quantity: safeQuantity }
    : entry));
}

export function cartItemCount(items = readCart()) {
  return items.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
}

export function cartSubtotal(items = readCart()) {
  const cents = items.reduce((sum, item) => sum + Math.round(Number(item.price) * 100) * Number(item.quantity || 0), 0);
  return cents / 100;
}
