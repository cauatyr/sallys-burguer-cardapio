import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const Endereco = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    bairro: '',
    rua: '',
    numero: '',
    complemento: ''
  });

  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.bairro || !formData.rua || !formData.numero) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha bairro, rua e número.",
        variant: "destructive"
      });
      return;
    }

    console.log('Dados do endereço:', formData);
    
    navigate('/pagamento', {
      state: {
        cartItems,
        endereco: formData
      }
    });
  };

  return (
    <div className="min-h-screen bg-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="p-2 hover:scale-105 transition-transform duration-300"
            >
              <ArrowLeft size={24} />
            </Button>
            <div className="flex items-center space-x-2">
              <MapPin className="text-red-500" size={24} />
              <h1 className="text-xl font-bold text-gray-800">Endereço de Entrega</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-8 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Onde você está?</h2>
            <p className="text-gray-600">Precisamos do seu endereço para entregar seu pedido</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="bairro" className="text-sm font-medium text-gray-700">
                  Bairro *
                </Label>
                <Input
                  id="bairro"
                  type="text"
                  value={formData.bairro}
                  onChange={(e) => handleInputChange('bairro', e.target.value)}
                  placeholder="Ex: Centro"
                  className="w-full transition-all duration-300 focus:scale-105"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rua" className="text-sm font-medium text-gray-700">
                  Rua *
                </Label>
                <Input
                  id="rua"
                  type="text"
                  value={formData.rua}
                  onChange={(e) => handleInputChange('rua', e.target.value)}
                  placeholder="Ex: Rua das Flores"
                  className="w-full transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="numero" className="text-sm font-medium text-gray-700">
                  Número *
                </Label>
                <Input
                  id="numero"
                  type="text"
                  value={formData.numero}
                  onChange={(e) => handleInputChange('numero', e.target.value)}
                  placeholder="Ex: 123"
                  className="w-full transition-all duration-300 focus:scale-105"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="complemento" className="text-sm font-medium text-gray-700">
                  Complemento
                </Label>
                <Input
                  id="complemento"
                  type="text"
                  value={formData.complemento}
                  onChange={(e) => handleInputChange('complemento', e.target.value)}
                  placeholder="Ex: Apto 101, Bloco A"
                  className="w-full transition-all duration-300 focus:scale-105"
                />
              </div>
            </div>

            <div className="pt-6">
              <Button 
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-medium transition-all duration-300 hover:scale-105 transform"
              >
                Seguir para a forma de pagamento
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Endereco;
