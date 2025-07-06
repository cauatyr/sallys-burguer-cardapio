
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Sobre = () => {
  const navigate = useNavigate();

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
            <div className="w-20"></div> {/* Espaçamento para centralizar o logo */}
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossa História
            </h1>
            <p className="text-xl text-gray-600">
              Uma jornada de superação, paixão e sabor
            </p>
          </div>

          {/* História */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            {/* Início humilde */}
            <section>
              <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
                <span className="mr-3">🌱</span>
                O Início Humilde (2018)
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Tudo começou em 2018 quando Sally, uma jovem mãe solteira de 28 anos, perdeu seu emprego em uma grande empresa. 
                Com apenas R$ 500 no bolso e a necessidade de sustentar sua filha pequena, ela decidiu apostar em seu maior talento: 
                fazer os melhores hambúrgueres que seus amigos já haviam provado.
              </p>
            </section>

            {/* Os primeiros desafios */}
            <section>
              <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
                <span className="mr-3">⚡</span>
                Os Primeiros Desafios (2019)
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Sally começou vendendo hambúrgueres na porta de casa, usando uma pequena chapa emprestada. 
                Durante os primeiros meses, enfrentou noites sem dormir, tentativas frustradas e até mesmo quem duvidava de seu potencial. 
                Mas sua determinação era maior que qualquer obstáculo. Cada "não" se transformava em combustível para continuar.
              </p>
            </section>

            {/* O ponto de virada */}
            <section>
              <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
                <span className="mr-3">🚀</span>
                O Ponto de Virada (2020)
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Em plena pandemia, quando muitos negócios fecharam, Sally viu uma oportunidade. Adaptou-se rapidamente ao delivery, 
                criou receitas exclusivas e conquistou o coração dos moradores do bairro. Seu hambúrguer especial "Sally's Classic" 
                se tornou famoso nas redes sociais, e as encomendas começaram a chegar de toda a cidade.
              </p>
            </section>

            {/* O crescimento */}
            <section>
              <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
                <span className="mr-3">🏆</span>
                O Crescimento (2021-2022)
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Com o sucesso crescente, Sally conseguiu alugar um pequeno ponto comercial. Contratou seus primeiros funcionários - 
                pessoas que, assim como ela, precisavam de uma oportunidade. Criou um ambiente familiar onde cada cliente se sentia em casa. 
                As filas na porta se tornaram comuns, e as avaliações 5 estrelas se multiplicaram.
              </p>
            </section>

            {/* O presente */}
            <section>
              <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
                <span className="mr-3">❤️</span>
                Hoje (2024)
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Hoje, o Sally's Burguer é mais que um restaurante - é um símbolo de superação e qualidade. 
                Sally emprega 15 pessoas, muitas delas mães solo como ela foi um dia. Cada hambúrguer é preparado com o mesmo amor 
                e dedicação do primeiro dia. Nossa missão permanece a mesma: servir não apenas comida deliciosa, 
                mas momentos especiais que aquecem o coração.
              </p>
            </section>

            {/* Missão e valores */}
            <section className="bg-red-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
                Nossos Valores
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">💪</div>
                  <h3 className="font-bold mb-2">Superação</h3>
                  <p className="text-gray-600">Transformamos desafios em oportunidades</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
                  <h3 className="font-bold mb-2">Família</h3>
                  <p className="text-gray-600">Cada cliente é parte da nossa família</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🌟</div>
                  <h3 className="font-bold mb-2">Qualidade</h3>
                  <p className="text-gray-600">Ingredientes frescos e receitas especiais</p>
                </div>
              </div>
            </section>

            {/* Call to action */}
            <section className="text-center bg-red-600 text-white p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">
                Faça Parte da Nossa História! 
              </h2>
              <p className="text-lg mb-6">
                Cada pedido que você faz nos ajuda a continuar crescendo e realizando sonhos.
              </p>
              <Button 
                onClick={() => navigate('/')} 
                className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3"
              >
                Ver Cardápio
              </Button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sobre;
