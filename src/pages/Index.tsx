
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, MessageSquare, ShoppingBag, Car, TrendingUp, Award } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'chat',
      title: 'Персональные советы',
      description: 'ИИ помощник для экологичной жизни',
      icon: MessageSquare,
      color: 'from-green-400 to-emerald-500',
      path: '/chat'
    },
    {
      id: 'marketplace',
      title: 'Маркетплейс',
      description: 'Торговля карбоновыми сертификатами',
      icon: TrendingUp,
      color: 'from-emerald-400 to-teal-500',
      path: '/marketplace'
    },
    {
      id: 'shop',
      title: 'Экотовары',
      description: 'Магазин экологичных товаров',
      icon: ShoppingBag,
      color: 'from-teal-400 to-cyan-500',
      path: '/shop'
    },
    {
      id: 'transport',
      title: 'Зелёный транспорт',
      description: 'Экотакси и шеринг',
      icon: Car,
      color: 'from-lime-400 to-green-500',
      path: '/transport'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="eco-gradient h-32 relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 container mx-auto px-4 py-8 text-center">
            <div className="flex items-center justify-center mb-2">
              <Leaf className="w-10 h-10 text-white mr-3 animate-leaf" />
              <h1 className="text-3xl font-bold text-white">Green Wave</h1>
            </div>
            <p className="text-green-100 text-lg">Экологичная жизнь с ИИ помощником</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-green-200 text-green-700">
            🌱 Добро пожаловать в экосистему
          </Badge>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Начните свой путь к устойчивому будущему
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Получайте персональные советы от ИИ, торгуйте карбоновыми сертификатами 
            и зарабатывайте токены GREEN за экологичные действия
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 overflow-hidden"
                onClick={() => navigate(service.path)}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green-100">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">1,247</h3>
            <p className="text-gray-600">Выданных сертификатов</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green-100">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">12.5т</h3>
            <p className="text-gray-600">CO₂ сэкономлено</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green-100">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">856</h3>
            <p className="text-gray-600">Активных пользователей</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Готовы начать?
            </h3>
            <p className="text-gray-600 mb-6">
              Зарегистрируйтесь и получите персональные рекомендации от ИИ
            </p>
            <Button 
              size="lg"
              className="eco-gradient text-white border-0 hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold"
              onClick={() => navigate('/registration')}
            >
              Начать путешествие 🌱
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
