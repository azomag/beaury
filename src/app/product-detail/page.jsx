import { Button } from '@/components/Button';
import { Check } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Image } from '@/components/Image';
import { Instagram } from 'lucide-react';
import { Leaf } from 'lucide-react';
import { Link } from '@/components/Link';
import { Menu } from 'lucide-react';
import { Minus } from 'lucide-react';
import { Plus } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { Star } from 'lucide-react';
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
        <main className="pt-32 pb-32 px-6">
          {/* Velvet Cloud Cleanser */}
          <section id="velvet_cloud_cleanser">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
                {/* Image Gallery */}
                <div className="space-y-6">
                  <div className="aspect-square bg-white rounded-[40px] overflow-hidden soft-shadow">
                    <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80" alt="Product" />
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="aspect-square bg-white rounded-2xl overflow-hidden soft-shadow cursor-pointer border-2 border-sage">
                      <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&q=80" alt="Detail" />
                    </div>
                    <div className="aspect-square bg-white rounded-2xl overflow-hidden soft-shadow cursor-pointer hover:border-2 hover:border-sage transition-all">
                      <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80" alt="Detail" />
                    </div>
                    <div className="aspect-square bg-white rounded-2xl overflow-hidden soft-shadow cursor-pointer hover:border-2 hover:border-sage transition-all">
                      <Image variant="cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400&q=80" alt="Detail" />
                    </div>
                  </div>
                </div>
                {/* Product Info */}
                <div className="flex flex-col justify-center">
                  <div className="mb-8">
                    <div className="text-sage font-bold uppercase tracking-widest text-xs mb-4"> Cleansers </div>
                    <h1 className="text-5xl font-lora font-bold mb-4"> Velvet Cloud Cleanser </h1>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex gap-1 text-terracotta">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <Text className="text-earth/40 text-sm"> (48 Reviews) </Text>
                    </div>
                    <p className="text-3xl font-lora font-bold text-sage"> $32.00 </p>
                  </div>
                  <p className="text-earth/70 leading-relaxed mb-12">
                     A gentle, pH-balanced foaming cleanser that removes impurities without stripping the skin's natural moisture barrier. Infused with marshmallow root and white tea extract for a soothing, cloud-like experience. 
                  </p>
                  <div className="space-y-6 mb-12">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-sage/10 text-sage rounded-full flex items-center justify-center"><Check className="w-5 h-5" /></div>
                      <Text className="text-sm font-medium"> Suitable for all skin types </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-sage/10 text-sage rounded-full flex items-center justify-center"><Check className="w-5 h-5" /></div>
                      <Text className="text-sm font-medium"> Vegan & Cruelty-Free </Text>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center border border-sage/20 rounded-full px-6 py-4 bg-white">
                      <Button className="text-sage hover:text-earth transition-colors"><Minus className="w-4 h-4" /></Button>
                      <Text variant="bold" className="mx-6 font-bold"> 1 </Text>
                      <Button className="text-sage hover:text-earth transition-colors"><Plus className="w-4 h-4" /></Button>
                    </div>
                    <Button contentKey="cta_13" className="flex-grow bg-sage text-white rounded-full font-bold hover:bg-[#7a967e] transition-all soft-shadow"> Add to Bag </Button>
                  </div>
                </div>
              </div>
              {/* Tabs */}
              <div className="border-t border-sage/10 pt-20">
                <div className="flex gap-12 mb-12 border-b border-sage/10">
                  <Button className="pb-4 border-b-2 border-sage font-bold text-sage"> Ingredients </Button>
                  <Button className="pb-4 text-earth/40 hover:text-sage transition-colors"> How to Use </Button>
                  <Button className="pb-4 text-earth/40 hover:text-sage transition-colors"> Sustainability </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div>
                    <h3 className="text-2xl font-lora font-bold mb-6"> What's Inside </h3>
                    <p className="text-earth/70 leading-relaxed mb-8">
                       We believe in full transparency. Every ingredient is chosen for its specific benefit to your skin health. 
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <Text variant="bold" className="font-bold text-sage"> Marshmallow Root: </Text>
                        <Text className="text-sm text-earth/60"> Soothes inflammation and provides intense hydration. </Text>
                      </li>
                      <li className="flex items-start gap-4">
                        <Text variant="bold" className="font-bold text-sage"> White Tea Extract: </Text>
                        <Text className="text-sm text-earth/60"> Rich in antioxidants to protect against environmental stressors. </Text>
                      </li>
                      <li className="flex items-start gap-4">
                        <Text variant="bold" className="font-bold text-sage"> Aloe Vera: </Text>
                        <Text className="text-sm text-earth/60"> Cools and calms the skin while providing a gentle cleanse. </Text>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-10 rounded-[40px] soft-shadow">
                    <h3 className="text-xl font-lora font-bold mb-6"> Full Ingredient List </h3>
                    <p className="text-xs text-earth/40 leading-relaxed">
                       Aqua (Water), Aloe Barbadensis Leaf Juice*, Glycerin, Decyl Glucoside, Lauryl Glucoside, Althaea Officinalis (Marshmallow) Root Extract*, Camellia Sinensis (White Tea) Leaf Extract*, Chamomilla Recutita (Matricaria) Flower Extract*, Benzyl Alcohol, Dehydroacetic Acid, Citric Acid. *Certified Organic 
                    </p>
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
                  <Button contentKey="cta_14" className="bg-[#8DAA91] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#7a967e] transition-colors whitespace-nowrap"> Join </Button>
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
