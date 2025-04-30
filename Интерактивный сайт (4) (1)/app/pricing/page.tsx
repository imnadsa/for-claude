"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CheckCircle2, X, ArrowLeft, Sparkles, LucideShieldCheck, Zap, Check } from "lucide-react";
import Logo from "@/components/logo";

// Компонент плана подписки
interface PlanProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant?: "default" | "outline";
  onSelect: () => void;
}

function Plan({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  buttonText,
  buttonVariant = "default",
  onSelect
}: PlanProps) {
  return (
    <Card className={`w-full ${
      popular 
        ? 'bg-gradient-to-b from-slate-800/70 to-slate-900/70 border-teal-500/30 shadow-lg shadow-teal-900/10 relative z-10 scale-[1.02]' 
        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
    } transition-all`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 text-white text-xs font-medium font-fixedsys">
          Популярный выбор
        </div>
      )}
      
      <CardHeader className="pt-6 pb-2">
        <h3 className="text-lg font-semibold text-white font-fixedsys">{name}</h3>
        <div className="mt-4">
          <span className="text-3xl font-bold text-white font-fixedsys">{price}</span>
          {price !== "Бесплатно" && <span className="text-slate-400 text-sm"> / {period}</span>}
        </div>
        <p className="text-sm text-slate-400 mt-2">{description}</p>
      </CardHeader>
      
      <CardContent className="pt-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 
                size={18} 
                className={`mt-0.5 flex-shrink-0 ${
                  popular 
                    ? 'text-teal-400' 
                    : price === "Бесплатно" 
                      ? 'text-slate-400' 
                      : 'text-indigo-400'
                }`} 
              />
              <span className="text-slate-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-4 pb-6">
        <Button
          variant={buttonVariant}
          className={`w-full ${
            buttonVariant === "default" 
              ? "bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700" 
              : "border-teal-500 text-teal-400 hover:bg-teal-950/50"
          } font-fixedsys`}
          onClick={onSelect}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  
  const handleSelectPlan = (plan: string) => {
    console.log(`Selected plan: ${plan}`);
    // Здесь будет логика перенаправления на страницу оплаты или регистрации
  };
  
  // Настройка цен в зависимости от цикла оплаты
  const prices = {
    starter: {
      monthly: "Бесплатно",
      annual: "Бесплатно"
    },
    standard: {
      monthly: "299₽",
      annual: "2 990₽"
    },
    premium: {
      monthly: "499₽",
      annual: "4 990₽"
    }
  };
  
  // FAQ данные
  const faqItems = [
    {
      question: "Чем отличаются тарифы?",
      answer: "Основные отличия между тарифами - это количество доступных вопросов, глубина анализа ответов и доступ к дополнительным функциям, таким как создание конспектов, подготовка к экзаменам и приоритетная поддержка. В бесплатном тарифе вы получаете 20 вопросов в день и базовый функционал, в стандартном - неограниченное количество вопросов и доступ ко всем основным функциям, а в премиум - доступ ко всем возможностям, включая приоритетную поддержку и углубленный анализ клинических случаев."
    },
    {
      question: "Можно ли изменить тариф в любой момент?",
      answer: "Да, вы можете изменить свой тариф в любой момент. При переходе на более дорогой тариф изменения вступят в силу немедленно, а стоимость будет рассчитана пропорционально оставшемуся периоду подписки. При переходе на более дешевый тариф изменения вступят в силу после окончания текущего расчетного периода."
    },
    {
      question: "Есть ли у вас реферальная программа?",
      answer: "Да, у нас есть реферальная программа. Когда вы приглашаете друга и он регистрируется по вашей реферальной ссылке, вы получаете бонус в виде дополнительных дней премиум-доступа. За каждого друга, оформившего платную подписку, вы получаете 14 дней премиум-доступа."
    },
    {
      question: "Как работает ограничение на количество вопросов?",
      answer: "В бесплатном тарифе у вас есть лимит в 20 вопросов в день. После использования всех вопросов вам нужно будет дождаться следующего дня (00:00 по московскому времени) для обновления лимита. В платных тарифах ограничений на количество вопросов нет, вы можете задавать столько вопросов, сколько вам нужно."
    },
    {
      question: "Можно ли использовать Hippocrat AI на мобильных устройствах?",
      answer: "Да, Hippocrat AI полностью адаптирован для использования на мобильных устройствах. Вы можете пользоваться всеми функциями через браузер вашего смартфона или планшета. В будущем мы планируем разработать отдельные приложения для iOS и Android для еще более удобного использования."
    },
    {
      question: "Как обеспечивается точность медицинской информации?",
      answer: "Мы обучаем нашу модель на проверенных медицинских источниках, включая учебники, научные статьи и материалы ведущих медицинских вузов России. Наша команда медицинских экспертов регулярно проверяет и обновляет базу знаний, чтобы обеспечить точность и актуальность информации. Кроме того, мы постоянно совершенствуем алгоритмы и методы обучения для повышения качества ответов."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Logo size="md" />
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" className="text-slate-400 hover:text-teal-400">
                <ArrowLeft size={16} className="mr-2" />
                Вернуться на главную
              </Button>
            </Link>
            <Link href="/auth">
              <Button className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700">
                Войти
              </Button>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero section */}
        <section className="max-w-4xl mx-auto mb-16 text-center">
          <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6 inline-block">
            Тарифы и цены
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 font-fixedsys">
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              Выберите подходящий план
            </span>
          </h1>
          <p className="text-lg text-slate-300 mb-10">
            Мы предлагаем гибкие тарифы для разных потребностей студентов-медиков
          </p>
          
          {/* Переключатель месяц/год */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md bg-slate-900 p-1 border border-slate-800">
              <button
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  billingCycle === "monthly"
                    ? "bg-slate-800 text-white font-medium shadow-sm"
                    : "text-slate-400 hover:text-slate-300"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Ежемесячно
              </button>
              <button
                className={`px-4 py-2 text-sm rounded-md transition-all ${
                  billingCycle === "annual"
                    ? "bg-slate-800 text-white font-medium shadow-sm"
                    : "text-slate-400 hover:text-slate-300"
                }`}
                onClick={() => setBillingCycle("annual")}
              >
                <div className="flex items-center gap-1">
                  Ежегодно
                  <span className="bg-teal-500/20 text-teal-400 text-[10px] px-1.5 py-0.5 rounded-full">
                    -16%
                  </span>
                </div>
              </button>
            </div>
          </div>
          
          {/* Планы */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Plan
              name="Начальный"
              price={prices.starter[billingCycle]}
              period={billingCycle === "monthly" ? "месяц" : "год"}
              description="Для пробы и базового использования"
              features={[
                "До 20 вопросов в день",
                "Доступ к основным темам",
                "Базовая помощь в обучении",
                "Стандартное время ответа"
              ]}
              buttonText="Попробовать бесплатно"
              buttonVariant="outline"
              onSelect={() => handleSelectPlan("starter")}
            />
            
            <Plan
              name="Стандартный"
              price={prices.standard[billingCycle]}
              period={billingCycle === "monthly" ? "месяц" : "год"}
              description="Для активного обучения"
              features={[
                "Безлимитные вопросы",
                "Доступ ко всем медицинским темам",
                "Создание конспектов",
                "Подготовка к экзаменам",
                "Быстрое время ответа"
              ]}
              popular={true}
              buttonText="Выбрать тариф"
              onSelect={() => handleSelectPlan("standard")}
            />
            
            <Plan
              name="Премиум"
              price={prices.premium[billingCycle]}
              period={billingCycle === "monthly" ? "месяц" : "год"}
              description="Для будущих профессионалов"
              features={[
                "Все функции Стандартного тарифа",
                "Приоритетный доступ",
                "Углубленный анализ клинических случаев",
                "Интерактивные объяснения с диаграммами",
                "Расширенные медицинские конспекты",
                "Персональная поддержка"
              ]}
              buttonText="Выбрать тариф"
              buttonVariant="outline"
              onSelect={() => handleSelectPlan("premium")}
            />
          </div>
        </section>
        
        {/* Features comparison */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-fixedsys">
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              Сравнение функций
            </span>
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="py-4 px-4 text-left text-slate-300">Функции</th>
                  <th className="py-4 px-4 text-center text-slate-300">Начальный</th>
                  <th className="py-4 px-4 text-center text-slate-300">Стандартный</th>
                  <th className="py-4 px-4 text-center text-slate-300">Премиум</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Количество вопросов", starter: "20 в день", standard: "Безлимит", premium: "Безлимит" },
                  { feature: "Доступ к медицинским темам", starter: "Основные", standard: "Все темы", premium: "Все темы" },
                  { feature: "Создание конспектов", starter: false, standard: true, premium: true },
                  { feature: "Подготовка к экзаменам", starter: false, standard: true, premium: true },
                  { feature: "Углубленный анализ", starter: false, standard: false, premium: true },
                  { feature: "Интерактивные диаграммы", starter: false, standard: false, premium: true },
                  { feature: "Приоритетная поддержка", starter: false, standard: false, premium: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-slate-800 hover:bg-slate-900/30">
                    <td className="py-4 px-4 text-left font-medium text-slate-300">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check size={18} className="mx-auto text-emerald-500" />
                        ) : (
                          <X size={18} className="mx-auto text-slate-600" />
                        )
                      ) : (
                        <span className="text-slate-400">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.standard === "boolean" ? (
                        row.standard ? (
                          <Check size={18} className="mx-auto text-emerald-500" />
                        ) : (
                          <X size={18} className="mx-auto text-slate-600" />
                        )
                      ) : (
                        <span className="text-slate-300">{row.standard}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.premium === "boolean" ? (
                        row.premium ? (
                          <Check size={18} className="mx-auto text-emerald-500" />
                        ) : (
                          <X size={18} className="mx-auto text-slate-600" />
                        )
                      ) : (
                        <span className="text-slate-300">{row.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-fixedsys">
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              Преимущества платных тарифов
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800 hover:border-teal-500/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-teal-900/30 flex items-center justify-center mb-4">
                <Sparkles className="text-teal-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-fixedsys">Безграничное обучение</h3>
              <p className="text-slate-400">
                Задавайте неограниченное колич��ство вопросов, исследуйте любые медицинские темы и глубоко погружайтесь в предмет без ограничений.
              </p>
            </div>
            
            <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800 hover:border-teal-500/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-teal-900/30 flex items-center justify-center mb-4">
                <LucideShieldCheck className="text-teal-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-fixedsys">Проверенная точность</h3>
              <p className="text-slate-400">
                Получайте ответы, проверенные медицинскими экспертами, и углубленный анализ клинических случаев для лучшего понимания.
              </p>
            </div>
            
            <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800 hover:border-teal-500/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-teal-900/30 flex items-center justify-center mb-4">
                <Zap className="text-teal-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-fixedsys">Приоритетный доступ</h3>
              <p className="text-slate-400">
                Получайте мгновенные ответы даже в периоды пиковой нагрузки и приоритетную техническую поддержку при необходимости.
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-fixedsys">
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              Часто задаваемые вопросы
            </span>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-slate-800 rounded-lg px-6 bg-slate-900/30 hover:border-slate-700 transition-all"
              >
                <AccordionTrigger className="text-slate-300 hover:text-teal-400 py-4 font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        
        {/* CTA Section */}
        <section className="max-w-4xl mx-auto mb-10 bg-gradient-to-b from-slate-900 to-slate-950 p-8 md:p-12 rounded-xl border border-slate-800">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 font-fixedsys">
            Готовы улучшить свое обучение?
          </h2>
          <p className="text-center text-slate-300 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам студентов-медиков, которые уже используют Hippocrat AI для более эффективного обучения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg px-8 font-fixedsys"
              onClick={() => handleSelectPlan("standard")}
            >
              Начать сейчас
            </Button>
            <Link href="/auth">
              <Button size="lg" variant="outline" className="border-teal-700 text-teal-400 hover:bg-teal-950/50">
                Создать аккаунт
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 Hippocrat AI. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}

