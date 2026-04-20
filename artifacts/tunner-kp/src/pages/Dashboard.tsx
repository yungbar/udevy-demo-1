import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import {
  LayoutDashboard, FlaskConical, Dumbbell, Salad, CreditCard,
  Gift, ShoppingBag, User, LogOut, Bell, Search, ChevronRight,
  ArrowLeft, Star, Flame, Zap, TrendingUp, Package, Crown,
  Copy, Check, Play, Clock, CheckCircle2, Circle, XCircle,
  ChevronDown, ChevronUp, BarChart3, Lock, Calendar, MessageCircle,
  RefreshCw, Heart, Eye, Menu, X, ArrowRight, Plus
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from "recharts";

const ACCENT = "#bcfd4c";
const DARK = "#0d0d12";

const user = {
  name: "Анна Иванова", age: 28, goal: "Похудение", avatar: "АИ",
  subscription: { plan: "Pro", renewDate: "15 мая 2026", price: "1 990 ₽" },
  bonuses: { balance: 1250, burnDays: 14, burnAmount: 200 },
  program: "Жиросжигание — 8 недель",
  workoutsThisWeek: 3, workoutsGoal: 5,
};

const weeklyProgress = [
  { day: "Пн", load: 2400 }, { day: "Вт", load: 1800 }, { day: "Ср", load: 3200 },
  { day: "Чт", load: 0 }, { day: "Пт", load: 2900 }, { day: "Сб", load: 1200 }, { day: "Вс", load: 0 },
];

const bonusHistory = [
  { id: 1, type: "credit", label: "Заказ #10238", amount: +150, date: "12 апр" },
  { id: 2, type: "credit", label: "Отзыв на товар", amount: +50, date: "10 апр" },
  { id: 3, type: "debit", label: "Оплата заказа #10198", amount: -300, date: "5 апр" },
  { id: 4, type: "credit", label: "Реферал: М. Смирнова", amount: +300, date: "1 апр" },
  { id: 5, type: "credit", label: "День рождения", amount: +500, date: "28 мар" },
];

const orders = [
  {
    id: "10238", date: "12 апр 2026", total: "4 870 ₽", status: "delivered",
    items: ["TUNNER Isolate Vanilla 900г", "BCAA 2:1:1 300г"],
  },
  {
    id: "10198", date: "5 апр 2026", total: "2 190 ₽", status: "delivered",
    items: ["Pre-Workout Energy X 250г"],
  },
  {
    id: "10155", date: "20 мар 2026", total: "6 340 ₽", status: "cancelled",
    items: ["Витаминный комплекс Pro", "Протеиновые батончики (упаковка)"],
  },
];

const workouts = [
  { day: "Понедельник", name: "Кардио + ноги", status: "done", exercises: ["Приседания 4×15", "Выпады 3×12", "Беговая дорожка 20 мин"] },
  { day: "Вторник", name: "Верхняя часть тела", status: "done", exercises: ["Жим лёжа 4×10", "Тяга к поясу 3×12", "Отжимания 3×15"] },
  { day: "Среда", name: "Интервальная кардио", status: "done", exercises: ["HIIT 30 мин", "Скакалка 10 мин", "Планка 3×60с"] },
  { day: "Четверг", name: "Отдых", status: "rest", exercises: [] },
  { day: "Пятница", name: "Ноги + ягодицы", status: "today", exercises: ["Становая тяга 4×8", "Жим ногами 3×15", "Ягодичный мост 4×15"] },
  { day: "Суббота", name: "Растяжка + йога", status: "upcoming", exercises: ["Йога-флоу 45 мин", "МФР-ролл 15 мин"] },
  { day: "Воскресенье", name: "Отдых", status: "rest", exercises: [] },
];

const meals = [
  { time: "08:00", name: "Завтрак", foods: ["Овсянка на воде 200г", "Протеиновый коктейль 1 порция", "Банан 1шт"], kcal: 520, done: true },
  { time: "12:30", name: "Обед", foods: ["Куриная грудка 180г", "Гречка 150г", "Овощной салат"], kcal: 680, done: true },
  { time: "16:00", name: "Перекус", foods: ["Протеиновый батончик TUNNER", "Миндаль 30г"], kcal: 290, done: false },
  { time: "19:30", name: "Ужин", foods: ["Лосось 150г", "Брокколи на пару 200г", "Оливковое масло 1ст.л."], kcal: 450, done: false },
];

const kbjuData = [
  { name: "Белки", value: 87, goal: 120, color: "#bcfd4c" },
  { name: "Жиры", value: 45, goal: 65, color: "#60a5fa" },
  { name: "Углеводы", value: 190, goal: 240, color: "#f97316" },
];

const testSteps = [
  { q: "Какова ваша основная цель?", opts: ["Похудение", "Набор массы", "Поддержание формы", "Рост силы"] },
  { q: "Ваш пол и возраст?", opts: ["Женщина 18–24", "Женщина 25–35", "Мужчина 18–24", "Мужчина 25–35"] },
  { q: "Ваш уровень физической активности?", opts: ["Новичок (0–1 раз/нед)", "Средний (2–3 раза/нед)", "Активный (4–5 раз/нед)", "Профессионал (6+ раз/нед)"] },
  { q: "Есть ли ограничения в питании?", opts: ["Нет ограничений", "Вегетарианство", "Непереносимость лактозы", "Непереносимость глютена"] },
  { q: "Какие добавки вас интересуют?", opts: ["Протеин", "Витамины и минералы", "Предтреники", "Жиросжигатели"] },
];

const referrals = [
  { name: "М. С***ова", status: "Зарегистрирован", bonus: 300, date: "1 апр" },
  { name: "И. П***ов", status: "Первый заказ", bonus: 300, date: "15 мар" },
];

const contentLibrary = [
  { title: "Гайд: Жиросжигание без потери мышц", type: "Гайд", locked: false, new: true },
  { title: "30 рецептов с высоким содержанием белка", type: "Рецепты", locked: false, new: false },
  { title: "Интенсив: 4-недельная программа похудения", type: "Интенсив", locked: false, new: false },
  { title: "Биохакинг сна и восстановления", type: "Биохакинг", locked: true, new: false },
  { title: "Гайд по спортивным добавкам 2026", type: "Гайд", locked: true, new: false },
  { title: "Консультация: разбор анализов крови", type: "Биохакинг", locked: true, new: false },
];

const navItems = [
  { id: "dashboard", label: "Дашборд", icon: LayoutDashboard },
  { id: "test", label: "Тест и программа", icon: FlaskConical },
  { id: "workouts", label: "Тренировки", icon: Dumbbell },
  { id: "nutrition", label: "Питание", icon: Salad },
  { id: "subscription", label: "Подписка", icon: CreditCard },
  { id: "bonuses", label: "Бонусы", icon: Gift },
  { id: "orders", label: "Заказы", icon: ShoppingBag },
  { id: "profile", label: "Профиль", icon: User },
];

function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: string }) {
  const styles: Record<string, string> = {
    default: "bg-gray-100 text-gray-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
    primary: "text-black",
    outline: "border border-gray-200 text-gray-600",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${styles[variant]}`}
      style={variant === "primary" ? { background: ACCENT } : {}}>
      {children}
    </span>
  );
}

function StatCard({ icon: Icon, label, value, sub, accent }: any) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: accent ? ACCENT : "#f3f4f6" }}>
          <Icon className="w-5 h-5" style={{ color: accent ? "#000" : "#6b7280" }} />
        </div>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</span>
      </div>
      <div>
        <div className="text-2xl font-black text-gray-900">{value}</div>
        {sub && <div className="text-xs text-gray-400 font-medium mt-0.5">{sub}</div>}
      </div>
    </div>
  );
}

function ProgressBar({ value, max, color = ACCENT }: { value: number; max: number; color?: string }) {
  return (
    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(100, (value / max) * 100)}%`, background: color }} />
    </div>
  );
}

