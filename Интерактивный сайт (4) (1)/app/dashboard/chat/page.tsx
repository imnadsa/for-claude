"use client"

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ChatInterface from '@/components/dashboard/chat-interface'
import { useToast } from "@/components/ui/use-toast"

export default function ChatPage() {
  const searchParams = useSearchParams()
  const initialTopic = searchParams.get('topic')
  const [initialPrompt, setInitialPrompt] = useState(initialTopic || '')
  const [messagesUsed, setMessagesUsed] = useState(15) // Для демонстрации
  const { toast } = useToast()
  
  // Для демонстрации: имитируем получение ограничения сообщений с сервера
  const messagesLimit = 20
  const messagesLeft = messagesLimit - messagesUsed
  
  // Для демонстрации: метод для обработки отправки сообщения
  const handleSendMessage = async (message: string) => {
    // Имитация запроса на сервер
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Увеличиваем количество использованных сообщений
    setMessagesUsed(prev => {
      const newCount = prev + 1
      
      // Показываем уведомление, если осталось мало сообщений
      if (messagesLimit - newCount <= 3 && messagesLimit - newCount > 0) {
        toast({
          title: `Осталось ${messagesLimit - newCount} запросов`,
          description: "При достижении лимита вам нужно будет подождать до завтра или перейти на тариф Pro.",
          variant: "default",
          duration: 5000,
        })
      }
      
      // Показываем уведомление, если достигнут лимит
      if (messagesLimit - newCount === 0) {
        toast({
          title: "Достигнут лимит бесплатных запросов",
          description: "Вы использовали все бесплатные запросы на сегодня. Для продолжения работы с Hippocrat AI перейдите на тариф Pro или дождитесь завтрашнего дня.",
          variant: "destructive",
          duration: 10000,
        })
      }
      
      return newCount
    })
  }
  
  // Эффект для установки начального промпта, если указан в URL
  useEffect(() => {
    if (initialTopic) {
      // Устанавливаем начальный про��пт на основе темы
      setInitialPrompt(`Расскажи подробно о теме: ${initialTopic}`)
    }
  }, [initialTopic])
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1 font-fixedsys">Чат с Hippocrat AI</h1>
        <p className="text-slate-400">Задайте вопрос на медицинскую тему и получите подробный ответ</p>
      </div>

      <ChatInterface
        initialPrompt={initialPrompt}
        isPro={false}
        messagesLimit={messagesLimit}
        messagesLeft={messagesLeft}
        onSendMessage={handleSendMessage}
      />
    </div>
  )
}

