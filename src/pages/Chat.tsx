
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Send, Bot, User, Camera, MapPin, Award, Leaf } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  actions?: Array<{
    type: 'confirm' | 'photo' | 'location';
    label: string;
    reward?: string;
  }>;
}

const Chat = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Привет! 🌱 Я ваш ИИ-помощник Green Wave. Готов помочь вам вести более экологичный образ жизни и зарабатывать карбоновые сертификаты!',
      timestamp: new Date(),
    },
    {
      id: '2',
      type: 'ai',
      content: '🚌 Совет дня: Попробуйте использовать общественный транспорт 2 раза на этой неделе вместо личного авто. Это сэкономит около 10 кг CO₂!',
      timestamp: new Date(),
      actions: [
        { type: 'confirm', label: 'Подтвердить поездку', reward: '10 кг CO₂' },
        { type: 'photo', label: 'Загрузить фото 📸', reward: '10 кг CO₂' },
        { type: 'location', label: 'Поделиться локацией 📍', reward: '10 кг CO₂' }
      ]
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [earnedCertificates, setEarnedCertificates] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(inputValue),
        timestamp: new Date(),
        actions: Math.random() > 0.5 ? [
          { type: 'confirm', label: 'Выполнить действие', reward: '5 кг CO₂' },
          { type: 'photo', label: 'Прикрепить фото', reward: '5 кг CO₂' }
        ] : undefined
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (input: string): string => {
    const responses = [
      '🌿 Отличная идея! Вот несколько способов сделать это более экологично...',
      '♻️ Это поможет сократить выбросы CO₂! Попробуйте также...',
      '🌱 Замечательно! Вы на правильном пути к устойчивому образу жизни.',
      '🚴‍♂️ Предлагаю добавить к этому велосипедные прогулки 2 раза в неделю.',
      '💡 Интересный вопрос! Вот что я рекомендую для экономии энергии...',
      '🌍 Каждое ваше действие важно для планеты! Давайте добавим еще один шаг...'
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleAction = (action: { type: string; label: string; reward?: string }) => {
    switch (action.type) {
      case 'confirm':
        toast({
          title: "Действие подтверждено! 🎉",
          description: `Вы получили сертификат на ${action.reward}`,
        });
        setEarnedCertificates(prev => prev + 1);
        break;
      case 'photo':
        toast({
          title: "Фото загружается... 📸",
          description: "Проверяем ваше экологичное действие",
        });
        break;
      case 'location':
        toast({
          title: "Локация получена! 📍",
          description: `Подтверждено! Сертификат на ${action.reward} будет выдан`,
        });
        setEarnedCertificates(prev => prev + 1);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white border-b border-green-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/')} className="text-green-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Главная
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="font-semibold text-gray-800">ИИ Помощник</h1>
                  <p className="text-xs text-green-600">онлайн</p>
                </div>
              </div>
            </div>
            
            <Badge variant="outline" className="border-green-200 text-green-700">
              <Award className="w-3 h-3 mr-1" />
              {earnedCertificates} сертификатов
            </Badge>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="space-y-6 mb-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-blue-400 to-blue-500' 
                    : 'bg-gradient-to-r from-green-400 to-emerald-500'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                
                <div className={`rounded-2xl px-4 py-3 ${
                  message.type === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white border border-green-100 text-gray-800'
                }`}>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  
                  {message.actions && (
                    <div className="mt-3 space-y-2">
                      {message.actions.map((action, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="w-full justify-between border-green-200 hover:bg-green-50 text-green-700"
                          onClick={() => handleAction(action)}
                        >
                          <span className="flex items-center">
                            {action.type === 'photo' && <Camera className="w-3 h-3 mr-2" />}
                            {action.type === 'location' && <MapPin className="w-3 h-3 mr-2" />}
                            {action.type === 'confirm' && <Leaf className="w-3 h-3 mr-2" />}
                            {action.label}
                          </span>
                          {action.reward && (
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                              {action.reward}
                            </Badge>
                          )}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white border border-green-100 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-100 p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex space-x-4">
            <Input
              placeholder="Спросите совет по экологии..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="eco-gradient text-white border-0 hover:shadow-lg transition-all duration-300"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
