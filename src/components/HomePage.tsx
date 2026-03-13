import { ArrowRight } from 'lucide-react';
import { DUMMY_PRODUCTS, FEATURED_COLLECTIONS } from '../data/dummyProducts';
import { ProductCard } from './ProductCard';

interface HomePageProps {
  onNavigate: (view: string) => void;
  onAddToCart: (productId: string) => void;
}

export function HomePage({ onNavigate, onAddToCart }: HomePageProps) {
  const featuredProducts = DUMMY_PRODUCTS.slice(0, 8);
  const newArrivals = DUMMY_PRODUCTS.slice(8, 12);

  return (
    <div className="pt-[72px]">
      <div className="relative h-[90vh] min-h-[600px] max-h-[960px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Abstract art"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-[1440px] mx-auto w-full px-5 lg:px-10 pb-16 lg:pb-24">
            <div className="max-w-2xl slide-up">
              <p className="text-white/60 text-[13px] font-medium tracking-[0.2em] uppercase mb-5">
                Art for Mental Health
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.05] mb-6">
                Where Art<br />
                Meets <em className="font-normal italic">Healing</em>
              </h1>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Discover original artworks from artists dedicated to mental health.
                Every purchase funds the movement.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('marketplace')}
                  className="inline-flex items-center space-x-3 bg-white text-black px-10 py-4 text-[13px] font-medium tracking-wide hover:bg-gray-100 transition-colors"
                >
                  <span>Explore Artworks</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center border border-white/30 text-white px-10 py-4 text-[13px] font-medium tracking-wide hover:bg-white/10 transition-colors"
                >
                  Our Mission
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111] text-white">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
            <div>
              <p className="font-serif text-4xl lg:text-5xl font-medium mb-3">85%</p>
              <p className="text-white/40 text-sm leading-relaxed">
                of every sale goes directly to the artist
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl lg:text-5xl font-medium mb-3">15%</p>
              <p className="text-white/40 text-sm leading-relaxed">
                funds Artfullness mental health programs
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl lg:text-5xl font-medium mb-3">100%</p>
              <p className="text-white/40 text-sm leading-relaxed">
                purpose-driven. Every purchase creates impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-16 lg:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] text-gray-400 uppercase tracking-[0.2em] mb-3">Featured</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-gray-900">
              Selected Works
            </h2>
          </div>
          <button
            onClick={() => onNavigate('marketplace')}
            className="hidden md:inline-flex items-center space-x-2 text-[13px] font-medium text-gray-500 hover:text-black transition-colors"
          >
            <span>View All</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onClick={() => onNavigate(`product:${product.id}`)}
            />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <button
            onClick={() => onNavigate('marketplace')}
            className="btn-outline text-sm"
          >
            View All Artworks
          </button>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-16 lg:py-24">
          <div className="mb-10">
            <p className="text-[11px] text-gray-400 uppercase tracking-[0.2em] mb-3">Curated</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-gray-900">
              Collections
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED_COLLECTIONS.map((collection) => (
              <button
                key={collection.title}
                onClick={() => onNavigate('marketplace')}
                className="group text-left"
              >
                <div className="art-card aspect-[4/3] mb-4">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-serif text-2xl text-white font-medium mb-1">
                      {collection.title}
                    </h3>
                    <p className="text-white/70 text-sm">{collection.subtitle}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-16 lg:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] text-gray-400 uppercase tracking-[0.2em] mb-3">Just Added</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-gray-900">
              New Arrivals
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onClick={() => onNavigate(`product:${product.id}`)}
            />
          ))}
        </div>
      </div>

      <div className="bg-[#111]">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl text-white font-medium mb-6">
              Become an Artfullness Artist
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Share your art with the world while supporting mental health causes you care about.
              Keep 85% of every sale, and join a community of artists making a difference.
            </p>
            <button
              onClick={() => onNavigate('start-selling')}
              className="inline-flex items-center space-x-3 bg-white text-black px-10 py-4 text-[13px] font-medium tracking-wide hover:bg-gray-100 transition-colors"
            >
              <span>Start Selling</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <span className="font-serif text-xl font-medium text-gray-900">Artfullness</span>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Art for Mental Health.<br />Every purchase creates impact.
              </p>
            </div>
            <div>
              <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-3">Explore</p>
              <div className="space-y-2">
                <button onClick={() => onNavigate('marketplace')} className="block text-sm text-gray-600 hover:text-black">Artworks</button>
                <button onClick={() => onNavigate('marketplace')} className="block text-sm text-gray-600 hover:text-black">Artists</button>
                <button onClick={() => onNavigate('marketplace')} className="block text-sm text-gray-600 hover:text-black">Collections</button>
              </div>
            </div>
            <div>
              <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-3">About</p>
              <div className="space-y-2">
                <button onClick={() => onNavigate('about')} className="block text-sm text-gray-600 hover:text-black">Our Mission</button>
                <button onClick={() => onNavigate('about')} className="block text-sm text-gray-600 hover:text-black">How It Works</button>
                <button onClick={() => onNavigate('about')} className="block text-sm text-gray-600 hover:text-black">Impact</button>
              </div>
            </div>
            <div>
              <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-3">Sell</p>
              <div className="space-y-2">
                <button onClick={() => onNavigate('start-selling')} className="block text-sm text-gray-600 hover:text-black">Become an Artist</button>
                <button onClick={() => onNavigate('artist-dashboard')} className="block text-sm text-gray-600 hover:text-black">Artist Dashboard</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 text-xs text-gray-400 text-center">
            Artfullness. All proceeds support mental health through art.
          </div>
        </div>
      </footer>
    </div>
  );
}
