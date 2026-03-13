import { ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (view: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <div className="pt-[72px] min-h-screen bg-white">
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3246665/pexels-photo-3246665.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Art studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-5">
          <div className="max-w-2xl slide-up">
            <p className="text-white/70 text-[13px] font-medium tracking-widest uppercase mb-4">
              Our Mission
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-white font-medium leading-tight mb-4">
              Art That <em className="font-normal">Heals</em>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Artfullness exists at the intersection of creativity and mental health advocacy,
              creating a marketplace where every transaction generates impact.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
        <div className="max-w-3xl mx-auto py-20 lg:py-28">
          <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-8">The Story</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-gray-900 leading-snug mb-8">
            We believe art is one of the most powerful tools for processing, expressing, and healing from mental health challenges.
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Artfullness was born from a simple observation: artists creating work about mental health
              often struggle to find the right audience, while people seeking meaningful, purpose-driven
              art lack a dedicated marketplace. We bridge that gap.
            </p>
            <p>
              Our platform enables artists to list and sell their work while sharing the mental health
              causes close to their hearts. Buyers don't just acquire beautiful art -- they invest in a
              movement. Every sale directly funds both the artist's mission and Artfullness community
              mental health programs.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100" />

        <div className="py-20 lg:py-28">
          <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-12">How It Works</p>

          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <p className="font-serif text-6xl text-gray-200 mb-6">01</p>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Artists List Their Work</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Artists create profiles sharing their story and mental health focus, then list original
                artworks at their chosen price points.
              </p>
            </div>
            <div>
              <p className="font-serif text-6xl text-gray-200 mb-6">02</p>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Collectors Discover & Buy</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Browse curated artworks by medium, cause, or artist. Every piece comes with the story
                behind it and the impact your purchase creates.
              </p>
            </div>
            <div>
              <p className="font-serif text-6xl text-gray-200 mb-6">03</p>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Impact Is Generated</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Artists keep 85% to continue their work. The remaining 15% funds Artfullness mental
                health initiatives, awareness campaigns, and community programs.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100" />

        <div className="grid md:grid-cols-2 gap-0 py-20 lg:py-28">
          <div className="pr-0 md:pr-16">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-8">The Numbers</p>
            <div className="space-y-10">
              <div>
                <p className="font-serif text-5xl font-medium text-gray-900 mb-2">85%</p>
                <p className="text-gray-500">goes directly to the artist for their work and mission</p>
              </div>
              <div>
                <p className="font-serif text-5xl font-medium text-gray-900 mb-2">15%</p>
                <p className="text-gray-500">funds Artfullness mental health community programs</p>
              </div>
              <div>
                <p className="font-serif text-5xl font-medium text-gray-900 mb-2">100%</p>
                <p className="text-gray-500">of proceeds support mental health awareness through art</p>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <img
              src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Artist at work"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
        </div>

        <div className="border-t border-gray-100" />

        <div className="py-20 lg:py-28 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-gray-900 mb-6">
            Join the Movement
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Whether you're an artist wanting to sell your work for a cause, or a collector looking
            for art with meaning -- Artfullness is your home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('start-selling')}
              className="btn-primary"
            >
              <span>Become an Artist</span>
              <ArrowRight size={16} className="ml-2" />
            </button>
            <button
              onClick={() => onNavigate('marketplace')}
              className="btn-outline"
            >
              Explore Artworks
            </button>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <span className="font-serif text-xl font-medium text-gray-900 mb-4 md:mb-0">Artfullness</span>
            <p className="text-xs text-gray-400">Art for Mental Health. Every purchase creates impact.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
