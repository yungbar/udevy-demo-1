import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Star,
  Zap,
  ShieldCheck,
  Truck,
  Users,
  Dumbbell,
  Activity,
  Flame,
  Pill,
  CalendarDays,
  Heart,
  ChevronRight,
  MessageSquare,
  CheckCircle2,
  BrainCircuit
} from "lucide-react";

export default function KP() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Каталог", href: "/catalog" },
    { name: "Питание", href: "/nutrition" },
    { name: "Тренировки", href: "/workouts" },
    { name: "Подписка", href: "/subscribe" },
    { name: "Блог", href: "/blog" },
    { name: "О бренде", href: "/about" },
  ];

  const categories = [
    { name: "Протеин", icon: Dumbbell, href: "/catalog/protein" },
    { name: "BCAA", icon: Activity, href: "/catalog/bcaa" },
    { name: "Pre-workout", icon: Zap, href: "/catalog/pre-workout" },
    { name: "Батончики", icon: Flame, href: "/catalog/bars" },
    { name: "Витамины", icon: Pill, href: "/catalog/vitamins" },
    { name: "Жиросжигатели", icon: Flame, href: "/catalog/fat-burners" },
    { name: "Комплексы", icon: Activity, href: "/catalog/complexes" },
    { name: "Подписка", icon: CalendarDays, href: "/subscribe" },
  ];

  const products = [
    {
      id: 1,
      name: "TUNNER Whey Pro",
      category: "Протеин",
      nutrition: "Б: 28г / Ж: 2г / У: 4г / Ккал: 145",
      flavors: ["bg-[#3b2b20]", "bg-[#f3e5ab]", "bg-[#e890a8]"],
      price: "2 490 ₽",
      oldPrice: "2 990 ₽",
      badge: "Хит продаж"
    },
    {
      id: 2,
      name: "TNR BCAA 8:1:1",
      category: "BCAA",
      nutrition: "Б: 0г / Ж: 0г / У: 0г / Ккал: 5",
      flavors: ["bg-[#bcfd4c]", "bg-[#ff4d4d]", "bg-[#33ccff]"],
      price: "1 890 ₽",
      oldPrice: "2 190 ₽",
      badge: "Новинка"
    },
    {
      id: 3,
      name: "TUNNER Pre-Workout Blast",
      category: "Pre-workout",
      nutrition: "Кофеин: 200мг / Таурин: 1г / Цитруллин: 3г",
      flavors: ["bg-[#ff4d4d]", "bg-[#33ccff]"],
      price: "2 190 ₽",
      oldPrice: "2 590 ₽",
      badge: "Хит продаж"
    },
    {
      id: 4,
      name: "TNR Protein Bar",
      category: "Батончики",
      nutrition: "Б: 20г / Ж: 8г / У: 4г / Ккал: 180",
      flavors: ["bg-[#3b2b20]", "bg-[#e890a8]"],
      price: "190 ₽",
      oldPrice: "250 ₽",
      badge: ""
    }
  ];

  const usps = [
    {
      title: "Персональный план",
      desc: "Нутрициолог составит программу под твои цели",
      icon: User
    },
    {
      title: "ИИ-консультант",
      desc: "Бот, обученный на базе знаний TUNNER, отвечает на вопросы 24/7",
      icon: BrainCircuit
    },
    {
      title: "Умная корзина",
      desc: "Подсказки: добавь продукт до бесплатной доставки, комбо-скидки",
      icon: ShoppingCart
    },
    {
      title: "Качество",
      desc: "Без скрытых добавок, честный состав, контроль производства",
      icon: ShieldCheck
    }
  ];

  const articles = [
    {
      title: "Как рассчитать норму белка: методика спортивных нутрициологов",
      author: "Д-р Анна Соколова",
      role: "нутрициолог",
      time: "5 мин читать",
      initial: "АС"
    },
    {
      title: "BCAA vs EAA: что выбрать и почему это важно",
      author: "Алексей Громов",
      role: "спортивный врач",
      time: "7 мин читать",
      initial: "АГ"
    },
    {
      title: "Протокол восстановления после силовых тренировок",
      author: "Марина Белова",
      role: "диетолог",
      time: "6 мин читать",
      initial: "МБ"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary selection:text-black">
      
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-end gap-1.5 group cursor-pointer" data-testid="link-home">
              <span className="text-3xl font-black tracking-tighter uppercase text-white group-hover:text-primary transition-colors">
                TUNNER
              </span>
              <span className="text-sm font-bold text-primary mb-1 tracking-widest hidden sm:block">
                TNR
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-white transition-colors cursor-pointer"
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center gap-4">
              <button className="text-white hover:text-primary transition-colors" data-testid="btn-search">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-primary transition-colors relative group" data-testid="btn-cart">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-2 bg-primary text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  2
                </span>
              </button>
              <button className="text-white hover:text-primary transition-colors" data-testid="btn-profile">
                <User className="w-5 h-5" />
              </button>
            </div>
            
            <button className="hidden md:flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/5 text-white text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all" data-testid="btn-login">
              Войти
            </button>

            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="btn-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col lg:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-black uppercase tracking-wider text-white"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <button className="flex items-center gap-3 text-white" data-testid="btn-mobile-search">
                  <Search className="w-6 h-6" />
                  <span className="font-bold uppercase">Поиск</span>
                </button>
                <button className="flex items-center gap-3 text-white relative" data-testid="btn-mobile-cart">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-1.5 -left-1.5 bg-primary text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
                  <span className="font-bold uppercase">Корзина</span>
                </button>
              </div>
              <button className="w-full bg-primary text-black font-black uppercase tracking-wider py-4 rounded-xl mt-4" data-testid="btn-mobile-login">
                Войти в профиль
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0a0a0c]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-background to-background" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#1a1a24] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWMGgtMXYzOS41SDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9zdmc+')] opacity-50" />
        </div>

        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 flex flex-col items-start justify-center grow">
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] right-[15%] bg-background/60 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl"
            >
              <div className="text-primary font-black text-3xl tracking-tighter">30г</div>
              <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-1">белка</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[45%] right-[5%] bg-background/60 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl"
            >
              <div className="text-white font-black text-3xl tracking-tighter">0г</div>
              <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-1">сахара</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[30%] right-[25%] bg-background/60 backdrop-blur-md border border-primary/20 p-5 rounded-2xl shadow-2xl shadow-primary/5"
            >
              <div className="text-primary font-black text-3xl tracking-tighter">5000мг</div>
              <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-1">BCAA</div>
            </motion.div>
          </div>

          <div className="max-w-4xl relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,7vw,6.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-white mb-6"
            >
              Питание <br />
              Для Тех, Кто <br />
              <span className="text-primary">
                Не Останавливается
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-muted-foreground font-medium max-w-2xl mb-12 leading-relaxed"
            >
              Функциональные добавки, персональные программы питания и тренировок — всё в одной экосистеме
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <button className="bg-primary text-black font-black uppercase tracking-wider px-8 py-5 rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base" data-testid="btn-hero-catalog">
                Перейти в каталог
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold uppercase tracking-wider px-8 py-5 rounded-full transition-all hover:border-white/30 text-sm sm:text-base" data-testid="btn-hero-test">
                Пройти тест — получить план
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs md:text-sm font-bold uppercase tracking-wider text-muted-foreground mb-8"
            >
              <div className="flex items-center gap-1.5 text-white">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span>4.9</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-1.5">
                <span>12 000+ клиентов</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-1.5">
                <span>Доставка СДЭК, Яндекс</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-1.5 w-full sm:w-auto mt-2 sm:mt-0">
                <span>Оплата частями</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/70"
            >
              <span>Сбербанк</span>
              <span>·</span>
              <span>Яндекс Сплит</span>
              <span>·</span>
              <span>Платите Долями</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES STRIP */}
      <section className="border-y border-white/5 bg-[#0a0a0c] relative z-20 sticky top-[73px] md:top-[85px] backdrop-blur-xl bg-opacity-80">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-3 min-w-max">
            {categories.map((cat, i) => (
              <Link 
                key={i} 
                href={cat.href}
                className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/30 rounded-full transition-all cursor-pointer"
                data-testid={`link-category-${i}`}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SECTION */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-end justify-between mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
            Популярное
          </h2>
          <Link href="/catalog" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors cursor-pointer" data-testid="link-view-all">
            Смотреть всё <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/5 border border-white/5 hover:border-white/20 rounded-3xl p-6 transition-all flex flex-col relative"
              data-testid={`card-product-${product.id}`}
            >
              {product.badge && (
                <div className="absolute top-6 left-6 z-10 bg-primary text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {product.badge}
                </div>
              )}
              <button className="absolute top-6 right-6 z-10 text-white/50 hover:text-primary transition-colors" data-testid={`btn-wishlist-${product.id}`}>
                <Heart className="w-5 h-5" />
              </button>

              <div className="aspect-square w-full bg-black/20 rounded-2xl mb-6 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                {/* Mockup image placeholder */}
                <div className="w-full h-full bg-gradient-to-b from-white/10 to-transparent rounded-xl border border-white/5 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-black text-4xl uppercase tracking-tighter opacity-50 rotate-[-15deg]">
                    {product.category}
                  </div>
                </div>
              </div>

              <div className="flex flex-col grow">
                <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {product.name}
                </h3>
                <div className="text-xs font-medium text-muted-foreground mb-4">
                  {product.nutrition}
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  {product.flavors.map((color, idx) => (
                    <div key={idx} className={`w-3 h-3 rounded-full ${color} border border-white/10`} />
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground line-through decoration-white/30 font-medium">
                      {product.oldPrice}
                    </span>
                    <span className="text-xl font-black text-white">
                      {product.price}
                    </span>
                  </div>
                  <button className="w-12 h-12 bg-white/10 hover:bg-primary hover:text-black text-white rounded-full flex items-center justify-center transition-colors" data-testid={`btn-add-to-cart-${product.id}`}>
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <Link href={`/compatibility/${product.id}`} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors underline decoration-white/20 underline-offset-4 cursor-pointer" data-testid={`link-compatibility-${product.id}`}>
                    Совместимость
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. PERSONALIZATION / TEST CTA BLOCK */}
      <section className="py-24 relative overflow-hidden border-y border-primary/20">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
              Узнай, что подходит <br className="hidden md:block" />
              <span className="text-primary">именно тебе</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Пройди 3-минутный тест — получи персональный план питания, тренировок и список добавок, составленный нашими нутрициологами
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-16">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-primary/30 flex items-center justify-center mb-4 text-xl font-black text-primary">1</div>
                <span className="text-sm font-bold uppercase tracking-widest text-white">Пройди тест</span>
              </div>
              <div className="hidden md:block w-16 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-primary/30 flex items-center justify-center mb-4 text-xl font-black text-primary">2</div>
                <span className="text-sm font-bold uppercase tracking-widest text-white">Получи план</span>
              </div>
              <div className="hidden md:block w-16 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-primary/30 flex items-center justify-center mb-4 text-xl font-black text-primary">3</div>
                <span className="text-sm font-bold uppercase tracking-widest text-white">Тренируйся и питайся правильно</span>
              </div>
            </div>

            <button className="bg-primary text-black font-black uppercase tracking-wider px-10 py-6 rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 text-lg shadow-[0_0_40px_rgba(188,253,76,0.3)] mb-6" data-testid="btn-start-test">
              Начать тест — это бесплатно
            </button>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
              Составлено врачами и сертифицированными нутрициологами TUNNER
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. USP / WHY US SECTION */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/5 rounded-3xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <usp.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider text-white mb-3">
                {usp.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {usp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. SUBSCRIPTION BLOCK */}
      <section className="py-24 bg-[#0a0a0c]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
              Подписка TUNNER
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              Доступ к закрытой экосистеме
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col"
            >
              <h3 className="text-2xl font-black uppercase tracking-wider text-white mb-2">Базовый</h3>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-4xl font-black text-white">990 ₽</span>
                <span className="text-muted-foreground font-bold mb-1">/ мес</span>
              </div>
              <ul className="flex flex-col gap-4 mb-10 grow">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">Персональный план питания и тренировок</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">Доступ к закрытым рецептам и гайдам</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">5% кэшбек на все покупки</span>
                </li>
              </ul>
              <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-colors" data-testid="btn-subscribe-basic">
                Выбрать план
              </button>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/30 rounded-[2rem] p-8 md:p-10 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-primary text-black text-xs font-black uppercase tracking-widest px-4 py-2 rounded-bl-2xl">
                Рекомендуем
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wider text-primary mb-2">Про</h3>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-4xl font-black text-white">1 990 ₽</span>
                <span className="text-muted-foreground font-bold mb-1">/ мес</span>
              </div>
              <ul className="flex flex-col gap-4 mb-10 grow">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-white">Всё из Базового</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">Консультации с нутрициологами и тренерами</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">Приоритетная доставка</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">Доступ к интенсивным программам и биохакингу</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">Реферальные бонусы: 300 бонусов за приглашение</span>
                </li>
              </ul>
              <button className="w-full bg-primary text-black font-black uppercase tracking-wider py-4 rounded-xl hover:bg-white transition-colors" data-testid="btn-subscribe-pro">
                Выбрать план
              </button>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Отмена в любой момент · Оплата картой или Яндекс Сплит
            </p>
          </div>
        </div>
      </section>

      {/* 8. LOYALTY PROGRAM STRIP */}
      <section className="py-12 border-y border-white/5 bg-background">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex flex-col gap-1 w-full lg:w-auto text-center lg:text-left">
              <h3 className="text-lg font-black uppercase tracking-wider text-white">Программа лояльности</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Бонусы начисляются за отзывы, дни рождения и активность</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full lg:w-auto">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-black text-primary">5%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">кэшбека на каждую покупку</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-black text-primary">1=1</span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">бонус = 1 ₽ (до 30%)</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-black text-primary">+300</span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">бонусов за регистрацию</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-black text-primary">300+300</span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">по реферальной ссылке</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BLOG / CONTENT SECTION */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            Блог TUNNER <span className="text-primary">—</span> <br className="md:hidden" />наука о питании
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Статьи от сертифицированных врачей и нутрициологов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex flex-col"
              data-testid={`card-article-${i}`}
            >
              <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 bg-primary/10 inline-block px-3 py-1.5 rounded-full w-max">
                Нутрициология
              </div>
              <h3 className="text-xl font-bold text-white mb-8 leading-tight group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-black text-white">
                    {article.initial}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">{article.author}</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{article.role}</span>
                  </div>
                </div>
                <div className="text-xs font-bold text-muted-foreground">
                  {article.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Авторы подтверждены Schema.org · Контент проверен врачами
          </p>
        </div>
      </section>

      {/* 10. AI CONSULTANT TEASER */}
      <section className="py-12 px-6 md:px-12 max-w-[1600px] mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a24] to-[#0a0a0c] border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />
          
          <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-black uppercase tracking-widest text-primary mb-6">
              <BrainCircuit className="w-4 h-4" />
              Beta
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
              ИИ-консультант TUNNER
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Задай любой вопрос о питании, добавках и тренировках — бот, обученный на базе знаний наших нутрициологов, ответит мгновенно
            </p>
            <button className="bg-white text-black font-black uppercase tracking-wider px-8 py-4 rounded-full hover:bg-primary transition-colors flex items-center gap-3" data-testid="btn-ask-ai">
              Спросить бота <MessageSquare className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 w-full max-w-md bg-black/40 border border-white/10 rounded-3xl p-6 relative z-10 backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tr-sm p-4 w-[85%] self-end">
                <p className="text-sm text-white/90">Какой протеин выбрать при похудении?</p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-tl-sm p-4 w-[90%]">
                <p className="text-sm text-primary/90 leading-relaxed">
                  Для снижения веса рекомендую изолят (Whey Isolate). В нем минимальное содержание жиров и углеводов при высоком проценте белка, что идеально подходит для дефицита калорий.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 11. FOOTER */}
      <footer className="border-t border-white/10 bg-[#0a0a0c] pt-20 pb-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-end gap-1.5 group mb-6 inline-block cursor-pointer">
                <span className="text-4xl font-black tracking-tighter uppercase text-white">
                  TUNNER
                </span>
                <span className="text-base font-bold text-primary mb-1.5 tracking-widest">
                  TNR
                </span>
              </Link>
              <p className="text-sm font-medium text-muted-foreground max-w-sm mb-8">
                Премиальный маркетплейс спортивного и функционального питания для тех, кто не останавливается.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-black uppercase tracking-wider text-white mb-2">Каталог</h4>
              <Link href="/catalog/protein" className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">Протеин</Link>
              <Link href="/catalog/vitamins" className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">Витамины</Link>
              <Link href="/catalog/bcaa" className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">Аминокислоты</Link>
              <Link href="/catalog/bars" className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">Батончики</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-black uppercase tracking-wider text-white mb-2">Личный кабинет</h4>
              <Link href="/profile" className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">Профиль</Link>
              <Link href="/orders" className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">Заказы</Link>
              <Link href="/loyalty" className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">Программа лояльности</Link>
              <Link href="/plan" className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">Мой план питания</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-black uppercase tracking-wider text-white mb-2">О компании</h4>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">О бренде</Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">Блог</Link>
              <Link href="/contacts" className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">Контакты</Link>
              <Link href="/support" className="text-sm text-muted-foreground hover:text-white transition-colors cursor-pointer">Поддержка</Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              © 2026 TUNNER / TNR · Все права защищены
            </p>
            <Link href="/privacy" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors cursor-pointer">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
