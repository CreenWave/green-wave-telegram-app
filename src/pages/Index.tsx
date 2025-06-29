
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  BarChart3, 
  ShoppingBag, 
  Store, 
  Car, 
  Trophy,
  Leaf,
  Shield,
  Coins,
  Users,
  Building2,
  Factory,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Target,
  TrendingUp,
  Award,
  Heart,
  Eye,
  Brain,
  Smartphone,
  Wallet,
  QrCode
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'chat',
      title: 'ИИ-помощник для экологии',
      description: 'Персональный помощник для расчета углеродного следа и получения рекомендаций',
      icon: MessageSquare,
      route: '/chat',
      color: 'from-blue-500 to-cyan-500',
      tools: [
        { name: 'Анализ данных', icon: Brain, desc: 'ИИ анализирует ваш образ жизни' },
        { name: 'Расчет CO₂', icon: BarChart3, desc: 'Точный расчет углеродного следа' },
        { name: 'Рекомендации', icon: Target, desc: 'Персональные советы по экологии' },
        { name: 'Мониторинг', icon: Eye, desc: 'Отслеживание прогресса' }
      ]
    },
    {
      id: 'control',
      title: 'Контроль жизнедеятельности',
      description: 'Отслеживание и анализ экологического воздействия в реальном времени',
      icon: BarChart3,
      route: '/control',
      color: 'from-green-500 to-emerald-500',
      tools: [
        { name: 'Дашборд', icon: BarChart3, desc: 'Визуализация всех показателей' },
        { name: 'Трекинг', icon: TrendingUp, desc: 'Отслеживание активности' },
        { name: 'Уведомления', icon: Smartphone, desc: 'Умные напоминания' },
        { name: 'Отчеты', icon: Award, desc: 'Детальная аналитика' }
      ]
    },
    {
      id: 'marketplace',
      title: 'Маркетплейс сертификатов',
      description: 'Торговля карбоновыми сертификатами и зарабатывание GREEN токенов',
      icon: ShoppingBag,
      route: '/marketplace',
      color: 'from-purple-500 to-pink-500',
      tools: [
        { name: 'Торговля', icon: Coins, desc: 'Покупка и продажа сертификатов' },
        { name: 'Кошелек', icon: Wallet, desc: 'Управление GREEN токенами' },
        { name: 'Стейкинг', icon: Shield, desc: 'Получение дохода с токенов' },
        { name: 'NFT награды', icon: Sparkles, desc: 'Эксклюзивные достижения' }
      ]
    },
    {
      id: 'shop',
      title: 'Экомагазин',
      description: 'Покупка экологически чистых товаров от сертифицированных производителей',
      icon: Store,
      route: '/shop',
      color: 'from-orange-500 to-red-500',
      tools: [
        { name: 'Каталог', icon: Store, desc: '30+ эко-товаров' },
        { name: 'Фильтры', icon: Target, desc: 'Поиск по критериям' },
        { name: 'Сертификация', icon: Shield, desc: 'Проверенные производители' },
        { name: 'Доставка', icon: Car, desc: 'Экологичная логистика' }
      ]
    },
    {
      id: 'transport',
      title: 'Зелёный транспорт',
      description: 'Экотакси и шеринг электротранспорта с накоплением GREEN токенов',
      icon: Car,
      route: '/transport',
      color: 'from-teal-500 to-blue-500',
      tools: [
        { name: 'Экотакси', icon: Car, desc: 'Электромобили и гибриды' },
        { name: 'Е-шеринг', icon: Zap, desc: 'Самокаты и велосипеды' },
        { name: 'QR-сканер', icon: QrCode, desc: 'Быстрый доступ к транспорту' },
        { name: 'Карта', icon: Globe, desc: 'Поиск ближайшего транспорта' }
      ]
    },
    {
      id: 'ratings',
      title: 'Рейтинги и награды',
      description: 'Система рейтингов экологических лидеров с NFT наградами',
      icon: Trophy,
      route: '/ratings',
      color: 'from-yellow-500 to-orange-500',
      tools: [
        { name: 'Топ-листы', icon: Trophy, desc: 'Рейтинги по категориям' },
        { name: 'Достижения', icon: Award, desc: 'Система наград' },
        { name: 'NFT токены', icon: Sparkles, desc: 'Уникальные награды' },
        { name: 'Профили', icon: Users, desc: 'Публичные достижения' }
      ]
    }
  ];

  const stats = [
    { 
      title: 'Активных пользователей', 
      value: '12,847', 
      icon: Users, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      title: 'CO₂ сэкономлено (тонн)', 
      value: '2,341', 
      icon: Leaf, 
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    { 
      title: 'GREEN токенов в обороте', 
      value: '847,592', 
      icon: Coins, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    { 
      title: 'Сертификатов выдано', 
      value: '5,629', 
      icon: Shield, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const userTypes = [
    {
      title: 'Частные лица',
      description: 'Контролируйте свой углеродный след и получайте награды за экологичный образ жизни',
      icon: Users,
      features: ['Персональный трекинг', 'GREEN токены', 'Экологические советы', 'Рейтинги'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Компании',
      description: 'Управляйте корпоративной экологической ответственностью и ESG показателями',
      icon: Building2,
      features: ['ESG отчетность', 'Карбоновые сертификаты', 'Корпоративные рейтинги', 'Команда сотрудников'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Производители',
      description: 'Сертифицируйте свою продукцию и торгуйте в нашем экомагазине',
      icon: Factory,
      features: ['Сертификация товаров', 'Продажи в экомагазине', 'Верификация производства', 'Премиум статус'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 text-sm px-4 py-2">
              🌱 Экологическая платформа нового поколения
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Green Wave
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Управляй своим углеродным следом, зарабатывай GREEN токены и участвуй в экономике будущего
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => navigate('/registration')}
              className="bg-white text-green-600 hover:bg-green-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Начать сейчас
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/auth')}
              className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 shadow-xl text-lg px-8 py-4"
            >
              <Heart className="w-5 h-5 mr-2" />
              Войти в систему
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-green-100 text-sm">{stat.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Экосистема сервисов</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный набор инструментов для управления экологическим воздействием и заработка на устойчивом развитии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden cursor-pointer transform hover:scale-105"
                onClick={() => navigate(service.route)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-700 text-sm mb-3">Инструменты:</h4>
                    {service.tools.map((tool, index) => {
                      const ToolIcon = tool.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                            <ToolIcon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-800 text-sm">{tool.name}</p>
                            <p className="text-gray-500 text-xs">{tool.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <Button 
                    className={`w-full mt-6 bg-gradient-to-r ${service.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Открыть сервис
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* User Types Section */}
      <div className="bg-gradient-to-r from-gray-50 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Для кого наша платформа</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Green Wave подходит для частных лиц, компаний и производителей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{type.title}</CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
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
            <h3 className="text-3xl font-bold mb-4">Присоединяйтесь к экологической революции</h3>
            <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
              Начните зарабатывать GREEN токены уже сегодня и получите доступ ко всем инструментам платформы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate('/registration')}
                className="bg-white text-green-600 hover:bg-green-50 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-4"
              >
                <Users className="w-5 h-5 mr-2" />
                Зарегистрироваться
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/chat')}
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 shadow-xl text-lg px-8 py-4"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Попробовать ИИ-помощника
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
