import { useState, useCallback } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Marketplace } from './components/Marketplace';
import { ArtistDashboard } from './components/ArtistDashboard';
import { About } from './components/About';
import { Checkout } from './components/Checkout';
import { AuthPage } from './components/AuthPage';
import { CartPage } from './components/CartPage';
import { ProductPage } from './components/ProductPage';
import { StartSellingPage } from './components/StartSellingPage';
import { DummyProduct } from './data/dummyProducts';

interface CartDisplayItem {
  id: string;
  product_id: string;
  quantity: number;
  product: DummyProduct | null;
  isDemo: boolean;
}

function AppContent() {
  const [currentView, setCurrentView] = useState('home');
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState<CartDisplayItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [demoCart, setDemoCart] = useState<Map<string, number>>(new Map());

  const cartItemCount = Array.from(demoCart.values()).reduce((sum, qty) => sum + qty, 0);

  const handleNavigate = useCallback((view: string) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentView('marketplace');
  }, []);

  const addToCart = useCallback((productId: string) => {
    setDemoCart((prev) => {
      const next = new Map(prev);
      next.set(productId, (next.get(productId) || 0) + 1);
      return next;
    });
  }, []);

  const updateDemoCart = useCallback((productId: string, quantity: number) => {
    setDemoCart((prev) => {
      const next = new Map(prev);
      if (quantity <= 0) {
        next.delete(productId);
      } else {
        next.set(productId, quantity);
      }
      return next;
    });
  }, []);

  const handleCheckoutFromCart = useCallback(() => {
    setCheckoutOpen(true);
  }, []);

  const handleCheckoutSuccess = useCallback(() => {
    setCheckoutOpen(false);
    setDemoCart(new Map());
    setCurrentView('home');
  }, []);

  const productId = currentView.startsWith('product:') ? currentView.split(':')[1] : null;

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemCount={cartItemCount}
        onNavigate={handleNavigate}
        onSearch={handleSearch}
      />

      {currentView === 'home' && <HomePage onNavigate={handleNavigate} onAddToCart={addToCart} />}
      {currentView === 'marketplace' && <Marketplace onAddToCart={addToCart} onNavigate={handleNavigate} searchQuery={searchQuery} />}
      {currentView === 'artists' && <Marketplace onAddToCart={addToCart} onNavigate={handleNavigate} />}
      {currentView === 'artist-dashboard' && <ArtistDashboard />}
      {currentView === 'about' && <About onNavigate={handleNavigate} />}
      {currentView === 'auth' && <AuthPage onNavigate={handleNavigate} />}
      {currentView === 'cart' && (
        <CartPage
          demoCart={demoCart}
          onUpdateDemoCart={updateDemoCart}
          onNavigate={handleNavigate}
          onCheckout={handleCheckoutFromCart}
        />
      )}
      {productId && (
        <ProductPage
          productId={productId}
          onNavigate={handleNavigate}
          onAddToCart={addToCart}
        />
      )}
      {currentView === 'start-selling' && <StartSellingPage onNavigate={handleNavigate} />}

      <Checkout
        isOpen={checkoutOpen}
        onClose={() => { setCheckoutOpen(false); setCurrentView('cart'); }}
        cartItems={checkoutItems}
        onSuccess={handleCheckoutSuccess}
      />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
