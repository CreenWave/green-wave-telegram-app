
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  ShoppingCart, 
  Leaf, 
  Star,
  Heart,
  TreePine,
  Recycle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Shop = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все товары', icon: TreePine },
    { id: 'organic', name: 'Органические продукты', icon: Leaf },
    { id: 'clothing', name: 'Эко-одежда', icon: Recycle },
    { id: 'cosmetics', name: 'Натуральная косметика', icon: Star },
    { id: 'household', name: 'Товары для дома', icon: Heart }
  ];

  const mockProducts = [
    {
      id: '1',
      name: 'Органический мед акации',
      description: 'Натуральный мед от пчеловодов Алтая',
      price: 1250,
      category: 'organic',
      organic_certified: true,
      image_url: '/placeholder.svg',
      rating: 4.8,
      reviews: 156,
      co2_saved: 0.5,
      green_tokens: 25
    },
    {
      id: '2', 
      name: 'Футболка из органического хлопка',
      description: 'Экологичная футболка без химических красителей',
      price: 2890,
      category: 'clothing',
      organic_certified: true,
      image_url: '/placeholder.svg',
      rating: 4.6,
      reviews: 89,
      co2_saved: 1.2,
      green_tokens: 58
    },
    {
      id: '3',
      name: 'Крем для лица с алоэ',
      description: 'Натуральный крем без парабенов и сульфатов',
      price: 1890,
      category: 'cosmetics',
      organic_certified: true,
      image_url: '/placeholder.svg',
      rating: 4.9,
      reviews: 203,
      co2_saved: 0.3,
      green_tokens: 19
    },
    {
      id: '4',
      name: 'Бамбуковая зубная щетка',
      description: 'Экологичная альтернатива пластиковым щеткам',
      price: 450,
      category: 'household',
      organic_certified: false,
      image_url: '/placeholder.svg',
      rating: 4.7,
      reviews: 127,
      co2_saved: 0.8,
      green_tokens: 23
    }
  ];

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePurchase = (product: any) => {
    toast({
      title: "Товар добавлен в корзину! 🛒",
      description: `${product.name} - ${product.price}₽`,
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
                <h1 className="text-2xl font-bold">Экомагазин</h1>
                <p className="text-green-100">Органические и экологичные товары</p>
              </div>
            </div>
            <ShoppingCart className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
              <Filter className="w-4 h-4 mr-2" />
              Фильтры
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white" 
                    : "border-green-200 text-green-700 hover:bg-green-50"
                  }
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 relative overflow-hidden">
                  <img 
                    src={product.image_url} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {product.organic_certified && (
                    <Badge className="absolute top-2 left-2 bg-green-500 text-white">
                      <Leaf className="w-3 h-3 mr-1" />
                      Органик
                    </Badge>
                  )}
                  
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Heart className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors cursor-pointer" />
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl font-bold text-gray-800">
                      {product.price.toLocaleString()}₽
                    </div>
                    <div className="text-sm text-green-600">
                      {product.green_tokens} GREEN
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs text-gray-500">
                      CO₂ экономия: {product.co2_saved}кг
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handlePurchase(product)}
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <TreePine className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Товары не найдены</h3>
            <p className="text-gray-500">Попробуйте изменить поисковый запрос или фильтры</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
