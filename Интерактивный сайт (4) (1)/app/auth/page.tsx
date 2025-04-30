"use client"

import React from 'react';
import AuthForm from '@/components/auth-form';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        {/* Декоративные элементы - медицинские символы */}
        <div className="absolute top-20 left-[10%] w-64 h-64 opacity-5">
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path
              fill="currentColor"
              d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6.5A5.5,5.5 0 0,1 17.5,12A5.5,5.5 0 0,1 12,17.5A5.5,5.5 0 0,1 6.5,12A5.5,5.5 0 0,1 12,6.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
            />
          </svg>
        </div>
        <div className="absolute bottom-20 right-[10%] w-64 h-64 opacity-5">
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path
              fill="currentColor"
              d="M10.5,15.97L10.91,18.41C10.65,18.55 10.23,18.68 9.67,18.8C9.1,18.93 8.43,19 7.66,19C5.45,18.96 3.79,18.3 2.68,17.04C1.56,15.77 1,14.16 1,12.21C1.05,9.9 1.72,8.13 3,6.89C4.32,5.64 5.96,5 7.94,5C8.69,5 9.34,5.07 9.88,5.19C10.42,5.31 10.82,5.44 11.08,5.59L10.5,8.08L9.44,7.74C9.04,7.64 8.58,7.59 8.05,7.59C6.89,7.58 5.93,7.95 5.18,8.69C4.42,9.42 4.03,10.54 4,12.03C4,13.39 4.37,14.45 5.08,15.23C5.79,16 6.79,16.4 8.07,16.41L9.4,16.29L10.5,15.97M20.5,17.97L20.91,20.41C20.65,20.55 20.23,20.68 19.67,20.8C19.1,20.93 18.43,21 17.66,21C15.45,20.96 13.79,20.3 12.68,19.04C11.56,17.77 11,16.16 11,14.21C11.05,11.9 11.72,10.13 13,8.89C14.32,7.64 15.96,7 17.94,7C18.69,7 19.34,7.07 19.88,7.19C20.42,7.31 20.82,7.44 21.08,7.59L20.5,10.08L19.44,9.74C19.04,9.64 18.58,9.59 18.05,9.59C16.89,9.58 15.93,9.95 15.18,10.69C14.42,11.42 14.03,12.54 14,14.03C14,15.39 14.37,16.45 15.08,17.23C15.79,18 16.79,18.4 18.07,18.41L19.4,18.29L20.5,17.97M9,12H15V11H9V12Z"
            />
          </svg>
        </div>
      </div>
      
      {/* Верхняя навигация */}
      <header className="container mx-auto p-4">
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-teal-400 pl-0">
            <ArrowLeft size={16} className="mr-2" />
            Вернуться на главную
          </Button>
        </Link>
      </header>
      
      {/* Основное содержимое */}
      <main className="flex-1 flex items-center justify-center p-4">
        <AuthForm />
      </main>
      
      {/* Подвал с информацией */}
      <footer className="container mx-auto p-4 text-center text-xs text-slate-500">
        <p>
          Продолжая, вы соглашаетесь с{" "}
          <Link href="#" className="text-teal-400 hover:underline">
            Условиями использования
          </Link>{" "}
          и{" "}
          <Link href="#" className="text-teal-400 hover:underline">
            Политикой конфиденциальности
          </Link>
        </p>
      </footer>
    </div>
  );
}

