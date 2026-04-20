import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import catProtein from "@assets/cat_protein.png";
import catBcaa from "@assets/cat_bcaa.png";
import catPreworkout from "@assets/cat_preworkout.png";
import catBars from "@assets/cat_bars.png";
import catVitamins from "@assets/cat_vitamins.png";
import catFatburner from "@assets/cat_fatburner.png";
import catComplex from "@assets/cat_complex.png";
import catSubscription from "@assets/cat_subscription.png";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Star,
  Zap,
  ShieldCheck,
  Dumbbell,
  Activity,
  Flame,
  TrendingDown,
  Package,
  Crown,
  Heart,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Clock,
  BrainCircuit,
  LineChart,
  Sparkles
} from "lucide-react";

const aiQA = [
  {
    q: "Какой протеин выбрать при похудении?",
    a: "Рекомендую изолят TUNNER Whey Pro — минимум углеводов, 28г белка на порцию. Он идеально подходит для сохранения мышц при дефиците калорий."
  },
  {
    q: "Как правильно принимать BCAA?",
    a: "TNR BCAA 8:1:1 лучше принимать до и сразу после тренировки — 5–10г. Аминокислоты ускоряют восстановление и защищают мышцы от катаболизма."
  },
  {
    q: "Что выбрать для набора мышечной массы?",
    a: "Для роста мышц рекомендую: TUNNER Whey Pro после тренировки + TUNNER Pre-Workout Blast перед. Такая связка обеспечит оптимальный анаболический отклик."
  },
  {
    q: "Нужны ли витамины при активных тренировках?",
    a: "Да, при нагрузках потребность в витаминах D3, B12, магнии и цинке значительно возрастает. Наш витаминный комплекс покрывает все суточные нормы для спортсменов."
  },
  {
    q: "Что входит в подписку TUNNER?",
    a: "Подписка Про (1990₽/мес) включает персональный план питания и тренировок от нутрициологов, консультации врачей, закрытые гайды и 5% кэшбек на все покупки."
  }
];

