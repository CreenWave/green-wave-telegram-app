
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  Award, 
  Trophy, 
  Medal,
  Crown,
  Star,
  TrendingUp,
  Users,
  Building2,
  Factory,
  Leaf,
  Sparkles
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Ratings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('individuals');
  const [ratings, setRatings] = useState<any[]>([]);

  const mockRatings = {
    individuals: [
      { 
        id: 1, 
        name: 'Александр К.', 
        co2_saved: 127.5, 
        certificates: 45, 
        green_tokens: 2850, 
        nft_reward: '🥇 Золотой лист',
        avatar: '👨‍💼',
        level: 'Эко-чемпион'
      },
      { 
        id: 2, 
        name: 'Мария С.', 
        co2_saved: 98.2, 
        certificates: 38, 
        green_tokens: 2140, 
        nft_reward: '🥈 Серебряный лист',
        avatar: '👩‍💼',
        level: 'Эко-мастер'
      },
      { 
        id: 3, 
        name: 'Дмитрий В.', 
        co2_saved: 89.7, 
        certificates: 32, 
        green_tokens: 1895, 
        nft_reward: '🥉 Бронзовый лист',
        avatar: '👨‍🎓',
        level: 'Эко-эксперт'
      },
      { 
        id: 4, 
        name: 'Елена П.', 
        co2_saved: 76.3, 
        certificates: 28, 
        green_tokens: 1520, 
        nft_reward: null,
        avatar: '👩‍🔬',
        level: 'Эко-активист'
      },
      { 
        id: 5, 
        name: 'Андрей М.', 
        co2_saved: 67.8, 
        certificates: 24, 
        green_tokens: 1356, 
        nft_reward: null,
        avatar: '👨‍💻',
        level: 'Эко-новичок'
      },
      { 
        id: 6, 
        name: 'Ольга Т.', 
        co2_saved: 58.9, 
        certificates: 22, 
        green_tokens: 1178, 
        nft_reward: null,
        avatar: '👩‍🎨',
        level: 'Эко-энтузиаст'
      },
      { 
        id: 7, 
        name: 'Игорь Р.', 
        co2_saved: 45.2, 
        certificates: 18, 
        green_tokens: 904, 
        nft_reward: null,
        avatar: '👨‍🔧',
        level: 'Эко-стартер'
      }
    ],
    companies: [
      { 
        id: 1, 
        name: 'EcoTech Solutions', 
        co2_saved: 2847.5, 
        certificates: 456, 
        green_tokens: 28500, 
        nft_reward: '🏆 Корпоративный чемпион',
        type: 'IT компания',
        employees: 250,
        level: 'Платиновый партнер'
      },
      { 
        id: 2, 
        name: 'Green Manufacturing Co', 
        co2_saved: 2156.8, 
        certificates: 387, 
        green_tokens: 21580, 
        nft_reward: '🏅 Золотой стандарт',
        type: 'Производство',
        employees: 480,
        level: 'Золотой партнер'
      },
      { 
        id: 3, 
        name: 'Sustainable Retail Ltd', 
        co2_saved: 1789.2, 
        certificates: 298, 
        green_tokens: 17900, 
        nft_reward: '🎖️ Серебряный стандарт',
        type: 'Торговля',
        employees: 120,
        level: 'Серебряный партнер'
      },
      { 
        id: 4, 
        name: 'CleanEnergy Corp', 
        co2_saved: 1456.7, 
        certificates: 234, 
        green_tokens: 14567, 
        nft_reward: null,
        type: 'Энергетика',
        employees: 89,
        level: 'Бронзовый партнер'
      },
      { 
        id: 5, 
        name: 'BioBuild LLC', 
        co2_saved: 1234.5, 
        certificates: 189, 
        green_tokens: 12345, 
        nft_reward: null,
        type: 'Строительство',
        employees: 156,
        level: 'Сертифицированный партнер'
      },
      { 
        id: 6, 
        name: 'GreenLogistics', 
        co2_saved: 987.3, 
        certificates: 145, 
        green_tokens: 9873, 
        nft_reward: null,
        type: 'Логистика',
        employees: 78,
        level: 'Партнер'
      }
    ],
    manufacturers: [
      { 
        id: 1, 
        name: 'Organic Cotton Co', 
        co2_saved: 3245.7, 
        certificates: 587, 
        green_tokens: 32450, 
        nft_reward: '🌟 Эко-инноватор',
        category: 'Текстиль',
        products: 156,
        level: 'Премиум производитель'
      },
      { 
        id: 2, 
        name: 'Natural Cosmetics Inc', 
        co2_saved: 1967.3, 
        certificates: 345, 
        green_tokens: 19670, 
        nft_reward: '✨ Зеленый новатор',
        category: 'Косметика',
        products: 89,
        level: 'Сертифицированный производитель'
      },
      { 
        id: 3, 
        name: 'EcoFood Factory', 
        co2_saved: 1678.9, 
        certificates: 298, 
        green_tokens: 16789, 
        nft_reward: '🥬 Органик-лидер',
        category: 'Продукты питания',
        products: 234,
        level: 'Золотой производитель'
      },
      { 
        id: 4, 
        name: 'Bamboo Furniture Ltd', 
        co2_saved: 1234.6, 
        certificates: 189, 
        green_tokens: 12346, 
        nft_reward: null,
        category: 'Мебель',
        products: 67,
        level: 'Серебряный производитель'
      },
      { 
        id: 5, 
        name: 'GreenTech Materials', 
        co2_saved: 987.4, 
        certificates: 156, 
        green_tokens: 9874, 
        nft_reward: null,
        category: 'Материалы',
        products: 123,
        level: 'Бронзовый производитель'
      }
    ]
  };

  useEffect(() => {
    setRatings(mockRatings[activeTab as keyof typeof mockRatings]);
  }, [activeTab]);

  const getRankIcon = (position: number) => {
    switch (position) {
      case 1: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-amber-600" />;
      default: return <Star className="w-5 h-5 text-gray-400" />;
    }
  };

  const getRankBadge = (position: number) => {
    if (position <= 3) {
      const colors = ['from-yellow-400 to-orange-500', 'from-gray-300 to-gray-500', 'from-amber-400 to-orange-600'];
      return `bg-gradient-to-r ${colors[position - 1]} text-white`;
    }
    return 'bg-gray-100 text-gray-700';
  };

  const categories = [
    { id: 'individuals', name: 'Частные лица', icon: Users, count: 8956 },
    { id: 'companies', name: 'Компании', icon: Building2, count: 347 },
    { id: 'manufacturers', name: 'Производители', icon: Factory, count: 156 }
  ];

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
                <h1 className="text-2xl font-bold">Рейтинги и награды</h1>
                <p className="text-green-100">Топ экологических лидеров</p>
              </div>
            </div>
            <Trophy className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{category.count.toLocaleString()}</h3>
                  <p className="text-gray-600">{category.name}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="individuals" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-green-600 data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2" />
              Частные лица
            </TabsTrigger>
            <TabsTrigger value="companies" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white">
              <Building2 className="w-4 h-4 mr-2" />
              Компании
            </TabsTrigger>
            <TabsTrigger value="manufacturers" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <Factory className="w-4 h-4 mr-2" />
              Производители
            </TabsTrigger>
          </TabsList>

          {/* Ratings Content */}
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-4">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Топ-{ratings.length} {category.name.toLowerCase()}
                </h2>
                <p className="text-gray-600">Рейтинг обновляется ежемесячно</p>
              </div>

              {ratings.map((item, index) => (
                <Card 
                  key={item.id} 
                  className={`border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 ${
                    index < 3 ? 'ring-2 ring-yellow-400/50' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* Rank */}
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${getRankBadge(index + 1)}`}>
                          {index + 1 <= 3 ? getRankIcon(index + 1) : index + 1}
                        </div>

                        {/* Info */}
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            {activeTab === 'individuals' && (
                              <span className="text-2xl">{item.avatar}</span>
                            )}
                            <h3 className="font-semibold text-lg text-gray-800">
                              {item.name}
                            </h3>
                            {item.nft_reward && (
                              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                {item.nft_reward}
                              </Badge>
                            )}
                          </div>
                          
                          <div className="text-sm text-gray-600 mb-2">
                            {activeTab === 'individuals' && item.level}
                            {activeTab === 'companies' && `${item.type} • ${item.employees} сотрудников`}
                            {activeTab === 'manufacturers' && `${item.category} • ${item.products} товаров`}
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="flex items-center text-sm">
                              <Leaf className="w-4 h-4 text-green-600 mr-1" />
                              <span className="text-green-700 font-semibold">
                                {item.co2_saved}т CO₂
                              </span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Award className="w-4 h-4 text-blue-600 mr-1" />
                              <span className="text-blue-700">
                                {item.certificates} сертификатов
                              </span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Sparkles className="w-4 h-4 text-purple-600 mr-1" />
                              <span className="text-purple-700">
                                {item.green_tokens.toLocaleString()} GREEN
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action */}
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-green-200 text-green-700 hover:bg-green-50"
                        onClick={() => {
                          toast({
                            title: "Профиль открыт! 👤",
                            description: `Просмотр профиля: ${item.name}`,
                          });
                        }}
                      >
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA Section */}
        <Card className="mt-12 border-0 shadow-2xl bg-gradient-to-r from-emerald-600 to-green-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <CardContent className="relative p-8 text-center">
            <Trophy className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Участвуйте в рейтинге!</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Зарабатывайте карбоновые сертификаты, получайте токены GREEN и поднимайтесь в рейтинге. 
              Топ-3 участника каждый месяц получают эксклюзивные NFT награды!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-green-600 hover:bg-green-50 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate('/chat')}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Начать зарабатывать
              </Button>
              <Button 
                variant="outline"
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
                onClick={() => navigate('/marketplace')}
              >
                <Award className="w-4 h-4 mr-2" />
                Торговать сертификатами
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Ratings;
