/* eslint-disable @typescript-eslint/no-explicit-any */
import Icon from "@/components/ui/icon";

const minusWords = [
  "окпд", "оцинкованный", "плетеные", "подручных", "подставка",
  "прозрачные", "ротанг", "руками", "самодельные", "связать",
  "сделать", "сорта", "фото", "цемент"
];

const regions = [
  "Геленджик", "Новороссийск", "Ульяновск", "Самарская область",
  "Ижевск", "Иркутск", "Махачкала", "Краснодар", "Ростов-на-Дону",
  "Волгоград", "Казань", "Уфа", "Пермь", "Екатеринбург"
];

const strategies = [
  {
    icon: "TrendingUp",
    label: "Было",
    title: "Максимум конверсий",
    sub: "с оплатой за конверсию",
    accent: "#94a3b8",
    details: ["Цель: оформление заказа", "Стоимость конверсии: 600–700 ₽", "Оплата только за факт заказа"],
    badge: "Предыдущая стратегия",
    badgeClass: "bg-slate-600",
    cardClass: "border-slate-700 bg-slate-900/50",
  },
  {
    icon: "Zap",
    label: "Стало",
    title: "Максимум конверсий",
    sub: "с оплатой за клики",
    accent: "#fb923c",
    details: ["Цель: оформление заказа", "Стоимость конверсии: 600–700 ₽", "Больше трафика + гибкость"],
    badge: "Текущая стратегия",
    badgeClass: "bg-orange-500",
    cardClass: "border-orange-500/50 bg-slate-900/80",
  }
];

const metrics = [
  { label: "Клики", value: "—", unit: "шт", icon: "MousePointerClick", color: "#f97316" },
  { label: "CTR", value: "—", unit: "%", icon: "BarChart2", color: "#06b6d4" },
  { label: "Стоимость клика", value: "—", unit: "₽", icon: "Coins", color: "#a855f7" },
  { label: "Цена конверсии", value: "600–700", unit: "₽", icon: "Target", color: "#22c55e" },
];

const results = [
  { icon: "ArrowRightLeft", title: "Смена стратегии", text: "Переход на оплату за клики при сохранении целевой цены конверсии 600–700 ₽. Это даёт системе больше обучающих данных.", color: "#f97316" },
  { icon: "Clock", title: "Круглосуточные показы", text: "Снятие временных ограничений позволяет охватить 100% суточного спроса в начале сезона.", color: "#06b6d4" },
  { icon: "Filter", title: "Чистка аудитории", text: "14 добавленных минус-слов отсекают DIY-аудиторию и нецелевой трафик, повышая качество кликов.", color: "#a855f7" },
  { icon: "MapPin", title: "Расширение географии", text: "Актуализирован список регионов: добавлены города с высоким сезонным спросом на садовые вазоны.", color: "#22c55e" },
  { icon: "Image", title: "Обновление креативов", text: "Отредактированы изображения и добавлено видео в кампанию РСЯ Вазоны для повышения CTR.", color: "#fbbf24" },
  { icon: "TrendingUp", title: "Цель — рост конверсий", text: "Все изменения направлены на увеличение числа оформленных заказов при контролируемой стоимости.", color: "#f97316" },
];

function CreativeCard({ url, label, desc, index }: { url: string; label: string; desc: string; index: number }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-slate-700/60 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ boxShadow: "0 0 0 0 rgba(249,115,22,0)" }}>
      <div className="relative overflow-hidden bg-slate-800" style={{ aspectRatio: "9/16" }}>
        <img
          src={url}
          alt={label}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(to top, rgba(10,14,26,0.8) 0%, transparent 50%)" }} />
        <div className="absolute top-2 left-2">
          <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full"
            style={{ background: "rgba(249,115,22,0.9)" }}>
            #{index}
          </span>
        </div>
      </div>
      <div className="p-3 border-t border-slate-700/60" style={{ background: "rgba(15,23,42,0.9)" }}>
        <p className="text-xs font-semibold text-white">{label}</p>
        <p className="text-[11px] text-slate-500 mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

function SectionTitle({ icon, label, title }: { icon: string; label: string; title: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "rgba(249,115,22,0.2)" }}>
          <Icon name={icon as any} size={13} className="text-orange-400" />
        </div>
        <span className="text-xs uppercase tracking-[0.25em] text-orange-400 font-semibold">{label}</span>
      </div>
      <h2 className="font-oswald text-3xl md:text-4xl font-semibold text-white">{title}</h2>
      <div className="mt-3 h-px w-24" style={{ background: "linear-gradient(90deg, #f97316, transparent)" }} />
    </div>
  );
}

