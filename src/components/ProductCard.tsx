
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Leaf, ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  organic_certified: boolean;
  image_url: string;
  rating: number;
  reviews: number;
  co2_saved: number;
  green_tokens: number;
}

interface ProductCardProps {
  product: Product;
  onPurchase: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPurchase }) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
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
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300'
                  }`} 
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
            onClick={() => onPurchase(product)}
            className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            В корзину
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProductCard;