function SectionDashboard({ setSection }: { setSection: (s: string) => void }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-black text-gray-900">Привет, {user.name.split(" ")[0]}!</h1>
        <p className="text-gray-500 font-medium text-sm mt-1">Программа: <span className="text-gray-900 font-bold">{user.program}</span></p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Crown} label="Подписка" value={user.subscription.plan} sub={`до ${user.subscription.renewDate}`} accent />
        <StatCard icon={Gift} label="Бонусы" value={`${user.bonuses.balance} б`} sub={`сгорит ${user.bonuses.burnAmount} б через ${user.bonuses.burnDays} дн`} />
        <StatCard icon={Dumbbell} label="Тренировки" value={`${user.workoutsThisWeek}/${user.workoutsGoal}`} sub="за эту неделю" />
        <StatCard icon={TrendingUp} label="Прогресс" value="68%" sub="к цели" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-black text-gray-900 mb-4 uppercase tracking-tight text-sm">Питание сегодня</h3>
          {kbjuData.map((k) => (
            <div key={k.name} className="mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-600">{k.name}</span>
                <span className="text-xs font-bold text-gray-900">{k.value} / {k.goal} г</span>
              </div>
              <ProgressBar value={k.value} max={k.goal} color={k.color} />
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-bold">КАЛОРИИ</span>
            <span className="text-sm font-black text-gray-900">1 210 / 1 680 ккал</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-black text-gray-900 mb-4 uppercase tracking-tight text-sm">Нагрузка за неделю</h3>
          <ResponsiveContainer width="100%" height={140}>
            <BarChart data={weeklyProgress} barSize={24}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#9ca3af", fontWeight: 700 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 12 }} />
              <Bar dataKey="load" fill={ACCENT} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-black text-gray-900 mb-4 uppercase tracking-tight text-sm">Сегодня</h3>
        <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: ACCENT }}>
            <Dumbbell className="w-5 h-5 text-black" />
          </div>
          <div className="flex-1">
            <div className="font-bold text-gray-900 text-sm">Ноги + ягодицы</div>
            <div className="text-xs text-gray-500 font-medium">3 упражнения · ~50 мин</div>
          </div>
          <button onClick={() => setSection("workouts")} className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-colors text-black" style={{ background: ACCENT }}>
            Начать
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Пройти тест", icon: FlaskConical, section: "test" },
          { label: "Повторить заказ", icon: RefreshCw, section: "orders" },
          { label: "Консультация", icon: MessageCircle, section: "subscription" },
        ].map((a) => (
          <button key={a.label} onClick={() => setSection(a.section)}
            className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:border-gray-300 transition-all text-left">
            <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
              <a.icon className="w-4 h-4 text-gray-600" />
            </div>
            <span className="text-sm font-bold text-gray-900">{a.label}</span>
            <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
          </button>
        ))}
      </div>
    </div>
  );
}

