import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Clock, ExternalLink, Newspaper } from "lucide-react";

// ---------- Mock Data ----------
const categories = ["All", "Markets", "Earnings", "Crypto", "Economy"];

const articles = [
  {
    id: 1,
    category: "Markets",
    title: "Tech stocks rally as investors bet on AI-driven growth",
    summary:
      "Major indexes climbed today led by chipmakers and cloud companies, as earnings season kicks off with strong guidance.",
    source: "MarketWatch",
    time: "2h ago",
    featured: true,
  },
  {
    id: 2,
    category: "Earnings",
    title: "NVIDIA beats expectations, shares jump 8%",
    summary:
      "The chipmaker posted record data-center revenue, fueling optimism across the semiconductor sector.",
    source: "Bloomberg",
    time: "4h ago",
  },
  {
    id: 3,
    category: "Economy",
    title: "Fed signals cautious approach to future rate cuts",
    summary:
      "Policymakers highlighted persistent inflation risks while leaving the door open for gradual easing later this year.",
    source: "Reuters",
    time: "6h ago",
  },
  {
    id: 4,
    category: "Crypto",
    title: "Bitcoin steadies above key support after volatile week",
    summary:
      "Digital assets found footing as institutional inflows offset broader risk-off sentiment in equities.",
    source: "CoinDesk",
    time: "8h ago",
  },
  {
    id: 5,
    category: "Markets",
    title: "Oil prices dip on rising inventories, demand concerns",
    summary:
      "Crude fell for a third session as supply data outpaced expectations, weighing on energy stocks.",
    source: "CNBC",
    time: "10h ago",
  },
  {
    id: 6,
    category: "Earnings",
    title: "Netflix subscriber growth slows, shares slide",
    summary:
      "The streaming giant missed subscriber targets for the quarter, raising questions about market saturation.",
    source: "WSJ",
    time: "12h ago",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" },
  }),
};

const News = () => {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? articles
        : articles.filter((a) => a.category === active),
    [active]
  );

  const featured = articles.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured || active !== "All");

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
      <div className="site-container site-page">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-full px-4 py-1.5 mb-5 text-sm text-cyan-400">
            <Newspaper size={16} />
            Latest Market News
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Stay Ahead of the Market
          </h1>
          <p className="text-slate-400">
            Curated headlines that move stocks, sectors and the economy.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition border ${
                active === c
                  ? "bg-linear-to-r from-blue-600 to-cyan-500 border-transparent text-white"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* Featured article */}
        {active === "All" && featured && (
          <motion.a
            href="#"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="block bg-slate-900/60 border border-slate-800 rounded-2xl p-8 mb-10 hover:border-cyan-500/40 transition group"
          >
            <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              {featured.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-cyan-400 transition">
              {featured.title}
            </h2>
            <p className="text-slate-400 mb-5 max-w-3xl">{featured.summary}</p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>{featured.source}</span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {featured.time}
              </span>
            </div>
          </motion.a>
        )}

        {/* Article grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((a, i) => (
            <motion.a
              href="#"
              key={a.id}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={i + 3}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition group flex flex-col"
            >
              <span className="inline-block w-fit text-xs font-semibold text-cyan-400 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
                {a.category}
              </span>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition">
                {a.title}
              </h3>
              <p className="text-slate-400 text-sm mb-5 flex-1">{a.summary}</p>
              <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-800">
                <span>{a.source}</span>
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {a.time}
                  </span>
                  <ExternalLink size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
