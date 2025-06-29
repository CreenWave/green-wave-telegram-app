
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, User, Building2, Factory, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Registration = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    co2Volume: '',
    description: '',
    materials: ''
  });

  const userTypes = [
    {
      id: 'individual',
      title: 'Частное лицо',
      icon: User,
      description: 'Для личного использования',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'company',
      title: 'Компания для имиджа',
      icon: Building2,
      description: 'Улучшение экологического имиджа',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      id: 'producer',
      title: 'Производитель экотоваров',
      icon: Factory,
      description: 'Продажа экологичных товаров',
      color: 'from-teal-400 to-cyan-500'
    }
  ];

  const handleNext = () => {
    if (step === 1 && !userType) {
      toast({
        title: "Выберите тип пользователя",
        description: "Необходимо выбрать один из вариантов",
        variant: "destructive"
      });
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Complete registration
      toast({
        title: "Регистрация завершена! 🎉",
        description: "Добро пожаловать в Green Wave",
      });
      navigate('/chat');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/');
    }
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const match = numbers.match(/^(\d{1,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    if (match) {
      return `+${match[1]}${match[2] ? `(${match[2]}` : ''}${match[3] ? `)${match[3]}` : ''}${match[4] ? `-${match[4]}` : ''}${match[5] ? `-${match[5]}` : ''}`;
    }
    return value;
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Выберите тип аккаунта</h2>
              <p className="text-gray-600">Это поможет персонализировать ваш опыт</p>
            </div>
            
            <div className="space-y-4">
              {userTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <Card 
                    key={type.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      userType === type.id ? 'ring-2 ring-green-500 bg-green-50' : ''
                    }`}
                    onClick={() => setUserType(type.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${type.color} text-white`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{type.title}</h3>
                          <p className="text-gray-600">{type.description}</p>
                        </div>
                        <RadioGroup value={userType} onValueChange={setUserType}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={type.id} id={type.id} />
                          </div>
                        </RadioGroup>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Основная информация</h2>
              <p className="text-gray-600">Расскажите немного о себе</p>
            </div>

            <div className="space-y-4">
              {userType === 'individual' && (
                <>
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      placeholder="+XX(XXX)XXX-XX-XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: formatPhoneNumber(e.target.value)})}
                    />
                  </div>
                </>
              )}

              {userType === 'company' && (
                <>
                  <div>
                    <Label htmlFor="companyName">Название компании</Label>
                    <Input
                      id="companyName"
                      placeholder="ООО 'Зеленая компания'"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="industry">Отрасль</Label>
                    <Input
                      id="industry"
                      placeholder="Например: IT, производство, торговля"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="co2Volume">Объём выбросов CO₂ (тонны в год)</Label>
                    <Input
                      id="co2Volume"
                      type="number"
                      placeholder="0"
                      value={formData.co2Volume}
                      onChange={(e) => setFormData({...formData, co2Volume: e.target.value})}
                    />
                  </div>
                </>
              )}

              {userType === 'producer' && (
                <>
                  <div>
                    <Label htmlFor="companyName">Название компании</Label>
                    <Input
                      id="companyName"
                      placeholder="ООО 'Экопроизводство'"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Описание товаров</Label>
                    <Input
                      id="description"
                      placeholder="Органическая косметика, эко-одежда..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="materials">Основные материалы</Label>
                    <Input
                      id="materials"
                      placeholder="Органический хлопок, бамбук..."
                      value={formData.materials}
                      onChange={(e) => setFormData({...formData, materials: e.target.value})}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Готово! 🎉</h2>
              <p className="text-gray-600">Ваш профиль создан, начнем экологическое путешествие</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-800">Что дальше?</h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Получите персональные советы от ИИ
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Начните зарабатывать карбоновые сертификаты
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Торгуйте на маркетплейсе и получайте токены GREEN
                </li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={handleBack} className="text-green-600 hover:text-green-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
          <div className="text-sm text-gray-500">
            Шаг {step} из 3
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <Progress value={(step / 3) * 100} className="h-2" />
        </div>

        {/* Content */}
        <Card className="border-0 shadow-xl">
          <CardContent className="p-8">
            {renderStepContent()}
            
            <div className="flex justify-end mt-8">
              <Button 
                onClick={handleNext}
                className="eco-gradient text-white border-0 hover:shadow-lg hover:scale-105 transition-all duration-300 px-8"
              >
                {step === 3 ? 'Начать' : 'Далее'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
