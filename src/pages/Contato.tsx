
import { ArrowLeft, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contato = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const phoneNumber = '5517992647180';
    const message = encodeURIComponent('Olá! Gostaria de fazer um pedido no Sally\'s Burguer.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5517992647180';
  };

  return (
    <div className="min-h-screen bg-red-50">
      {/* Header com botão de voltar */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:bg-red-100"
            >
              <ArrowLeft size={20} />
              <span>Voltar</span>
            </Button>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-white font-bold text-lg">🍔</div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Sally's Burguer</h1>
                <p className="text-xs text-gray-500">Bar & Lanchonete</p>
              </div>
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-600">
              Estamos aqui para atender você da melhor forma!
            </p>
          </div>

          {/* Cards de contato */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* WhatsApp */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleWhatsAppClick}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-white" size={32} />
                </div>
                <CardTitle className="text-green-600">WhatsApp</CardTitle>
                <CardDescription>Fale conosco pelo WhatsApp</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-gray-800 mb-2">
                  (17) 99264-7180
                </p>
                <p className="text-gray-600 mb-4">
                  Faça seu pedido ou tire suas dúvidas
                </p>
                <Button className="bg-green-500 hover:bg-green-600 w-full">
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Telefone */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handlePhoneClick}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={32} />
                </div>
                <CardTitle className="text-blue-600">Telefone</CardTitle>
                <CardDescription>Ligue diretamente para nós</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-gray-800 mb-2">
                  (17) 99264-7180
                </p>
                <p className="text-gray-600 mb-4">
                  Atendimento direto e rápido
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 w-full">
                  Ligar Agora
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Informações adicionais */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Endereço */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-red-600">Nosso Endereço</CardTitle>
                    <CardDescription>Venha nos visitar!</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 font-medium mb-2">
                  Rua dos Hamburgers, 456
                </p>
                <p className="text-gray-600 mb-2">
                  Centro - São Paulo - SP
                </p>
                <p className="text-gray-600">
                  CEP: 01234-567
                </p>
              </CardContent>
            </Card>

            {/* Horário de funcionamento */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-orange-600">Horário de Funcionamento</CardTitle>
                    <CardDescription>Quando estamos abertos</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Segunda a Domingo:</span>
                    <span className="font-medium">18:00 às 02:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery:</span>
                    <span className="font-medium">18:00 às 01:30</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to action final */}
          <div className="mt-12 text-center bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Pronto para fazer seu pedido?
            </h2>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco pelo WhatsApp e garante já o seu hambúrguer!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 flex items-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Fazer Pedido via WhatsApp</span>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="border-red-500 text-red-500 hover:bg-red-50"
              >
                Ver Cardápio
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contato;
