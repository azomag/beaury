import { Button } from '@/components/Button';
import { ChevronDown } from 'lucide-react';
import { Facebook } from 'lucide-react';
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
          {/* Common Questions */}
          <section id="common_questions">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-20">
                <h1 className="text-5xl font-lora font-bold mb-6">
                   Common 
                  <Text variant="italic" className="italic text-sage"> Questions. </Text>
                </h1>
                <p className="text-earth/60">
                   Everything you need to know about our products, shipping, and sustainability practices. 
                </p>
              </div>
              <div className="space-y-6">
                {/* FAQ 1 */}
                <details className="faq-item group bg-white rounded-[30px] soft-shadow overflow-hidden">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <h3 className="text-lg font-lora font-bold"> Are your products safe for sensitive skin? </h3>
                    <ChevronDown className="text-sage transition-transform duration-300" />
                  </summary>
                  <div className="px-8 pb-8 text-earth/60 leading-relaxed">
                     Yes, all our products are formulated with sensitive skin in mind. We avoid synthetic fragrances, harsh sulfates, and parabens. However, we always recommend doing a patch test before incorporating a new product into your routine. 
                  </div>
                </details>
                {/* FAQ 2 */}
                <details className="faq-item group bg-white rounded-[30px] soft-shadow overflow-hidden">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <h3 className="text-lg font-lora font-bold"> How long do the products last? </h3>
                    <ChevronDown className="text-sage transition-transform duration-300" />
                  </summary>
                  <div className="px-8 pb-8 text-earth/60 leading-relaxed">
                     Because we use natural preservatives, our products have a shelf life of 12 months from the date of manufacture. Once opened, we recommend using them within 6 months for maximum potency. 
                  </div>
                </details>
                {/* FAQ 3 */}
                <details className="faq-item group bg-white rounded-[30px] soft-shadow overflow-hidden">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <h3 className="text-lg font-lora font-bold"> Is your packaging recyclable? </h3>
                    <ChevronDown className="text-sage transition-transform duration-300" />
                  </summary>
                  <div className="px-8 pb-8 text-earth/60 leading-relaxed">
                     Absolutely. We use glass bottles and jars which are infinitely recyclable. Our outer packaging is made from FSC-certified paper and printed with soy-based inks, making it fully compostable. 
                  </div>
                </details>
                {/* FAQ 4 */}
                <details className="faq-item group bg-white rounded-[30px] soft-shadow overflow-hidden">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <h3 className="text-lg font-lora font-bold"> Do you ship internationally? </h3>
                    <ChevronDown className="text-sage transition-transform duration-300" />
                  </summary>
                  <div className="px-8 pb-8 text-earth/60 leading-relaxed">
                     Currently, we ship to the United States, Canada, and Europe. We are working on expanding our shipping capabilities to more countries soon. 
                  </div>
                </details>
              </div>
              <div className="mt-20 text-center bg-sage/5 p-12 rounded-[40px]">
                <h3 className="text-2xl font-lora font-bold mb-4"> Still have questions? </h3>
                <p className="text-earth/60 mb-8"> We're here to help you on your skincare journey. </p>
                <Link variant="inline" contentKey="cta_15" className="inline-block bg-sage text-white px-10 py-4 rounded-full font-bold hover:bg-sage/90 transition-all" href="contact.html"> Contact Support </Link>
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
                  <Button contentKey="cta_16" className="bg-[#8DAA91] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#7a967e] transition-colors whitespace-nowrap"> Join </Button>
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
