
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, TrendingUp, Award, Filter, ShoppingCart, Wallet } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Certificate {
  id: string;
  seller: string;
  co2Amount: number;
  price: number;
  type: string;
  date: string;
  verified: boolean;
}

const Marketplace = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [certificates] = useState<Certificate[]>([
    {
      id: '1',
      seller: 'EcoTech Corp',
      co2Amount: 100,
      price: 1000,
      type: 'Солнечная энергия',
      date: '2024-06-15',
      verified: true
    },
    {
      id: '2',
      seller: 'Green Solutions',
      co2Amount: 50,
      price: 450,
      type: 'Переработка отходов',
      date: '2024-06-20',
      verified: true
    },
    {
      id: '3',
      seller: 'Forest Guard',
      co2Amount: 200,
      price: 1800,
      type: 'Лесовосстановление',
      date: '2024-06-25',
      verified: true
    },
    {
      id: '4',
      seller: 'Wind Power Ltd',
      co2Amount: 75,
      price: 650,
      type: 'Ветровая энергия',
      date: '2024-06-28',
      verified: true
    },
    {
      id: '5',
      seller: 'Urban Gardens',
      co2Amount: 25,
      price: 200,
      type: 'Городское озеленение',
      date: '2024-06-30',
      verified: true
    },
    {
      id: '6',
      seller: 'Clean Transport',
      co2Amount: 150,
      price: 1200,
      type: 'Электротранспорт',
      date: '2024-07-01',
      verified: true
    }
  ]);

  const [filteredCertificates, setFilteredCertificates] = useState(certificates);
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('price');
  const [greenTokens, setGreenTokens] = useState(2500);

  const handleBuy = (certificate: Certificate) => {
    const tokensNeeded = Math.round(certificate.co2Amount / 5); // 1 token per 5 kg CO2
    
    if (greenTokens >= tokensNeeded) {
      setGreenTokens(prev => prev - tokensNeeded);
      toast({
        title: "Сертификат куплен! 🎉",
        description: `Потрачено ${tokensNeeded} токенов GREEN`,
      });
    } else {
      toast({
        title: "Недостаточно токенов",
        description: `Нужно ${tokensNeeded} токенов GREEN`,
        variant: "destructive"
      });
    }
  };

  const handleSell = () => {
    toast({
      title: "Функция в разработке",
      description: "Скоро вы сможете продавать свои сертификаты",
    });
  };

  const certificateTypes = ['all', 'Солнечная энергия', 'Ветровая энергия', 'Лесовосстановление', 'Переработка отходов', 'Городское озеленение', 'Электротранспорт'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white border-b border-green-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/')} className="text-green-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Главная
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Маркетплейс сертификатов</h1>
                <p className="text-gray-600">Торговля карбоновыми сертификатами</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-green-200 text-green-700 px-3 py-1">
                <Wallet className="w-4 h-4 mr-2" />
                {greenTokens} GREEN
              </Badge>
              <Button onClick={handleSell} className="eco-gradient text-white border-0">
                Продать сертификат
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">2,847</h3>
              <p className="text-gray-600 text-sm">Активных сертификатов</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">124.5т</h3>
              <p className="text-gray-600 text-sm">CO₂ в торговле</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">$8.50</h3>
              <p className="text-gray-600 text-sm">Средняя цена за кг</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">156k</h3>
              <p className="text-gray-600 text-sm">Токенов в обороте</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="w-5 h-5 mr-2 text-green-600" />
              Фильтры
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Тип сертификата</label>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все типы</SelectItem>
                    {certificateTypes.slice(1).map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Сортировка</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Сортировать по" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">По цене</SelectItem>
                    <SelectItem value="co2">По объему CO₂</SelectItem>
                    <SelectItem value="date">По дате</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Поиск по продавцу</label>
                <Input placeholder="Найти продавца..." />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <Card key={cert.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                      {cert.co2Amount} кг CO₂
                    </CardTitle>
                    <CardDescription className="font-medium text-gray-700">
                      {cert.seller}
                    </CardDescription>
                  </div>
                  {cert.verified && (
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      ✓ Проверен
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Тип:</span>
                  <Badge variant="outline" className="text-xs">
                    {cert.type}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Дата выпуска:</span>
                  <span className="text-sm font-medium">{new Date(cert.date).toLocaleDateString('ru-RU')}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Цена:</span>
                  <span className="text-lg font-bold text-green-600">${cert.price}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Токены GREEN:</span>
                  <span className="text-sm font-medium text-green-600">
                    {Math.round(cert.co2Amount / 5)} токенов
                  </span>
                </div>
                
                <Button 
                  className="w-full eco-gradient text-white border-0 hover:shadow-lg transition-all duration-300"
                  onClick={() => handleBuy(cert)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Купить сертификат
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
