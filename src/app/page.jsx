import { Button } from '@/components/Button';
import { Droplets } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Image } from '@/components/Image';
import { Instagram } from 'lucide-react';
import { Leaf } from 'lucide-react';
import { Link } from '@/components/Link';
import { Menu } from 'lucide-react';
import { Recycle } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Star } from 'lucide-react';
import { Text } from '@/components/Text';
import { FeaturedProducts } from '@/components/FeaturedProducts';
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
        <main className="overflow-x-hidden">
          {/* Reveal Your Natural Glow */}
          <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F4F1EA] -z-10 organic-shape translate-x-1/4 -translate-y-1/4"></div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/10 text-sage rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                  <Sparkles className="w-4 h-4" />
                   Nature's Purest Science 
                </div>
                <h1 className="text-6xl md:text-8xl font-lora font-bold leading-[1.1] mb-8">
                   Reveal Your 
                  <br />
                  <Text variant="italic" className="italic text-sage"> Natural Glow. </Text>
                </h1>
                <p className="text-lg text-earth/70 leading-relaxed mb-12 max-w-lg">
                   We believe skincare should be a ritual of self-love. Our biophilic formulas use plant-based intelligence to nourish your skin and soul. 
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link contentKey="cta_23" className="px-10 py-5 bg-sage text-white rounded-full font-bold hover:bg-[#7a967e] transition-all soft-shadow" href="shop.html"> Shop the Collection </Link>
                  <Link contentKey="cta_24" className="px-10 py-5 border border-sage text-sage rounded-full font-bold hover:bg-sage hover:text-white transition-all" href="routine-quiz.html"> Find Your Routine </Link>
                </div>
              </div>
              <div className="relative">
                <div className="organic-shape overflow-hidden aspect-square soft-shadow">
                  <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80" alt="Skincare Ritual" />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl soft-shadow max-w-[240px] hidden md:block">
                  <div className="flex gap-1 text-terracotta mb-4">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-sm italic text-earth/80 mb-4">
                     "My skin has never felt more alive. The Sage Serum is a game changer." 
                  </p>
                  <div className="text-xs font-bold uppercase tracking-widest"> — Sarah J. </div>
                </div>
              </div>
            </div>
          </section>
          {/* Rooted In Sustainability */}
          <section id="rooted_in_sustainability" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-24">
                <h2 className="text-4xl md:text-5xl font-lora font-bold mb-8">
                   Rooted in 
                  <Text variant="italic" className="text-sage italic"> Sustainability. </Text>
                </h2>
                <p className="text-earth/60 leading-relaxed">
                   From seed to skin, we ensure every step of our process respects the earth. Our packaging is 100% recyclable, and our ingredients are ethically wild-harvested. 
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center p-10 bg-white rounded-[40px] soft-shadow">
                  <div className="w-16 h-16 bg-sage/10 text-sage rounded-full flex items-center justify-center mx-auto mb-8"><Droplets className="w-8 h-8" /></div>
                  <h3 className="text-xl font-lora font-bold mb-4"> Pure Extracts </h3>
                  <p className="text-sm text-earth/60">
                     Cold-pressed botanicals that retain 100% of their nutrient density. 
                  </p>
                </div>
                <div className="text-center p-10 bg-white rounded-[40px] soft-shadow">
                  <div className="w-16 h-16 bg-sage/10 text-sage rounded-full flex items-center justify-center mx-auto mb-8"><ShieldCheck className="w-8 h-8" /></div>
                  <h3 className="text-xl font-lora font-bold mb-4"> Clean Science </h3>
                  <p className="text-sm text-earth/60">
                     Dermatologist tested, free from parabens, sulfates, and synthetic fragrances. 
                  </p>
                </div>
                <div className="text-center p-10 bg-white rounded-[40px] soft-shadow">
                  <div className="w-16 h-16 bg-sage/10 text-sage rounded-full flex items-center justify-center mx-auto mb-8"><Recycle className="w-8 h-8" /></div>
                  <h3 className="text-xl font-lora font-bold mb-4"> Zero Waste </h3>
                  <p className="text-sm text-earth/60">
                     Compostable shipping materials and refillable glass containers. 
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* The Essentials */}
          <section id="the_essentials" className="py-32 bg-[#F4F1EA]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-end mb-16">
                <div>
                  <h2 className="text-4xl font-lora font-bold mb-4"> The Essentials </h2>
                  <p className="text-earth/60"> Our most-loved formulas for a radiant complexion. </p>
                </div>
                <Link className="text-sage font-bold border-b-2 border-sage pb-1 hover:text-earth hover:border-earth transition-all" href="shop.html"> View All </Link>
              </div>
              <FeaturedProducts />
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
                  <Button contentKey="cta_25" className="bg-[#8DAA91] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#7a967e] transition-colors whitespace-nowrap"> Join </Button>
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
