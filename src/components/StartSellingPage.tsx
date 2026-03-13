import { ArrowRight, Palette, DollarSign, Heart, Users, Star, Shield } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface StartSellingPageProps {
  onNavigate: (view: string) => void;
}

export function StartSellingPage({ onNavigate }: StartSellingPageProps) {
  const { user } = useAuth();

  return (
    <div className="pt-[72px] min-h-screen bg-white">
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Artist studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-[1440px] mx-auto w-full px-5 lg:px-10 pb-16 lg:pb-24">
            <div className="max-w-2xl slide-up">
              <p className="text-white/60 text-[13px] font-medium tracking-[0.2em] uppercase mb-5">
                For Artists
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.05] mb-6">
                Share Your Art.<br />
                Fund Your <em className="font-normal italic">Mission</em>.
              </h1>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Join Artfullness and sell your work to collectors who care about mental health.
                Keep 85% of every sale.
              </p>
              <button
                onClick={() => onNavigate(user ? 'artist-dashboard' : 'auth')}
                className="inline-flex items-center space-x-3 bg-white text-black px-10 py-4 text-[13px] font-medium tracking-wide hover:bg-gray-100 transition-colors"
              >
                <span>{user ? 'Go to Dashboard' : 'Get Started'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[11px] text-gray-400 uppercase tracking-[0.2em] mb-4">Why Artfullness</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-gray-900 leading-snug mb-6">
            A marketplace built for artists who create with purpose
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Artfullness connects your art with collectors who value creativity and mental health advocacy.
            We handle the platform so you can focus on what matters most -- your art and your mission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-gray-200">
              <DollarSign size={24} className="text-gray-700" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Keep 85% of Sales</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              One of the highest artist payouts in the industry. Your art, your earnings.
              The remaining 15% funds mental health programs.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-gray-200">
              <Heart size={24} className="text-gray-700" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Create Impact</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Every sale directly funds mental health initiatives. Your art doesn't just
              decorate walls -- it changes lives.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-gray-200">
              <Users size={24} className="text-gray-700" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Reach Collectors</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Connect with a community of buyers seeking meaningful, purpose-driven art
              from passionate creators.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <p className="text-[11px] text-gray-400 uppercase tracking-[0.2em] mb-12">How It Works</p>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <p className="font-serif text-6xl text-gray-200 mb-6">01</p>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Create Your Profile</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Sign up, share your story, and tell us about the mental health cause close
                to your heart. Your profile becomes part of every artwork you list.
              </p>
            </div>
            <div>
              <p className="font-serif text-6xl text-gray-200 mb-6">02</p>
              <h3 className="text-lg font-medium text-gray-900 mb-3">List Your Artworks</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Upload your pieces, set your prices, and add descriptions. Include details about
                medium, dimensions, and the story behind each work.
              </p>
            </div>
            <div>
              <p className="font-serif text-6xl text-gray-200 mb-6">03</p>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Sell & Make Impact</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                When collectors purchase your art, you receive 85% directly. Track your
                sales, manage listings, and watch your impact grow from your dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Art creation"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div>
            <p className="text-[11px] text-gray-400 uppercase tracking-[0.2em] mb-4">Artist Benefits</p>
            <h2 className="font-serif text-3xl font-medium text-gray-900 mb-8">
              Everything you need to sell your art
            </h2>
            <div className="space-y-6">
              {[
                { icon: Palette, title: 'Your Own Storefront', desc: 'A dedicated artist profile showcasing your work, story, and mission.' },
                { icon: Shield, title: 'Secure Transactions', desc: 'We handle payments and protect both artists and buyers.' },
                { icon: Star, title: 'Curated Exposure', desc: 'Featured collections and editorial highlights bring new eyes to your work.' },
                { icon: DollarSign, title: 'Real-Time Dashboard', desc: 'Track sales, manage inventory, and monitor your impact in one place.' },
              ].map((benefit) => (
                <div key={benefit.title} className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 border border-gray-200 flex items-center justify-center">
                    <benefit.icon size={18} className="text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111]">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl text-white font-medium mb-6">
              Ready to start selling?
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Join a growing community of artists using their creativity to support mental health.
              {user ? ' Head to your dashboard to set up your artist profile.' : ' Create your free account to get started.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onNavigate(user ? 'artist-dashboard' : 'auth')}
                className="inline-flex items-center space-x-3 bg-white text-black px-10 py-4 text-[13px] font-medium tracking-wide hover:bg-gray-100 transition-colors"
              >
                <span>{user ? 'Open Dashboard' : 'Create Account'}</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center border border-white/30 text-white px-10 py-4 text-[13px] font-medium tracking-wide hover:bg-white/10 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
