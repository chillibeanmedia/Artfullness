import { useState } from 'react';
import { X, Lock } from 'lucide-react';
import { DummyProduct } from '../data/dummyProducts';

interface CartDisplayItem {
  id: string;
  product_id: string;
  quantity: number;
  product: DummyProduct | null;
  isDemo: boolean;
}

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartDisplayItem[];
  onSuccess: () => void;
}

export function Checkout({ isOpen, onClose, cartItems, onSuccess }: CheckoutProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.quantity,
    0
  );
  const shipping = subtotal > 2000 ? 0 : 25;
  const commission = subtotal * 0.15;
  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    onSuccess();
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-[960px] relative my-8 fade-in">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors z-10"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <div className="grid md:grid-cols-[1fr,380px]">
          <div className="p-8 lg:p-10">
            <h2 className="font-serif text-2xl font-medium text-gray-900 mb-8">Checkout</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-4">Contact</p>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    placeholder="Full name"
                    className="w-full px-4 py-3 text-sm border border-gray-200 outline-none focus:border-black transition-colors"
                    required
                  />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="Email address"
                    className="w-full px-4 py-3 text-sm border border-gray-200 outline-none focus:border-black transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-4">Shipping Address</p>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => updateField('address', e.target.value)}
                    placeholder="Street address"
                    className="w-full px-4 py-3 text-sm border border-gray-200 outline-none focus:border-black transition-colors"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => updateField('city', e.target.value)}
                      placeholder="City"
                      className="w-full px-4 py-3 text-sm border border-gray-200 outline-none focus:border-black transition-colors"
                      required
                    />
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => updateField('state', e.target.value)}
                      placeholder="State"
                      className="w-full px-4 py-3 text-sm border border-gray-200 outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => updateField('zipCode', e.target.value)}
                      placeholder="ZIP code"
                      className="w-full px-4 py-3 text-sm border border-gray-200 outline-none focus:border-black transition-colors"
                      required
                    />
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => updateField('country', e.target.value)}
                      placeholder="Country"
                      className="w-full px-4 py-3 text-sm border border-gray-200 outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-4 text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <Lock size={14} />
                <span>{loading ? 'Processing...' : `Place Order -- $${total.toLocaleString()}`}</span>
              </button>

              <p className="text-[11px] text-gray-400 text-center">
                Secure checkout. Your information is encrypted and protected.
              </p>
            </form>
          </div>

          <div className="bg-gray-50 p-8 lg:p-10 border-l border-gray-100">
            <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-6">Order Summary</p>

            <div className="space-y-5 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex space-x-3">
                  <div className="w-16 h-20 bg-gray-200 flex-shrink-0">
                    {item.product?.image_url && (
                      <img
                        src={item.product.image_url}
                        alt={item.product.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.product?.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.product?.artist_name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${((item.product?.price || 0) * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3 py-5 border-t border-gray-200">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-gray-900">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="text-gray-900">{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              <div className="flex justify-between text-sm pt-3 border-t border-gray-200">
                <span className="font-medium text-gray-900">Total</span>
                <span className="font-medium text-gray-900">${total.toLocaleString()}</span>
              </div>
            </div>

            <div className="bg-white p-4 mt-6 border border-gray-200">
              <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wider mb-1">
                Your Impact
              </p>
              <p className="text-sm text-gray-600">
                ${commission.toLocaleString()} of this purchase funds Artfullness mental health initiatives
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
