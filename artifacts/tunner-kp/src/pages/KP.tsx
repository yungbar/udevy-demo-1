import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Database,
  UserCircle,
  CreditCard,
  Bot,
  Search,
  CheckCircle2,
  Cpu,
  Layers,
  Timer,
  XCircle,
  FileText,
  ShieldCheck,
  TrendingUp,
  Activity,
  Zap
} from "lucide-react";

export default function KP() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20 pb-20">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vh] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block border border-primary/30 bg-primary/5 px-4 py-1.5 rounded-full text-primary text-sm font-mono uppercase tracking-wider mb-8">
              Коммерческое предложение
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-tight mb-6">
              TUNNER <span className="text-primary">/</span> TNR
            </h1>
            
            <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl leading-relaxed mb-12 font-medium">
              Разработка B2C-маркетплейса спортивного питания на платформе 1С-Битрикс «Бизнес»
            </p>

            <div className="flex flex-col sm:flex-row gap-6 text-sm font-mono text-muted-foreground uppercase tracking-wider border-t border-border pt-8">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                Апрель 2026 г.
              </div>
              <div className="hidden sm:block text-border">/</div>
              <div className="flex items-center gap-2">
                <UserCircle className="w-4 h-4 text-primary" />
                Исполнитель: Fullstack-разработчик
              </div>
              <div className="hidden sm:block text-border">/</div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                Клиент: Фуд Инновация
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Project */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-card/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">О проекте</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
              Создание полноценного B2C-маркетплейса для брендов TUNNER и TNR. Цель проекта — не просто каталог товаров, а <span className="text-foreground font-semibold">развитая экосистема бренда</span> с персонализированным подходом к каждому клиенту, умным подбором питания и цифровыми продуктами.
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Database, title: "Сложное ценообразование", desc: "Матрица цен (опт/розница/персональные) и точный учёт остатков по складам." },
              { icon: UserCircle, title: "Умный Личный кабинет", desc: "Тестирование пользователей и формирование персонального плана питания и тренировок." },
              { icon: CreditCard, title: "Цифровые продукты", desc: "Платная подписка на гайды, рецепты и эксклюзивные консультации нутрициологов." },
              { icon: Bot, title: "ИИ-консультант", desc: "Бот на базе Gemini/Perplexity API, глубоко обученный на базе знаний компании." },
              { icon: Search, title: "Продвинутое SEO", desc: "Стратегия E-E-A-T: привязка статей к профилям реальных врачей через Schema.org." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Platform Choice & 4. Licenses */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <Cpu className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Выбор платформы</h2>
              </div>
              <p className="text-xl font-medium mb-6">1С-Битрикс «Бизнес» + Аспро: Максимум</p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Сокращение бюджета на ~700 000–900 000 ₽ за счёт готовой архитектуры интернет-магазина.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Наличие готовых модулей для B2C-маркетплейса.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Глубокая кастомизация визуала под ваш премиальный брендбук.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-card rounded-3xl p-8 border border-border">
              <div className="flex items-center gap-4 mb-8">
                <ShieldCheck className="w-7 h-7 text-primary" />
                <h3 className="text-2xl font-bold">Лицензии ПО</h3>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="text-muted-foreground">1С-Битрикс «Бизнес»</span>
                  <span className="font-mono">96 500 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="text-muted-foreground">Шаблон «Аспро: Максимум»</span>
                  <span className="font-mono">149 900 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3 text-sm text-muted-foreground/70">
                  <span>Продление (со 2-го года)</span>
                  <span className="font-mono">24 125 ₽/год</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-border">
                <span className="text-lg font-bold">Итого лицензии:</span>
                <span className="text-2xl font-bold text-primary font-mono">270 525 ₽</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Work Blocks */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-card/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Состав работ</h2>
              <p className="text-muted-foreground">Детализация этапов разработки и интеграций.</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Ставка</p>
              <p className="text-xl font-mono text-primary">3 500 ₽ / час</p>
            </div>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-border/50 text-sm uppercase tracking-wider text-muted-foreground">
                  <th className="py-4 px-4 font-medium">Задача</th>
                  <th className="py-4 px-4 font-medium text-right w-24">Часы</th>
                  <th className="py-4 px-4 font-medium text-right w-32">Стоимость</th>
                </tr>
              </thead>
              <motion.tbody 
                variants={stagger}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="font-mono text-sm"
              >
                {[
                  ["Установка и настройка платформы", 12, "42 000 ₽"],
                  ["Кастомизация дизайна под брендбук", 32, "112 000 ₽"],
                  ["Доработка карточки товара", 20, "70 000 ₽"],
                  ["Личный кабинет — тест-модуль", 40, "140 000 ₽"],
                  ["Личный кабинет — персональные планы", 60, "210 000 ₽"],
                  ["Платная подписка на контент", 50, "175 000 ₽"],
                  ["Бонусная и реферальная программа", 30, "105 000 ₽"],
                  ["Сложное ценообразование (опт/розница)", 24, "84 000 ₽"],
                  ["ИИ-бот (Gemini/Perplexity API)", 30, "105 000 ₽"],
                  ["SEO: Schema.org и микроразметка", 12, "42 000 ₽"],
                  ["Интеграция логистики (СДЭК, Яндекс)", 16, "56 000 ₽"],
                  ["Доработка интеграции с 1С", 16, "56 000 ₽"],
                  ["Триггерные сценарии и рассылки", 14, "49 000 ₽"],
                  ["QA тестирование и деплой", 20, "70 000 ₽"]
                ].map(([task, hours, price], i) => (
                  <motion.tr key={i} variants={fadeInUp} className="border-b border-border/30 hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 font-sans font-medium">{task}</td>
                    <td className="py-4 px-4 text-right text-muted-foreground">{hours}</td>
                    <td className="py-4 px-4 text-right">{price}</td>
                  </motion.tr>
                ))}
              </motion.tbody>
              <tfoot>
                <tr className="border-t-2 border-border font-bold">
                  <td className="py-6 px-4 font-sans text-lg">Итого за разработку</td>
                  <td className="py-6 px-4 text-right text-muted-foreground">376</td>
                  <td className="py-6 px-4 text-right text-primary text-xl">1 316 000 ₽</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Total Summary */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Zap className="w-64 h-64" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-10 relative z-10">Сводная стоимость</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-border/50">
                  <span className="text-muted-foreground">Лицензии ПО</span>
                  <span className="font-mono font-medium">270 525 ₽</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border/50">
                  <span className="text-muted-foreground">Разработка</span>
                  <span className="font-mono font-medium">1 316 000 ₽</span>
                </div>
                <div className="flex justify-between items-end pt-4">
                  <span className="text-xl font-bold">ИТОГО <span className="text-sm font-normal text-muted-foreground">(без НДС)</span></span>
                  <span className="text-4xl font-bold text-primary font-mono tracking-tight">1 586 525 ₽</span>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-6 border border-border">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary" />
                  Разбивка по этапам
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">MVP (Этап 1) ~60%</span>
                      <span className="font-mono">951 915 ₽</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[60%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Доработки (Этап 2) ~40%</span>
                      <span className="font-mono">634 610 ₽</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary/40 w-[40%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Timeline */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-card/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <Timer className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Этапы и график</h2>
            <p className="text-xl text-muted-foreground">Общий срок реализации: ~3 месяца</p>
          </motion.div>

          <div className="relative border-l border-border/50 ml-4 md:ml-8 space-y-12 pb-8">
            {[
              { phase: "Этап 1", title: "Инфраструктура + каталог", time: "2–3 нед.", pay: "30% оплаты" },
              { phase: "Этап 2", title: "Личный кабинет + подписка", time: "4–6 нед.", pay: "40% оплаты" },
              { phase: "Этап 3", title: "Интеграции + маркетинг", time: "3–4 нед.", pay: "20% оплаты" },
              { phase: "Этап 4", title: "Тест и запуск", time: "1–2 нед.", pay: "10% оплаты" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold"><span className="text-primary mr-2">{step.phase}:</span> {step.title}</h3>
                    <div className="flex gap-3 text-sm font-mono bg-background px-3 py-1.5 rounded-lg border border-border">
                      <span className="text-muted-foreground">{step.time}</span>
                      <span className="text-border">/</span>
                      <span className="text-foreground">{step.pay}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 & 9. Restrictions and Terms */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div {...fadeInUp}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              Порядок расчетов
            </h3>
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 text-right font-mono font-bold text-primary">30%</div>
                <div className="text-muted-foreground">Предоплата</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 text-right font-mono font-bold text-primary">40%</div>
                <div className="text-muted-foreground">По завершению Этапа 2</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 text-right font-mono font-bold text-primary">20%</div>
                <div className="text-muted-foreground">По завершению Этапа 3</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 text-right font-mono font-bold text-primary">10%</div>
                <div className="text-muted-foreground">После деплоя на Prod</div>
              </div>
              <div className="pt-4 mt-2 border-t border-border/50 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium">Гарантийная поддержка: 2 месяца</span>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <XCircle className="w-6 h-6 text-destructive" />
              Что не входит в смету
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Хостинг и серверная инфраструктура",
                "Наполнение товарами, фото, описаниями",
                "SEO-продвижение после запуска",
                "Разработка мобильного приложения",
                "Интеграция со сквозной аналитикой (Roistat)",
                "Дизайн логотипов, иллюстраций, видеоматериалов"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-border mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* 10. Footer / CTA */}
      <footer className="py-16 px-6 border-t border-border bg-card text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <motion.div {...fadeInUp} className="w-full">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Готовы начать?</h2>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 mb-12 flex items-center justify-center gap-2 mx-auto shadow-xl shadow-primary/20">
              Обсудить проект
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-muted-foreground font-mono">
              <p>КП действительно 30 дней с даты выставления</p>
              <div className="hidden md:block text-border">•</div>
              <p>Исполнитель: Fullstack-разработчик</p>
              <div className="hidden md:block text-border">•</div>
              <p>Апрель 2026 г.</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
