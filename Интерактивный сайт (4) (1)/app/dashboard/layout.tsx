"use client"

import React from 'react'
import SidebarNav from '@/components/dashboard/sidebar-nav'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // В реальном приложении здесь будет проверка авторизации и получение информации о подписке пользователя
  const isPro = true // Для демонстрации
  
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SidebarNav isPro={isPro} />
      
      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Mobile Header Spacer */}
        <div className="h-16 lg:h-0"></div>
        
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </div>
  )
}

