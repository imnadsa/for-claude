"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Calendar, CreditCard, Clock, Zap, Lock, Sparkles, BrainCircuit, AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"

export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  const [processing, setProcessing] = useState(false)
  const { toast } = useToast()
  
  // Демо-данные для текущей подписки
  const currentSubscription = {
    plan: "Начальный",
    status: "active",
    renewDate: "15 апреля 2025",
    daysLeft: 23
  }
  
  // Обработчик выбора тарифа
  const handleSelectPlan = (plan: string) => {
    setProcessing(true)
    
    // Имитация запроса оплаты
    setTimeout(() => {
      setProcessing(false)
      
      // Показываем успешное уведомление
      toast({
        title: "Подписка обновлена",
        description: `Вы успешно перешли на тариф ${plan}. Изменения вступят в силу немедленно.`,
        variant: "default",
      })
    }, 2000)
  }
  
  // Обработчик отмены подписки
  const handleCancelSubscription = () => {
    if (confirm("Вы уверены, что хотите отменить вашу подписку? Вы вернетесь на бесплатный тарифный план.")) {
      setProcessing(true)
      
      // Имитация запроса отмены
      setTimeout(() => {
        setProcessing(false)
        
        // Показываем уведомление
        toast({
          title: "Подписка отменена",
          description: "Вы успешно отменили подписку. Вы сможете пользоваться текущим тарифом до конца оплаченного периода.",
          variant: "default",
        })
      }, 1500)
    }
  }
  
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
  }
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-1 font-fixedsys">Управление подпиской</h1>
        <p className="text-slate-400">Просмотрите или измените вашу подписку Hippocrat AI</p>
      </div>
      
      {/* Текущая подписка */}
      <Card className="bg-slate-900/50 border-slate-800">
        <CardHeader>
          <CardTitle className="font-fixedsys">Текущая подписка</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <span className="text-sm text-slate-400">Текущий план</span>
              <p className="text-lg font-medium">{currentSubscription.plan}</p>
            </div>
            <div className="space-y-1">
              <span className="text-sm text-slate-400">Статус</span>
              <p className="text-lg font-medium flex items-center">
                <span className="h-2 w-2 bg-emerald-500 rounded-full mr-2"></span>
                Активна
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-sm text-slate-400">Следующее списание</span>
              <p className="text-lg font-medium flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-slate-400" />
                {currentSubscription.renewDate}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-sm text-slate-400">Осталось дней</span>
              <p className="text-lg font-medium flex items-center">
                <Clock className="h-4 w-4 mr-2 text-slate-400" />
                {currentSubscription.daysLeft} дней
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-slate-800 pt-4">
          <div className="flex items-center text-sm text-slate-400">
            <CreditCard className="h-4 w-4 mr-2" />
            <span>Оплата: Visa ****4242</span>
          </div>
          <div className="space-x-2">
            <Button variant="outline" className="border-slate-700 text-slate-300" size="sm">
              Изменить способ оплаты
            </Button>
            <Button 
              variant="outline" 
              className="border-red-800/30 text-red-400 hover:bg-red-900/20" 
              size="sm"
              onClick={handleCancelSubscription}
              disabled={processing}
            >
              Отменить подписку
            </Button>
          </div>
        </CardFooter>
      </Card>
      
      {/* Тарифные планы */}
      <div className="space-y-4">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-bold font-fixedsys">Доступные тарифы</h2>
          
          {/* Переключатель месяц/год */}
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {/* Тариф Начальный */}
          <Card className={`bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all ${
            currentSubscription.plan === "Начальный" ? "border-l-4 border-l-emerald-500" : ""
          }`}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-fixedsys">Начальный</CardTitle>
                  <p className="text-sm text-slate-400 mt-1">Для пробы</p>
                </div>
                {currentSubscription.plan === "Начальный" && (
                  <div className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                    Текущий
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">{prices.starter[billingCycle]}</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">До 20 вопросов в день</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Доступ к основным темам</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Базовая помощь в обучении</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock size={18} className="text-slate-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-500 text-sm">Создание конспектов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock size={18} className="text-slate-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-500 text-sm">Загрузка файлов и документов</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full border-slate-700 text-slate-400"
                disabled={currentSubscription.plan === "Начальный" || processing}
              >
                {currentSubscription.plan === "Начальный" ? "Текущий план" : "Выбрать план"}
              </Button>
            </CardFooter>
          </Card>
          
          {/* Тариф Стандартный */}
          <Card className={`bg-gradient-to-b from-slate-800/80 to-slate-900/80 border-slate-800 relative shadow-lg shadow-teal-900/10 hover:border-teal-500/50 transition-all ${
            currentSubscription.plan === "Стандартный" ? "border-l-4 border-l-emerald-500" : ""
          }`}>
            {(currentSubscription.plan !== "Стандартный" && currentSubscription.plan !== "Премиум") && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 text-white text-xs font-medium font-fixedsys">
                Популярный выбор
              </div>
            )}
            
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-fixedsys">Стандартный</CardTitle>
                  <p className="text-sm text-slate-400 mt-1">Для активного обучения</p>
                </div>
                {currentSubscription.plan === "Стандартный" && (
                  <div className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                    Текущий
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">{prices.standard[billingCycle]}</span>
                <span className="text-slate-400 text-sm"> / {billingCycle === "monthly" ? "месяц" : "год"}</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Безлимитные вопросы</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Доступ ко всем медицинским темам</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Создание конспектов</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Подготовка к экзаменам</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock size={18} className="text-slate-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-500 text-sm">Углубленный анализ клинических случаев</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700"
                onClick={() => handleSelectPlan("Стандартный")}
                disabled={currentSubscription.plan === "Стандартный" || processing}
              >
                {processing ? (
                  <span className="flex items-center">
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Обновление...
                  </span>
                ) : currentSubscription.plan === "Стандартный" ? (
                  "Текущий план"
                ) : (
                  "Выбрать план"
                )}
              </Button>
            </CardFooter>
          </Card>
          
          {/* Тариф Премиум */}
          <Card className={`bg-slate-900/50 border-slate-800 hover:border-indigo-500/50 transition-all ${
            currentSubscription.plan === "Премиум" ? "border-l-4 border-l-emerald-500" : ""
          }`}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-fixedsys">Премиум</CardTitle>
                  <p className="text-sm text-slate-400 mt-1">Для будущих профессионалов</p>
                </div>
                {currentSubscription.plan === "Премиум" && (
                  <div className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                    Текущий
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">{prices.premium[billingCycle]}</span>
                <span className="text-slate-400 text-sm"> / {billingCycle === "monthly" ? "месяц" : "год"}</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Все функции Стандартного тарифа</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Приоритетный доступ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Углубленный анализ клинических случаев</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Интерактивные объяснения с диаграммами</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline"
                className="w-full border-indigo-500 text-indigo-400 hover:bg-indigo-950/50"
                onClick={() => handleSelectPlan("Премиум")}
                disabled={currentSubscription.plan === "Премиум" || processing}
              >
                {processing ? (
                  <span className="flex items-center">
                    <span className="h-4 w-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin mr-2"></span>
                    Обновление...
                  </span>
                ) : currentSubscription.plan === "Премиум" ? (
                  "Текущий план"
                ) : (
                  "Выбрать план"
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      {/* Вкладки с деталями подписки */}
      <Tabs defaultValue="faq" className="pt-8">
        <TabsList className="grid grid-cols-3 max-w-md mx-auto bg-slate-900">
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="history">История платежей</TabsTrigger>
          <TabsTrigger value="receipts">Квитанции</TabsTrigger>
        </TabsList>
        
        <TabsContent value="faq" className="pt-6">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium text-white flex items-center">
                  <Zap className="mr-2 h-4 w-4 text-teal-400" />
                  Как сменить тарифный план?
                </h3>
                <p className="text-slate-400 text-sm">
                  Вы можете сменить тарифный план в любое время. При переходе на более дорогой план изменения вступят в силу немедленно. При переходе на более дешевый план изменения вступят в силу после окончания текущего платежного периода.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-white flex items-center">
                  <BrainCircuit className="mr-2 h-4 w-4 text-teal-400" />
                  Чем отличаются тарифные планы?
                </h3>
                <p className="text-slate-400 text-sm">
                  Основные отличия между тарифными планами - это количество доступных запросов, глубина анализа и доступ к дополнительным функциям. Бесплатный план ограничен 20 запросами в день, в то время как платные планы предлагают неограниченное количество запросов и дополнительные возможности.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-white flex items-center">
                  <AlertCircle className="mr-2 h-4 w-4 text-teal-400" />
                  Как отменить подписку?
                </h3>
                <p className="text-slate-400 text-sm">
                  Вы можете отменить подписку в любое время, нажав кнопку "Отменить подписку" в разделе текущей подписки. После отмены вы сможете пользоваться оплаченным тарифом до конца текущего периода, а затем будете переведены на бесплатный план.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="pt-6">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-800">
                        <th className="text-left py-3 px-4 text-sm text-slate-400">Дата</th>
                        <th className="text-left py-3 px-4 text-sm text-slate-400">Описание</th>
                        <th className="text-right py-3 px-4 text-sm text-slate-400">Сумма</th>
                        <th className="text-right py-3 px-4 text-sm text-slate-400">Статус</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-800 hover:bg-slate-900/80">
                        <td className="py-3 px-4 text-sm">15 марта 2025</td>
                        <td className="py-3 px-4 text-sm">Подписка Стандартная (месяц)</td>
                        <td className="py-3 px-4 text-sm text-right">299₽</td>
                        <td className="py-3 px-4 text-sm text-right">
                          <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                            Оплачено
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-800 hover:bg-slate-900/80">
                        <td className="py-3 px-4 text-sm">15 февраля 2025</td>
                        <td className="py-3 px-4 text-sm">Подписка Стандартная (месяц)</td>
                        <td className="py-3 px-4 text-sm text-right">299₽</td>
                        <td className="py-3 px-4 text-sm text-right">
                          <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                            Оплачено
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-900/80">
                        <td className="py-3 px-4 text-sm">15 января 2025</td>
                        <td className="py-3 px-4 text-sm">Подписка Стандартная (месяц)</td>
                        <td className="py-3 px-4 text-sm text-right">299₽</td>
                        <td className="py-3 px-4 text-sm text-right">
                          <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                            Оплачено
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="receipts" className="pt-6">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-800">
                        <th className="text-left py-3 px-4 text-sm text-slate-400">Номер квитанции</th>
                        <th className="text-left py-3 px-4 text-sm text-slate-400">Дата</th>
                        <th className="text-left py-3 px-4 text-sm text-slate-400">Сумма</th>
                        <th className="text-right py-3 px-4 text-sm text-slate-400">Действия</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-800 hover:bg-slate-900/80">
                        <td className="py-3 px-4 text-sm">INV-2025-0103</td>
                        <td className="py-3 px-4 text-sm">15 марта 2025</td>
                        <td className="py-3 px-4 text-sm">299₽</td>
                        <td className="py-3 px-4 text-sm text-right">
                          <Button variant="ghost" size="sm">Скачать PDF</Button>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-800 hover:bg-slate-900/80">
                        <td className="py-3 px-4 text-sm">INV-2025-0102</td>
                        <td className="py-3 px-4 text-sm">15 февраля 2025</td>
                        <td className="py-3 px-4 text-sm">299₽</td>
                        <td className="py-3 px-4 text-sm text-right">
                          <Button variant="ghost" size="sm">Скачать PDF</Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-900/80">
                        <td className="py-3 px-4 text-sm">INV-2025-0101</td>
                        <td className="py-3 px-4 text-sm">15 января 2025</td>
                        <td className="py-3 px-4 text-sm">299₽</td>
                        <td className="py-3 px-4 text-sm text-right">
                          <Button variant="ghost" size="sm">Скачать PDF</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

