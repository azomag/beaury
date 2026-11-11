import { Button } from '@/components/Button';
import { Facebook } from 'lucide-react';
import { Image } from '@/components/Image';
import { Instagram } from 'lucide-react';
import { Leaf } from 'lucide-react';
import { Link } from '@/components/Link';
import { Menu } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { Text } from '@/components/Text';
import { Twitter } from 'lucide-react';

import { AccountMenu } from '@/components/AccountMenu';
import { CartCount } from '@/components/CartCount';

export const metadata = {
  title: 'Botanical Glow - Free Tailwind Template',
  description:  'Download this free Tailwind CSS Beauty website template for Botanical Glow. Features a biophilic minimalism design, fully responsive layout, and includes 14 pre-built pages like blog.html, index.html, about.html.',
};

export default function Page() {
  return (
    <div className="bg-cream antialiased font-sans overflow-x-hidden text-earth">
      <>
        <header className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-[#8DAA91]/10">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link className="flex items-center gap-2 group" href="index.html"><div className="w-10 h-10 bg-[#8DAA91] rounded-full flex items-center justify-center text-white group-hover:rotate-12 transition-transform"><Leaf className="w-6 h-6" /></div>
              <Text variant="bold" className="text-2xl font-['Lora'] font-bold text-[#5D4037] tracking-tight"> Botanical 
              <Text className="text-[#8DAA91]"> Glow </Text></Text></Link>
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5D4037]/70">
                <Link className="hover:text-[#8DAA91] transition-colors" href="shop.html"> Shop </Link>
                <Link className="hover:text-[#8DAA91] transition-colors" href="ingredients.html"> Ingredients </Link>
                <Link className="hover:text-[#8DAA91] transition-colors" href="routine-quiz.html"> Routine Quiz </Link>
                <Link className="hover:text-[#8DAA91] transition-colors" href="about.html"> Our Story </Link>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <AccountMenu />
              <Link className="relative text-[#5D4037]/70 hover:text-[#8DAA91] transition-colors" href="cart.html"><ShoppingBag className="w-5 h-5" />
              <CartCount /></Link>
              {/* Mobile Toggle */}
              <Button className="md:hidden text-[#5D4037]" id="mobile-menu-toggle"><Menu className="w-6 h-6" /></Button>
            </div>
            {/* Mobile Menu */}
            <div id="mobile-menu" className="hidden md:hidden absolute top-full left-0 w-full bg-white backdrop-blur-md border-b border-[#8DAA91]/10 px-6 py-6 flex flex-col gap-4 z-50">
              <Link className="text-sm font-medium text-[#5D4037]/70 hover:text-[#8DAA91] transition-colors block py-2 text-left" href="shop.html"> Shop </Link>
              <Link className="text-sm font-medium text-[#5D4037]/70 hover:text-[#8DAA91] transition-colors block py-2 text-left" href="ingredients.html"> Ingredients </Link>
              <Link className="text-sm font-medium text-[#5D4037]/70 hover:text-[#8DAA91] transition-colors block py-2 text-left" href="routine-quiz.html"> Routine Quiz </Link>
              <Link className="text-sm font-medium text-[#5D4037]/70 hover:text-[#8DAA91] transition-colors block py-2 text-left" href="about.html"> Our Story </Link>
            </div>
          </nav>
        </header>
        <main className="pt-32 pb-32 px-6">
          {/* Natures Intelligence */}
          <section id="natures_intelligence">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20 text-center max-w-3xl mx-auto">
                <h1 className="text-5xl font-lora font-bold mb-6">
                   Nature's 
                  <Text variant="italic" className="italic text-sage"> Intelligence. </Text>
                </h1>
                <p className="text-earth/60 leading-relaxed">
                   We source the finest botanicals from around the globe, ensuring each ingredient is harvested at its peak potency and processed with care to preserve its natural benefits. 
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Ingredient 1 */}
                <div className="bg-white p-10 rounded-[40px] soft-shadow group hover:-translate-y-2 transition-all duration-500">
                  <div className="aspect-square rounded-full overflow-hidden mb-8 border-4 border-sage/10">
                    <Image variant="cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1596003906949-67221c37965c?w=400&q=80" alt="Marshmallow Root" />
                  </div>
                  <h3 className="text-2xl font-lora font-bold mb-4"> Marshmallow Root </h3>
                  <p className="text-sm text-earth/60 leading-relaxed mb-6">
                     Known as the "soothing herb," marshmallow root contains high levels of mucilage that provides a protective layer on the skin, reducing redness and locking in moisture. 
                  </p>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-sage"> Found in: Velvet Cloud Cleanser </div>
                </div>
                {/* Ingredient 2 */}
                <div className="bg-white p-10 rounded-[40px] soft-shadow group hover:-translate-y-2 transition-all duration-500">
                  <div className="aspect-square rounded-full overflow-hidden mb-8 border-4 border-sage/10">
                    <Image variant="cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=400&q=80" alt="Rosehip Oil" />
                  </div>
                  <h3 className="text-2xl font-lora font-bold mb-4"> Rosehip Oil </h3>
                  <p className="text-sm text-earth/60 leading-relaxed mb-6">
                     Packed with Vitamin A and C, rosehip oil promotes cell regeneration and brightens the complexion, making it ideal for reducing the appearance of scars and fine lines. 
                  </p>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-sage"> Found in: Midnight Recovery Oil </div>
                </div>
                {/* Ingredient 3 */}
                <div className="bg-white p-10 rounded-[40px] soft-shadow group hover:-translate-y-2 transition-all duration-500">
                  <div className="aspect-square rounded-full overflow-hidden mb-8 border-4 border-sage/10">
                    <Image variant="cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80" alt="White Tea" />
                  </div>
                  <h3 className="text-2xl font-lora font-bold mb-4"> White Tea Extract </h3>
                  <p className="text-sm text-earth/60 leading-relaxed mb-6">
                     A powerful antioxidant that protects the skin from oxidative stress and environmental pollutants, helping to maintain a youthful and resilient glow. 
                  </p>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-sage"> Found in: Rosewater Dew Mist </div>
                </div>
                {/* Ingredient 4 */}
                <div className="bg-white p-10 rounded-[40px] soft-shadow group hover:-translate-y-2 transition-all duration-500">
                  <div className="aspect-square rounded-full overflow-hidden mb-8 border-4 border-sage/10">
                    <Image variant="cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1502741126161-b048400d085d?w=400&q=80" alt="Sea Buckthorn" />
                  </div>
                  <h3 className="text-2xl font-lora font-bold mb-4"> Sea Buckthorn </h3>
                  <p className="text-sm text-earth/60 leading-relaxed mb-6">
                     Rich in Omega-7 fatty acids, sea buckthorn helps to repair the skin barrier and provides deep hydration for even the most sensitive skin types. 
                  </p>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-sage"> Found in: Vitamin C Glow Serum </div>
                </div>
                {/* Ingredient 5 */}
                <div className="bg-white p-10 rounded-[40px] soft-shadow group hover:-translate-y-2 transition-all duration-500">
                  <div className="aspect-square rounded-full overflow-hidden mb-8 border-4 border-sage/10">
                    <Image variant="cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" alt="Bakuchiol" />
                  </div>
                  <h3 className="text-2xl font-lora font-bold mb-4"> Bakuchiol </h3>
                  <p className="text-sm text-earth/60 leading-relaxed mb-6">
                     A natural, plant-based alternative to retinol that provides all the anti-aging benefits without the irritation or sensitivity associated with synthetic versions. 
                  </p>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-sage"> Found in: Midnight Recovery Oil </div>
                </div>
                {/* Ingredient 6 */}
                <div className="bg-white p-10 rounded-[40px] soft-shadow group hover:-translate-y-2 transition-all duration-500">
                  <div className="aspect-square rounded-full overflow-hidden mb-8 border-4 border-sage/10">
                    <Image variant="cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400&q=80" alt="French Pink Clay" />
                  </div>
                  <h3 className="text-2xl font-lora font-bold mb-4"> French Pink Clay </h3>
                  <p className="text-sm text-earth/60 leading-relaxed mb-6">
                     A gentle clay that draws out impurities and toxins from the pores while exfoliating dead skin cells, leaving the skin soft, smooth, and refreshed. 
                  </p>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-sage"> Found in: Earth Clay Mask </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-[#FDFBF7] border-t border-[#8DAA91]/20 pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="col-span-1 md:col-span-1">
                <Link className="flex items-center gap-2 mb-6" href="index.html"><div className="w-8 h-8 bg-[#8DAA91] rounded-full flex items-center justify-center text-white"><Leaf className="w-5 h-5" /></div>
                <Text variant="bold" className="text-xl font-['Lora'] font-bold text-[#5D4037]"> Botanical 
                <Text className="text-[#8DAA91]"> Glow </Text></Text></Link>
                <p className="text-[#5D4037]/60 text-sm leading-relaxed mb-8">
                   Harnessing the power of nature to reveal your most radiant self. Sustainably sourced, scientifically proven. 
                </p>
                <div className="flex gap-4">
                  <Link className="w-10 h-10 rounded-full bg-white border border-[#8DAA91]/20 flex items-center justify-center text-[#8DAA91] hover:bg-[#8DAA91] hover:text-white transition-all" href="#"><Instagram className="w-5 h-5" /></Link>
                  <Link className="w-10 h-10 rounded-full bg-white border border-[#8DAA91]/20 flex items-center justify-center text-[#8DAA91] hover:bg-[#8DAA91] hover:text-white transition-all" href="#"><Facebook className="w-5 h-5" /></Link>
                  <Link className="w-10 h-10 rounded-full bg-white border border-[#8DAA91]/20 flex items-center justify-center text-[#8DAA91] hover:bg-[#8DAA91] hover:text-white transition-all" href="#"><Twitter className="w-5 h-5" /></Link>
                </div>
              </div>
              <div>
                <h4 className="font-['Lora'] font-bold text-[#5D4037] mb-6"> Shop </h4>
                <ul className="space-y-4 text-sm text-[#5D4037]/70">
                  <li>
                    <Link className="hover:text-[#8DAA91] transition-colors" href="shop.html"> All Products </Link>
                  </li>
                  <li>
                    <Link className="hover:text-[#8DAA91] transition-colors" href="shop.html"> Cleansers </Link>
                  </li>
                  <li>
                    <Link className="hover:text-[#8DAA91] transition-colors" href="shop.html"> Serums </Link>
                  </li>
                  <li>
                    <Link className="hover:text-[#8DAA91] transition-colors" href="shop.html"> Moisturizers </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-['Lora'] font-bold text-[#5D4037] mb-6"> Learn </h4>
                <ul className="space-y-4 text-sm text-[#5D4037]/70">
                  <li>
                    <Link className="hover:text-[#8DAA91] transition-colors" href="ingredients.html"> Ingredient Glossary </Link>
                  </li>
                  <li>
                    <Link className="hover:text-[#8DAA91] transition-colors" href="blog.html"> Skincare Journal </Link>
                  </li>
                  <li>
                    <Link className="hover:text-[#8DAA91] transition-colors" href="routine-quiz.html"> Routine Quiz </Link>
                  </li>
                  <li>
                    <Link className="hover:text-[#8DAA91] transition-colors" href="faq.html"> FAQs </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-['Lora'] font-bold text-[#5D4037] mb-6"> Newsletter </h4>
                <p className="text-sm text-[#5D4037]/60 mb-6">
                   Join our community for natural beauty tips and exclusive offers. 
                </p>
                <form className="flex flex-col gap-2">
                  <input placeholder="Your email" type="email" className="flex-grow min-w-0 bg-white border border-[#8DAA91]/20 px-4 py-2 rounded-full text-sm outline-none focus:border-[#8DAA91]" />
                  <Button contentKey="cta_21" className="bg-[#8DAA91] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#7a967e] transition-colors whitespace-nowrap"> Join </Button>
                </form>
              </div>
            </div>
            <div className="pt-12 border-t border-[#8DAA91]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-[#5D4037]/40 font-bold">
              <p> © 2025 BOTANICAL GLOW. ALL RIGHTS RESERVED. </p>
              <div className="flex gap-8">
                <Link className="hover:text-[#8DAA91]" href="privacy.html"> Privacy Policy </Link>
                <Link className="hover:text-[#8DAA91]" href="terms.html"> Terms of Service </Link>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}