function SectionTest() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState("");
  const [done, setDone] = useState(false);

  function startTest() { setStep(0); setAnswers([]); setSelected(""); setDone(false); }
  function next() {
    if (!selected) return;
    const newAns = [...answers, selected];
    setAnswers(newAns);
    setSelected("");
    if (step + 1 >= testSteps.length) setDone(true);
    else setStep(step + 1);
  }
  function back() {
    if (step === 0) { setStep(-1); return; }
    const newAns = answers.slice(0, -1);
    setAnswers(newAns);
    setSelected(newAns[step - 1] || "");
    setStep(step - 1);
  }
  function restart() { setStep(-1); setAnswers([]); setSelected(""); setDone(false); }

  const recommendations = [
    { name: "TUNNER Isolate Vanilla 900г", price: "2 890 ₽", tag: "Протеин" },
    { name: "L-Карнитин 3000 250мл", price: "890 ₽", tag: "Жиросжигатель" },
    { name: "Омега-3 Premium 90 капс", price: "790 ₽", tag: "Витамины" },
  ];

  if (done) return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <button onClick={restart} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="text-2xl font-black text-gray-900">Ваша персональная программа</h1>
      </div>
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: ACCENT }}>
            <Star className="w-5 h-5 text-black" />
          </div>
          <div>
            <div className="font-black text-lg">Жиросжигание — 8 недель</div>
            <div className="text-sm text-white/60 font-medium">Составлено по вашим ответам</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[{ label: "Калории/день", val: "1 680 ккал" }, { label: "Белок/день", val: "120 г" }, { label: "Тренировок/нед", val: "5" }].map(i => (
            <div key={i.label} className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-lg font-black" style={{ color: ACCENT }}>{i.val}</div>
              <div className="text-xs text-white/50 font-bold uppercase tracking-wide mt-1">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-black text-gray-900 mb-4 uppercase tracking-tight text-sm">Рекомендованные добавки</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendations.map((r) => (
            <div key={r.name} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col gap-3">
              <Badge variant="primary">{r.tag}</Badge>
              <div className="font-bold text-gray-900 text-sm leading-snug">{r.name}</div>
              <div className="font-black text-gray-900">{r.price}</div>
              <button className="w-full py-2.5 rounded-xl text-sm font-black uppercase tracking-wider text-black transition-colors" style={{ background: ACCENT }}>
                В корзину
              </button>
            </div>
          ))}
        </div>
      </div>
      <button onClick={restart} className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors">
        <RefreshCw className="w-4 h-4" /> Перепройти тест
      </button>
    </div>
  );

  if (step === -1) return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-black text-gray-900">Тест и результаты</h1>
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 text-center flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: ACCENT }}>
          <FlaskConical className="w-8 h-8 text-black" />
        </div>
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-3">Персональный тест</h2>
          <p className="text-white/60 font-medium max-w-md mx-auto">5 вопросов — и ты получишь план питания, тренировок и список добавок, подобранных нутрициологом</p>
        </div>
        <button onClick={startTest} className="px-8 py-4 rounded-2xl font-black uppercase tracking-wider text-black" style={{ background: ACCENT }}>
          Начать тестирование
        </button>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-black text-gray-900 mb-4 text-sm uppercase tracking-tight">История тестов</h3>
        <table className="w-full text-sm">
          <thead><tr className="text-xs text-gray-400 uppercase tracking-wider border-b border-gray-100">
            <th className="text-left pb-3 font-bold">Дата</th><th className="text-left pb-3 font-bold">Результат</th><th className="text-right pb-3 font-bold">Экспорт</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-gray-50">
              <td className="py-3 text-gray-600 font-medium">13 апр 2026</td>
              <td className="py-3 font-bold text-gray-900">Жиросжигание — 8 нед</td>
              <td className="py-3 text-right"><button className="text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors">PDF ↓</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 max-w-xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <button onClick={back} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="text-sm font-bold text-gray-500">{step + 1} / {testSteps.length}</span>
      </div>
      <ProgressBar value={step + 1} max={testSteps.length} />
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-black text-gray-900 mb-6">{testSteps[step].q}</h2>
        <div className="flex flex-col gap-3">
          {testSteps[step].opts.map((opt) => (
            <button key={opt} onClick={() => setSelected(opt)}
              className="flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left font-bold text-sm"
              style={{ borderColor: selected === opt ? ACCENT : "#e5e7eb", background: selected === opt ? `${ACCENT}15` : "white", color: selected === opt ? "#000" : "#374151" }}>
              <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors"
                style={{ borderColor: selected === opt ? ACCENT : "#d1d5db" }}>
                {selected === opt && <div className="w-2.5 h-2.5 rounded-full" style={{ background: ACCENT }} />}
              </div>
              {opt}
            </button>
          ))}
        </div>
        <button onClick={next} disabled={!selected}
          className="w-full mt-6 py-4 rounded-xl font-black uppercase tracking-wider text-sm transition-all disabled:opacity-40 text-black"
          style={{ background: ACCENT }}>
          {step + 1 === testSteps.length ? "Получить результат" : "Далее"}
        </button>
      </div>
    </div>
  );
}

