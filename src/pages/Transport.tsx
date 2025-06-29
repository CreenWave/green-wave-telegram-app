
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Car, 
  MapPin, 
  Clock, 
  Zap,
  Bike,
  Navigation,
  Leaf,
  Star,
  QrCode
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Transport = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [activeService, setActiveService] = useState<'taxi' | 'sharing'>('taxi');

  const transportOptions = [
    {
      id: 'eco-taxi',
      name: 'Экотакси',
      type: 'Электромобиль Tesla Model 3',
      price: 250,
      time: '8 мин',
      co2_saved: 2.5,
      green_tokens: 15,
      rating: 4.9,
      icon: Car,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'hybrid-taxi',
      name: 'Гибридное такси',
      type: 'Toyota Prius Hybrid',
      price: 180,
      time: '12 мин',
      co2_saved: 1.8,
      green_tokens: 10,
      rating: 4.7,
      icon: Car,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const sharingOptions = [
    {
      id: 'e-scooter',
      name: 'Электросамокат',
      type: 'Xiaomi Mi Electric Scooter',
      price: 25,
      time: '15 мин',
      co2_saved: 1.2,
      green_tokens: 8,
      distance: '0.8 км',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'e-bike',
      name: 'Электровелосипед',
      type: 'Giant E-Bike',
      price: 35,
      time: '12 мин',
      co2_saved: 1.5,
      green_tokens: 12,
      distance: '1.2 км',
      icon: Bike,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const handleBookTaxi = (option: any) => {
    toast({
      title: "Такси заказано! 🚗",
      description: `${option.name} прибудет через ${option.time}`,
    });
  };

  const handleBookSharing = (option: any) => {
    toast({
      title: "Транспорт найден! 🛴",
      description: `${option.name} доступен рядом с вами`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')} 
                className="text-white hover:bg-white/20 mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Назад
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Зелёный транспорт</h1>
                <p className="text-green-100">Экотакси и шеринг самокатов</p>
              </div>
            </div>
            <Navigation className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Service Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
            <Button
              variant={activeService === 'taxi' ? 'default' : 'ghost'}
              onClick={() => setActiveService('taxi')}
              className={`mr-2 ${activeService === 'taxi' 
                ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white' 
                : 'text-gray-600 hover:bg-green-50'
              }`}
            >
              <Car className="w-4 h-4 mr-2" />
              Экотакси
            </Button>
            <Button
              variant={activeService === 'sharing' ? 'default' : 'ghost'}
              onClick={() => setActiveService('sharing')}
              className={activeService === 'sharing' 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                : 'text-gray-600 hover:bg-purple-50'
              }
            >
              <Bike className="w-4 h-4 mr-2" />
              Шеринг
            </Button>
          </div>
        </div>

        {activeService === 'taxi' && (
          <>
            {/* Address Input */}
            <Card className="mb-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <MapPin className="w-5 h-5 mr-2" />
                  Маршрут
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="from">Откуда</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="from"
                      placeholder="Введите адрес отправления"
                      value={fromAddress}
                      onChange={(e) => setFromAddress(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="to">Куда</Label>
                  <div className="relative">
                    <Navigation className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="to"
                      placeholder="Введите адрес назначения"
                      value={toAddress}
                      onChange={(e) => setToAddress(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Taxi Options */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Доступные варианты</h2>
              {transportOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <Card key={option.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-2xl bg-gradient-to-r ${option.color}`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-gray-800">{option.name}</h3>
                            <p className="text-gray-600">{option.type}</p>
                            <div className="flex items-center mt-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600 ml-1">{option.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center space-x-4 mb-2">
                            <div className="text-center">
                              <div className="text-lg font-bold text-gray-800">{option.price}₽</div>
                              <div className="text-xs text-gray-500">Цена</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">{option.time}</div>
                              <div className="text-xs text-gray-500">Подача</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3 mb-3">
                            <Badge variant="outline" className="border-green-200 text-green-700">
                              <Leaf className="w-3 h-3 mr-1" />
                              -{option.co2_saved}кг CO₂
                            </Badge>
                            <Badge variant="outline" className="border-purple-200 text-purple-700">
                              +{option.green_tokens} GREEN
                            </Badge>
                          </div>
                          
                          <Button 
                            onClick={() => handleBookTaxi(option)}
                            className={`bg-gradient-to-r ${option.color} text-white hover:shadow-lg transition-all duration-300`}
                          >
                            Заказать
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </>
        )}

        {activeService === 'sharing' && (
          <>
            {/* QR Scanner */}
            <Card className="mb-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <QrCode className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Сканируйте QR-код</h3>
                <p className="text-gray-600 mb-4">Наведите камеру на QR-код на транспорте</p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  Открыть сканер
                </Button>
              </CardContent>
            </Card>

            {/* Sharing Options */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Транспорт рядом</h2>
              {sharingOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <Card key={option.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-2xl bg-gradient-to-r ${option.color}`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-gray-800">{option.name}</h3>
                            <p className="text-gray-600">{option.type}</p>
                            <div className="text-sm text-gray-500 mt-1">
                              Расстояние: {option.distance}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center space-x-4 mb-2">
                            <div className="text-center">
                              <div className="text-lg font-bold text-gray-800">{option.price}₽</div>
                              <div className="text-xs text-gray-500">За {option.time}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3 mb-3">
                            <Badge variant="outline" className="border-green-200 text-green-700">
                              <Leaf className="w-3 h-3 mr-1" />
                              -{option.co2_saved}кг CO₂
                            </Badge>
                            <Badge variant="outline" className="border-purple-200 text-purple-700">
                              +{option.green_tokens} GREEN
                            </Badge>
                          </div>
                          
                          <Button 
                            onClick={() => handleBookSharing(option)}
                            className={`bg-gradient-to-r ${option.color} text-white hover:shadow-lg transition-all duration-300`}
                          >
                            Арендовать
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Transport;