export default function Index() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-white font-montserrat overflow-x-hidden" style={{ background: "#0a0e1a" }}>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-orange-400 border border-orange-500/40 px-3 py-1 rounded-full">
              Яндекс.Директ
            </span>
            <span className="text-xs text-slate-500">Май — Июнь 2026</span>
          </div>

          <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-tight mb-4">
            ОТЧЁТ ПО<br />
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #f97316, #fbbf24)" }}>
              РЕКЛАМНЫМ
            </span>
            <br />КАМПАНИЯМ
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 font-light">
            РСЯ Вазоны · Оптимизация стратегий · Регионы · Минус-слова
          </p>

          <div className="flex flex-wrap gap-3">
            {["Стратегии", "Регионы", "Минус-слова", "Скриншоты", "Итоги"].map((s) => (
              <button key={s}
                onClick={() => scrollTo(s.toLowerCase())}
                className="px-5 py-2.5 rounded-full text-sm font-medium border border-slate-700 hover:border-orange-500 hover:text-orange-400 transition-all duration-200 text-slate-300 cursor-pointer">
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs">
          <span>Прокрутите вниз</span>
          <div className="w-px h-8 animate-pulse" style={{ background: "linear-gradient(to bottom, #64748b, transparent)" }} />
        </div>
      </section>

      {/* METRICS BAR */}
      <section className="px-6 md:px-16 py-10 border-y border-slate-800/60">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.label}
              className="rounded-2xl p-5 flex flex-col gap-2 transition-all duration-300 border border-slate-800 hover:border-orange-500/40"
              style={{ background: "rgba(15,23,42,0.8)" }}>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 uppercase tracking-widest">{m.label}</span>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: m.color + "22" }}>
                  <Icon name={m.icon as any} size={16} style={{ color: m.color }} />
                </div>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-3xl font-oswald font-bold" style={{ color: m.color }}>{m.value}</span>
                <span className="text-slate-500 text-sm mb-1">{m.unit}</span>
              </div>
              {m.value === "—" && (
                <span className="text-[10px] text-slate-600">будет добавлено</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* STRATEGIES */}
      <section id="стратегии" className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon="Settings" label="Стратегии" title="Изменение стратегии ставок" />

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {strategies.map((s, i) => (
              <div key={i}
                className={`relative rounded-3xl p-8 border overflow-hidden transition-all duration-300 hover:scale-[1.02] ${s.cardClass}`}>
                {i === 1 && (
                  <div className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{ background: "radial-gradient(circle at 80% 20%, rgba(249,115,22,0.07), transparent 60%)" }} />
                )}
                <span className={`text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block text-white ${s.badgeClass}`}>
                  {s.badge}
                </span>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: s.accent + "22" }}>
                    <Icon name={s.icon as any} size={22} style={{ color: s.accent }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-oswald font-semibold">{s.title}</h3>
                    <p className="text-slate-400 text-sm">{s.sub}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {s.details.map((d, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.accent }} />
                      {d}
                    </li>
                  ))}
                </ul>
                {i === 1 && (
                  <p className="mt-5 text-sm text-slate-400 border-t border-slate-700 pt-4">
                    Переход на оплату за клики даёт алгоритму больше данных для обучения и позволяет наращивать охват в начале сезона — больше трафика при сохранении целевой стоимости заказа.
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Time restriction block */}
          <div className="rounded-3xl p-8 border border-cyan-500/30" style={{ background: "rgba(15,23,42,0.6)" }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(6,182,212,0.1)" }}>
                <Icon name="Clock" size={22} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-oswald font-semibold mb-2 text-cyan-300">Снятие ограничений по времени показов</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  Ранее показы были ограничены: <strong className="text-white">с 8:00 до 23:00 по МСК</strong>. Ограничение снято полностью — теперь реклама работает круглосуточно.
                </p>
                <div className="rounded-xl p-4 text-sm text-slate-400 leading-relaxed border border-slate-700/60" style={{ background: "rgba(15,23,42,0.6)" }}>
                  <strong className="text-white">Почему это сделано:</strong> с наступлением сезона спрос на вазоны резко возрастает. Пользователи активно интересуются товаром в разное время суток, в том числе ранним утром и поздно вечером. Ограничение по времени приводило к потере части аудитории. После снятия ограничений кампания охватывает 100% суточного трафика и не упускает ни одного потенциального покупателя.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section id="регионы" className="px-6 md:px-16 py-20" style={{ background: "rgba(15,23,42,0.3)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon="MapPin" label="Регионы" title="Целевая региональность кампаний" />

          <p className="text-slate-400 text-sm mb-8 max-w-2xl">
            Актуализирован список регионов показа. Добавлены города с высоким сезонным спросом.
            Отмечены <span className="text-orange-400 font-medium">новые регионы</span>.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-10">
            {regions.map((r, i) => (
              <div key={r}
                className={`rounded-2xl px-4 py-3 flex items-center gap-2 border transition-all hover:scale-105 duration-200
                  ${i < 8
                    ? "border-orange-500/50 text-orange-300"
                    : "border-slate-700 text-slate-300"}`}
                style={{ background: i < 8 ? "rgba(249,115,22,0.08)" : "rgba(30,41,59,0.5)" }}>
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${i < 8 ? "bg-orange-400" : "bg-slate-500"}`} />
                <span className="text-sm font-medium">{r}</span>
                {i < 8 && (
                  <span className="ml-auto text-[9px] text-orange-400 font-bold uppercase">new</span>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-5 text-sm text-slate-400 border border-slate-700/60" style={{ background: "rgba(15,23,42,0.6)" }}>
            <Icon name="Info" size={14} className="inline mr-2 text-slate-500" />
            Полный список регионов будет уточнён после получения скриншота из настроек кампании.
          </div>
        </div>
      </section>

      {/* MINUS WORDS */}
      <section id="минус-слова" className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon="Filter" label="Минус-слова" title="Минусация нецелевых запросов" />

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-base font-semibold text-slate-300 mb-4 flex items-center gap-2">
                <Icon name="X" size={16} className="text-red-400" />
                Добавленные минус-слова
              </h3>
              <div className="flex flex-wrap gap-2">
                {minusWords.map((w) => (
                  <span key={w}
                    className="px-3 py-1.5 rounded-lg text-red-300 text-sm font-mono transition-colors border border-red-800/50"
                    style={{ background: "rgba(127,29,29,0.3)" }}>
                    −{w}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: "HelpCircle", color: "text-cyan-400", title: "Что такое минусация?", text: "Минус-слова — это запросы, по которым объявление не будет показано. Это позволяет исключить нецелевую аудиторию и не тратить бюджет впустую." },
                { icon: "Search", color: "text-purple-400", title: "Как это делается?", text: "Анализируются поисковые запросы показа. Выявляются запросы типа «сделать своими руками», «фото», «ротанг» — люди ищут DIY-контент, а не покупку. Такие запросы добавляются в минус-список." },
                { icon: "TrendingDown", color: "text-green-400", title: "Эффект минусации", text: "Снижается доля нецелевых кликов → CTR растёт → алгоритм получает более качественные данные → стоимость конверсии снижается." },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl p-5 border border-slate-700/60" style={{ background: "rgba(15,23,42,0.6)" }}>
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Icon name={item.icon as any} size={14} className={item.color} />
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section id="скриншоты" className="px-6 md:px-16 py-20" style={{ background: "rgba(15,23,42,0.3)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon="Image" label="Скриншоты" title="Визуальные материалы кампании" />

          {/* Creatives block */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(249,115,22,0.15)" }}>
                <Icon name="Layers" size={16} className="text-orange-400" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Рекламные объявления — РСЯ Вазоны</h3>
                <p className="text-xs text-slate-500">Изображения, добавленные в кампанию РСЯ</p>
              </div>
              <span className="ml-auto text-xs text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full">5 креативов</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                {
                  url: "https://cdn.poehali.dev/projects/4a618134-dd09-4a1d-b8b0-4191c4210d95/bucket/89c4d0c2-0127-4c00-8b94-4cb23792cddf.jpg",
                  label: "Объявление #1",
                  desc: "Вазы — чёрные, мрамор + цветы",
                },
                {
                  url: "https://cdn.poehali.dev/projects/4a618134-dd09-4a1d-b8b0-4191c4210d95/bucket/0147174c-90b0-465c-8c59-d9d898a8e336.jpg",
                  label: "Объявление #2",
                  desc: "Сухоцветы, бежевые вазоны",
                },
                {
                  url: "https://cdn.poehali.dev/projects/4a618134-dd09-4a1d-b8b0-4191c4210d95/bucket/ff200d3a-3a2c-44e6-bd38-37b82e8af7d3.jpg",
                  label: "Объявление #3",
                  desc: "Вазоны с цветами, тёмный фон",
                },
                {
                  url: "https://cdn.poehali.dev/projects/4a618134-dd09-4a1d-b8b0-4191c4210d95/bucket/b40319cd-6763-4278-9a98-7046e2ae2daa.jpg",
                  label: "Объявление #4",
                  desc: "Пластиковые вазоны премиум",
                },
                {
                  url: "https://cdn.poehali.dev/projects/4a618134-dd09-4a1d-b8b0-4191c4210d95/bucket/164fd3b0-f9d6-4b36-8d31-119e9411be12.jpg",
                  label: "Объявление #5",
                  desc: "Сухоцветы + бежевая гамма v2",
                },
              ].map((item, i) => (
                <CreativeCard key={i} {...item} index={i + 1} />
              ))}
            </div>

            <div className="mt-6 rounded-2xl p-5 border border-slate-700/50 text-sm text-slate-400 leading-relaxed" style={{ background: "rgba(15,23,42,0.6)" }}>
              <strong className="text-white block mb-1">Что было сделано:</strong>
              В кампанию РСЯ «Вазоны» добавлены новые изображения с разными визуальными концепциями:
              тёмные глянцевые вазоны с живыми цветами и светлые матовые вазоны с сухоцветами в тёплой гамме.
              Разнообразие форматов позволяет алгоритму Яндекса тестировать, какой визуал лучше привлекает
              внимание целевой аудитории в разных сегментах, и автоматически увеличивать показы более
              эффективных вариантов.
            </div>
          </div>

          {/* Video placeholder */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(6,182,212,0.15)" }}>
                <Icon name="Video" size={16} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Видео-креатив — РСЯ Вазоны</h3>
                <p className="text-xs text-slate-500">Видео, добавленное в кампанию</p>
              </div>
            </div>
            <div className="border-2 border-dashed border-cyan-800/40 rounded-3xl p-12 flex flex-col items-center justify-center gap-3 text-center hover:border-cyan-500/40 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-cyan-800/40" style={{ background: "rgba(6,182,212,0.08)" }}>
                <Icon name="PlayCircle" size={32} className="text-cyan-600" />
              </div>
              <p className="font-semibold text-slate-300 text-sm">Видео-файл</p>
              <p className="text-slate-600 text-xs max-w-xs">Видеоролик, добавленный в кампанию РСЯ Вазоны. Пришлите файл — добавим в отчёт.</p>
              <span className="text-xs text-cyan-700 border border-cyan-900/60 px-3 py-1 rounded-full">Ожидает загрузки</span>
            </div>
          </div>

          {/* Other placeholders */}
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { label: "Настройки региональности", icon: "Map", desc: "Полный список регионов из настроек кампании в Директе" },
              { label: "Настройки стратегии", icon: "BarChart3", desc: "Скриншот стратегии и ставок из интерфейса Яндекс.Директ" },
            ].map((item, i) => (
              <div key={i}
                className="border-2 border-dashed border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center gap-3 text-center hover:border-orange-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors border border-slate-700 group-hover:border-orange-500/30"
                  style={{ background: "rgba(30,41,59,0.8)" }}>
                  <Icon name={item.icon as any} size={22} className="text-slate-600 group-hover:text-orange-400 transition-colors" />
                </div>
                <p className="font-semibold text-slate-400 text-sm">{item.label}</p>
                <p className="text-slate-600 text-xs">{item.desc}</p>
                <span className="text-xs text-slate-600 border border-slate-700 px-3 py-1 rounded-full">Ожидает загрузки</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="итоги" className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon="CheckCircle" label="Итоги" title="Итоги оптимизации и рекомендации" />

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {results.map((item, i) => (
              <div key={i}
                className="rounded-2xl p-6 border border-slate-800 transition-all duration-300 hover:border-slate-600 hover:-translate-y-1"
                style={{ background: "rgba(15,23,42,0.6)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: item.color + "18" }}>
                  <Icon name={item.icon as any} size={20} style={{ color: item.color }} />
                </div>
                <h4 className="font-semibold text-white text-sm mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-16 py-8 border-t border-slate-800 text-center text-slate-600 text-xs">
        Отчёт по рекламным кампаниям Яндекс.Директ · РСЯ Вазоны · {new Date().toLocaleDateString("ru-RU", { month: "long", year: "numeric" })}
      </footer>
    </div>
  );
}