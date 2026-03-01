"use client";

import { useState } from "react";
import { Menu, X, Star, Instagram, Facebook, Twitter, MapPin, Phone, Clock, Mail } from "lucide-react";

const tacos = [
  {
    name: "The Golden Gate",
    description: "Beer-battered fish with chipotle aioli",
    price: 14,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
  },
  {
    name: "Mission District",
    description: "Carnitas with caramelized onions",
    price: 13,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
  },
  {
    name: "Fog City",
    description: "Spicy shrimp with avocado crema",
    price: 14,
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=400&h=300&fit=crop",
  },
  {
    name: "The Classic",
    description: "Grilled carne asada with cilantro",
    price: 12,
    image: "https://images.unsplash.com/photo-1558629806-8d2d4fb7b66c?w=400&h=300&fit=crop",
  },
];

const reviews = [
  {
    text: "Best tacos I've had in San Francisco! The Golden Gate fish taco is absolutely incredible.",
    name: "Maria S.",
    rating: 5,
  },
  {
    text: "Authentic flavors, fresh ingredients, and amazing service. This is now my go-to taco spot!",
    name: "James L.",
    rating: 5,
  },
  {
    text: "The Mission District carnitas are out of this world. Worth every penny.",
    name: "Sarah K.",
    rating: 5,
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offerDismissed, setOfferDismissed] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-2xl font-bold text-primary">Frisco Tacos</a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#menu" className="text-text hover:text-primary transition-colors">Menu</a>
              <a href="#about" className="text-text hover:text-primary transition-colors">About</a>
              <a href="#locations" className="text-text hover:text-primary transition-colors">Locations</a>
              <a href="#contact" className="text-text hover:text-primary transition-colors">Contact</a>
              <button className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-700 transition-all hover:scale-105">
                Order Now
              </button>
            </div>

            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col p-4 gap-4">
              <a href="#menu" className="text-text hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Menu</a>
              <a href="#about" className="text-text hover:text-primary" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#locations" className="text-text hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Locations</a>
              <a href="#contact" className="text-text hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <button className="bg-primary text-white px-5 py-2 rounded-full font-semibold">
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1920&h=1080&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">San Francisco's Best Tacos Are Here</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Authentic flavors with a Frisco twist. Made fresh daily with local Bay Area ingredients.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-700 transition-all hover:scale-105">
              Order Online
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-secondary transition-all">
              View Menu
            </button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Star className="fill-yellow-400 text-yellow-400" size={20} />
              <span className="font-semibold">4.9 Yelp</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="fill-yellow-400 text-yellow-400" size={20} />
              <span className="font-semibold">Voted Best Tacos in SF</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=500&fit=crop" 
                alt="Chef preparing food"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Years of Tradition</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">Our Story</h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Frisco Tacos brings the authentic taste of Mexican street tacos to the heart of San Francisco. 
                Born from a family recipe passed down through generations, we blend traditional techniques with 
                local California flavors. Every tortilla is hand-made fresh daily, and our proteins are sourced 
                from Bay Area farms.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                We believe in the power of great food to bring people together. Our commitment to quality, 
                authenticity, and community is what makes Frisco Tacos truly special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">Our Signature Tacos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tacos.map((taco, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={taco.image} 
                    alt={taco.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-secondary mb-2">{taco.name}</h3>
                  <p className="text-muted text-sm mb-3">{taco.description}</p>
                  <p className="text-primary font-bold text-2xl">${taco.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">What SF Locals Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-lg text-text mb-4">“{review.text}”</p>
                <p className="font-semibold text-secondary">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="locations" className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden h-80 bg-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&h=400&fit=crop"
                alt="Restaurant location"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">Visit Us</h2>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-xl font-semibold">Frisco Tacos</p>
                  <p className="text-gray-300">1234 Mission Street, San Francisco, CA 94110</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-8">
                <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-xl font-semibold">Hours</p>
                  <p className="text-gray-300">Mon - Sun: 11am - 10pm</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all hover:scale-105">
                  Order for Pickup
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-secondary transition-all">
                  Delivery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      {!offerDismissed && (
        <div className="bg-accent text-white py-4 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-lg font-semibold text-center sm:text-left">
              🌮 First order 15% off! Use code <span className="underline">FRISCO15</span>
            </p>
            <button 
              onClick={() => setOfferDismissed(true)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-secondary text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Frisco Tacos</h3>
              <p className="text-gray-300">Authentic Mexican street tacos with a Frisco twist.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#locations" className="hover:text-primary transition-colors">Locations</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Exclusive Deals</h4>
              <p className="text-gray-300 mb-4">Subscribe to our newsletter for special offers.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-primary"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-700 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>© 2024 Frisco Tacos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}