export default function KP() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [activeQA, setActiveQA] = useState<{ q: string; a: string } | null>(null);
  const [botTyping, setBotTyping] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginTab, setLoginTab] = useState<"phone" | "email">("phone");
  const [loginPhone, setLoginPhone] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [demoOpen, setDemoOpen] = useState(false);

  function handleDemo(e: React.MouseEvent) {
    e.preventDefault();
    setDemoOpen(true);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleSelectQuestion(item: { q: string; a: string }) {
    setActiveQA({ q: item.q, a: "" });
    setBotTyping(true);
    setTimeout(() => {
      setActiveQA(item);
      setBotTyping(false);
    }, 900);
  }

  const navLinks = [
    { name: "Каталог", href: "/catalog" },
    { name: "Питание", href: "/nutrition" },
    { name: "Тренировки", href: "/workouts" },
    { name: "Подписка", href: "/subscribe" },
    { name: "Блог", href: "/blog" },
    { name: "О бренде", href: "/about" },
  ];

  const categories = [
    { name: "Протеин", desc: "Изолят, концентрат, казеин", icon: Dumbbell, href: "/catalog/protein", image: catProtein },
    { name: "BCAA & Аминокислоты", desc: "Восстановление и синтез белка", icon: Activity, href: "/catalog/bcaa", image: catBcaa },
    { name: "Pre-Workout", desc: "Энергия и концентрация перед тренировкой", icon: Zap, href: "/catalog/pre-workout", image: catPreworkout },
    { name: "Батончики & Снеки", desc: "Перекус без сахара и лишних калорий", icon: Flame, href: "/catalog/bars", image: catBars },
    { name: "Витамины & Минералы", desc: "Здоровье и иммунитет", icon: ShieldCheck, href: "/catalog/vitamins", image: catVitamins },
    { name: "Жиросжигатели", desc: "Термодженики и L-карнитин", icon: TrendingDown, href: "/catalog/fat-burners", image: catFatburner },
    { name: "Комплексы", desc: "Готовые наборы под цели", icon: Package, href: "/catalog/complexes", image: catComplex },
    { name: "Цифровая подписка", desc: "Планы питания и тренировок от нутрициологов", icon: Crown, href: "/subscribe", image: catSubscription },
  ];

  const products = [
    {
      id: 1,
      name: "TUNNER Whey Pro",
      category: "Протеин",
      nutrition: "Б: 28г · Ж: 2г · У: 4г · 145 ккал",
      flavors: [
        { label: "Шоколад", color: "bg-[#3b2b20]" },
        { label: "Ваниль", color: "bg-[#f3e5ab]" },
        { label: "Клубника", color: "bg-[#e890a8]" }
      ],
      price: "2 490 ₽",
      oldPrice: "2 990 ₽",
      discount: "-17%",
      badge: "Хит продаж",
      badgeDark: true
    },
    {
      id: 2,
      name: "TNR BCAA 8:1:1",
      category: "BCAA",
      nutrition: "Б: 0г · Ж: 0г · У: 0г · 5 ккал",
      flavors: [
        { label: "Яблоко", color: "bg-[#bcfd4c]" },
        { label: "Вишня", color: "bg-[#ff4d4d]" },
        { label: "Мята", color: "bg-[#33ccff]" }
      ],
      price: "1 890 ₽",
      oldPrice: "2 190 ₽",
      discount: "-14%",
      badge: "Новинка",
      badgeDark: false
    },
    {
      id: 3,
      name: "TUNNER Pre-Workout Blast",
      category: "Pre-Workout",
      nutrition: "Б: 0г · Ж: 0г · У: 3г · 15 ккал",
      flavors: [
        { label: "Вишня", color: "bg-[#ff4d4d]" },
        { label: "Мята", color: "bg-[#33ccff]" }
      ],
      price: "2 190 ₽",
      oldPrice: "2 490 ₽",
      discount: "-12%",
      badge: "Хит продаж",
      badgeDark: true
    },
    {
      id: 4,
      name: "TNR Protein Bar",
      category: "Батончики",
      nutrition: "Б: 20г · Ж: 8г · У: 18г · 225 ккал",
      flavors: [
        { label: "Шоколад", color: "bg-[#3b2b20]" },
        { label: "Клубника", color: "bg-[#e890a8]" }
      ],
      price: "290 ₽",
      oldPrice: "350 ₽",
      discount: "-17%",
      badge: "Новинка",
      badgeDark: false
    }
  ];

  const usps = [
    {
      title: "Персональный план",
      desc: "Нутрициолог составит программу под твои цели",
      icon: LineChart
    },
    {
      title: "ИИ-консультант 24/7",
      desc: "Бот на базе знаний TUNNER отвечает мгновенно",
      icon: BrainCircuit
    },
    {
      title: "Умная корзина",
      desc: "Подсказки для допродажи и комбо-скидки",
      icon: ShoppingCart
    },
    {
      title: "Честный состав",
      desc: "Без скрытых добавок, контроль производства",
      icon: ShieldCheck
    }
  ];

  const articles = [
    {
      title: "Как рассчитать норму белка: методика спортивных нутрициологов",
      author: "Д-р Анна Соколова",
      time: "5 мин",
      initial: "АС"
    },
    {
      title: "BCAA vs EAA: что выбрать и почему это важно",
      author: "Алексей Громов, спортивный врач",
      time: "7 мин",
      initial: "АГ"
    },
    {
      title: "Протокол восстановления после силовых тренировок",
      author: "Марина Белова, диетолог",
      time: "6 мин",
      initial: "МБ"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary selection:text-black">
      
      {/* 1. HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-border py-3 shadow-sm"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-end gap-1.5 group cursor-pointer" data-testid="link-home">
              <span className="text-3xl font-black tracking-tighter uppercase text-foreground group-hover:text-primary transition-colors">
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
                onClick={handleDemo}
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center gap-4">
              <button className="text-foreground hover:text-primary transition-colors" data-testid="btn-search">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-foreground hover:text-primary transition-colors relative group" data-testid="btn-cart">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-2 bg-primary text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  2
                </span>
              </button>
              <button className="text-foreground hover:text-primary transition-colors" data-testid="btn-profile">
                <User className="w-5 h-5" />
              </button>
            </div>
            
            <button onClick={() => setLoginOpen(true)} className="hidden md:flex items-center justify-center bg-black hover:bg-black/90 text-white text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all" data-testid="btn-login">
              Войти
            </button>

            <button 
              className="lg:hidden text-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="btn-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col lg:hidden">
          <nav className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-black uppercase tracking-wider text-foreground"
                onClick={(e) => { setMobileMenuOpen(false); handleDemo(e); }}
                data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* 2. HERO BANNER */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 flex flex-col items-start justify-center grow">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 w-64">
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white shadow-sm border border-gray-200 p-5 rounded-2xl"
            >
              <div className="text-black font-black text-3xl tracking-tighter">30г</div>
              <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">белка</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="bg-white shadow-sm border border-gray-200 p-5 rounded-2xl"
            >
              <div className="text-black font-black text-3xl tracking-tighter">0г</div>
              <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">сахара</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="bg-white shadow-sm border border-primary/30 p-5 rounded-2xl"
            >
              <div className="text-primary font-black text-3xl tracking-tighter">5000мг</div>
              <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">BCAA</div>
            </motion.div>
          </div>

          <div className="max-w-4xl relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(2.5rem,6vw,6rem)] font-black uppercase tracking-tighter leading-[0.9] text-black mb-6"
            >
              Питание<br />
              <span className="text-primary">Для Тех, Кто Не</span><br />
              Останавливается
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-2xl text-gray-700 font-medium max-w-2xl mb-12 leading-relaxed"
            >
              Функциональные добавки, персональные программы питания и тренировок — всё в одной экосистеме
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <button className="bg-black text-white font-black uppercase tracking-wider px-8 py-4 rounded-full hover:bg-black/90 transition-all flex items-center justify-center text-sm md:text-base" data-testid="btn-hero-catalog">
                Перейти в каталог
              </button>
              <button className="bg-transparent border border-black text-black font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-gray-100 transition-all text-sm md:text-base" data-testid="btn-hero-test">
                Пройти тест
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-wider text-gray-500"
            >
              <div className="flex items-center gap-1.5 text-black">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span>4.9</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <span>12 000+ клиентов</span>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <span>Доставка СДЭК, Яндекс</span>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <span>Сбер</span>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <span>Яндекс Сплит</span>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <span>Платите Долями</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY CARDS */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground mb-12"
        >
          Категории
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={category.href}>
                  <motion.div
                    className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 cursor-pointer group hover:bg-[#f0fcd4] hover:border-t-primary/50 transition-colors"
                    style={{ minHeight: '200px' }}
                    whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.10)' }}
                    data-testid={`card-category-${i}`}
                  >
                    {/* Top-left content */}
                    <div className="p-6 pb-0 relative z-10 max-w-[60%]">
                      <span className="text-xl font-black text-black block leading-tight">{category.name}</span>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{category.desc}</p>
                      <ArrowRight size={20} className="mt-3 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    {/* Bottom-right image */}
                    <div className="absolute bottom-0 right-0 w-[55%] h-[75%]">
                      <img src={category.image} alt={category.name} className="w-full h-full object-cover object-top rounded-tl-2xl group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. POPULAR PRODUCTS */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground mb-12"
          >
            Популярное
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-border rounded-3xl p-6 transition-all hover:shadow-xl hover:border-primary/30 flex flex-col relative group"
                data-testid={`card-product-${product.id}`}
              >
                {product.badge && (
                  <div className={`absolute top-6 left-6 z-10 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${product.badgeDark ? "bg-black text-white" : "bg-primary text-black"}`}>
                    {product.badge}
                  </div>
                )}
                <button className="absolute top-6 right-6 z-10 text-muted-foreground hover:text-primary transition-colors bg-white/80 p-2 rounded-full shadow-sm" data-testid={`btn-wishlist-${product.id}`}>
                  <Heart className="w-5 h-5" />
                </button>

                <div className="aspect-square w-full bg-muted/50 rounded-2xl mb-6 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-b from-white to-muted rounded-xl border border-border shadow-sm flex items-center justify-center text-muted-foreground/30 font-black text-3xl uppercase tracking-tighter rotate-[-10deg]">
                    {product.category}
                  </div>
                </div>

                <div className="flex flex-col grow">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                    {product.name}
                  </h3>
                  <div className="text-xs font-medium text-muted-foreground mb-4">
                    {product.nutrition}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    {product.flavors.map((flavor, idx) => (
                      <div key={idx} className={`w-3 h-3 rounded-full ${flavor.color} border border-border`} title={flavor.label} />
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-border mb-4">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground line-through font-medium">
                          {product.oldPrice}
                        </span>
                        <span className="text-xs font-bold text-[#10b981]">
                          {product.discount}
                        </span>
                      </div>
                      <span className="text-2xl font-black text-foreground">
                        {product.price}
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-black hover:bg-black/90 text-white font-bold uppercase tracking-wider py-3 rounded-xl transition-colors text-sm" data-testid={`btn-add-to-cart-${product.id}`}>
                    В корзину
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEST CTA */}
      <section className="py-24 bg-[#f0fcd4] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-black mb-6">
              Узнай, что подходит именно тебе
            </h2>
            <p className="text-lg md:text-xl text-black/70 font-medium max-w-3xl mx-auto mb-12">
              3-минутный тест от наших нутрициологов — и ты получишь персональный план питания, тренировок и список добавок
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-black text-xl text-black shadow-sm">1</div>
                <span className="font-bold text-black uppercase tracking-wider text-sm text-left">Проходишь тест<br/>(3 мин)</span>
              </div>
              <ChevronRight className="hidden md:block w-6 h-6 text-black/20" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-black text-xl text-black shadow-sm">2</div>
                <span className="font-bold text-black uppercase tracking-wider text-sm text-left">Нутрициолог<br/>анализирует</span>
              </div>
              <ChevronRight className="hidden md:block w-6 h-6 text-black/20" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-black text-xl text-black shadow-sm">3</div>
                <span className="font-bold text-black uppercase tracking-wider text-sm text-left">Получаешь<br/>личный план</span>
              </div>
            </div>

            <button className="bg-black hover:bg-black/90 text-white font-black uppercase tracking-wider px-10 py-5 rounded-full transition-all text-base md:text-lg mb-6 shadow-xl" data-testid="btn-start-test">
              Начать бесплатный тест
            </button>
            <p className="text-xs font-bold uppercase tracking-widest text-black/40">
              Составлено сертифицированными врачами и нутрициологами TUNNER
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. WHY TUNNER */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground mb-12 text-center"
        >
          Почему выбирают TUNNER
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, i) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-border p-8 rounded-3xl"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{usp.title}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{usp.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 7. SUBSCRIPTION */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground mb-4"
            >
              Подписка TUNNER
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground font-medium"
            >
              Доступ к экосистеме бренда — планы, контент, консультации
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-border rounded-3xl p-8 flex flex-col"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-black uppercase text-foreground mb-2">Базовый</h3>
                <div className="text-4xl font-black text-foreground">990 ₽<span className="text-lg text-muted-foreground font-medium lowercase">/мес</span></div>
              </div>
              <ul className="flex flex-col gap-4 mb-10 grow">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Персональный план питания и тренировок</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Закрытые рецепты и гайды</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">5% кэшбек на покупки</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Отмена в любой момент</span>
                </li>
              </ul>
              <button className="w-full bg-muted hover:bg-muted/80 text-foreground font-bold uppercase tracking-wider py-4 rounded-xl transition-colors text-sm" data-testid="btn-sub-basic">
                Выбрать Базовый
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0d0d12] rounded-3xl p-8 flex flex-col relative shadow-2xl"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                Популярный
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-black uppercase text-white mb-2">Про</h3>
                <div className="text-4xl font-black text-white">1 990 ₽<span className="text-lg text-white/50 font-medium lowercase">/мес</span></div>
              </div>
              <ul className="flex flex-col gap-4 mb-10 grow">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-black" />
                  </div>
                  <span className="text-sm font-medium text-white">Всё из Базового +</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm font-medium text-white/90">Консультации с нутрициологами и тренерами</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm font-medium text-white/90">Приоритетная доставка</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm font-medium text-white/90">Программы по биохакингу и интенсивному спорту</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm font-medium text-white/90">300 + 300 реферальных бонусов</span>
                </li>
              </ul>
              <button className="w-full bg-primary hover:bg-primary/90 text-black font-black uppercase tracking-wider py-4 rounded-xl transition-colors text-sm" data-testid="btn-sub-pro">
                Выбрать Про
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. LOYALTY STRIP */}
      <section className="bg-muted py-6 border-y border-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            <div className="text-sm font-bold uppercase tracking-wider text-foreground text-center">5% кэшбека на каждую покупку</div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-border" />
            <div className="text-sm font-bold uppercase tracking-wider text-foreground text-center">1 бонус = 1 ₽ (оплата до 30% заказа)</div>
            <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-border" />
            <div className="text-sm font-bold uppercase tracking-wider text-foreground text-center">+300 бонусов за регистрацию</div>
            <div className="hidden xl:block w-1.5 h-1.5 rounded-full bg-border" />
            <div className="text-sm font-bold uppercase tracking-wider text-foreground text-center">300 + 300 ₽ за реферала</div>
          </div>
        </div>
      </section>

      {/* 9. BLOG */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground mb-4">
            Блог TUNNER — наука о питании
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Статьи от сертифицированных врачей и нутрициологов · Schema.org verified
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-border p-8 rounded-3xl group cursor-pointer hover:shadow-xl hover:border-primary/30 transition-all flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xs font-black uppercase tracking-wider text-foreground">
                  {article.initial}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{article.author}</div>
                  <div className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                    <Clock className="w-3 h-3" /> {article.time}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-6 leading-snug group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <div className="mt-auto pt-6 border-t border-border">
                <span className="text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-primary flex items-center gap-2 transition-colors">
                  Читать <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 10. AI CONSULTANT */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0d0d12] rounded-[3rem] p-8 md:p-16 overflow-hidden relative flex flex-col md:flex-row items-center gap-12 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
            
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                ИИ-консультант TUNNER
              </h2>
              <p className="text-white/70 font-medium text-lg mb-8 leading-relaxed">
                Задай вопрос о питании или добавках — бот отвечает мгновенно на основе базы знаний наших нутрициологов
              </p>
              <button className="bg-primary hover:bg-primary/90 text-black font-black uppercase tracking-wider px-8 py-4 rounded-full transition-all text-sm flex items-center gap-3" data-testid="btn-ask-ai">
                <MessageCircle className="w-5 h-5" /> Спросить бота
              </button>
            </div>

            <div className="flex-1 w-full max-w-md relative z-10">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
                <div className="flex flex-col gap-4">
                  <div className="self-end bg-primary/20 text-white border border-primary/30 px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm font-medium">
                    Какой протеин выбрать при похудении?
                  </div>
                  <div className="self-start bg-white/10 text-white border border-white/5 px-5 py-3 rounded-2xl rounded-tl-sm max-w-[90%] text-sm font-medium leading-relaxed flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary shrink-0 flex items-center justify-center mt-0.5">
                      <BrainCircuit className="w-3 h-3 text-black" />
                    </div>
                    <div>Рекомендую изолят TUNNER Whey Pro — минимум углеводов, 28г белка на порцию. Он идеально подходит для сохранения мышц при дефиците калорий.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-muted pt-20 pb-8 border-t border-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-end gap-1.5 group cursor-pointer mb-6" data-testid="link-footer-home">
                <span className="text-3xl font-black tracking-tighter uppercase text-foreground">
                  TUNNER
                </span>
                <span className="text-sm font-bold text-primary mb-1 tracking-widest">
                  TNR
                </span>
              </Link>
              <p className="text-muted-foreground font-medium text-sm max-w-sm">
                Питание для тех, кто не останавливается. Функциональные добавки и персональные программы тренировок.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-wider text-foreground mb-6">Каталог</h4>
              <ul className="flex flex-col gap-4">
                <li><button onClick={handleDemo} className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Протеин</button></li>
                <li><button onClick={handleDemo} className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">BCAA</button></li>
                <li><button onClick={handleDemo} className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Pre-Workout</button></li>
                <li><button onClick={handleDemo} className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Батончики</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider text-foreground mb-6">Личный кабинет</h4>
              <ul className="flex flex-col gap-4">
                <li><button onClick={handleDemo} className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Профиль</button></li>
                <li><button onClick={handleDemo} className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Заказы</button></li>
                <li><button onClick={handleDemo} className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Подписка</button></li>
                <li><button onClick={handleDemo} className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Бонусы</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider text-foreground mb-6">Компания</h4>
              <ul className="flex flex-col gap-4">
                <li><button onClick={handleDemo} className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">О бренде</button></li>
                <li><button onClick={handleDemo} className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Контакты</button></li>
                <li><button onClick={handleDemo} className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Доставка и оплата</button></li>
                <li><button onClick={handleDemo} className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">Вопрос-ответ</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
            <div>© 2026 TUNNER / TNR</div>
            <div className="flex gap-6">
              <button onClick={handleDemo} className="hover:text-foreground transition-colors">Политика конфиденциальности</button>
              <button onClick={handleDemo} className="hover:text-foreground transition-colors">Все права защищены</button>
            </div>
          </div>
        </div>
      </footer>

      {/* DEMO INFO MODAL */}
      <AnimatePresence>
        {demoOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDemoOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.96 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
            >
              <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[480px] overflow-hidden pointer-events-auto" data-testid="demo-modal">

                {/* Top accent bar */}
                <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #bcfd4c 0%, #a8ef2e 100%)" }} />

                <div className="px-8 pt-7 pb-8">
                  {/* Close */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex items-center gap-2 bg-black/5 rounded-full px-3 py-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#bcfd4c] animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-widest text-foreground">Демо-версия</span>
                    </div>
                    <button
                      onClick={() => setDemoOpen(false)}
                      className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
                    >
                      <X className="w-4 h-4 text-foreground" />
                    </button>
                  </div>

                  {/* Heading */}
                  <h2 className="text-3xl font-black uppercase tracking-tight text-foreground leading-tight mb-3">
                    Это только<br />начало
                  </h2>
                  <p className="text-base text-muted-foreground font-medium leading-relaxed mb-6">
                    Перед вами — <strong className="text-foreground">интерактивный прототип</strong> будущего маркетплейса TUNNER. Каждый экран, каждая кнопка и анимация — продуманы специально под вашу аудиторию атлетов 18–35 лет.
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-3 mb-7">
                    {[
                      { icon: "⚡", text: "Полная навигация, каталог, подписки и AI-консультант" },
                      { icon: "🎨", text: "Уникальный дизайн-код: Inter Tight + лаймовый акцент #bcfd4c" },
                      { icon: "📱", text: "Адаптивная вёрстка — идеально на любом устройстве" },
                      { icon: "🔧", text: "Готов к интеграции с 1С-Битрикс и вашим бэкендом" },
                    ].map((item) => (
                      <li key={item.icon} className="flex items-start gap-3">
                        <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                        <span className="text-sm font-medium text-foreground/80 leading-snug">{item.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://t.me/wondersay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-2xl font-black text-sm uppercase tracking-wider text-center transition-all active:scale-[0.98] flex items-center justify-center gap-2.5"
                      style={{ background: "#bcfd4c", color: "#000" }}
                      data-testid="btn-demo-cta"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 6.686l-1.683 7.93c-.126.572-.462.712-.937.443l-2.592-1.91-1.25 1.202c-.138.138-.254.254-.521.254l.186-2.638 4.8-4.337c.21-.185-.044-.288-.322-.103L8.23 14.25l-2.55-.797c-.555-.173-.567-.554.116-.82l9.966-3.845c.462-.168.867.113.719.903l-.551-.005z" fill="currentColor"/>
                      </svg>
                      Написать @wondersay
                    </a>
                    <button
                      onClick={() => setDemoOpen(false)}
                      className="w-full py-3.5 rounded-2xl border-2 border-gray-200 hover:border-gray-300 text-sm font-bold text-muted-foreground hover:text-foreground transition-all"
                    >
                      Продолжить просмотр
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* LOGIN MODAL */}
      <AnimatePresence>
        {loginOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLoginOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              data-testid="login-backdrop"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
            >
              <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[400px] overflow-hidden pointer-events-auto" data-testid="login-modal">

                {/* Header */}
                <div className="flex items-center justify-between px-7 pt-7 pb-0">
                  <div>
                    <div className="text-2xl font-black tracking-tight text-foreground uppercase">Войти</div>
                    <div className="text-sm text-muted-foreground font-medium mt-0.5">в аккаунт TUNNER</div>
                  </div>
                  <button
                    onClick={() => setLoginOpen(false)}
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    data-testid="btn-close-login"
                  >
                    <X className="w-4 h-4 text-foreground" />
                  </button>
                </div>

                {/* Tab slider */}
                <div className="px-7 pt-6">
                  <div className="relative flex bg-gray-100 rounded-2xl p-1">
                    <motion.div
                      className="absolute top-1 bottom-1 rounded-xl bg-white shadow-sm"
                      animate={{ left: loginTab === "phone" ? "4px" : "50%", width: "calc(50% - 4px)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                    <button
                      onClick={() => setLoginTab("phone")}
                      className="relative z-10 flex-1 py-2.5 text-sm font-bold rounded-xl transition-colors"
                      style={{ color: loginTab === "phone" ? "#000" : "#9ca3af" }}
                      data-testid="tab-phone"
                    >
                      Телефон
                    </button>
                    <button
                      onClick={() => setLoginTab("email")}
                      className="relative z-10 flex-1 py-2.5 text-sm font-bold rounded-xl transition-colors"
                      style={{ color: loginTab === "email" ? "#000" : "#9ca3af" }}
                      data-testid="tab-email"
                    >
                      Почта
                    </button>
                  </div>
                </div>

                {/* Form */}
                <div className="px-7 pt-5 pb-2">
                  <AnimatePresence mode="wait">
                    {loginTab === "phone" ? (
                      <motion.div
                        key="phone"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.15 }}
                        className="flex flex-col gap-3"
                      >
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Номер телефона</label>
                          <div className="flex items-center gap-2 border-2 border-gray-200 focus-within:border-black rounded-2xl px-4 py-3.5 transition-colors bg-gray-50 focus-within:bg-white">
                            <span className="text-sm font-bold text-muted-foreground">+7</span>
                            <input
                              type="tel"
                              value={loginPhone}
                              onChange={e => setLoginPhone(e.target.value)}
                              placeholder="000 000-00-00"
                              className="flex-1 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-gray-400"
                              data-testid="input-phone"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Пароль</label>
                          <div className="flex items-center border-2 border-gray-200 focus-within:border-black rounded-2xl px-4 py-3.5 transition-colors bg-gray-50 focus-within:bg-white">
                            <input
                              type="password"
                              value={loginPassword}
                              onChange={e => setLoginPassword(e.target.value)}
                              placeholder="••••••••"
                              className="flex-1 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-gray-400"
                              data-testid="input-password-phone"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="email"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.15 }}
                        className="flex flex-col gap-3"
                      >
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Электронная почта</label>
                          <div className="flex items-center border-2 border-gray-200 focus-within:border-black rounded-2xl px-4 py-3.5 transition-colors bg-gray-50 focus-within:bg-white">
                            <input
                              type="email"
                              value={loginEmail}
                              onChange={e => setLoginEmail(e.target.value)}
                              placeholder="example@mail.ru"
                              className="flex-1 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-gray-400"
                              data-testid="input-email"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Пароль</label>
                          <div className="flex items-center border-2 border-gray-200 focus-within:border-black rounded-2xl px-4 py-3.5 transition-colors bg-gray-50 focus-within:bg-white">
                            <input
                              type="password"
                              value={loginPassword}
                              onChange={e => setLoginPassword(e.target.value)}
                              placeholder="••••••••"
                              className="flex-1 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-gray-400"
                              data-testid="input-password-email"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-end mt-2 mb-1">
                    <button className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors" data-testid="link-forgot-password">
                      Забыли пароль?
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-7 pb-7 flex flex-col gap-3">
                  <button
                    className="w-full py-4 rounded-2xl bg-black hover:bg-black/90 text-white text-sm font-black uppercase tracking-wider transition-all active:scale-[0.98]"
                    data-testid="btn-submit-login"
                  >
                    Войти
                  </button>

                  <div className="flex items-center gap-3 my-1">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">или</span>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>

                  {/* Yandex login */}
                  <button
                    className="w-full py-3.5 rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
                    data-testid="btn-yandex-login"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#FC3F1D"/>
                      <path d="M13.4 5.5H12c-2.1 0-3.2 1.1-3.2 2.8 0 1.7.8 2.6 2.3 3.6l1.3.8-3.7 5.8H6.5l3.4-5.3C8.1 12 7 10.7 7 8.3c0-2.8 1.9-4.5 5-4.5h3.2V18.5H13.4V5.5Z" fill="white"/>
                    </svg>
                    <span className="text-sm font-bold text-foreground">Войти через Яндекс</span>
                  </button>

                  <div className="text-center mt-1">
                    <span className="text-xs text-muted-foreground font-medium">Нет аккаунта? </span>
                    <button className="text-xs font-bold text-foreground hover:underline" data-testid="link-register">
                      Зарегистрироваться
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* FLOATING AI CHAT BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-[360px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              style={{ background: "#0d0d12" }}
              data-testid="ai-chat-window"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#bcfd4c" }}>
                    <BrainCircuit className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white tracking-tight">ИИ-консультант TUNNER</div>
                    <div className="text-xs text-white/40 font-medium">На основе базы знаний нутрициологов</div>
                  </div>
                </div>
                <button
                  onClick={() => { setChatOpen(false); setActiveQA(null); }}
                  className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                  data-testid="btn-close-chat"
                >
                  <X className="w-3.5 h-3.5 text-white" />
                </button>
              </div>

              {/* Chat area */}
              <div className="p-4 flex flex-col gap-3 min-h-[200px]">
                {!activeQA && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="self-start bg-white/10 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[90%]"
                  >
                    <p className="text-sm text-white/80 font-medium leading-relaxed">
                      Привет! Выбери вопрос ниже — отвечу на основе рекомендаций наших нутрициологов.
                    </p>
                  </motion.div>
                )}

                {activeQA && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="self-end px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm font-medium text-white border"
                      style={{ background: "rgba(188,253,76,0.15)", borderColor: "rgba(188,253,76,0.3)" }}
                    >
                      {activeQA.q}
                    </motion.div>

                    {botTyping ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="self-start flex items-center gap-2 bg-white/10 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm"
                      >
                        <div className="flex gap-1">
                          {[0, 1, 2].map(i => (
                            <motion.div
                              key={i}
                              className="w-1.5 h-1.5 rounded-full bg-white/50"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="self-start bg-white/10 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[90%] flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5" style={{ background: "#bcfd4c" }}>
                          <BrainCircuit className="w-3 h-3 text-black" />
                        </div>
                        <p className="text-sm text-white/85 font-medium leading-relaxed">{activeQA.a}</p>
                      </motion.div>
                    )}
                  </>
                )}
              </div>

              {/* Question chips */}
              <div className="px-4 pb-4 flex flex-col gap-2 border-t border-white/10 pt-3">
                <p className="text-xs text-white/30 font-bold uppercase tracking-widest mb-1">Выбери вопрос</p>
                {aiQA.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectQuestion(item)}
                    disabled={botTyping}
                    className="text-left text-xs font-medium text-white/70 hover:text-white px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all disabled:opacity-40"
                    data-testid={`btn-question-${i}`}
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating button */}
        <motion.button
          onClick={() => { setChatOpen(v => !v); if (!chatOpen) setActiveQA(null); }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center relative"
          style={{ background: "#bcfd4c" }}
          data-testid="btn-open-ai-chat"
        >
          <AnimatePresence mode="wait">
            {chatOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="w-6 h-6 text-black" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Sparkles className="w-6 h-6 text-black" />
              </motion.div>
            )}
          </AnimatePresence>
          {!chatOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-black flex items-center justify-center">1</span>
          )}
        </motion.button>
      </div>
    </div>
  );
}