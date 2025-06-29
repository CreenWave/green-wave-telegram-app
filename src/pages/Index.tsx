
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  ShoppingBag, 
  Car, 
  BarChart3, 
  Store, 
  Settings,
  Sparkles,
  Leaf,
  Users,
  TrendingUp,
  Globe,
  Award,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Bot,
  Recycle,
  TreePine,
  Factory,
  Database,
  Smartphone,
  CreditCard
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'chat',
      title: 'ИИ-помощник',
      description: 'Персональный ИИ-консультант по экологии',
      icon: Bot,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      route: '/chat'
    },
    {
      id: 'control',
      title: 'Контроль жизни',
      description: 'Мониторинг экологического следа',
      icon: Settings,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      route: '/control'
    },
    {
      id: 'marketplace',
      title: 'Маркетплейс',
      description: 'Торговля карбоновыми сертификатами',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      route: '/marketplace'
    },
    {
      id: 'shop',
      title: 'Экомагазин',
      description: 'Органические и экологичные товары',
      icon: ShoppingBag,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      route: '/shop'
    },
    {
      id: 'transport',
      title: 'Зелёный транспорт',
      description: 'Экотакси и шеринг самокатов',
      icon: Car,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      route: '/transport'
    },
    {
      id: 'ratings',
      title: 'Рейтинги',
      description: 'Топ экологических лидеров',
      icon: Award,
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50',
      route: '/ratings'
    }
  ];

  const ecosystemTools = [
    {
      name: 'Blockchain Integration',
      description: 'Polygon network для NFT и токенов',
      icon: Database,
      color: 'text-purple-600'
    },
    {
      name: 'Mobile App',
      description: 'Мобильное приложение для iOS/Android',
      icon: Smartphone,
      color: 'text-blue-600'
    },
    {
      name: 'Payment Gateway',
      description: 'Интеграция с платежными системами',
      icon: CreditCard,
      color: 'text-green-600'
    },
    {
      name: 'IoT Sensors',
      description: 'Датчики для мониторинга выбросов',
      icon: Zap,
      color: 'text-orange-600'
    },
    {
      name: 'Smart Contracts',
      description: 'Автоматизация сделок с сертификатами',
      icon: Shield,
      color: 'text-indigo-600'
    },
    {
      name: 'AI Analytics',
      description: 'Машинное обучение для прогнозов',
      icon: Bot,
      color: 'text-pink-600'
    }
  ];

  const features = [
    {
      title: 'ИИ-консультант',
      description: 'Персональные рекомендации от искусственного интеллекта',
      icon: Bot
    },
    {
      title: 'Карбоновые сертификаты',
      description: 'Зарабатывайте и торгуйте сертификатами CO₂',
      icon: Leaf
    },
    {
      title: 'GREEN токены',
      description: 'Внутренняя валюта экосистемы',
      icon: Sparkles
    },
    {
      title: 'NFT награды',
      description: 'Уникальные цифровые награды за достижения',
      icon: Award
    }
  ];

  const stats = [
    { value: '50,000+', label: 'Активных пользователей', icon: Users },
    { value: '15,680', label: 'Тонн CO₂ сохранено', icon: TreePine },
    { value: '2,340', label: 'Сертификатов выдано', icon: Award },
    { value: '89%', label: 'Удовлетворенность', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-green-600/20"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mr-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">
                Green Wave
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Революционная экосистема для устойчивого будущего.<br />
              ИИ-помощник, карбоновые сертификаты и зелёные технологии в одном месте.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={() => navigate('/auth')}
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                size="lg"
              >
                Начать путешествие
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => navigate('/chat')}
                className="border-green-300 text-green-700 hover:bg-green-50 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                Попробовать ИИ
                <Bot className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <IconComponent className="w-8 h-8 text-green-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Экосистема сервисов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Шесть интегрированных решений для комплексного подхода к экологии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="group border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => navigate(service.route)}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-800 group-hover:text-green-700 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-green-600 font-semibold">
                    Открыть сервис
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Ecosystem Tools Visualization */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Инструменты экосистемы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 hover:bg-white transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                    <IconComponent className={`w-6 h-6 ${tool.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{tool.name}</h4>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ключевые возможности
            </h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Современные технологии для максимального экологического эффекта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-green-100">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-emerald-600 to-green-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <CardContent className="relative p-12 text-center">
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Присоединяйтесь к зелёной революции
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Станьте частью глобального движения за устойчивое будущее. 
              Зарабатывайте на экологических действиях и получайте эксклюзивные награды.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/auth')}
                className="bg-white text-green-600 hover:bg-green-50 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
                size="lg"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Создать аккаунт
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/marketplace')}
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-4 text-lg"
                size="lg"
              >
                <Globe className="w-5 h-5 mr-2" />
                Изучить маркетплейс
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
