import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { ArrowRight, CheckCircle, Users, Clock, Shield, TrendingUp, MessageSquare, Star } from 'lucide-react';

// Import images
import heroImage from './assets/oANVy3z0Fnoz-DXSksV_k.jpg';
import businessImage from './assets/cbMJqDfv9g5P-COODK2WE.jpeg';
import techImage from './assets/2uzqVUZK6dn3-uY4WSm-V.png';
import quotationIcon from './assets/ozS2bWaMqwmI-jNrWSKVc.png';
import proposalIcon from './assets/cIEKWzZMQdtZ-DhRXw4wH.png';
import approvalIcon from './assets/k0eYBNX4s9KN-56bxVh7q.png';

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">O</span>
            </div>
            <span className="text-2xl font-bold text-primary">Offertai</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">Benefícios</a>
            <a href="#funcionalidades" className="text-foreground hover:text-primary transition-colors">Funcionalidades</a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">Depoimentos</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            Fale Conosco
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-primary">
                  Plataforma B2B Inteligente
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Cotação inteligente, 
                  <span className="text-primary"> resultado real</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A Offertai conecta compradores e fornecedores em um só lugar, 
                  automatizando cotações e aumentando suas chances de negócio.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Solicite uma demonstração
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Saiba mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Tecnologia em negócios" 
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Plataforma */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Como a Offertai funciona
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simplificamos o processo de cotação B2B em três etapas simples e eficientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src={quotationIcon} alt="Cotação" className="w-8 h-8" />
                </div>
                <CardTitle className="text-primary">1. Cotação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Compradores fazem solicitações de cotação em um único lugar, 
                  centralizando todas as demandas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <img src={proposalIcon} alt="Proposta" className="w-8 h-8" />
                </div>
                <CardTitle className="text-accent">2. Proposta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fornecedores recebem notificações e enviam suas propostas 
                  rapidamente através da plataforma.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <img src={approvalIcon} alt="Aprovação" className="w-8 h-8" />
                </div>
                <CardTitle className="text-green-600">3. Aprovação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Compradores analisam propostas, comparam preços e 
                  aprovam a melhor opção com transparência.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefícios para Compradores */}
            <div>
              <h3 className="text-3xl font-bold text-primary mb-8">
                Benefícios para Compradores
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Centralização das cotações</h4>
                    <p className="text-muted-foreground">
                      Reúna todas as suas demandas em um só lugar. Elimine e-mails e planilhas, 
                      concentre suas solicitações e facilite a vida do time de compras.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Redução de tempo</h4>
                    <p className="text-muted-foreground">
                      Acelere o processo de cotação com automação inteligente. 
                      Menos tempo buscando fornecedores, mais tempo para decisões estratégicas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Histórico e compliance</h4>
                    <p className="text-muted-foreground">
                      Acompanhe todas as cotações em tempo real. Tenha visibilidade de cada etapa 
                      e garanta que as regras do processo sejam seguidas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefícios para Fornecedores */}
            <div>
              <h3 className="text-3xl font-bold text-accent mb-8">
                Benefícios para Fornecedores
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Agilidade na resposta</h4>
                    <p className="text-muted-foreground">
                      Receba notificações instantâneas de novas oportunidades. 
                      Responda rapidamente e aumente suas chances de fechar negócio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Mais chances de venda</h4>
                    <p className="text-muted-foreground">
                      Acesse um marketplace exclusivo de oportunidades B2B. 
                      Conecte-se com compradores qualificados em sua região.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Gestão organizada</h4>
                    <p className="text-muted-foreground">
                      Facilite a vida dos seus parceiros de venda. Distribuidores e representantes 
                      têm uma área exclusiva para enviar propostas e negociar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades do MVP */}
      <section id="funcionalidades" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Funcionalidades do MVP
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tudo que você precisa para automatizar e otimizar seu processo de cotação B2B
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Propostas em tempo real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Receba e envie propostas instantaneamente com notificações automáticas.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Cotação por produto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Organize cotações por categoria de produto para maior eficiência.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Painel de controle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Dashboard completo para compradores e fornecedores acompanharem tudo.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Comunicação integrada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Chat interno para negociação direta entre compradores e fornecedores.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Empresas que já transformaram seus processos de cotação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">JM</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">João Martins</CardTitle>
                    <CardDescription>Gerente de Compras - Indústria ABC</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Reduziu nosso tempo de cotação em 70%. Agora conseguimos comparar 
                  propostas de forma muito mais eficiente e transparente."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">MS</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Maria Silva</CardTitle>
                    <CardDescription>Diretora Comercial - Distribuidora XYZ</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Aumentamos nossas vendas em 45% no primeiro trimestre. 
                  A plataforma nos conecta com clientes que nunca alcançaríamos."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">RC</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Roberto Costa</CardTitle>
                    <CardDescription>CEO - Empresa 123</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Plataforma intuitiva e completa. Nossa equipe se adaptou rapidamente 
                  e os resultados apareceram logo no primeiro mês."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Quer vender mais ou cotar com mais eficiência?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se às empresas que já transformaram seus processos de cotação 
            com a Offertai. Comece hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Fale com nosso time
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Agendar demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">O</span>
                </div>
                <span className="text-2xl font-bold">Offertai</span>
              </div>
              <p className="text-gray-400">
                Conectando compradores e fornecedores com inteligência e eficiência.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demonstração</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Offertai. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg"
          onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}

export default App;