function SectionWorkouts() {
  const [tab, setTab] = useState("program");
  const statusIcon = (s: string) => {
    if (s === "done") return <CheckCircle2 className="w-4 h-4 text-green-500" />;
    if (s === "today") return <div className="w-4 h-4 rounded-full" style={{ background: ACCENT }} />;
    if (s === "rest") return <Circle className="w-4 h-4 text-gray-300" />;
    return <Circle className="w-4 h-4 text-gray-200" />;
  };
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-black text-gray-900">Тренировки</h1>
      <div className="flex gap-2 bg-gray-100 rounded-2xl p-1 w-fit">
        {[{ id: "program", label: "Программа" }, { id: "history", label: "История" }].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
            style={{ background: tab === t.id ? "#fff" : "transparent", color: tab === t.id ? "#000" : "#9ca3af", boxShadow: tab === t.id ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>
            {t.label}
          </button>
        ))}
      </div>
      {tab === "program" && (
        <>
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 text-white flex items-center gap-4">
            <div className="flex-1">
              <div className="font-black text-lg">{user.program}</div>
              <div className="text-white/60 text-sm font-medium mt-1">Прогресс: {user.workoutsThisWeek} из {user.workoutsGoal * 8} тренировок</div>
              <ProgressBar value={user.workoutsThisWeek} max={user.workoutsGoal * 8} />
            </div>
            <div className="text-4xl font-black" style={{ color: ACCENT }}>{Math.round((user.workoutsThisWeek / (user.workoutsGoal * 8)) * 100)}%</div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {workouts.map((w, i) => (
              <div key={i} className={`flex items-start gap-4 p-5 ${i !== workouts.length - 1 ? "border-b border-gray-50" : ""} ${w.status === "today" ? "bg-lime-50/50" : ""}`}>
                <div className="mt-0.5">{statusIcon(w.status)}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{w.day}</span>
                    {w.status === "today" && <Badge variant="primary">Сегодня</Badge>}
                    {w.status === "done" && <Badge variant="success">Выполнено</Badge>}
                    {w.status === "rest" && <Badge variant="outline">Отдых</Badge>}
                  </div>
                  <div className="font-bold text-gray-900 text-sm mt-1">{w.name}</div>
                  {w.exercises.length > 0 && (
                    <div className="text-xs text-gray-400 font-medium mt-1">{w.exercises.join(" · ")}</div>
                  )}
                </div>
                {w.status === "today" && (
                  <button className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider text-black flex-shrink-0" style={{ background: ACCENT }}>
                    <Play className="w-3.5 h-3.5 inline mr-1" />Старт
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-black text-gray-900 mb-4 text-sm uppercase tracking-tight">Нагрузка по неделям</h3>
            <ResponsiveContainer width="100%" height={160}>
              <AreaChart data={weeklyProgress}>
                <defs><linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={ACCENT} stopOpacity={0.3} /><stop offset="95%" stopColor={ACCENT} stopOpacity={0} /></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#9ca3af", fontWeight: 700 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", fontSize: 12 }} />
                <Area type="monotone" dataKey="load" stroke={ACCENT} strokeWidth={2.5} fill="url(#areaGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
      {tab === "history" && (
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <p className="text-gray-400 text-sm font-medium text-center py-8">История тренировок за прошлые недели появится здесь</p>
        </div>
      )}
    </div>
  );
}

function SectionNutrition() {
  const [tab, setTab] = useState("today");
  const totalKcal = meals.reduce((s, m) => s + m.kcal, 0);
  const doneKcal = meals.filter(m => m.done).reduce((s, m) => s + m.kcal, 0);
  const [checkedMeals, setCheckedMeals] = useState<number[]>([0, 1]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-black text-gray-900">Питание</h1>
      <div className="flex gap-2 bg-gray-100 rounded-2xl p-1 w-fit">
        {[{ id: "today", label: "Сегодня" }, { id: "recipes", label: "Рецепты" }, { id: "diary", label: "Дневник" }].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
            style={{ background: tab === t.id ? "#fff" : "transparent", color: tab === t.id ? "#000" : "#9ca3af", boxShadow: tab === t.id ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>
            {t.label}
          </button>
        ))}
      </div>
      {tab === "today" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {kbjuData.map((k) => (
              <div key={k.name} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{k.name}</span>
                  <span className="text-xs font-bold text-gray-900">{k.value} / {k.goal} г</span>
                </div>
                <ProgressBar value={k.value} max={k.goal} color={k.color} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between px-1">
            <span className="text-sm font-bold text-gray-600">Калории сегодня</span>
            <span className="text-sm font-black text-gray-900">{doneKcal} / 1 680 ккал</span>
          </div>
          <div className="flex flex-col gap-3">
            {meals.map((meal, i) => (
              <div key={i} className={`bg-white rounded-2xl p-5 border shadow-sm transition-all ${checkedMeals.includes(i) ? "border-lime-200 bg-lime-50/30" : "border-gray-100"}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-400">{meal.time}</span>
                      <span className="font-black text-gray-900 text-sm">{meal.name}</span>
                      <span className="text-xs text-gray-400 font-medium">{meal.kcal} ккал</span>
                    </div>
                    <div className="text-xs text-gray-500 font-medium">{meal.foods.join(", ")}</div>
                  </div>
                  <button onClick={() => setCheckedMeals(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])}
                    className="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all"
                    style={{ borderColor: checkedMeals.includes(i) ? ACCENT : "#e5e7eb", background: checkedMeals.includes(i) ? ACCENT : "transparent" }}>
                    {checkedMeals.includes(i) && <Check className="w-4 h-4 text-black" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {tab === "recipes" && (
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <p className="text-gray-400 text-sm font-medium text-center py-8">Раздел рецептов подключается в Pro-подписке</p>
        </div>
      )}
      {tab === "diary" && (
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <p className="text-gray-400 text-sm font-medium text-center py-8">Дневник питания будет здесь</p>
        </div>
      )}
    </div>
  );
}

function SectionSubscription({ setSection }: { setSection: (s: string) => void }) {
  const plans = [
    { id: "basic", name: "Базовый", price: "990 ₽/мес", features: ["Рецепты", "База знаний", "5% кэшбек"], active: false },
    { id: "pro", name: "Про", price: "1 990 ₽/мес", features: ["Всё из Базового", "Персональные планы", "1 консультация/мес", "Приоритетная доставка"], active: true },
    { id: "elite", name: "Элит", price: "3 490 ₽/мес", features: ["Всё из Про", "Безлимит консультаций", "Биохакинг-гайды", "VIP-поддержка"], active: false },
  ];
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-black text-gray-900">Подписка и контент</h1>
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <Crown className="w-5 h-5" style={{ color: ACCENT }} />
            <span className="font-black text-white text-lg">Подписка {user.subscription.plan}</span>
            <Badge variant="primary">Активна</Badge>
          </div>
          <div className="text-white/50 text-sm font-medium">Следующее списание: {user.subscription.renewDate} · {user.subscription.price}</div>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button className="px-5 py-2.5 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/20 text-white transition-colors">Изменить тариф</button>
          <button className="px-5 py-2.5 rounded-xl text-sm font-bold bg-white/5 hover:bg-white/10 text-white/60 transition-colors">Приостановить</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div key={p.id} className={`rounded-2xl p-6 flex flex-col gap-4 border-2 transition-all ${p.active ? "border-transparent shadow-lg" : "border-gray-100 bg-white shadow-sm"}`}
            style={p.active ? { background: DARK } : {}}>
            {p.active && <Badge variant="primary">Текущий</Badge>}
            <div>
              <div className="font-black text-lg" style={{ color: p.active ? "#fff" : "#111" }}>{p.name}</div>
              <div className="text-2xl font-black mt-1" style={{ color: p.active ? ACCENT : "#111" }}>{p.price}</div>
            </div>
            <ul className="flex flex-col gap-2">
              {p.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm font-medium" style={{ color: p.active ? "rgba(255,255,255,0.7)" : "#6b7280" }}>
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: p.active ? ACCENT : "#10b981" }} />
                  {f}
                </li>
              ))}
            </ul>
            {!p.active && <button className="w-full py-3 rounded-xl text-sm font-bold border border-gray-200 text-gray-500 hover:border-gray-400 transition-colors">Перейти</button>}
          </div>
        ))}
      </div>
      <div>
        <h3 className="font-black text-gray-900 mb-4 text-sm uppercase tracking-tight">Библиотека контента</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contentLibrary.map((c) => (
            <div key={c.title} className={`bg-white rounded-2xl p-5 border shadow-sm relative overflow-hidden transition-all ${c.locked ? "opacity-70" : "hover:shadow-md cursor-pointer"}`}
              style={{ borderColor: c.locked ? "#e5e7eb" : c.new ? ACCENT + "80" : "#e5e7eb" }}>
              {c.new && <div className="absolute top-3 right-3"><Badge variant="primary">Новое</Badge></div>}
              {c.locked && <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center rounded-2xl"><Lock className="w-5 h-5 text-gray-400" /></div>}
              <Badge variant="outline">{c.type}</Badge>
              <div className="font-bold text-gray-900 text-sm mt-3 leading-snug">{c.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-black text-gray-900 mb-4 text-sm uppercase tracking-tight">Записаться на консультацию</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {["21 апр", "22 апр", "23 апр", "24 апр", "25 апр", "26 апр"].map((d, i) => (
            <button key={d} className={`p-3 rounded-xl border-2 text-center transition-all ${i === 1 ? "text-black font-bold" : "border-gray-100 text-gray-500 hover:border-gray-300 font-medium"} text-xs`}
              style={i === 1 ? { borderColor: ACCENT, background: `${ACCENT}20` } : {}}>
              {d}
            </button>
          ))}
        </div>
        <button className="mt-4 w-full py-3 rounded-xl font-bold text-sm text-black transition-colors" style={{ background: ACCENT }}>
          <Calendar className="w-4 h-4 inline mr-2" />Записаться
        </button>
      </div>
    </div>
  );
}

function SectionBonuses() {
  const [copied, setCopied] = useState(false);
  const refLink = "https://tunner.ru/ref/anna1250";
  function copy() { navigator.clipboard.writeText(refLink); setCopied(true); setTimeout(() => setCopied(false), 2000); }
  const howToEarn = [
    { label: "Регистрация", bonus: "+100", done: true },
    { label: "Первый заказ", bonus: "+200", done: true },
    { label: "Отзыв на товар", bonus: "+50", done: false },
    { label: "День рождения", bonus: "+500", done: false },
    { label: "Приглашение друга", bonus: "+300", done: false },
  ];
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-black text-gray-900">Бонусы и рефералы</h1>
      <div className="rounded-3xl p-8 flex items-center gap-6" style={{ background: DARK }}>
        <div className="flex-1">
          <div className="text-5xl font-black" style={{ color: ACCENT }}>{user.bonuses.balance}</div>
          <div className="text-white/60 font-bold uppercase tracking-wider text-xs mt-1">бонусных баллов</div>
          <div className="text-white/40 text-xs font-medium mt-2">Сгорит {user.bonuses.burnAmount} баллов через {user.bonuses.burnDays} дней</div>
        </div>
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center opacity-20">
          <Gift className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-black text-gray-900 mb-4 text-sm uppercase tracking-tight">Как получить больше</h3>
          <div className="flex flex-col gap-3">
            {howToEarn.map((h) => (
              <div key={h.label} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: h.done ? ACCENT : "#e5e7eb", background: h.done ? ACCENT : "transparent" }}>
                  {h.done && <Check className="w-3 h-3 text-black" />}
                </div>
                <span className={`text-sm font-medium flex-1 ${h.done ? "line-through text-gray-400" : "text-gray-700"}`}>{h.label}</span>
                <span className="text-sm font-bold" style={{ color: h.done ? "#9ca3af" : ACCENT === "#bcfd4c" ? "#65a30d" : ACCENT }}>{h.bonus}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-black text-gray-900 mb-4 text-sm uppercase tracking-tight">История начислений</h3>
          <div className="flex flex-col gap-3">
            {bonusHistory.map((b) => (
              <div key={b.id} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black ${b.type === "credit" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-500"}`}>
                  {b.type === "credit" ? "+" : "−"}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-900">{b.label}</div>
                  <div className="text-xs text-gray-400 font-medium">{b.date}</div>
                </div>
                <span className={`text-sm font-black ${b.type === "credit" ? "text-green-600" : "text-red-500"}`}>
                  {b.amount > 0 ? "+" : ""}{b.amount} б
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-black text-gray-900 mb-2 text-sm uppercase tracking-tight">Реферальная программа</h3>
        <p className="text-gray-500 text-sm font-medium mb-4">Приглашай друзей и получай 300 бонусов за каждого</p>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-mono text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap">
            {refLink}
          </div>
          <button onClick={copy} className="flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm text-black transition-colors" style={{ background: ACCENT }}>
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Скопировано" : "Копировать"}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-gray-900">{referrals.length}</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Приглашено</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-green-600">+600</div>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Получено бонусов</div>
          </div>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="text-xs text-gray-400 uppercase tracking-wider border-b border-gray-100">
            <th className="text-left pb-3 font-bold">Имя</th><th className="text-left pb-3 font-bold">Статус</th><th className="text-right pb-3 font-bold">Бонус</th>
          </tr></thead>
          <tbody>
            {referrals.map((r) => (
              <tr key={r.name} className="border-b border-gray-50">
                <td className="py-3 font-bold text-gray-900">{r.name}</td>
                <td className="py-3"><Badge variant="success">{r.status}</Badge></td>
                <td className="py-3 text-right font-black text-green-600">+{r.bonus} б</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SectionOrders() {
  const [filter, setFilter] = useState("all");
  const statusMap: Record<string, { label: string; variant: string }> = {
    delivered: { label: "Доставлен", variant: "success" },
    active: { label: "В пути", variant: "warning" },
    cancelled: { label: "Отменён", variant: "danger" },
  };
  const filtered = orders.filter(o => filter === "all" || o.status === filter);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-black text-gray-900">Заказы</h1>
      <div className="flex gap-2 flex-wrap">
        {[{ id: "all", label: "Все" }, { id: "active", label: "Активные" }, { id: "delivered", label: "Доставлены" }, { id: "cancelled", label: "Отменены" }].map(f => (
          <button key={f.id} onClick={() => setFilter(f.id)}
            className="px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all"
            style={{ borderColor: filter === f.id ? ACCENT : "#e5e7eb", background: filter === f.id ? `${ACCENT}20` : "white", color: filter === f.id ? "#000" : "#6b7280" }}>
            {f.label}
          </button>
        ))}
      </div>
      {filtered.length === 0 && <div className="bg-white rounded-2xl p-10 border border-gray-100 text-center text-gray-400 font-medium text-sm">Нет заказов в этой категории</div>}
      {filtered.map((order) => (
        <div key={order.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-black text-gray-900">Заказ #{order.id}</span>
                <Badge variant={statusMap[order.status]?.variant || "default"}>{statusMap[order.status]?.label}</Badge>
              </div>
              <div className="text-sm text-gray-400 font-medium">{order.date}</div>
            </div>
            <div className="font-black text-gray-900 text-lg">{order.total}</div>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            {order.items.map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <Package className="w-4 h-4 text-gray-300 flex-shrink-0" />{item}
              </div>
            ))}
          </div>
          <div className="flex gap-3 pt-4 border-t border-gray-50">
            <button className="px-4 py-2 rounded-xl text-xs font-bold text-black transition-colors" style={{ background: ACCENT }}>
              <RefreshCw className="w-3.5 h-3.5 inline mr-1" />Повторить
            </button>
            {order.status === "delivered" && (
              <button className="px-4 py-2 rounded-xl text-xs font-bold border border-gray-200 text-gray-500 hover:border-gray-400 transition-colors">Оставить отзыв</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionProfile() {
  const [notif, setNotif] = useState({ email: true, sms: false, push: true });
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-black text-gray-900">Профиль и настройки</h1>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-black text-gray-900 mb-4 text-sm uppercase tracking-tight">Личные данные</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[{ label: "Имя", val: "Анна" }, { label: "Фамилия", val: "Иванова" }, { label: "Email", val: "anna@mail.ru" }, { label: "Телефон", val: "+7 916 000-00-00" }].map(f => (
            <div key={f.label}>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 block">{f.label}</label>
              <input defaultValue={f.val} className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 focus:border-black outline-none transition-colors" />
            </div>
          ))}
        </div>
        <button className="mt-4 px-6 py-3 rounded-xl font-bold text-sm text-black" style={{ background: ACCENT }}>Сохранить</button>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-black text-gray-900 mb-4 text-sm uppercase tracking-tight">Уведомления</h3>
        <div className="flex flex-col gap-4">
          {([["email", "Email-уведомления", "Акции, статусы заказов"], ["sms", "SMS", "Только важные события"], ["push", "Push-уведомления", "Все обновления в браузере"]] as const).map(([key, label, sub]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-900 text-sm">{label}</div>
                <div className="text-xs text-gray-400 font-medium">{sub}</div>
              </div>
              <button onClick={() => setNotif(p => ({ ...p, [key]: !p[key] }))}
                className="w-11 h-6 rounded-full transition-all relative flex-shrink-0"
                style={{ background: notif[key] ? ACCENT : "#e5e7eb" }}>
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 transition-all shadow-sm" style={{ left: notif[key] ? "calc(100% - 20px)" : "4px" }} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-black text-gray-900 mb-4 text-sm uppercase tracking-tight">Смена пароля</h3>
        <div className="flex flex-col gap-3 max-w-sm">
          {["Текущий пароль", "Новый пароль", "Подтвердите пароль"].map(l => (
            <input key={l} type="password" placeholder={l} className="border-2 border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition-colors" />
          ))}
          <button className="px-6 py-3 rounded-xl font-bold text-sm text-black w-fit" style={{ background: ACCENT }}>Изменить пароль</button>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [section, setSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentNav = navItems.find(n => n.id === section);

  const renderSection = () => {
    switch (section) {
      case "dashboard": return <SectionDashboard setSection={setSection} />;
      case "test": return <SectionTest />;
      case "workouts": return <SectionWorkouts />;
      case "nutrition": return <SectionNutrition />;
      case "subscription": return <SectionSubscription setSection={setSection} />;
      case "bonuses": return <SectionBonuses />;
      case "orders": return <SectionOrders />;
      case "profile": return <SectionProfile />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50 font-[Inter_Tight,Inter,sans-serif]">
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <aside className={`fixed top-0 left-0 h-full w-64 flex flex-col z-40 transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ background: DARK }}>
        <div className="p-6 border-b border-white/10">
          <button onClick={() => setLocation("/")} className="flex items-center gap-2 group mb-6">
            <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
            <span className="text-white/40 text-xs font-bold group-hover:text-white transition-colors">На сайт</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-black flex-shrink-0" style={{ background: ACCENT }}>
              {user.avatar}
            </div>
            <div>
              <div className="font-bold text-white text-sm leading-tight">{user.name}</div>
              <div className="text-xs font-medium" style={{ color: ACCENT }}>{user.subscription.plan}-подписка</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = section === item.id;
            return (
              <button key={item.id} onClick={() => { setSection(item.id); setSidebarOpen(false); }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left"
                style={{ background: active ? ACCENT : "transparent", color: active ? "#000" : "rgba(255,255,255,0.5)" }}>
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-bold">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button onClick={() => setLocation("/")} className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/40 hover:text-white/70 transition-colors w-full">
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-bold">Выйти</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col lg:ml-64 min-h-screen">
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center gap-4">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
            <span className="font-bold text-gray-900">Личный кабинет</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-600">{currentNav?.label}</span>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <button className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors relative">
              <Bell className="w-4 h-4 text-gray-600" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ background: ACCENT }} />
            </button>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black text-black" style={{ background: ACCENT }}>
              {user.avatar}
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 max-w-5xl w-full mx-auto">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}
