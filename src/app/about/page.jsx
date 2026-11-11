import { Button } from '@/components/Button';
import { CheckCircle } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Image } from '@/components/Image';
import { Instagram } from 'lucide-react';
import { Leaf } from 'lucide-react';
import { Link } from '@/components/Link';
import { Menu } from 'lucide-react';
import { Recycle } from 'lucide-react';
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
        <main className="overflow-x-hidden">
          {/* Born From The Earth Crafted For You */}
          <section id="born_from_the_earth_crafted_for_you" className="pt-40 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <div className="inline-block px-4 py-1 bg-sage/10 text-sage rounded-full text-[10px] font-bold uppercase tracking-widest mb-6"> Our Roots </div>
                  <h1 className="text-5xl md:text-6xl font-lora font-bold mb-8 leading-tight">
                     Born from the 
                    <Text variant="italic" className="italic text-sage"> Earth </Text>
                     , Crafted for You. 
                  </h1>
                  <p className="text-lg text-earth/70 leading-relaxed mb-8">
                     Botanical Glow began in a small herb garden with a simple belief: that nature provides everything we need to nourish, heal, and protect our skin. We've spent years perfecting the balance between ancient botanical wisdom and modern green science. 
                  </p>
                </div>
                <div className="relative">
                  <div className="organic-shape overflow-hidden aspect-square bg-sage/20">
                    <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80" alt="Founder in garden" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[30px] soft-shadow max-w-[240px]">
                    <p className="text-sm italic font-lora text-earth/80">
                       "We don't just make skincare; we cultivate rituals of self-love and connection to the natural world." 
                    </p>
                    <p className="mt-4 font-bold text-xs uppercase tracking-widest text-sage"> — Elena Vance, Founder </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Our Core Values */}
          <section id="our_core_values" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl font-lora font-bold mb-4"> Our Core Values </h2>
                <div className="w-20 h-1 bg-sage/20 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6"><Leaf className="text-sage" /></div>
                  <h3 className="text-xl font-lora font-bold mb-4"> 100% Organic </h3>
                  <p className="text-sm text-earth/60 leading-relaxed">
                     Every ingredient we use is certified organic and ethically sourced from sustainable farms. 
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6"><Heart className="text-sage" /></div>
                  <h3 className="text-xl font-lora font-bold mb-4"> Cruelty Free </h3>
                  <p className="text-sm text-earth/60 leading-relaxed">
                     We never test on animals and ensure our entire supply chain adheres to strict ethical standards. 
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6"><Recycle className="text-sage" /></div>
                  <h3 className="text-xl font-lora font-bold mb-4"> Zero Waste </h3>
                  <p className="text-sm text-earth/60 leading-relaxed">
                     Our packaging is fully recyclable or compostable, minimizing our footprint on the planet. 
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* The Science Of Slow Beauty */}
          <section id="the_science_of_slow_beauty" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="bg-sage/5 rounded-[60px] p-12 md:p-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1">
                    <Image className="rounded-[40px] soft-shadow" src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80" alt="Lab process" />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h2 className="text-4xl font-lora font-bold mb-8">
                       The Science of 
                      <Text variant="italic" className="italic text-sage"> Slow Beauty. </Text>
                    </h2>
                    <p className="text-earth/70 mb-6">
                       Unlike mass-produced skincare, we follow a "slow beauty" philosophy. This means small-batch production, cold-pressed extraction, and allowing nature the time it needs to create potent active ingredients. 
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <CheckCircle className="text-sage w-5 h-5 mt-1" />
                        <Text className="text-sm font-medium"> Small-batch formulated in our solar-powered studio. </Text>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckCircle className="text-sage w-5 h-5 mt-1" />
                        <Text className="text-sm font-medium"> Cold-pressed oils to preserve nutrient density. </Text>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckCircle className="text-sage w-5 h-5 mt-1" />
                        <Text className="text-sm font-medium"> No synthetic fragrances, parabens, or sulfates. </Text>
                      </li>
                    </ul>
                  </div>
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
                  <Button contentKey="cta_20" className="bg-[#8DAA91] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#7a967e] transition-colors whitespace-nowrap"> Join </Button>
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
