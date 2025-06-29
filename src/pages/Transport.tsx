
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
  QrCode,
  ArrowUpDown,
  User,
  Phone,
  CreditCard,
  Map
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Transport = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [activeService, setActiveService] = useState<'taxi' | 'sharing'>('taxi');
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);
  const [showBooking, setShowBooking] = useState(false);

  const transportOptions = [
    {
      id: 'eco-taxi',
      name: 'Экотакси',
      type: 'Tesla Model 3',
      description: 'Электромобиль премиум класса',
      price: 250,
      pricePerKm: 18,
      time: '8 мин',
      co2_saved: 2.5,
      green_tokens: 15,
      rating: 4.9,
      icon: Car,
      color: 'from-blue-500 to-cyan-500',
      seats: 4,
      features: ['WiFi', 'Кондиционер', 'USB зарядка']
    },
    {
      id: 'hybrid-taxi',
      name: 'Гибридное такси',
      type: 'Toyota Prius',
      description: 'Комфортный гибридный автомобиль',
      price: 180,
      pricePerKm: 14,
      time: '12 мин',
      co2_saved: 1.8,
      green_tokens: 10,
      rating: 4.7,
      icon: Car,
      color: 'from-green-500 to-emerald-500',
      seats: 4,
      features: ['Кондиционер', 'USB зарядка']
    },
    {
      id: 'eco-van',
      name: 'Экоминивэн',
      type: 'Nissan e-NV200',
      description: 'Электрический минивэн для больших групп',
      price: 320,
      pricePerKm: 22,
      time: '15 мин',
      co2_saved: 3.2,
      green_tokens: 20,
      rating: 4.8,
      icon: Car,
      color: 'from-purple-500 to-blue-500',
      seats: 7,
      features: ['WiFi', 'Кондиционер', 'USB зарядка', 'Детские кресла']
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

  const handleSelectTariff = (tariffId: string) => {
    setSelectedTariff(tariffId);
    if (fromAddress && toAddress) {
      setShowBooking(true);
    } else {
      toast({
        title: "Укажите адреса",
        description: "Пожалуйста, укажите адрес отправления и назначения",
        variant: "destructive"
      });
    }
  };

  const handleBookTaxi = (option: any) => {
    toast({
      title: "Заказ оформлен! 🚗",
      description: `${option.name} прибудет через ${option.time}. Водитель свяжется с вами.`,
    });
    setShowBooking(false);
    setSelectedTariff(null);
  };

  const handleBookSharing = (option: any) => {
    toast({
      title: "Транспорт найден! 🛴",
      description: `${option.name} доступен рядом с вами. QR-код для разблокировки отправлен в приложение.`,
    });
  };

  const swapAddresses = () => {
    const temp = fromAddress;
    setFromAddress(toAddress);
    setToAddress(temp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 sticky top-0 z-50 shadow-lg">
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
                <h1 className="text-xl font-bold">Зелёный транспорт</h1>
                <p className="text-green-100 text-sm">Экотакси и шеринг самокатов</p>
              </div>
            </div>
            <Navigation className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Service Selector */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-1 shadow-xl">
            <Button
              variant={activeService === 'taxi' ? 'default' : 'ghost'}
              onClick={() => setActiveService('taxi')}
              className={`mr-1 ${activeService === 'taxi' 
                ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg' 
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
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
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
            {/* Address Input - Uber-style */}
            <Card className="mb-6 border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                    <Input
                      placeholder="Откуда вы едете?"
                      value={fromAddress}
                      onChange={(e) => setFromAddress(e.target.value)}
                      className="pl-12 pr-12 h-14 text-lg border-gray-200 focus:border-green-500 bg-gray-50"
                    />
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={swapAddresses}
                      className="rounded-full p-2 hover:bg-gray-100"
                    >
                      <ArrowUpDown className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <Input
                      placeholder="Куда вы едете?"
                      value={toAddress}
                      onChange={(e) => setToAddress(e.target.value)}
                      className="pl-12 pr-12 h-14 text-lg border-gray-200 focus:border-green-500 bg-gray-50"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Route Info */}
            {fromAddress && toAddress && (
              <Card className="mb-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Map className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-800">Расстояние: ~12.5 км</p>
                        <p className="text-sm text-gray-600">Время в пути: 18-25 мин</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Оптимальный маршрут</Badge>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Taxi Options - Uber-style */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Выберите тариф</h2>
              {transportOptions.map((option) => {
                const IconComponent = option.icon;
                const isSelected = selectedTariff === option.id;
                return (
                  <Card 
                    key={option.id} 
                    className={`border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${
                      isSelected ? 'ring-2 ring-green-500 bg-green-50/50' : ''
                    }`}
                    onClick={() => handleSelectTariff(option.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${option.color}`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold text-gray-800">{option.name}</h3>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-600 ml-1">{option.rating}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">{option.type} • {option.seats} места</p>
                            <p className="text-xs text-gray-500">{option.description}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="outline" className="text-xs border-green-200 text-green-700">
                                <Leaf className="w-3 h-3 mr-1" />
                                -{option.co2_saved}кг CO₂
                              </Badge>
                              <Badge variant="outline" className="text-xs border-purple-200 text-purple-700">
                                +{option.green_tokens} GREEN
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-800">{option.price}₽</div>
                          <div className="text-xs text-gray-500">{option.pricePerKm}₽/км</div>
                          <div className="text-sm text-blue-600 font-medium">{option.time}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Booking Confirmation */}
            {showBooking && selectedTariff && (
              <Card className="mt-6 border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <User className="w-5 h-5 mr-2" />
                    Подтверждение заказа
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <Input placeholder="Ваш номер телефона" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-4 h-4 text-gray-500" />
                      <select className="flex-1 p-3 border border-gray-200 rounded-lg bg-white">
                        <option>Наличные</option>
                        <option>Банковская карта</option>
                        <option>GREEN токены</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setShowBooking(false)}
                      className="flex-1"
                    >
                      Отмена
                    </Button>
                    <Button 
                      onClick={() => handleBookTaxi(transportOptions.find(o => o.id === selectedTariff))}
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg hover:shadow-xl"
                    >
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {activeService === 'sharing' && (
          <>
            {/* QR Scanner */}
            <Card className="mb-8 border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <QrCode className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Сканируйте QR-код</h3>
                <p className="text-gray-600 mb-4">Наведите камеру на QR-код на транспорте</p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
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
                  <Card key={option.id} className="border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
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
