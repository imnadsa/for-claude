"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  MessageSquare, 
  Plus, 
  Sparkles, 
  Calendar, 
  Clock, 
  Star, 
  BookOpen,
  Loader2
} from "lucide-react"

export default function DashboardPage() {
  // Демо-данные для статистики
  const usageStats = {
    // Использовано сообщений из бесплатного лимита
    messagesUsed: 15,
    messagesLimit: 20,
    
    // План подписки
    subscription: {
      plan: "Стандартный",
      renewDate: "15 апреля 2025",
      daysLeft: 23
    },
    
    // Статистика использования
    stats: {
      totalChats: 48,
      totalMessages: 362,
      averageRating: 4.8
    }
  }
  
  // Демо-данные для недавних чатов
  const recentChats = [
    {
      id: "chat-1",
      title: "Патофизиология сердечной недостаточности",
      preview: "Расскажи про патофизиологические механизмы развития сердечной недостаточности и...",
      date: "Сегодня, 14:32",
      messages: 12
    },
    {
      id: "chat-2",
      title: "Классификация антибиотиков",
      preview: "Какая современная классификация антибиотиков? Расскажи про механизмы действия...",
      date: "Вчера, 18:05",
      messages: 8
    },
    {
      id: "chat-3",
      title: "Подготовка к экзамену по анатомии",
      preview: "Помоги составить план подготовки к экзамену по анатомии ЦНС. Мне нужно...",
      date: "12 марта, 09:15",
      messages: 25
    }
  ]
  
  // Демо-данные для рекомендуемых тем
  const recommendedTopics = [
    "Нейрофизиология памяти и обучения",
    "Механизмы клеточной регенерации",
    "Патогенез аутоиммунных заболеваний",
    "Современные подходы к лечению онкологии"
  ]
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold mb-1 font-fixedsys">Добро пожаловать, Александр</h1>
          <p className="text-slate-400">Продолжайте обучение с Hippocrat AI</p>
        </div>
        
        <Link href="/dashboard/chat">
          <Button className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700">
            <Plus className="mr-2 h-4 w-4" />
            Новый чат
          </Button>
        </Link>
      </div>
      
      {/* Usage Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-900/50 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Использование сообщений</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Сегодня</span>
                <span className="text-sm text-slate-400">{usageStats.messagesUsed} из {usageStats.messagesLimit}</span>
              </div>
              <Progress 
                value={(usageStats.messagesUsed / usageStats.messagesLimit) * 100} 
                className="h-2 bg-slate-800"
              />
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Link href="/dashboard/subscription" className="text-sm text-teal-400 hover:text-teal-300 hover:underline">
              Снять ограничения
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="bg-slate-900/50 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Ваш тариф</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-medium">{usageStats.subscription.plan}</p>
                <p className="text-sm text-slate-400 flex items-center mt-1">
                  <Calendar className="mr-1 h-3.5 w-3.5" />
                  Продление: {usageStats.subscription.renewDate}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-teal-900/30 flex items-center justify-center text-teal-400">
                <Clock className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-sm text-slate-400">
              Осталось {usageStats.subscription.daysLeft} дней
            </p>
          </CardFooter>
        </Card>
        
        <Card className="bg-slate-900/50 border-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Статистика</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-lg font-medium">{usageStats.stats.totalChats}</p>
                <p className="text-xs text-slate-400">Чатов</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-medium">{usageStats.stats.totalMessages}</p>
                <p className="text-xs text-slate-400">Сообщений</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-medium flex items-center justify-center">
                  {usageStats.stats.averageRating}
                  <Star className="h-3.5 w-3.5 ml-1 text-amber-400 fill-amber-400" />
                </p>
                <p className="text-xs text-slate-400">Рейтинг</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Link href="/dashboard/history" className="text-sm text-teal-400 hover:text-teal-300 hover:underline">
              Просмотреть историю
            </Link>
          </CardFooter>
        </Card>
      </div>
      
      {/* Recent Chats and Recommended Topics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4 font-fixedsys">Недавние чаты</h2>
          <div className="space-y-4">
            {recentChats.map(chat => (
              <Link href={`/dashboard/chat/${chat.id}`} key={chat.id}>
                <Card className="bg-slate-900/30 border-slate-800 hover:bg-slate-900/50 hover:border-slate-700 transition-all">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-900/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div className="flex-grow overflow-hidden">
                        <h3 className="font-medium text-white truncate">{chat.title}</h3>
                        <p className="text-sm text-slate-400 truncate mt-1">{chat.preview}</p>
                        <div className="flex justify-between mt-2 text-xs text-slate-500">
                          <span>{chat.date}</span>
                          <span>{chat.messages} сообщений</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            
            <Link href="/dashboard/history">
              <Button variant="outline" className="w-full border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900">
                Показать все чаты
              </Button>
            </Link>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4 font-fixedsys">Рекомендуемые темы</h2>
          <Card className="bg-slate-900/30 border-slate-800">
            <CardContent className="p-4">
              <ul className="space-y-3">
                {recommendedTopics.map((topic, index) => (
                  <li key={index}>
                    <Link 
                      href={`/dashboard/chat?topic=${encodeURIComponent(topic)}`}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-800 transition-colors group"
                    >
                      <div className="w-6 h-6 rounded-full bg-teal-900/30 flex items-center justify-center text-teal-400 flex-shrink-0 mt-0.5">
                        <BookOpen className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-slate-300 group-hover:text-white">{topic}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-0 px-4 pb-4">
              <Button className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700">
                <Sparkles className="mr-2 h-4 w-4" />
                Сгенерировать ещё темы
              </Button>
            </CardFooter>
          </Card>
          
          {/* Study Reminder */}
          <Card className="bg-gradient-to-br from-teal-900/20 to-indigo-900/20 border-slate-800 mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2 font-fixedsys">Напоминание</h3>
              <p className="text-slate-300 mb-4">
                До экзамена по кардиологии осталось 14 дней. Продолжайте подготовку!
              </p>
              <Button variant="outline" className="w-full border-slate-700 text-white hover:bg-slate-800">
                <MessageSquare className="mr-2 h-4 w-4" />
                Продолжить подготовку
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

