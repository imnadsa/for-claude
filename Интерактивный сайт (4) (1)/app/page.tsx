"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Brain, BookOpen, GraduationCap, CheckCircle2, Menu, X, Sparkles, Beaker, Award } from "lucide-react"
import BrainAnimation from "@/components/brain-animation"
import { useState, useEffect } from "react"
import Logo from "@/components/logo"
import ChatDemo from "@/components/chat-demo"
import Link from "next/link"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showChatDemo, setShowChatDemo] = useState(false)

  // Handle redirection to Telegram bot
  function redirectToTelegramBot() {
    window.open("https://t.me/hippocrat_ai_bot?start=site", "_blank")
  }

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header - Made sticky and responsive */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-950/90 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Tagline - hidden on mobile */}
          <div className="hidden md:block text-center text-sm md:text-base truncate max-w-[200px] lg:max-w-none text-teal-300">
            «Апгрейд для твоего медицинского образования»
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4">
            <Link href="/about">
              <Button variant="outline" className="border-teal-500 text-teal-400 hover:bg-teal-950">
                О проекте
              </Button>
            </Link>
            <Button
              className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700"
              onClick={redirectToTelegramBot}
            >
              Попробовать
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-teal-400">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - содержит слоган */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-lg py-4 animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-4 flex flex-col gap-3">
              <div className="text-center text-sm mb-2 text-teal-300">
                «Апгрейд для твоего медицинского образования»
              </div>
              <Link href="/about" className="w-full">
                <Button variant="outline" className="w-full border-teal-500 text-teal-400 hover:bg-teal-950">
                  О проекте
                </Button>
              </Link>
              <Button
                className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700"
                onClick={redirectToTelegramBot}
              >
                Попробовать
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Adjusted padding for mobile */}
      <section className="container mx-auto px-4 pt-32 pb-16 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 mb-10 md:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <div className="px-3 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-xs flex items-center gap-1">
              <Sparkles size={12} />
              <span>Работает на ИИ</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-fixedsys">
            <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
              Медицинский ИИ, который понимает студента
            </span>
          </h1>
          <p className="text-base md:text-xl text-slate-300">
            Освой сложные медицинские темы быстрее с персональным ИИ-ассистентом, обученным на материалах твоего
            университета
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys"
              onClick={redirectToTelegramBot}
            >
              Попробовать бесплатно
            </Button>
            <Link href="https://t.me/hippocrat_ai_bot?start=site">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-teal-700 text-teal-400 hover:bg-teal-950/50"
              >
                Узнать больше
              </Button>
            </Link>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-slate-800/50 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400 font-fixedsys">95%</div>
              <div className="text-sm text-slate-400">Точность ответов</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400 font-fixedsys">5 сек.</div>
              <div className="text-sm text-slate-400">Среднее время ответа</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-2xl font-bold text-teal-400 font-fixedsys">0 руб.</div>
              <div className="text-sm text-slate-400">Бесплатный старт</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[250px] md:h-[400px] relative">
          <BrainAnimation />
        </div>
      </section>

      {/* Chat Demo Modal */}
      {showChatDemo && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-3xl relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute -top-14 right-0 rounded-full border-slate-700 text-slate-300 hover:text-teal-400 hover:border-teal-500 hover:bg-slate-900/50"
              onClick={() => setShowChatDemo(false)}
            >
              <X size={20} />
            </Button>
            <ChatDemo />
          </div>
        </div>
      )}

      {/* How It Works */}
      <section className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-16">
            <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
              Как это работает
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys">
              Учиться медицине стало проще
            </h2>
            <p className="text-slate-400 text-center max-w-2xl">
              Hippocrat AI разработан специально для студентов-медиков, чтобы помочь освоить сложный материал,
              подготовиться к экзаменам и углубить свои знания
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-slate-800/20 border border-slate-700/30 hover:border-teal-500/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white font-fixedsys">Обучен на учебниках и лекциях</h3>
              <p className="text-slate-400">
                Понимает материалы твоего медвуза и отвечает в соответствии с программой обучения
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-slate-800/20 border border-slate-700/30 hover:border-indigo-500/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400">
                <Brain size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white font-fixedsys">Глубокое понимание медицины</h3>
              <p className="text-slate-400">
                Даёт точные и подробные ответы на сложные медицинские вопросы понятным языком
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-slate-800/20 border border-slate-700/30 hover:border-teal-500/30 transition-colors sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none">
              <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white font-fixedsys">Персональный подход к учёбе</h3>
              <p className="text-slate-400">
                Адаптируется к твоему уровню знаний и помогает эффективно готовиться к экзаменам
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            <div className="w-full md:w-2/5">
              <div className="px-4 py-1 inline-block rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
                Функции
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 font-fixedsys">
                Создан для успешной{" "}
                <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
                  учёбы в медицине
                </span>
              </h2>
              <p className="text-slate-400 mb-8">
                Hippocrat AI помогает не только находить ответы, но и глубже понимать медицинские концепции, запоминать
                термины и готовиться к экзаменам эффективнее.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-900/50 flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle2 size={14} className="text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white font-fixedsys">Объяснение сложных тем</h4>
                    <p className="text-slate-400 text-sm">Разбирает трудные концепции простым языком</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-900/50 flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle2 size={14} className="text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white font-fixedsys">Подготовка к экзаменам</h4>
                    <p className="text-slate-400 text-sm">Создаёт тесты и вопросы для самопроверки</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-900/50 flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle2 size={14} className="text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white font-fixedsys">Медицинские конспекты</h4>
                    <p className="text-slate-400 text-sm">Генерирует структурированные конспекты по любой теме</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/5">
              <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-indigo-500/10"></div>
                <div className="p-1">
                  <div className="bg-slate-900 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                      </div>
                      <div className="text-xs text-slate-500 text-center w-full font-fixedsys">Hippocrat AI Чат</div>
                    </div>

                    <div className="space-y-4 p-2">
                      <div className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400 flex-shrink-0">
                          ТЫ
                        </div>
                        <div className="bg-slate-800 rounded-lg p-3 text-slate-300 text-sm">
                          Объясни мне, пожалуйста, механизм действия бета-блокаторов и их применение при гипертонии.
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 flex items-center justify-center text-xs text-white flex-shrink-0">
                          AI
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 text-slate-300 text-sm">
                          <p className="mb-2 font-fixedsys">
                            <strong>Механизм действия бета-блокаторов:</strong>
                          </p>
                          <p className="mb-2">
                            Бета-блокаторы конкурентно связываются с бета-адренорецепторами и блокируют действие
                            катехоламинов (адреналина и норадреналина).
                          </p>
                          <p className="mb-2">
                            При блокаде <span className="text-teal-400">β1-рецепторов в сердце</span> снижается:
                          </p>
                          <ul className="list-disc pl-5 mb-2 space-y-1">
                            <li>Частота сердечных сокращений</li>
                            <li>Сила сердечных сокращений</li>
                            <li>Скорость проведения импульса</li>
                          </ul>
                          <p>
                            Эти эффекты приводят к{" "}
                            <span className="text-teal-400">снижению артериального давления</span> и уменьшению
                            потребности миокарда в кислороде.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
              </div>

              {/* Добавляем кнопку для демонстрации чата */}
              <div className="mt-6 text-center">
                <Button
                  className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700"
                  onClick={redirectToTelegramBot}
                >
                  Попробовать чат
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison - Responsive table */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col items-center mb-12">
          <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Сравнение
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys">
            Hippocrat AI vs ChatGPT
          </h2>
          <p className="text-slate-400 text-center max-w-2xl">
            Обычные ИИ могут давать общие ответы, но Hippocrat AI создан специально для медицинского образования
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-lg border border-slate-800">
          <Table className="border-collapse overflow-hidden min-w-full">
            <TableHeader className="bg-slate-900">
              <TableRow className="border-b border-slate-800">
                <TableHead className="text-slate-300 w-1/3 py-4 px-6">Характеристика</TableHead>
                <TableHead className="text-teal-400 py-4 px-6 font-fixedsys">Hippocrat AI</TableHead>
                <TableHead className="text-slate-400 py-4 px-6">ChatGPT</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-slate-900/50 border-b border-slate-800">
                <TableCell className="font-medium py-4 px-6">Медицинская точность</TableCell>
                <TableCell className="text-teal-400 py-4 px-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>Высокая (обучен на медицинской литературе)</span>
                  </div>
                </TableCell>
                <TableCell className="text-slate-400 py-4 px-6">Средняя (общие знания)</TableCell>
              </TableRow>
              <TableRow className="hover:bg-slate-900/50 border-b border-slate-800">
                <TableCell className="font-medium py-4 px-6">Понимание контекста</TableCell>
                <TableCell className="text-teal-400 py-4 px-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>Специализированный медицинский контекст</span>
                  </div>
                </TableCell>
                <TableCell className="text-slate-400 py-4 px-6">Общий контекст</TableCell>
              </TableRow>
              <TableRow className="hover:bg-slate-900/50 border-b border-slate-800">
                <TableCell className="font-medium py-4 px-6">Неточности</TableCell>
                <TableCell className="text-teal-400 py-4 px-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>Минимальные (проверенные источники)</span>
                  </div>
                </TableCell>
                <TableCell className="text-slate-400 py-4 px-6">Частые в специализированных темах</TableCell>
              </TableRow>
              <TableRow className="hover:bg-slate-900/50">
                <TableCell className="font-medium py-4 px-6">Актуальность информации</TableCell>
                <TableCell className="text-teal-400 py-4 px-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>Современные медицинские данные</span>
                  </div>
                </TableCell>
                <TableCell className="text-slate-400 py-4 px-6">Ограниченная дата обучения</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Testimonials - Responsive grid */}
      <section className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
              Отзывы
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys">
              Студенты о Hippocrat AI
            </h2>
            <p className="text-slate-400 text-center max-w-2xl">
              Узнай, как Hippocrat AI помогает будущим врачам учиться эффективнее
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
            <Card className="bg-slate-800/20 border border-slate-700/30 hover:border-teal-500/30 transition-all shadow-lg hover:shadow-teal-900/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-teal-500 to-teal-700 flex items-center justify-center text-white">
                    <span className="font-bold">М</span>
                  </div>
                  <div>
                    <p className="font-semibold font-fixedsys">Мария</p>
                    <p className="text-sm text-slate-400">Студентка 3 курса</p>
                  </div>
                </div>
                <p className="text-slate-300">
                  Напишите Ваш отзыв о Hippocrat AI после использования и напишите нам в поддержку, а мы выставим его
                  сюда)
                </p>
                <div className="flex mt-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-teal-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/20 border border-slate-700/30 hover:border-indigo-500/30 transition-all shadow-lg hover:shadow-indigo-900/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-700 flex items-center justify-center text-white">
                    <span className="font-bold">С</span>
                  </div>
                  <div>
                    <p className="font-semibold font-fixedsys">София</p>
                    <p className="text-sm text-slate-400">Студент 1 курса</p>
                  </div>
                </div>
                <p className="text-slate-300">«Здесь мог бы быть Ваш отзыв.»</p>
                <div className="flex mt-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/20 border border-slate-700/30 hover:border-teal-500/30 transition-all shadow-lg hover:shadow-teal-900/20 sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-teal-500 to-teal-700 flex items-center justify-center text-white">
                    <span className="font-bold">В</span>
                  </div>
                  <div>
                    <p className="font-semibold font-fixedsys">Вероника</p>
                    <p className="text-sm text-slate-400">Студентка 1 курса</p>
                  </div>
                </div>
                <p className="text-slate-300">«Напишите Ваш отзыв о Hippocrat AI.»</p>
                <div className="flex mt-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-teal-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col items-center mb-12">
          <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Тарифы
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys">
            Выбери подходящий план
          </h2>
          <p className="text-slate-400 text-center max-w-2xl">
            Начни бесплатно и выбери тариф, который подходит именно тебе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 flex flex-col hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/10 transition-all">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white font-fixedsys">Начальный</h3>
              <p className="text-slate-400 text-sm">Для пробы</p>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white font-fixedsys">Бесплатно</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">До 20 вопросов в день</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Доступ к основным темам</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Базовая помощь в обучении</span>
              </li>
            </ul>
            <Button
              variant="outline"
              className="w-full border-teal-500 text-teal-400 hover:bg-teal-950/50 font-fixedsys"
              onClick={redirectToTelegramBot}
            >
              Попробовать бесплатно
            </Button>
          </div>

          <div className="bg-gradient-to-b from-slate-800/80 to-slate-900/80 rounded-xl border border-teal-500/30 p-6 flex flex-col relative shadow-lg shadow-teal-900/10 md:scale-105 z-10">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 text-white text-xs font-medium font-fixedsys">
              Популярный выбор
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white font-fixedsys">Стандартный</h3>
              <p className="text-slate-400 text-sm">Для активного обучения</p>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white font-fixedsys">299₽</span>
              <span className="text-slate-400 text-sm"> / месяц</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Безлимитные вопросы</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Доступ ко всем медицинским темам</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Создание конспектов</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Подготовка к экзаменам</span>
              </li>
            </ul>
            <Button
              className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 font-fixedsys"
              onClick={redirectToTelegramBot}
            >
              Выбрать тариф
            </Button>
          </div>

          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 flex flex-col hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-900/10 transition-all">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white font-fixedsys">Премиум</h3>
              <p className="text-slate-400 text-sm">Для будущих профессионалов</p>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white font-fixedsys">499₽</span>
              <span className="text-slate-400 text-sm"> / месяц</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
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
            <Button
              variant="outline"
              className="w-full border-indigo-500 text-indigo-400 hover:bg-indigo-950/50 font-fixedsys"
              onClick={redirectToTelegramBot}
            >
              Выбрать тариф
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
              Начни прямо сейчас
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-fixedsys">
              Твой персональный{" "}
              <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
                медицинский наставник
              </span>{" "}
              в кармане
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-12">
              Присоединяйся к тысячам студентов-медиков, которые уже улучшили свою учебу с Hippocrat AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg px-8 font-fixedsys"
                onClick={redirectToTelegramBot}
              >
                Начать бесплатно
              </Button>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-teal-700 text-teal-400 hover:bg-teal-950/50">
                  О возможностях
                </Button>
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <Award className="text-teal-400" size={20} />
                <span className="text-slate-300 text-sm">Высокая квалификация</span>
              </div>
              <div className="flex items-center gap-2">
                <Beaker className="text-teal-400" size={20} />
                <span className="text-slate-300 text-sm">Научная и студенческая литература</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="text-teal-400" size={20} />
                <span className="text-slate-300 text-sm">Регулярные обновления</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <Logo size="sm" />
            </div>

            <div className="flex flex-wrap justify-center md:flex-row gap-8 md:gap-16 mb-6 md:mb-0">
              <div className="w-full sm:w-auto">
                <h3 className="font-semibold mb-3 text-center sm:text-left text-white font-fixedsys">Контакты</h3>
                <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer">
                  info@hippocrat.ai
                </p>
                <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer">
                  +7 (977) 100-44-19
                </p>
              </div>

              <div className="w-full sm:w-auto">
                <h3 className="font-semibold mb-3 text-center sm:text-left text-white font-fixedsys">О проекте</h3>
                <Link href="/about">
                  <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer">
                    О создателях
                  </p>
                </Link>
                <Link href="https://t.me/hippocrat_ai_bot?start=site" target="_blank" rel="noopener noreferrer">
                  <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer">
                    Блог
                  </p>
                </Link>
                <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer">
                  Сотрудничество
                </p>
              </div>

              <div className="w-full sm:w-auto">
                <h3 className="font-semibold mb-3 text-center sm:text-left text-white font-fixedsys">
                  Правовая информация
                </h3>
                <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer">
                  Условия использования
                </p>
                <Link href="/privacy-policy">
                  <p className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer">
                    Политика конфиденциальности
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex gap-4">
              {/* Telegram кнопка */}
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-700 text-slate-400 hover:text-teal-400 hover:border-teal-500"
                onClick={() => window.open("https://t.me/hippocrat_ai_bot?start=site", "_blank")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.44-1.17.43-.39-.01-1.13-.22-1.67-.4-.68-.23-1.22-.35-1.17-.74.02-.2.3-.4.81-.6 3.15-1.37 5.26-2.27 6.33-2.71 3.02-1.24 3.65-1.46 4.06-1.46.09 0 .29.02.42.12.11.07.18.21.21.33.03.14.05.27.03.43z"
                  />
                </svg>
              </Button>

              {/* VK кнопка */}
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-700 text-slate-400 hover:text-teal-400 hover:border-teal-500"
                onClick={() => window.open("https://vk.com/hippocrat", "_blank")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    fill="currentColor"
                    d="M20.44 7.8c.14-.48 0-.84-.66-.84h-2.2c-.56 0-.81.3-.95.62 0 0-1.11 2.69-2.68 4.43-.51.51-.74.67-1.02.67-.14 0-.34-.16-.34-.64V7.8c0-.56-.16-.84-.63-.84H9.03c-.35 0-.56.26-.56.5 0 .53.79.65.87 2.14v3.23c0 .7-.13.83-.41.83-.74 0-2.54-2.7-3.6-5.8-.21-.6-.42-.84-.98-.84h-2.2c-.63 0-.75.3-.75.62 0 .58.74 3.47 3.47 7.3C6.85 17.3 9.4 18.5 11.7 18.5c1.38 0 1.55-.31 1.55-.84v-1.95c0-.62.13-.74.57-.74.32 0 .88.16 2.17 1.4 1.48 1.48 1.72 2.13 2.55 2.13h2.2c.63 0 .94-.31.76-.92-.2-.61-.9-1.5-1.83-2.55-.51-.6-1.27-1.24-1.5-1.56-.32-.42-.23-.6 0-.97 0 0 2.65-3.73 2.93-5z"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            © 2025 Hippocrat AI. Все права защищены.
            <div className="text-xs text-slate-500 mt-2">
              Fonts made from{" "}
              <a href="http://www.onlinewebfonts.com" className="text-teal-400 hover:underline">
                Web Fonts
              </a>{" "}
              is licensed by CC BY 4.0
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

