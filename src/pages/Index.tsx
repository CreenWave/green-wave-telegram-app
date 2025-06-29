
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Leaf, 
  MessageSquare, 
  ShoppingBag, 
  Car, 
  TrendingUp, 
  Award,
  Sparkles,
  Globe,
  Users,
  Shield,
  Zap,
  TreePine
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'chat',
      title: 'Персональные советы ИИ',
      description: 'Grok поможет снизить ваш углеродный след',
      icon: MessageSquare,
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      path: '/chat',
      bgPattern: 'bg-gradient-to-br from-emerald-50 to-green-100'
    },
    {
      id: 'control',
      title: 'Полный контроль жизни',
      description: 'Умные уведомления и автоматизация',
      icon: Zap,
      gradient: 'from-blue-400 via-cyan-500 to-teal-600',
      path: '/control',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-cyan-100'
    },
    {
      id: 'marketplace',
      title: 'Маркетплейс сертификатов',
      description: 'Торгуйте карбоновыми сертификатами',
      icon: TrendingUp,
      gradient: 'from-purple-400 via-violet-500 to-indigo-600',
      path: '/marketplace',
      bgPattern: 'bg-gradient-to-br from-purple-50 to-violet-100'
    },
    {
      id: 'shop',
      title: 'Экотовары',
      description: 'Органические и экологичные товары',
      icon: ShoppingBag,
      gradient: 'from-orange-400 via-amber-500 to-yellow-600',
      path: '/shop',
      bgPattern: 'bg-gradient-to-br from-orange-50 to-amber-100'
    },
    {
      id: 'transport',
      title: 'Зелёный транспорт',
      description: 'Экотакси и шеринг самокатов',
      icon: Car,
      gradient: 'from-lime-400 via-green-500 to-emerald-600',
      path: '/transport',
      bgPattern: 'bg-gradient-to-br from-lime-50 to-green-100'
    },
    {
      id: 'ratings',
      title: 'Рейтинги и награды',
      description: 'NFT награды за экологичность',
      icon: Award,
      gradient: 'from-rose-400 via-pink-500 to-purple-600',
      path: '/ratings',
      bgPattern: 'bg-gradient-to-br from-rose-50 to-pink-100'
    }
  ];

  const stats = [
    {
      value: '12,547',
      label: 'Карбоновых сертификатов',
      icon: Award,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      value: '2,847т',
      label: 'CO₂ сэкономлено',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      value: '8,956',
      label: 'Активных пользователей',
      icon: Users,
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      value: '156M',
      label: 'Токенов GREEN',
      icon: Sparkles,
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Modern Header with Glassmorphism */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 right-8 w-16 h-16 bg-green-300/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-4 left-1/3 w-12 h-12 bg-emerald-400/20 rounded-full blur-md animate-pulse delay-300"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <TreePine className="w-16 h-16 text-white animate-leaf drop-shadow-lg" />
              <div className="absolute -inset-2 bg-white/20 rounded-full blur-md"></div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Green Wave
          </h1>
          <p className="text-xl text-green-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            ИИ-помощник для экологичной жизни на блокчейне Polygon
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm">
              🤖 ИИ Grok
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm">
              🔗 Polygon Blockchain
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm">
              💚 GREEN Токены
            </Badge>
            <Badge variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm">
              🏆 NFT Награды
            </Badge>
          </div>

          <Button 
            size="lg"
            className="bg-white text-green-600 hover:bg-green-50 border-0 shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-2xl"
            onClick={() => navigate('/auth')}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Начать путешествие
          </Button>
        </div>
      </header>

      {/* Modern Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} p-4 mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Экосистема сервисов
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Полный набор инструментов для экологичной жизни и заработка на защите планеты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id}
                  className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:-translate-y-3 hover:rotate-1"
                  onClick={() => navigate(service.path)}
                >
                  <div className={`h-32 ${service.bgPattern} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                    <div className="absolute top-4 right-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                  </div>
                  
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-3 group-hover:text-green-600 transition-colors font-bold">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-3xl"></div>
            <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-300/20 rounded-full blur-xl animate-bounce"></div>
            </div>

            <div className="relative z-10 text-center p-12">
              <Shield className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Присоединяйтесь к революции
              </h3>
              <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Зарабатывайте токены GREEN за экологичные действия, торгуйте карбоновыми сертификатами и получайте NFT награды
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-green-600 hover:bg-green-50 border-0 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-2xl"
                  onClick={() => navigate('/auth')}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Регистрация
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-2xl"
                  onClick={() => navigate('/marketplace')}
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Маркетплейс
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
