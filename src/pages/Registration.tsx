
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, User, Building2, Factory, ArrowRight, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface FormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  co2Volume: string;
  description: string;
  materials: string;
}

interface QuestionnaireAnswers {
  [key: string]: string | number;
}

const Registration = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    co2Volume: '',
    description: '',
    materials: ''
  });
  const [questionnaireAnswers, setQuestionnaireAnswers] = useState<QuestionnaireAnswers>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
      }
    };
    checkAuth();
  }, [navigate]);

  const userTypes = [
    {
      id: 'individual',
      title: 'Частное лицо',
      icon: User,
      description: 'Для личного использования и экологичной жизни',
      gradient: 'from-emerald-400 to-green-500',
      bgPattern: 'bg-gradient-to-br from-emerald-50 to-green-100'
    },
    {
      id: 'company',
      title: 'Компания для имиджа',
      icon: Building2,
      description: 'Улучшение экологического имиджа компании',
      gradient: 'from-blue-400 to-cyan-500',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-cyan-100'
    },
    {
      id: 'manufacturer',
      title: 'Производитель экотоваров',
      icon: Factory,
      description: 'Продажа экологичных товаров и услуг',
      gradient: 'from-purple-400 to-violet-500',
      bgPattern: 'bg-gradient-to-br from-purple-50 to-violet-100'
    }
  ];

  const getQuestions = () => {
    const questions = {
      individual: [
        { q: 'Сколько литров бензина тратите в месяц?', options: ['0-50', '50-100', '100-200', '200-500', '500+'] },
        { q: 'Как часто пользуетесь общественным транспортом?', options: ['Каждый день', '3-4 раза в неделю', '1-2 раза в неделю', 'Редко', 'Никогда'] },
        { q: 'Сколько киловатт-часов электроэнергии потребляете в месяц?', options: ['0-100', '100-200', '200-400', '400-600', '600+'] },
        { q: 'Как часто покупаете органические продукты?', options: ['Всегда', 'Часто', 'Иногда', 'Редко', 'Никогда'] },
        { q: 'Сортируете ли вы мусор?', options: ['Всегда', 'Часто', 'Иногда', 'Редко', 'Никогда'] },
        { q: 'Сколько воды потребляете в день (литров)?', options: ['1-2', '2-3', '3-4', '4-5', '5+'] },
        { q: 'Как часто летаете на самолетах в год?', options: ['0', '1-2', '3-5', '6-10', '10+'] },
        { q: 'Используете ли возобновляемые источники энергии?', options: ['Да, активно', 'Частично', 'Планирую', 'Рассматриваю', 'Нет'] },
        { q: 'Как часто покупаете новую одежду?', options: ['Раз в год', 'Несколько раз в год', 'Ежемесячно', 'Еженедельно', 'Постоянно'] },
        { q: 'Участвуете ли в экологических инициативах?', options: ['Активно', 'Иногда', 'Редко', 'Планирую', 'Нет'] }
      ],
      company: [
        { q: 'Сколько тонн CO₂ выбрасывает ваша компания ежегодно?', options: ['0-10', '10-50', '50-100', '100-500', '500+'] },
        { q: 'Есть ли у вас экологическая политика?', options: ['Да, действующая', 'В разработке', 'Планируем', 'Рассматриваем', 'Нет'] },
        { q: 'Используете ли возобновляемую энергию?', options: ['100%', '50-99%', '10-49%', '1-9%', '0%'] },
        { q: 'Как часто проводите экологический аудит?', options: ['Ежегодно', 'Раз в 2 года', 'Раз в 5 лет', 'Планируем', 'Никогда'] },
        { q: 'Участвуете ли в углеродном рынке?', options: ['Активно', 'Изучаем', 'Планируем', 'Рассматриваем', 'Нет'] }
      ],
      manufacturer: [
        { q: 'Какой процент вашей продукции сертифицирован как экологичный?', options: ['90-100%', '70-89%', '50-69%', '10-49%', '0-9%'] },
        { q: 'Используете ли переработанные материалы?', options: ['Всегда', 'Часто', 'Иногда', 'Редко', 'Никогда'] },
        { q: 'Есть ли у вас сертификат органического производства?', options: ['Да, действующий', 'В процессе получения', 'Планируем', 'Рассматриваем', 'Нет'] },
        { q: 'Как утилизируете производственные отходы?', options: ['Полная переработка', 'Частичная переработка', 'Специальная утилизация', 'Обычная утилизация', 'Затрудняюсь ответить'] },
        { q: 'Участвуете ли в программах углеродной нейтральности?', options: ['Да, активно', 'Планируем', 'Изучаем', 'Рассматриваем', 'Нет'] },
        { q: 'Какую долю составляют экологичные материалы в производстве?', options: ['80-100%', '60-79%', '40-59%', '20-39%', '0-19%'] },
        { q: 'Проводите ли оценку жизненного цикла продукции?', options: ['Для всех продуктов', 'Для большинства', 'Для некоторых', 'Планируем', 'Нет'] },
        { q: 'Как часто обновляете экологические стандарты?', options: ['Ежегодно', 'Раз в 2 года', 'По необходимости', 'Редко', 'Не обновляем'] }
      ]
    };
    return questions[userType as keyof typeof questions] || [];
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      const match = numbers.match(/^(\d{1,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
      if (match) {
        return `+${match[1]}${match[2] ? `(${match[2]}` : ''}${match[3] ? `)${match[3]}` : ''}${match[4] ? `-${match[4]}` : ''}${match[5] ? `-${match[5]}` : ''}`;
      }
    }
    return value;
  };

  const handleNext = async () => {
    if (step === 1 && !userType) {
      toast({
        title: "Выберите тип пользователя",
        description: "Необходимо выбрать один из вариантов",
        variant: "destructive"
      });
      return;
    }
    
    if (step === 4) {
      // Complete registration
      await saveProfile();
    } else {
      setStep(step + 1);
    }
  };

  const saveProfile = async () => {
    setLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error('No session');

      // Save profile
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .insert({
          user_id: session.user.id,
          user_type: userType,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company_name: formData.companyName,
          industry: formData.industry,
          co2_emissions: formData.co2Volume ? parseFloat(formData.co2Volume) : null,
          product_description: formData.description,
          materials: formData.materials
        })
        .select()
        .single();

      if (profileError) throw profileError;

      // Save questionnaire
      const { error: questionnaireError } = await supabase
        .from('questionnaires')
        .insert({
          profile_id: profile.id,
          answers: questionnaireAnswers
        });

      if (questionnaireError) throw questionnaireError;

      // Initialize GREEN tokens
      const { error: tokensError } = await supabase
        .from('green_tokens')
        .insert({
          profile_id: profile.id,
          amount: 0
        });

      if (tokensError) throw tokensError;

      toast({
        title: "Регистрация завершена! 🎉",
        description: "Добро пожаловать в Green Wave",
      });
      
      navigate('/chat');
    } catch (error: any) {
      toast({
        title: "Ошибка",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/auth');
    }
  };

  const questions = getQuestions();
  const totalSteps = userType ? 4 : 3;
  const currentQuestionData = questions[currentQuestion];

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Sparkles className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Выберите тип аккаунта</h2>
              <p className="text-gray-600">Это поможет персонализировать ваш опыт</p>
            </div>
            
            <div className="space-y-4">
              {userTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <Card 
                    key={type.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                      userType === type.id 
                        ? 'ring-2 ring-green-500 bg-green-50 border-green-200' 
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => setUserType(type.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`${type.bgPattern} p-4 rounded-2xl`}>
                          <div className={`p-2 rounded-xl bg-gradient-to-r ${type.gradient} text-white`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-800">{type.title}</h3>
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
              <User className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Основная информация</h2>
              <p className="text-gray-600">Расскажите немного о себе</p>
            </div>

            <div className="space-y-4">
              {userType === 'individual' && (
                <>
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
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
                    <Label htmlFor="companyName">Название компании *</Label>
                    <Input
                      id="companyName"
                      placeholder="ООО 'Зеленая компания'"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="industry">Отрасль *</Label>
                    <Input
                      id="industry"
                      placeholder="Например: IT, производство, торговля"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      required
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

              {userType === 'manufacturer' && (
                <>
                  <div>
                    <Label htmlFor="companyName">Название компании *</Label>
                    <Input
                      id="companyName"
                      placeholder="ООО 'Экопроизводство'"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Описание товаров *</Label>
                    <Textarea
                      id="description"
                      placeholder="Органическая косметика, эко-одежда..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="materials">Основные материалы *</Label>
                    <Input
                      id="materials"
                      placeholder="Органический хлопок, бамбук..."
                      value={formData.materials}
                      onChange={(e) => setFormData({...formData, materials: e.target.value})}
                      required
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        );

      case 3:
        if (!currentQuestionData) return null;
        
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">{currentQuestion + 1}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Анкетирование</h2>
              <p className="text-gray-600">Вопрос {currentQuestion + 1} из {questions.length}</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">
                {currentQuestionData.q}
              </h3>
              
              <RadioGroup 
                value={questionnaireAnswers[currentQuestion]?.toString()} 
                onValueChange={(value) => setQuestionnaireAnswers({
                  ...questionnaireAnswers,
                  [currentQuestion]: value
                })}
                className="space-y-3"
              >
                {currentQuestionData.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                Назад
              </Button>
              <Button 
                onClick={() => {
                  if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                  } else {
                    setStep(4);
                  }
                }}
                disabled={!questionnaireAnswers[currentQuestion]}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {currentQuestion < questions.length - 1 ? 'Далее' : 'Завершить'}
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Все готово! 🎉</h2>
              <p className="text-gray-600">Ваш профиль создан, начинаем экологическое путешествие</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-green-800">Что дальше?</h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Получайте персональные советы от ИИ Grok
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Зарабатывайте карбоновые сертификаты за экологичные действия
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Торгуйте на маркетплейсе и получайте токены GREEN
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Участвуйте в рейтингах и получайте NFT награды
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={handleBack} className="text-green-600 hover:text-green-700 hover:bg-green-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
          <div className="text-sm text-gray-500">
            Шаг {step} из {totalSteps}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <Progress value={(step / totalSteps) * 100} className="h-3" />
        </div>

        {/* Content */}
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            {renderStepContent()}
            
            <div className="flex justify-end mt-8">
              <Button 
                onClick={handleNext}
                disabled={loading}
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-8"
              >
                {loading ? 'Сохранение...' : step === totalSteps ? 'Начать' : 'Далее'}
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
