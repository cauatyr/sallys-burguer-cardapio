
import { useState, useEffect } from 'react';
import { X, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { MenuItem } from '../types/menu';
import { useNavigate } from 'react-router-dom';

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartProps {
  cartItems: MenuItem[];
  onRemoveItem?: (itemId: string) => void;
  children: React.ReactNode;
}

const Cart = ({ cartItems, onRemoveItem, children }: CartProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Salvar itens do carrinho no localStorage sempre que mudarem
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Agrupar itens por ID e contar quantidades
  const groupedItems: CartItem[] = cartItems.reduce((acc: CartItem[], item) => {
    const existingItem = acc.find(groupedItem => groupedItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const totalPrice = groupedItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleRemoveItem = (itemId: string) => {
    if (onRemoveItem) {
      onRemoveItem(itemId);
    }
  };

  const handleContinueOrder = () => {
    setIsOpen(false);
    navigate('/endereco');
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <ShoppingCart size={24} />
            <span>Meu Carrinho</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full mt-6">
          {groupedItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Carrinho vazio</h3>
              <p className="text-gray-500">Adicione alguns itens deliciosos!</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4">
                {groupedItems.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center overflow-hidden">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-2xl">{item.emoji}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-800">{item.name}</h4>
                            <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="p-1 text-red-500 hover:bg-red-100 rounded-full transition-colors duration-200"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-red-600">
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">Qtd: {item.quantity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-red-600">
                    R$ {totalPrice.toFixed(2)}
                  </span>
                </div>
                
                <Button 
                  onClick={handleContinueOrder}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-medium transition-all duration-500 hover:scale-105 transform hover:shadow-2xl hover:shadow-red-500/30 relative overflow-hidden group"
                >
                  <span className="relative z-10">Continuar o Pedido</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
