"use client"

import { Button } from "@/components/ui/button"
import { Brain, Users, BookOpen, GraduationCap, ArrowLeft } from "lucide-react"
import Logo from "@/components/logo"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  // Function to handle external links
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-slate-950/90 backdrop-blur-sm shadow-md py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Logo size="md" />
          <div className="hidden md:block text-center text-sm md:text-base truncate max-w-[200px] lg:max-w-none text-teal-300">
            «Апгрейд для твоего медицинского образования»
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="border-teal-500 text-teal-400 hover:bg-teal-950"
              onClick={() => router.push("/")}
            >
              На главную
            </Button>
            <Button
              className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700"
              onClick={() => openExternalLink("https://t.me/hippocrat_ai_bot?start=site")}
            >
              Попробовать
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" className="text-slate-400 hover:text-teal-400 pl-0" onClick={() => router.push("/")}>
            <ArrowLeft size={16} className="mr-2" />
            Вернуться на главную
          </Button>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 font-fixedsys">
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              О проекте Hippocrat AI
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl">
            Мы создаем инновационного ИИ-ассистента, который помогает студентам-медикам учиться эффективнее и глубже
            понимать сложные медицинские концепции
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="px-4 py-1 inline-block rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
                Наша миссия
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 font-fixedsys">
                Сделать медицинское образование{" "}
                <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
                  доступнее и эффективнее
                </span>
              </h2>
              <p className="text-slate-300 mb-6">
                Мы верим, что технологии искусственного интеллекта могут значительно улучшить процесс обучения в
                медицинских вузах, помогая студентам быстрее осваивать сложный материал и лучше готовиться к экзаменам.
              </p>
              <p className="text-slate-300">
                Hippocrat AI создан командой медиков и разработчиков, которые объединили свои знания и опыт, чтобы
                создать инструмент, который действительно понимает потребности студентов-медиков.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-4">
                    <Brain size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-fixedsys">Инновационные технологии</h3>
                  <p className="text-slate-400 text-sm">
                    Используем передовые модели ИИ, обученные на медицинской литературе
                  </p>
                </div>
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-fixedsys">Команда экспертов</h3>
                  <p className="text-slate-400 text-sm">Разработано медиками и программистами с опытом в образовании</p>
                </div>
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-4">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-fixedsys">Качественный контент</h3>
                  <p className="text-slate-400 text-sm">Основано на проверенных медицинских источниках и учебниках</p>
                </div>
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-4">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-fixedsys">Фокус на образовании</h3>
                  <p className="text-slate-400 text-sm">Создано специально для студентов медицинских вузов</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="px-4 py-1 inline-block rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
              Наша команда
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
              <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
                Люди за проектом
              </span>
            </h2>
            <p className="text-slate-300">
              Мы - команда энтузиастов, объединенных идеей улучшить медицинское образование с помощью современных
              технологий
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 w-full sm:w-[calc(50%-1rem)] hover:border-teal-500/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-teal-500 to-teal-700 flex items-center justify-center text-white text-xl font-bold">
                  А
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-fixedsys">Александр Антошкин</h3>
                  <p className="text-slate-400 text-sm">CEO</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm">
                Студент 1 курса ПМГМУ им. И. М. Сеченова. Разработчик с опытом интеграции ИИ-технологий в различные
                медицинские сферы.
              </p>
              <div className="mt-4 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-teal-700 text-teal-400 hover:bg-teal-950/50"
                  onClick={() => openExternalLink("https://t.me/imnadsa")}
                >
                  Связаться
                </Button>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 w-full sm:w-[calc(50%-1rem)] hover:border-indigo-500/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-700 flex items-center justify-center text-white text-xl font-bold">
                  А
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-fixedsys">Александр Кухто</h3>
                  <p className="text-slate-400 text-sm">CTO</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm">
                Студент 1 курса ПМГМУ им. И. М. Сеченова. Разработчик с опытом в создании образовательных платформ и
                интеграции ИИ-технологий в различные медицинские сферы.
              </p>
              <div className="mt-4 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-indigo-700 text-indigo-400 hover:bg-indigo-950/50"
                  onClick={() => openExternalLink("https://t.me/crazyponchik")}
                >
                  Связаться
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="px-4 py-1 inline-block rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
              Контакты
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
              <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
                Свяжитесь с нами
              </span>
            </h2>
            <p className="text-slate-300">
              Есть вопросы или предложения? Мы всегда открыты для общения и сотрудничества
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 font-fixedsys">Контактная информация</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-400 text-sm">Email:</p>
                    <p className="text-teal-400">info@hippocrat.ru</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Telegram:</p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-teal-400 hover:text-teal-300"
                      onClick={() => openExternalLink("https://t.me/hippocrat_ai_bot?start=site")}
                    >
                      @hippocrat_ai_bot
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 font-fixedsys">Для сотрудничества</h3>
                <p className="text-slate-300 mb-4">
                  Мы открыты для сотрудничества с медицинскими вузами, издательствами учебной литературы и
                  образовательными платформами.
                </p>
                <Button
                  className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700"
                  onClick={() => openExternalLink("https://t.me/hippocrat_ai_bot?start=site")}
                >
                  Обсудить сотрудничество
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 mt-20">
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
              </div>

              <div className="w-full sm:w-auto">
                <h3 className="font-semibold mb-3 text-center sm:text-left text-white font-fixedsys">О проекте</h3>
                <p
                  className="text-slate-400 text-sm text-center sm:text-left hover:text-teal-400 transition-colors cursor-pointer"
                  onClick={() => router.push("/about")}
                >
                  О создателях
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto text-slate-400 text-sm hover:text-teal-400"
                  onClick={() => openExternalLink("https://t.me/hippocrat_ai_bot?start=site")}
                >
                  Блог
                </Button>
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
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            © 2025 Hippocrat AI. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}

