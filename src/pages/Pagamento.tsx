import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CreditCard, Smartphone, Banknote, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

interface LocationState {
  cartItems: any[];
  endereco: {
    bairro?: string;
    rua?: string;
    numero?: string;
    complemento?: string;
    frete?: number;
    tipo?: string;
  };
  nomeCliente?: string;
}

const Pagamento = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const state = location.state as LocationState;
  const { cartItems = [], endereco, nomeCliente = '' } = state || {};

  const [formaPagamento, setFormaPagamento] = useState('');
  const [precisaTroco, setPrecisaTroco] = useState(false);
  const [trocoValue, setTrocoValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Agrupar itens por ID e contar quantidades
  const groupedItems = cartItems.reduce((acc: any[], item) => {
    const existingItem = acc.find(groupedItem => groupedItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const subtotal = groupedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const freteValue = endereco?.frete || 0;
  const totalPrice = subtotal + freteValue;

  const handleFormaPagamentoChange = (forma: string) => {
    setFormaPagamento(forma);
    if (forma !== 'dinheiro') {
      setPrecisaTroco(false);
      setTrocoValue('');
    }
  };

  const formatWhatsAppMessage = () => {
    let message = `Nome do cliente: ${nomeCliente || 'Cliente'}\n\n`;
    
    // Endereço
    if (endereco?.tipo === 'restaurante') {
      message += `Local: Rua dos Hamburgers, 456 - Centro - São Paulo\n\n`;
    } else {
      message += `Endereço completo: ${endereco?.rua || ''}, ${endereco?.numero || ''}`;
      if (endereco?.complemento) message += ` - ${endereco.complemento}`;
      message += `\n${endereco?.bairro || ''}\n\n`;
    }
    
    // Produtos
    message += `Produtos solicitados:\n\n`;
    groupedItems.forEach((item) => {
      message += `${item.name} – Quantidade: ${item.quantity} – Valor: R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    // Subtotal e frete
    message += `\nSubtotal: R$ ${subtotal.toFixed(2)}\n`;
    if (freteValue > 0) {
      message += `Frete: R$ ${freteValue.toFixed(2)}\n`;
    }
    message += `Total: R$ ${totalPrice.toFixed(2)}\n\n`;
    
    // Forma de pagamento
    let metodoPagamento = '';
    switch (formaPagamento) {
      case 'cartao':
        metodoPagamento = 'Cartão de Crédito/Débito';
        break;
      case 'pix':
        metodoPagamento = 'PIX';
        break;
      case 'dinheiro':
        metodoPagamento = precisaTroco ? `Dinheiro (Troco para R$ ${trocoValue})` : 'Dinheiro (Não precisa de troco)';
        break;
      default:
        metodoPagamento = formaPagamento;
    }
    
    message += `Forma de pagamento: ${metodoPagamento}`;
    
    return message;
  };

  const detectMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  const detectIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  };

  const openWhatsApp = (message: string) => {
    const phoneNumber = '5517992071425';
    const encodedMessage = encodeURIComponent(message);
    
    // URL para WhatsApp Web (desktop/alguns mobiles)
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // URL para WhatsApp App (mobile)
    const whatsappAppUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    const isMobile = detectMobile();
    const isIOS = detectIOS();
    
    if (isMobile) {
      if (isIOS) {
        // Para iOS: usar window.location.href em vez de window.open
        window.location.href = whatsappAppUrl;
      } else {
        // Para Android: tentar abrir o app primeiro, senão usar web
        try {
          window.open(whatsappAppUrl, '_blank');
        } catch (error) {
          console.log('Fallback para WhatsApp Web:', error);
          window.open(whatsappWebUrl, '_blank');
        }
      }
    } else {
      // Desktop: usar WhatsApp Web
      window.open(whatsappWebUrl, '_blank');
    }
  };

  const handleFinalizarPedido = async () => {
    if (!formaPagamento) {
      toast({
        title: "Selecione uma forma de pagamento",
        description: "Por favor, escolha como deseja pagar.",
        variant: "destructive"
      });
      return;
    }

    if (formaPagamento === 'dinheiro' && precisaTroco && !trocoValue) {
      toast({
        title: "Valor do troco necessário",
        description: "Por favor, informe para quanto precisa de troco.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simular um pequeno delay para mostrar a animação
      await new Promise(resolve => setTimeout(resolve, 1000));

      const message = formatWhatsAppMessage();
      
      // Tentar abrir o WhatsApp
      openWhatsApp(message);

      toast({
        title: "Pedido enviado!",
        description: "Você será redirecionado para o WhatsApp.",
      });

      // Delay adicional para iOS para garantir que o redirecionamento aconteça
      if (detectIOS()) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }

    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      toast({
        title: "Erro ao enviar pedido",
        description: "Tente novamente ou entre em contato conosco.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!state) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Erro: Dados não encontrados</h2>
          <Button onClick={() => navigate('/')}>
            Voltar ao início
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/endereco')}
              className="p-2"
            >
              <ArrowLeft size={24} />
            </Button>
            <div className="flex items-center space-x-2">
              <CreditCard className="text-red-500" size={24} />
              <h1 className="text-xl font-bold text-gray-800">Pagamento</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Resumo do Pedido */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Resumo do Pedido</h2>
            
            <div className="space-y-4 mb-6">
              {groupedItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">{item.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Qtd: {item.quantity}</span>
                      <span className="font-bold text-red-600">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Subtotal:</span>
                <span className="text-lg font-bold text-gray-600">
                  R$ {subtotal.toFixed(2)}
                </span>
              </div>
              {freteValue > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Frete:</span>
                  <span className="text-lg font-bold text-gray-600">
                    R$ {freteValue.toFixed(2)}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center border-t pt-2">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-2xl font-bold text-red-600">
                  R$ {totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Endereço */}
            <div className="mt-6 p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                {endereco?.tipo === 'restaurante' ? 'Local:' : 'Endereço de Entrega:'}
              </h3>
              {endereco?.tipo === 'restaurante' ? (
                <p className="text-gray-700">
                  Rua dos Hamburgers, 456 - Centro - São Paulo
                </p>
              ) : (
                <p className="text-gray-700">
                  {endereco?.rua}, {endereco?.numero}
                  {endereco?.complemento && ` - ${endereco.complemento}`}
                  <br />
                  {endereco?.bairro}
                </p>
              )}
            </div>
          </div>

          {/* Forma de Pagamento */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Forma de Pagamento</h2>

            <div className="space-y-4">
              {/* Cartão */}
              <button
                onClick={() => handleFormaPagamentoChange('cartao')}
                className={`w-full p-4 rounded-lg border-2 transition-all ${
                  formaPagamento === 'cartao'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <CreditCard className="text-gray-600" size={24} />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800">Cartão de Crédito/Débito</h3>
                    <p className="text-sm text-gray-600">Pague na entrega</p>
                  </div>
                </div>
              </button>

              {/* PIX */}
              <button
                onClick={() => handleFormaPagamentoChange('pix')}
                className={`w-full p-4 rounded-lg border-2 transition-all ${
                  formaPagamento === 'pix'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Smartphone className="text-gray-600" size={24} />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800">PIX</h3>
                    <p className="text-sm text-gray-600">Pagamento instantâneo</p>
                  </div>
                </div>
              </button>

              {/* Dinheiro */}
              <button
                onClick={() => handleFormaPagamentoChange('dinheiro')}
                className={`w-full p-4 rounded-lg border-2 transition-all ${
                  formaPagamento === 'dinheiro'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Banknote className="text-gray-600" size={24} />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800">Dinheiro</h3>
                    <p className="text-sm text-gray-600">Pague na entrega</p>
                  </div>
                </div>
              </button>

              {/* Opções do Dinheiro */}
              {formaPagamento === 'dinheiro' && (
                <div className="ml-4 space-y-4 animate-fade-in">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="precisaTroco"
                      checked={precisaTroco}
                      onChange={(e) => setPrecisaTroco(e.target.checked)}
                      className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <Label htmlFor="precisaTroco" className="text-gray-700">
                      Preciso de troco
                    </Label>
                  </div>

                  {precisaTroco && (
                    <div className="space-y-2">
                      <Label htmlFor="troco" className="text-sm font-medium text-gray-700">
                        Troco para quanto?
                      </Label>
                      <Input
                        id="troco"
                        type="number"
                        step="0.01"
                        value={trocoValue}
                        onChange={(e) => setTrocoValue(e.target.value)}
                        placeholder="Ex: 50.00"
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-8">
              <Button
                onClick={handleFinalizarPedido}
                disabled={isLoading}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-medium disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando pedido...
                  </>
                ) : (
                  'Finalizar Pedido'
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagamento;
