import { X, Heart, ShoppingBag } from 'lucide-react';
import { DummyProduct } from '../data/dummyProducts';

interface ProductDetailModalProps {
  product: DummyProduct;
  onClose: () => void;
  onAddToCart: (productId: string) => void;
}

export function ProductDetailModal({ product, onClose, onAddToCart }: ProductDetailModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div
        className="bg-white w-full max-w-[1100px] relative my-8 fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 text-gray-400 hover:text-black transition-colors"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="bg-gray-50 aspect-square md:aspect-auto md:min-h-[600px] relative">
            <img
              src={product.image_url}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 lg:p-12 flex flex-col">
            <div className="flex-1">
              <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-3">
                {product.category}
              </p>

              <h2 className="font-serif text-3xl lg:text-4xl font-medium text-gray-900 mb-2">
                {product.title}
              </h2>

              <p className="text-base text-gray-500 mb-6">
                by {product.artist_name}
              </p>

              <p className="text-2xl font-medium text-gray-900 mb-8">
                ${product.price.toLocaleString()}
              </p>

              <div className="space-y-6 mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8 py-6 border-t border-b border-gray-100">
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Medium</p>
                    <p className="text-sm text-gray-900">{product.medium}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Dimensions</p>
                    <p className="text-sm text-gray-900">{product.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Availability</p>
                    <p className="text-sm text-gray-900">
                      {product.stock_quantity === 1 ? 'Unique piece' : `Edition of ${product.stock_quantity}`}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Cause</p>
                    <p className="text-sm text-gray-900">{product.mental_health_focus}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-5">
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-2">About the Artist</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{product.artist_story}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  onAddToCart(product.id);
                  onClose();
                }}
                className="w-full bg-black text-white py-4 text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingBag size={18} />
                <span>Add to Cart</span>
              </button>
              <button className="w-full border border-gray-200 text-gray-700 py-4 text-sm font-medium tracking-wide hover:border-gray-400 transition-colors flex items-center justify-center space-x-2">
                <Heart size={18} />
                <span>Save to Wishlist</span>
              </button>
              <p className="text-[11px] text-gray-400 text-center pt-2">
                15% of this purchase funds Artfullness mental health initiatives
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
