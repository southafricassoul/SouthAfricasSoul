import { X, Plus, Minus, ShoppingCart, Trash2 } from 'lucide-react';
import type { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-[110] backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-[120] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-emerald-700" />
            <h2 className="text-2xl font-bold text-emerald-900">Your Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-stone-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-20 h-20 text-stone-300 mx-auto mb-4" />
              <p className="text-stone-500 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div
                  key={item.id}
                  className="bg-stone-50 rounded-lg p-4 border border-stone-200"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-emerald-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-stone-600">{item.description}</p>
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="p-1 hover:bg-red-100 rounded transition-colors ml-2"
                    >
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 bg-white border border-stone-300 rounded-full flex items-center justify-center hover:bg-stone-100 transition-colors"
                      >
                        <Minus className="w-4 h-4 text-stone-600" />
                      </button>
                      <span className="w-8 text-center font-semibold text-emerald-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-white border border-stone-300 rounded-full flex items-center justify-center hover:bg-stone-100 transition-colors"
                      >
                        <Plus className="w-4 h-4 text-stone-600" />
                      </button>
                    </div>
                    <span className="text-lg font-bold text-amber-700">
                      R{item.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-stone-200 p-6 space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-semibold text-stone-700">Subtotal:</span>
              <span className="text-2xl font-bold text-emerald-900">R{total}</span>
            </div>
            <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              Proceed to Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full bg-stone-200 hover:bg-stone-300 text-stone-700 py-3 rounded-lg font-semibold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
