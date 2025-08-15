import { useState, useCallback, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';

const Endereco = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [tipoServico, setTipoServico] = useState('');
  const [nomeCliente, setNomeCliente] = useState('');
  const [formData, setFormData] = useState({
    bairro: '',
    rua: '',
    numero: '',
    complemento: ''
  });
  const [freteValue, setFreteValue] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Client-side mounting detection to prevent SSR/Chrome mobile bugs
  useEffect(() => {
    console.log('[DeliverySelector] Component mounted on client');
    setIsClient(true);
  }, []);

  // Memoize cart items to prevent unnecessary re-renders
  const cartItems = useMemo(() => {
    // Safe localStorage access with client-side check
    if (typeof window === 'undefined' || !isClient) {
      console.log('[DeliverySelector] localStorage not available, returning empty cart');
      return [];
    }
    
    try {
      const items = localStorage?.getItem?.('cartItems') || '[]';
      console.log('[DeliverySelector] Cart items loaded from localStorage');
      return JSON.parse(items);
    } catch (error) {
      console.error('[DeliverySelector] Error parsing cart items:', error);
      return [];
    }
  }, [isClient]);

  const bairrosComFrete = useMemo(() => [
    { name: 'Marthy', value: 7 },
    { name: 'Eliseu', value: 4 },
    { name: 'Minalice', value: 5 },
    { name: 'Nitra', value: 0 },
    { name: 'Kartryn', value: 9 }
  ], []);

  // Optimize input change handler with useCallback
  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (field === 'bairro') {
      const bairroSelecionado = bairrosComFrete.find(b => b.name === value);
      setFreteValue(bairroSelecionado ? bairroSelecionado.value : 0);
    }
  }, [bairrosComFrete]);

  // Optimize tipo servico handler
  const handleTipoServicoChange = useCallback((value: string) => {
    console.log('[DeliverySelector] Tipo serviço selecionado:', value);
    setTipoServico(value);
    // Reset form data when changing service type to prevent conflicts
    if (value === 'restaurante') {
      console.log('[DeliverySelector] Resetando dados do formulário para restaurante');
      setFormData({
        bairro: '',
        rua: '',
        numero: '',
        complemento: ''
      });
      setFreteValue(0);
    }
  }, []);

  // Optimize submit handler
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nomeCliente.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, informe seu nome.",
        variant: "destructive"
      });
      return;
    }

    if (!tipoServico) {
      toast({
        title: "Selecione uma opção",
        description: "Por favor, escolha entre comer no restaurante ou delivery.",
        variant: "destructive"
      });
      return;
    }

    if (tipoServico === 'delivery' && (!formData.bairro || !formData.rua || !formData.numero)) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha bairro, rua e número.",
        variant: "destructive"
      });
      return;
    }

    const enderecoData = tipoServico === 'restaurante' 
      ? { tipo: 'restaurante', endereco: 'Rua dos Hamburgers, 456 - Centro - São Paulo', frete: 0 }
      : { tipo: 'delivery', ...formData, frete: freteValue };

    console.log('Dados do endereço:', enderecoData);
    console.log('Nome do cliente:', nomeCliente);
    
    // Use setTimeout to prevent blocking the UI on navigation
    setTimeout(() => {
      navigate('/pagamento', {
        state: {
          cartItems,
          endereco: enderecoData,
          nomeCliente: nomeCliente.trim()
        }
      });
    }, 100);
  }, [tipoServico, formData, freteValue, cartItems, navigate, toast, nomeCliente]);

  // Optimize back navigation
  const handleBackNavigation = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={handleBackNavigation}
              className="p-2 hover:scale-105 transition-transform duration-200"
              type="button"
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
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
          <div className="mb-8 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Dados do Pedido</h2>
            <p className="text-gray-600">Informe seus dados e como você vai consumir</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Nome do Cliente */}
            <div className="space-y-2">
              <Label htmlFor="nomeCliente" className="text-sm font-medium text-gray-700">
                Nome do Cliente *
              </Label>
              <Input
                id="nomeCliente"
                type="text"
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
                placeholder="Digite seu nome completo"
                className="w-full transition-all duration-200 focus:scale-[1.02] border-2 focus:border-red-500"
                autoComplete="name"
              />
            </div>

            {/* Tipo de Serviço */}
            <div className="space-y-2">
              <Label htmlFor="tipoServico" className="text-sm font-medium text-gray-700">
                Tipo de Serviço *
              </Label>
              <Select value={tipoServico} onValueChange={handleTipoServicoChange}>
                <SelectTrigger className="w-full transition-all duration-200 focus:scale-[1.02] border-2 focus:border-red-500">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="restaurante">🍽️ Comer no Restaurante</SelectItem>
                  <SelectItem value="delivery">🚗 Delivery</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Endereço do Restaurante */}
            {tipoServico === 'restaurante' && (
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200 animate-fade-in">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center">
                  <span className="mr-2">🏪</span>
                  Endereço do Restaurante
                </h3>
                <p className="text-red-700 font-medium">
                  Rua dos Hamburgers, 456<br />
                  Centro - São Paulo, SP
                </p>
                <p className="text-red-600 text-sm mt-2">
                  📞 (11) 8888-8888
                </p>
              </div>
            )}

            {/* Formulário de Delivery */}
            <div style={{ display: isClient && tipoServico === 'delivery' ? 'block' : 'none' }}>
              {isClient && tipoServico === 'delivery' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="bairro" className="text-sm font-medium text-gray-700">
                        Bairro *
                      </Label>
                      <Select 
                        value={formData.bairro} 
                        onValueChange={(value) => {
                          console.log('[DeliverySelector] Bairro selecionado:', value);
                          handleInputChange('bairro', value);
                        }}
                      >
                        <SelectTrigger className="w-full transition-all duration-200 focus:scale-[1.02] border-2 focus:border-red-500">
                          <SelectValue placeholder="Selecione seu bairro" />
                        </SelectTrigger>
                        <SelectContent>
                          {bairrosComFrete.map((bairro) => (
                            <SelectItem key={bairro.name} value={bairro.name}>
                              {bairro.name} - {bairro.value === 0 ? 'Frete Grátis' : `R$ ${bairro.value},00`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {formData.bairro && (
                        <div className="text-sm text-green-600 font-medium">
                          Frete: {freteValue === 0 ? 'Grátis!' : `R$ ${freteValue},00`}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rua" className="text-sm font-medium text-gray-700">
                        Rua *
                      </Label>
                      <Input
                        id="rua"
                        type="text"
                        value={formData.rua}
                        onChange={(e) => {
                          console.log('[DeliverySelector] Rua alterada:', e.target.value);
                          handleInputChange('rua', e.target.value);
                        }}
                        placeholder="Ex: Rua das Flores"
                        className="w-full transition-all duration-200 focus:scale-[1.02] border-2 focus:border-red-500"
                        autoComplete="street-address"
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
                        onChange={(e) => {
                          console.log('[DeliverySelector] Número alterado:', e.target.value);
                          handleInputChange('numero', e.target.value);
                        }}
                        placeholder="Ex: 123"
                        className="w-full transition-all duration-200 focus:scale-[1.02] border-2 focus:border-red-500"
                        autoComplete="off"
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
                        onChange={(e) => {
                          console.log('[DeliverySelector] Complemento alterado:', e.target.value);
                          handleInputChange('complemento', e.target.value);
                        }}
                        placeholder="Ex: Apto 101, Bloco A"
                        className="w-full transition-all duration-200 focus:scale-[1.02] border-2 focus:border-red-500"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-6">
              <Button 
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-medium transition-all duration-200 hover:scale-[1.02] transform hover:shadow-lg hover:shadow-red-500/20"
                disabled={!tipoServico || !nomeCliente.trim()}
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
