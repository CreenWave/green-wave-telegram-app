
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Zap, 
  Lightbulb, 
  Thermometer, 
  Recycle, 
  MapPin,
  Bell,
  Shield,
  Smartphone,
  Home,
  Car,
  Droplets,
  Wind
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Control = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    smartLighting: false,
    temperature: false,
    waterUsage: false,
    wasteReminders: false,
    routeOptimization: false,
    energyMonitoring: false,
    airQuality: false,
    notifications: false
  });

  const controlOptions = [
    {
      id: 'smartLighting',
      title: 'Умное освещение',
      description: 'Автоматическое выключение света и оптимизация яркости',
      icon: Lightbulb,
      gradient: 'from-yellow-400 to-orange-500',
      co2_saved: 1.2,
      green_tokens: 8,
      devices: ['Philips Hue', 'Yeelight', 'Xiaomi']
    },
    {
      id: 'temperature',
      title: 'Контроль климата',
      description: 'Оптимизация температуры и влажности в доме',
      icon: Thermometer,
      gradient: 'from-blue-400 to-cyan-500',
      co2_saved: 2.5,
      green_tokens: 15,
      devices: ['Nest', 'Tado', 'Ecobee']
    },
    {
      id: 'waterUsage',
      title: 'Мониторинг воды',
      description: 'Отслеживание потребления воды и утечек',
      icon: Droplets,
      gradient: 'from-blue-500 to-teal-500',
      co2_saved: 0.8,
      green_tokens: 5,
      devices: ['Smart Water Meter', 'Leak Detector']
    },
    {
      id: 'wasteReminders',
      title: 'Напоминания о сортировке',
      description: 'Уведомления о правильной сортировке мусора',
      icon: Recycle,
      gradient: 'from-green-400 to-emerald-500',
      co2_saved: 1.5,
      green_tokens: 10,
      devices: ['Календарь вывоза', 'Сканер упаковки']
    },
    {
      id: 'routeOptimization',
      title: 'Оптимизация маршрутов',
      description: 'Предложения экологичных маршрутов передвижения',
      icon: MapPin,
      gradient: 'from-purple-400 to-pink-500',
      co2_saved: 3.2,
      green_tokens: 20,
      devices: ['GPS', 'Транспортные приложения']
    },
    {
      id: 'energyMonitoring',
      title: 'Мониторинг энергии',
      description: 'Отслеживание потребления электроэнергии',
      icon: Zap,
      gradient: 'from-amber-400 to-orange-500',
      co2_saved: 2.8,
      green_tokens: 18,
      devices: ['Smart Meter', 'Energy Monitor']
    },
    {
      id: 'airQuality',
      title: 'Качество воздуха',
      description: 'Мониторинг и улучшение качества воздуха',
      icon: Wind,
      gradient: 'from-cyan-400 to-blue-500',
      co2_saved: 1.0,
      green_tokens: 6,
      devices: ['Air Purifier', 'Air Quality Sensor']
    },
    {
      id: 'notifications',
      title: 'Умные уведомления',
      description: 'Персонализированные экологические советы',
      icon: Bell,
      gradient: 'from-rose-400 to-pink-500',
      co2_saved: 0.5,
      green_tokens: 3,
      devices: ['Smartphone', 'Smart Watch']
    }
  ];

  const handleToggle = (settingId: string) => {
    const newSettings = {
      ...settings,
      [settingId]: !settings[settingId as keyof typeof settings]
    };
    setSettings(newSettings);

    const option = controlOptions.find(opt => opt.id === settingId);
    if (option) {
      if (newSettings[settingId as keyof typeof settings]) {
        toast({
          title: `${option.title} включен! ✅`,
          description: `Экономия: ${option.co2_saved}кг CO₂ в месяц`,
        });
      } else {
        toast({
          title: `${option.title} выключен`,
          description: "Настройка деактивирована",
          variant: "destructive"
        });
      }
    }
  };

  const totalCO2Saved = controlOptions.reduce((total, option) => {
    return total + (settings[option.id as keyof typeof settings] ? option.co2_saved : 0);
  }, 0);

  const totalGreenTokens = controlOptions.reduce((total, option) => {
    return total + (settings[option.id as keyof typeof settings] ? option.green_tokens : 0);
  }, 0);

  const activeControls = Object.values(settings).filter(Boolean).length;

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
                <h1 className="text-2xl font-bold">Полный контроль жизни</h1>
                <p className="text-green-100">Умные уведомления и автоматизация</p>
              </div>
            </div>
            <Shield className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{activeControls}</h3>
              <p className="text-gray-600">Активных контролей</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{totalCO2Saved.toFixed(1)}кг</h3>
              <p className="text-gray-600">CO₂ экономия/месяц</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{totalGreenTokens}</h3>
              <p className="text-gray-600">GREEN токенов/месяц</p>
            </CardContent>
          </Card>
        </div>

        {/* Privacy Notice */}
        <Card className="mb-8 border-0 shadow-xl bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Безопасность и конфиденциальность</h3>
                <p className="text-blue-700 text-sm mb-3">
                  Предоставляя согласие, вы разрешаете Green Wave отправлять персонализированные 
                  экологические уведомления и подключаться к вашим умным устройствам. 
                  Все данные шифруются с использованием AES-256.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-blue-300 text-blue-700">
                    🔒 Шифрование AES-256
                  </Badge>
                  <Badge variant="outline" className="border-blue-300 text-blue-700">
                    📱 Безопасные уведомления
                  </Badge>
                  <Badge variant="outline" className="border-blue-300 text-blue-700">
                    🏠 Локальная обработка
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Control Options */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Настройки автоматизации</h2>
          
          {controlOptions.map((option) => {
            const IconComponent = option.icon;
            const isActive = settings[option.id as keyof typeof settings];
            
            return (
              <Card 
                key={option.id} 
                className={`border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 ${
                  isActive ? 'ring-2 ring-green-500 bg-green-50/50' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${option.gradient} ${isActive ? 'scale-110 shadow-lg' : ''} transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-800 mb-1">
                          {option.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {option.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {option.devices.map((device, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600">
                              {device}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-sm text-green-600">
                            -{option.co2_saved}кг CO₂/месяц
                          </div>
                          <div className="text-sm text-purple-600">
                            +{option.green_tokens} GREEN/месяц
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Switch
                        checked={isActive}
                        onCheckedChange={() => handleToggle(option.id)}
                        className="mb-2"
                      />
                      <div className="text-xs text-gray-500">
                        {isActive ? 'Включено' : 'Выключено'}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Button 
            className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              toast({
                title: "Настройки сохранены! ✅",
                description: `Активно ${activeControls} контролей, экономия ${totalCO2Saved.toFixed(1)}кг CO₂`,
              });
            }}
          >
            <Shield className="w-4 h-4 mr-2" />
            Сохранить настройки
          </Button>
          
          <Button 
            variant="outline"
            className="border-green-200 text-green-700 hover:bg-green-50"
            onClick={() => navigate('/chat')}
          >
            <Bell className="w-4 h-4 mr-2" />
            Настроить уведомления
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Control;
