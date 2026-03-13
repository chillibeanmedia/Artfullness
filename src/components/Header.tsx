import { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  cartItemCount: number;
  onNavigate: (view: string) => void;
  onSearch: (query: string) => void;
}

export function Header({ cartItemCount, onNavigate, onSearch }: HeaderProps) {
  const { user, signOut } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    onNavigate('marketplace');
    setSearchOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]' : 'bg-white'
        }`}
      >
        <div className="border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
            <div className="flex items-center justify-between h-16 lg:h-[72px]">
              <div className="flex items-center space-x-8">
                <button
                  className="lg:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>

                <button onClick={() => onNavigate('home')} className="flex items-center">
                  <span className="font-serif text-2xl lg:text-[28px] font-semibold tracking-tight text-black">
                    Artfullness
                  </span>
                </button>

                <nav className="hidden lg:flex items-center space-x-8">
                  <button
                    onClick={() => onNavigate('marketplace')}
                    className="text-[13px] font-medium tracking-wide text-gray-500 hover:text-black transition-colors uppercase"
                  >
                    Artworks
                  </button>
                  <button
                    onClick={() => onNavigate('about')}
                    className="text-[13px] font-medium tracking-wide text-gray-500 hover:text-black transition-colors uppercase"
                  >
                    Our Mission
                  </button>
                  <button
                    onClick={() => onNavigate(user ? 'artist-dashboard' : 'start-selling')}
                    className="text-[13px] font-medium tracking-wide text-gray-500 hover:text-black transition-colors uppercase"
                  >
                    Sell Art
                  </button>
                </nav>
              </div>

              <div className="flex items-center space-x-5">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Search size={20} strokeWidth={1.5} />
                </button>

                {user ? (
                  <div className="relative">
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <User size={20} strokeWidth={1.5} />
                    </button>

                    {showUserMenu && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />
                        <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 z-50 shadow-xl">
                          <div className="px-5 py-4 border-b border-gray-100">
                            <p className="text-[11px] text-gray-400 uppercase tracking-wider">Account</p>
                            <p className="text-sm font-medium text-gray-900 mt-1 truncate">{user.email}</p>
                          </div>
                          <div className="py-1">
                            <button
                              onClick={() => { onNavigate('artist-dashboard'); setShowUserMenu(false); }}
                              className="w-full text-left px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              Artist Dashboard
                            </button>
                            <button
                              onClick={() => { onNavigate('orders'); setShowUserMenu(false); }}
                              className="w-full text-left px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              Orders
                            </button>
                          </div>
                          <div className="border-t border-gray-100 py-1">
                            <button
                              onClick={() => { signOut(); setShowUserMenu(false); }}
                              className="w-full text-left px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              Sign Out
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => onNavigate('auth')}
                    className="text-[13px] font-medium text-gray-600 hover:text-black transition-colors"
                  >
                    Log In
                  </button>
                )}

                <button onClick={() => onNavigate('cart')} className="relative text-gray-600 hover:text-black transition-colors">
                  <ShoppingBag size={20} strokeWidth={1.5} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-semibold rounded-full h-[18px] w-[18px] flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {searchOpen && (
          <div className="border-b border-gray-100 bg-white">
            <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-4">
              <form onSubmit={handleSearch} className="flex items-center space-x-4">
                <Search size={18} className="text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search artworks, artists, or styles..."
                  className="flex-1 text-base outline-none bg-transparent placeholder:text-gray-400"
                  autoFocus
                />
                <button type="button" onClick={() => setSearchOpen(false)} className="text-gray-400 hover:text-black">
                  <X size={18} />
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/30" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 left-0 bottom-0 w-[300px] bg-white z-50 pt-20 px-8">
            <nav className="space-y-0">
              {[
                { key: 'home', label: 'Home' },
                { key: 'marketplace', label: 'Artworks' },
                { key: 'about', label: 'Our Mission' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => { onNavigate(item.key); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-4 text-lg font-medium text-gray-900 border-b border-gray-100"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => { onNavigate(user ? 'artist-dashboard' : 'start-selling'); setMobileMenuOpen(false); }}
                className="block w-full text-left py-4 text-lg font-medium text-gray-900 border-b border-gray-100"
              >
                Sell Art
              </button>
              {!user && (
                <button
                  onClick={() => { onNavigate('auth'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-4 text-lg font-medium text-gray-900 border-b border-gray-100"
                >
                  Log In / Sign Up
                </button>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
