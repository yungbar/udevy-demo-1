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
  CalendarDays
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
    { name: "О бренде", href: "/about" },
  ];

  const categories = [
    { name: "Протеин", icon: Dumbbell, href: "/catalog/protein" },
    { name: "BCAA", icon: Activity, href: "/catalog/bcaa" },
    { name: "Pre-workout", icon: Zap, href: "/catalog/pre-workout" },
    { name: "Батончики", icon: Flame, href: "/catalog/bars" },
    { name: "Витамины", icon: Pill, href: "/catalog/vitamins" },
    { name: "Подписка", icon: CalendarDays, href: "/subscribe" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-end gap-1.5 group">
              <span className="text-3xl font-black tracking-tighter uppercase text-white group-hover:text-primary transition-colors">
                TUNNER
              </span>
              <span className="text-sm font-bold text-primary mb-1 tracking-widest hidden sm:block">
                TNR
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center gap-4">
              <button className="text-white hover:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-primary transition-colors relative group">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-2 bg-primary text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  2
                </span>
              </button>
              <button className="text-white hover:text-primary transition-colors">
                <User className="w-5 h-5" />
              </button>
            </div>
            
            <button className="hidden md:flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/5 text-white text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all">
              Войти
            </button>

            {/* Mobile menu toggle */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
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
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <button className="flex items-center gap-3 text-white">
                  <Search className="w-6 h-6" />
                  <span className="font-bold uppercase">Поиск</span>
                </button>
                <button className="flex items-center gap-3 text-white relative">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-1.5 -left-1.5 bg-primary text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
                  <span className="font-bold uppercase">Корзина</span>
                </button>
              </div>
              <button className="w-full bg-primary text-black font-black uppercase tracking-wider py-4 rounded-xl mt-4">
                Войти в профиль
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
        {/* Abstract Dark Background with Gradients */}
        <div className="absolute inset-0 z-0 bg-[#0a0a0c]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWMGgtMXYzOS41SDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9zdmc+')] opacity-50" />
        </div>

        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 flex flex-col items-start justify-center grow">
          
          {/* Floating Badges (Desktop only for cleaner mobile) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] right-[15%] bg-background/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl"
            >
              <div className="text-primary font-black text-2xl tracking-tighter">30г</div>
              <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Белка</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[45%] right-[5%] bg-background/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl"
            >
              <div className="text-white font-black text-2xl tracking-tighter">0г</div>
              <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Сахара</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[30%] right-[25%] bg-background/60 backdrop-blur-md border border-primary/20 p-4 rounded-2xl shadow-2xl shadow-primary/5"
            >
              <div className="text-primary font-black text-2xl tracking-tighter">5000мг</div>
              <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">BCAA</div>
            </motion.div>
          </div>

          <div className="max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-8">
                <Zap className="w-3.5 h-3.5 fill-primary" />
                Новое поколение
              </div>

              <h1 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.9] text-white mb-6">
                Питание <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                  Для Тех, Кто
                </span> <br />
                Не Останавливается
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-muted-foreground font-medium max-w-2xl mb-12 leading-relaxed"
            >
              Функциональные добавки, созданные для максимальной производительности. Без компромиссов. Без скрытых составов. Только чистая энергия для твоих побед.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <button className="bg-primary text-black font-black uppercase tracking-wider px-8 py-5 rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base">
                Перейти в каталог
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold uppercase tracking-wider px-8 py-5 rounded-full transition-all hover:border-white/30 text-sm sm:text-base">
                Пройти тест — получить план
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-muted-foreground"
            >
              <div className="flex items-center gap-1.5 text-white">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span>4.9 / 5.0</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-white" />
                <span>12 000+ клиентов</span>
              </div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-white" />
                <span>Доставка от 1 дня</span>
              </div>
              <div className="hidden lg:block w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Гарантия качества</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Strip */}
      <section className="border-y border-white/5 bg-background relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-4 min-w-max">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mr-4">Быстрый поиск:</span>
            {categories.map((cat, i) => (
              <Link 
                key={i} 
                href={cat.href}
                className="group flex items-center gap-2.5 px-5 py-3 bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/30 rounded-full transition-all cursor-pointer"
              >
                <cat.icon className="w-4 h-4 text-white group-hover:text-primary transition-colors" />
                <span className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Spacer to prove it's a real page scroll */}
      <div className="h-32 bg-background" />

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