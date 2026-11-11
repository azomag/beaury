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
        <main className="pt-40 pb-32 px-6">
          <article className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Text variant="bold" className="px-3 py-1 bg-sage/10 text-sage rounded-full text-[10px] font-bold uppercase tracking-widest"> Rituals </Text>
                <Text variant="bold" className="text-[10px] font-bold uppercase tracking-widest text-earth/40"> October 24, 2023 </Text>
              </div>
              <h1 className="text-4xl md:text-6xl font-lora font-bold mb-8 leading-tight">
                 The Art of the Evening Ritual: Preparing Your Skin for Rest 
              </h1>
              <p className="text-lg text-earth/60 italic"> By Elena Vance, Founder </p>
            </div>
            <div className="aspect-video rounded-[60px] overflow-hidden mb-16 soft-shadow">
              <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80" alt="Evening Ritual" />
            </div>
            <div className="prose prose-earth max-w-none">
              <p className="text-lg leading-relaxed mb-8">
                 As the sun sets and the world begins to quiet, our bodies enter a natural state of repair. For our skin, this is the most critical time of the day. While we sleep, cellular regeneration accelerates, and the skin's permeability increases, making it more receptive to active ingredients. 
              </p>
              <h2 className="text-3xl font-lora font-bold mt-12 mb-6"> Step 1: The Double Cleanse </h2>
              <p className="mb-8">
                 The first step in any effective evening ritual is removing the day. We recommend a double cleanse: first with an oil-based cleanser to dissolve makeup and SPF, followed by a gentle water-based cleanser to purify the pores without stripping the skin's natural oils. 
              </p>
              <blockquote className="border-l-4 border-sage pl-8 py-4 my-12 italic text-xl font-lora text-earth/80 bg-sage/5 rounded-r-3xl">
                 "Skincare is not just about the products you use; it's about the intention you bring to the process." 
              </blockquote>
              <h2 className="text-3xl font-lora font-bold mt-12 mb-6"> Step 2: Hydration & Repair </h2>
              <p className="mb-8">
                 Once the skin is clean, it's time to replenish. Apply a hydrating mist to damp skin, followed by a serum rich in antioxidants. Finally, seal everything in with a nourishing facial oil or night cream. This creates an occlusive barrier that prevents trans-epidermal water loss throughout the night. 
              </p>
              <div className="bg-white p-10 rounded-[40px] soft-shadow my-16">
                <h4 className="font-lora font-bold text-2xl mb-6"> Recommended for this Ritual: </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-cream rounded-2xl overflow-hidden shrink-0">
                      <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=200&q=80" alt="Product" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm"> Velvet Cloud Cleanser </h5>
                      <p className="text-xs text-earth/60"> $38.00 </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-cream rounded-2xl overflow-hidden shrink-0">
                      <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=200&q=80" alt="Product" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm"> Midnight Recovery Oil </h5>
                      <p className="text-xs text-earth/60"> $64.00 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Share & Tags */}
            <div className="mt-20 pt-10 border-t border-sage/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex gap-4">
                <Text variant="bold" className="text-xs font-bold uppercase tracking-widest text-earth/40"> Tags: </Text>
                <Link className="text-xs font-bold uppercase tracking-widest text-sage hover:underline" href="#"> Rituals </Link>
                <Link className="text-xs font-bold uppercase tracking-widest text-sage hover:underline" href="#"> Nighttime </Link>
                <Link className="text-xs font-bold uppercase tracking-widest text-sage hover:underline" href="#"> Self-Care </Link>
              </div>
              <div className="flex gap-6">
                <Link className="text-earth/40 hover:text-sage transition-colors" href="#"><Facebook className="w-5 h-5" /></Link>
                <Link className="text-earth/40 hover:text-sage transition-colors" href="#"><Twitter className="w-5 h-5" /></Link>
                <Link className="text-earth/40 hover:text-sage transition-colors" href="#"><Instagram className="w-5 h-5" /></Link>
              </div>
            </div>
          </article>
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
                  <Button contentKey="cta_17" className="bg-[#8DAA91] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#7a967e] transition-colors whitespace-nowrap"> Join </Button>
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
