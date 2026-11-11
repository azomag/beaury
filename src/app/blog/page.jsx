import NextLink from 'next/link';
import { ArrowRight } from 'lucide-react';
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
import { User } from 'lucide-react';

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
              <Link className="text-[#5D4037]/70 hover:text-[#8DAA91] transition-colors" href="login.html"><User className="w-5 h-5" /></Link>
              <Link className="relative text-[#5D4037]/70 hover:text-[#8DAA91] transition-colors" href="cart.html"><ShoppingBag className="w-5 h-5" />
              <Text className="absolute -top-2 -right-2 bg-[#D68C78] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center"> 0 </Text></Link>
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
          {/* The Botanical Journal */}
          <section id="the_botanical_journal">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h1 className="text-5xl font-lora font-bold mb-6">
                   The Botanical 
                  <Text variant="italic" className="italic text-sage"> Journal. </Text>
                </h1>
                <p className="text-earth/60 max-w-2xl mx-auto leading-relaxed">
                   Exploring the intersection of nature, science, and self-care. Discover rituals, ingredient deep-dives, and sustainable living tips. 
                </p>
              </div>
              {/* Featured Post */}
              <div className="mb-24">
                <NextLink href="/blog-detail" className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-[60px] soft-shadow overflow-hidden"><div className="aspect-[4/3] rounded-[40px] overflow-hidden">
                  <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80" alt="Featured Post" />
                </div><div>
                  <div className="flex items-center gap-4 mb-6">
                    <Text variant="bold" className="px-3 py-1 bg-sage/10 text-sage rounded-full text-[10px] font-bold uppercase tracking-widest"> Rituals </Text>
                    <Text variant="bold" className="text-[10px] font-bold uppercase tracking-widest text-earth/40"> October 24, 2023 </Text>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-lora font-bold mb-6 group-hover:text-sage transition-colors">
                     The Art of the Evening Ritual: Preparing Your Skin for Rest 
                  </h2>
                  <p className="text-earth/60 mb-8 leading-relaxed">
                     Discover why your nighttime skincare routine is the most important part of your day, and how to maximize cellular repair while you sleep. 
                  </p>
                  <Text variant="bold" className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-sage"> Read Article 
                  <ArrowRight className="w-4 h-4" /></Text>
                </div></NextLink>
              </div>
              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Post 1 */}
                <Link className="group" href="blog-detail.html"><div className="aspect-[4/5] rounded-[40px] overflow-hidden mb-8 soft-shadow">
                  <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80" alt="Post 1" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Text variant="bold" className="text-[10px] font-bold uppercase tracking-widest text-sage"> Ingredients </Text>
                  <Text variant="bold" className="text-[10px] font-bold uppercase tracking-widest text-earth/40"> 15 Min Read </Text>
                </div>
                <h3 className="text-xl font-lora font-bold mb-4 group-hover:text-sage transition-colors"> Bakuchiol vs. Retinol: Which is Right for You? </h3>
                <p className="text-sm text-earth/60 leading-relaxed">
                   Everything you need to know about nature's gentler alternative to Vitamin A. 
                </p></Link>
                {/* Post 2 */}
                <Link className="group" href="blog-detail.html"><div className="aspect-[4/5] rounded-[40px] overflow-hidden mb-8 soft-shadow">
                  <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80" alt="Post 2" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Text variant="bold" className="text-[10px] font-bold uppercase tracking-widest text-sage"> Sustainability </Text>
                  <Text variant="bold" className="text-[10px] font-bold uppercase tracking-widest text-earth/40"> 8 Min Read </Text>
                </div>
                <h3 className="text-xl font-lora font-bold mb-4 group-hover:text-sage transition-colors"> 5 Ways to Make Your Beauty Routine Zero-Waste </h3>
                <p className="text-sm text-earth/60 leading-relaxed">
                   Small changes that make a big impact on our planet's health. 
                </p></Link>
                {/* Post 3 */}
                <Link className="group" href="blog-detail.html"><div className="aspect-[4/5] rounded-[40px] overflow-hidden mb-8 soft-shadow">
                  <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=600&q=80" alt="Post 3" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Text variant="bold" className="text-[10px] font-bold uppercase tracking-widest text-sage"> Science </Text>
                  <Text variant="bold" className="text-[10px] font-bold uppercase tracking-widest text-earth/40"> 12 Min Read </Text>
                </div>
                <h3 className="text-xl font-lora font-bold mb-4 group-hover:text-sage transition-colors">
                   Understanding Your Skin Barrier: The First Line of Defense 
                </h3>
                <p className="text-sm text-earth/60 leading-relaxed">
                   How to identify a compromised barrier and the steps to repair it naturally. 
                </p></Link>
              </div>
              {/* Pagination */}
              <div className="mt-20 flex justify-center gap-4">
                <Button contentKey="cta_18" className="w-12 h-12 rounded-full border-2 border-sage/20 flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all"> 1 </Button>
                <Button className="w-12 h-12 rounded-full border-2 border-sage/20 flex items-center justify-center text-earth/40 hover:border-sage hover:text-sage transition-all"> 2 </Button>
                <Button className="w-12 h-12 rounded-full border-2 border-sage/20 flex items-center justify-center text-earth/40 hover:border-sage hover:text-sage transition-all"> 3 </Button>
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
                  <Button contentKey="cta_19" className="bg-[#8DAA91] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#7a967e] transition-colors whitespace-nowrap"> Join </Button>
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
