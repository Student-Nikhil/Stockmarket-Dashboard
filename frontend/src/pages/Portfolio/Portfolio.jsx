import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  Wallet,
  TrendingUp,
  Award,
  PieChart as PieChartIcon,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// ---------- Mock Data ----------
const summary = [
  {
    label: "Total Invested",
    value: "$98,200",
    icon: Wallet,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    label: "Current Value",
    value: "$128,450",
    icon: TrendingUp,
    gradient: "from-emerald-600 to-green-500",
  },
  {
    label: "Total Gain",
    value: "+$30,250",
    icon: ArrowUpRight,
    gradient: "from-violet-600 to-purple-500",
  },
  {
    label: "Best Performer",
    value: "NVDA +8.4%",
    icon: Award,
    gradient: "from-amber-600 to-orange-500",
  },
];

const allocation = [
  { name: "AAPL", value: 25, color: "#22d3ee" },
  { name: "TSLA", value: 20, color: "#3b82f6" },
  { name: "NVDA", value: 18, color: "#8b5cf6" },
  { name: "META", value: 15, color: "#ec4899" },
  { name: "Others", value: 22, color: "#475569" },
];

const holdings = [
  {
    symbol: "AAPL",
    name: "Apple",
    shares: 25,
    avgCost: 189.2,
    price: 212.4,
    value: 5310,
    pnl: 23,
  },
  {
    symbol: "TSLA",
    name: "Tesla",
    shares: 10,
    avgCost: 298.5,
    price: 334.2,
    value: 3342,
    pnl: 12,
  },
  {
    symbol: "NVDA",
    name: "NVIDIA",
    shares: 18,
    avgCost: 152.1,
    price: 182.6,
    value: 3286.8,
    pnl: 20,
  },
  {
    symbol: "META",
    name: "Meta",
    shares: 8,
    avgCost: 701.4,
    price: 742.8,
    value: 5942.4,
    pnl: 5.9,
  },
  {
    symbol: "NFLX",
    name: "Netflix",
    shares: 4,
    avgCost: 1002.5,
    price: 965.2,
    value: 3860.8,
    pnl: -3.7,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const Portfolio = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-3">My Portfolio</h1>
          <p className="text-slate-400">
            Track your holdings, allocation and overall performance.
          </p>
        </motion.div>

        {/* Summary cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {summary.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-linear-to-r ${s.gradient} flex items-center justify-center mb-5`}
              >
                <s.icon className="text-white" size={22} />
              </div>
              <p className="text-slate-400 text-sm mb-1">{s.label}</p>
              <p className="text-2xl font-bold">{s.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Holdings table */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
            className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 overflow-x-auto"
          >
            <h3 className="text-lg font-semibold mb-6">Holdings</h3>
            <table className="w-full text-left min-w-140">
              <thead>
                <tr className="text-slate-500 text-sm border-b border-slate-800">
                  <th className="pb-3 font-medium">Stock</th>
                  <th className="pb-3 font-medium">Shares</th>
                  <th className="pb-3 font-medium">Avg Cost</th>
                  <th className="pb-3 font-medium">Price</th>
                  <th className="pb-3 font-medium">Value</th>
                  <th className="pb-3 font-medium text-right">P&amp;L</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((h) => (
                  <tr
                    key={h.symbol}
                    className="border-b border-slate-800/60 last:border-0"
                  >
                    <td className="py-4">
                      <p className="font-semibold">{h.symbol}</p>
                      <p className="text-slate-500 text-sm">{h.name}</p>
                    </td>
                    <td className="py-4 text-slate-300">{h.shares}</td>
                    <td className="py-4 text-slate-300">
                      ${h.avgCost.toFixed(2)}
                    </td>
                    <td className="py-4 text-slate-300">
                      ${h.price.toFixed(2)}
                    </td>
                    <td className="py-4 text-slate-300">
                      ${h.value.toLocaleString()}
                    </td>
                    <td className="py-4 text-right">
                      <span
                        className={`inline-flex items-center gap-1 font-medium ${
                          h.pnl >= 0 ? "text-emerald-400" : "text-rose-400"
                        }`}
                      >
                        {h.pnl >= 0 ? (
                          <ArrowUpRight size={14} />
                        ) : (
                          <ArrowDownRight size={14} />
                        )}
                        {Math.abs(h.pnl)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Allocation pie chart */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={5}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <PieChartIcon className="text-cyan-400" size={20} />
              <h3 className="text-lg font-semibold">Asset Allocation</h3>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={allocation}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                >
                  {allocation.map((entry, i) => (
                    <Cell key={i} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "#0f172a",
                    border: "1px solid #1e293b",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {allocation.map((a) => (
                <div key={a.name} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: a.color }}
                  />
                  <span className="text-slate-400 text-sm">
                    {a.name} · {a.value}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
