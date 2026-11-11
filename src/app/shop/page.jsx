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
        <main className="pt-32 pb-32 px-6">
          {/* The Collection */}
          <section id="the_collection">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 text-center">
                <h1 className="text-5xl font-lora font-bold mb-4"> The Collection </h1>
                <p className="text-earth/60"> Pure, plant-based formulas for every skin concern. </p>
              </div>
              {/* Filters */}
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                <Button contentKey="cta_22" className="px-8 py-3 bg-sage text-white rounded-full text-sm font-bold soft-shadow"> All Products </Button>
                <Button contentKey="cta_23" className="px-8 py-3 bg-white text-earth/60 rounded-full text-sm font-bold hover:text-sage transition-colors"> Cleansers </Button>
                <Button contentKey="cta_24" className="px-8 py-3 bg-white text-earth/60 rounded-full text-sm font-bold hover:text-sage transition-colors"> Serums </Button>
                <Button contentKey="cta_25" className="px-8 py-3 bg-white text-earth/60 rounded-full text-sm font-bold hover:text-sage transition-colors"> Moisturizers </Button>
                <Button contentKey="cta_26" className="px-8 py-3 bg-white text-earth/60 rounded-full text-sm font-bold hover:text-sage transition-colors"> Body Care </Button>
              </div>
              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1 */}
                <div className="group">
                  <Link className="block" href="product-detail.html"><div className="aspect-square bg-white rounded-[32px] overflow-hidden mb-6 relative soft-shadow">
                    <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80" alt="Product" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-sage text-white text-[10px] font-bold uppercase tracking-widest rounded-full"> Best Seller </div>
                  </div>
                  <h3 className="text-lg font-lora font-bold mb-1"> Velvet Cloud Cleanser </h3>
                  <p className="text-earth/60 text-sm mb-2"> Gentle foaming wash </p>
                  <p className="text-sage font-bold"> $32.00 </p></Link>
                </div>
                {/* Product 2 */}
                <div className="group">
                  <Link className="block" href="product-detail.html"><div className="aspect-square bg-white rounded-[32px] overflow-hidden mb-6 relative soft-shadow">
                    <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&q=80" alt="Product" />
                  </div>
                  <h3 className="text-lg font-lora font-bold mb-1"> Midnight Recovery Oil </h3>
                  <p className="text-earth/60 text-sm mb-2"> Overnight repair serum </p>
                  <p className="text-sage font-bold"> $58.00 </p></Link>
                </div>
                {/* Product 3 */}
                <div className="group">
                  <Link className="block" href="product-detail.html"><div className="aspect-square bg-white rounded-[32px] overflow-hidden mb-6 relative soft-shadow">
                    <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80" alt="Product" />
                  </div>
                  <h3 className="text-lg font-lora font-bold mb-1"> Rosewater Dew Mist </h3>
                  <p className="text-earth/60 text-sm mb-2"> Hydrating facial spray </p>
                  <p className="text-sage font-bold"> $24.00 </p></Link>
                </div>
                {/* Product 4 */}
                <div className="group">
                  <Link className="block" href="product-detail.html"><div className="aspect-square bg-white rounded-[32px] overflow-hidden mb-6 relative soft-shadow">
                    <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80" alt="Product" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-terracotta text-white text-[10px] font-bold uppercase tracking-widest rounded-full"> New </div>
                  </div>
                  <h3 className="text-lg font-lora font-bold mb-1"> Earth Clay Mask </h3>
                  <p className="text-earth/60 text-sm mb-2"> Deep pore detox </p>
                  <p className="text-sage font-bold"> $45.00 </p></Link>
                </div>
                {/* Product 5 */}
                <div className="group">
                  <Link className="block" href="product-detail.html"><div className="aspect-square bg-white rounded-[32px] overflow-hidden mb-6 relative soft-shadow">
                    <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80" alt="Product" />
                  </div>
                  <h3 className="text-lg font-lora font-bold mb-1"> Botanical Body Butter </h3>
                  <p className="text-earth/60 text-sm mb-2"> Rich shea nourishment </p>
                  <p className="text-sage font-bold"> $38.00 </p></Link>
                </div>
                {/* Product 6 */}
                <div className="group">
                  <Link className="block" href="product-detail.html"><div className="aspect-square bg-white rounded-[32px] overflow-hidden mb-6 relative soft-shadow">
                    <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&q=80" alt="Product" />
                  </div>
                  <h3 className="text-lg font-lora font-bold mb-1"> Vitamin C Glow Serum </h3>
                  <p className="text-earth/60 text-sm mb-2"> Brightening concentrate </p>
                  <p className="text-sage font-bold"> $64.00 </p></Link>
                </div>
                {/* Product 7 */}
                <div className="group">
                  <Link className="block" href="product-detail.html"><div className="aspect-square bg-white rounded-[32px] overflow-hidden mb-6 relative soft-shadow">
                    <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?w=600&q=80" alt="Product" />
                  </div>
                  <h3 className="text-lg font-lora font-bold mb-1"> Hyaluronic Acid Gel </h3>
                  <p className="text-earth/60 text-sm mb-2"> Intense moisture boost </p>
                  <p className="text-sage font-bold"> $42.00 </p></Link>
                </div>
                {/* Product 8 */}
                <div className="group">
                  <Link className="block" href="product-detail.html"><div className="aspect-square bg-white rounded-[32px] overflow-hidden mb-6 relative soft-shadow">
                    <Image variant="cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80" alt="Product" />
                  </div>
                  <h3 className="text-lg font-lora font-bold mb-1"> Calming Chamomile Toner </h3>
                  <p className="text-earth/60 text-sm mb-2"> Soothing skin prep </p>
                  <p className="text-sage font-bold"> $28.00 </p></Link>
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
                  <Button contentKey="cta_27" className="bg-[#8DAA91] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#7a967e] transition-colors whitespace-nowrap"> Join </Button>
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
