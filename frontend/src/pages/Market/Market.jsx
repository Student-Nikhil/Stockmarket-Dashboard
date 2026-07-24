import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  TrendingUp,
  TrendingDown,
  Search,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

// ---------- Mock Data ----------
const gainers = [
  { symbol: "NVDA", name: "NVIDIA", price: 182.6, change: 8.42 },
  { symbol: "TSLA", name: "Tesla", price: 334.2, change: 6.15 },
  { symbol: "META", name: "Meta", price: 742.8, change: 5.08 },
  { symbol: "AAPL", name: "Apple", price: 212.4, change: 3.2 },
];

const losers = [
  { symbol: "NFLX", name: "Netflix", price: 965.2, change: -3.24 },
  { symbol: "INTC", name: "Intel", price: 31.42, change: -2.81 },
  { symbol: "IBM", name: "IBM", price: 247.7, change: -1.94 },
  { symbol: "ORCL", name: "Oracle", price: 198.35, change: -1.36 },
];

const allStocks = [
  { symbol: "AAPL", name: "Apple", price: 212.4, change: 3.2, sector: "Tech" },
  { symbol: "TSLA", name: "Tesla", price: 334.2, change: 6.15, sector: "Auto" },
  { symbol: "NVDA", name: "NVIDIA", price: 182.6, change: 8.42, sector: "Tech" },
  { symbol: "META", name: "Meta", price: 742.8, change: 5.08, sector: "Tech" },
  { symbol: "NFLX", name: "Netflix", price: 965.2, change: -3.24, sector: "Media" },
  { symbol: "INTC", name: "Intel", price: 31.42, change: -2.81, sector: "Tech" },
  { symbol: "IBM", name: "IBM", price: 247.7, change: -1.94, sector: "Tech" },
  { symbol: "ORCL", name: "Oracle", price: 198.35, change: -1.36, sector: "Tech" },
  { symbol: "MSFT", name: "Microsoft", price: 421.1, change: 1.4, sector: "Tech" },
  { symbol: "AMZN", name: "Amazon", price: 188.3, change: -0.8, sector: "Retail" },
  { symbol: "GOOGL", name: "Alphabet", price: 176.2, change: 2.1, sector: "Tech" },
  { symbol: "JPM", name: "JPMorgan", price: 214.9, change: 0.6, sector: "Finance" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" },
  }),
};

const MoverCard = ({ title, icon: Icon, data, tone }) => (
  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
    <div className="flex items-center gap-3 p-6 border-b border-slate-800">
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
          tone === "up" ? "bg-emerald-600/20" : "bg-rose-600/20"
        }`}
      >
        <Icon className={tone === "up" ? "text-emerald-400" : "text-rose-400"} size={20} />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-slate-500 text-sm">Today's market movers</p>
      </div>
    </div>
    <div>
      {data.map((s, idx) => (
        <div
          key={s.symbol}
          className={`flex items-center justify-between px-6 py-4 ${
            idx !== data.length - 1 ? "border-b border-slate-800/60" : ""
          }`}
        >
          <div>
            <p className="font-bold">{s.symbol}</p>
            <p className="text-slate-500 text-sm">{s.name}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">${s.price.toFixed(2)}</p>
            <p className={tone === "up" ? "text-emerald-400 text-sm" : "text-rose-400 text-sm"}>
              {tone === "up" ? "+" : ""}
              {s.change}%
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Market = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      allStocks.filter(
        (s) =>
          s.symbol.toLowerCase().includes(query.toLowerCase()) ||
          s.name.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

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
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Market Highlights
          </h1>
          <p className="text-slate-400">
            Top gainers and losers from today's market.
          </p>
        </motion.div>

        {/* Gainers / Losers */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            <MoverCard title="Top Gainers" icon={TrendingUp} data={gainers} tone="up" />
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}>
            <MoverCard title="Top Losers" icon={TrendingDown} data={losers} tone="down" />
          </motion.div>
        </div>

        {/* Search + full table */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="text-lg font-semibold">All Stocks</h3>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                size={18}
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by symbol or name..."
                className="bg-slate-800/60 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 w-full sm:w-72"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-140">
              <thead>
                <tr className="text-slate-500 text-sm border-b border-slate-800">
                  <th className="pb-3 font-medium">Stock</th>
                  <th className="pb-3 font-medium">Sector</th>
                  <th className="pb-3 font-medium">Price</th>
                  <th className="pb-3 font-medium text-right">Change</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => (
                  <tr
                    key={s.symbol}
                    className="border-b border-slate-800/60 last:border-0 hover:bg-slate-800/30 transition"
                  >
                    <td className="py-4">
                      <p className="font-semibold">{s.symbol}</p>
                      <p className="text-slate-500 text-sm">{s.name}</p>
                    </td>
                    <td className="py-4 text-slate-400">{s.sector}</td>
                    <td className="py-4 text-slate-300">${s.price.toFixed(2)}</td>
                    <td className="py-4 text-right">
                      <span
                        className={`inline-flex items-center gap-1 font-medium ${
                          s.change >= 0 ? "text-emerald-400" : "text-rose-400"
                        }`}
                      >
                        {s.change >= 0 ? (
                          <ArrowUpRight size={14} />
                        ) : (
                          <ArrowDownRight size={14} />
                        )}
                        {Math.abs(s.change)}%
                      </span>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-slate-500">
                      No stocks match "{query}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Market;
