import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Activity,
  Bell,
  Star,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// ---------- Mock Data ----------
const stats = [
  {
    label: "Portfolio Value",
    value: "$128,450",
    change: "+12.8%",
    positive: true,
    icon: DollarSign,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    label: "Today's Profit",
    value: "$2,430",
    change: "+5.4%",
    positive: true,
    icon: TrendingUp,
    gradient: "from-emerald-600 to-green-500",
  },
  {
    label: "Today's Loss",
    value: "$430",
    change: "-1.2%",
    positive: false,
    icon: TrendingDown,
    gradient: "from-rose-600 to-pink-500",
  },
  {
    label: "Active Stocks",
    value: "32",
    change: "+4",
    positive: true,
    icon: Activity,
    gradient: "from-violet-600 to-purple-500",
  },
];

const chartData = [
  { day: "Mon", value: 3800 },
  { day: "Tue", value: 5000 },
  { day: "Wed", value: 4600 },
  { day: "Thu", value: 6100 },
  { day: "Fri", value: 6600 },
  { day: "Sat", value: 6000 },
  { day: "Sun", value: 8200 },
];

const holdings = [
  { symbol: "AAPL", name: "Apple", shares: 25, price: 212.4, change: 3.2 },
  { symbol: "TSLA", name: "Tesla", shares: 10, price: 334.2, change: 6.15 },
  { symbol: "NVDA", name: "NVIDIA", shares: 18, price: 182.6, change: 8.42 },
  { symbol: "META", name: "Meta", shares: 8, price: 742.8, change: 5.08 },
];

const watchlist = [
  { symbol: "MSFT", name: "Microsoft", price: 421.1, change: 1.4 },
  { symbol: "AMZN", name: "Amazon", price: 188.3, change: -0.8 },
  { symbol: "GOOGL", name: "Alphabet", price: 176.2, change: 2.1 },
];

const activity = [
  { text: "Bought 5 shares of AAPL", time: "2h ago", positive: true },
  { text: "Sold 3 shares of NFLX", time: "5h ago", positive: false },
  { text: "Price alert triggered for TSLA", time: "1d ago", positive: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const Dashboard = () => {
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
            Dashboard Overview
          </h1>
          <p className="text-slate-400">
            Monitor your investments in real time.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
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
              <p className="text-3xl font-bold mb-2">{s.value}</p>
              <span
                className={`text-sm font-medium ${
                  s.positive ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {s.change}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Chart + Watchlist */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Chart */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
            className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold">Portfolio Performance</h3>
                <p className="text-slate-500 text-sm">Last 7 days</p>
              </div>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <ArrowUpRight size={16} /> +18.4%
              </span>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="portfolioFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1e293b"
                  vertical={false}
                />
                <XAxis
                  dataKey="day"
                  stroke="#64748b"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#0f172a",
                    border: "1px solid #1e293b",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#22d3ee"
                  strokeWidth={3}
                  fill="url(#portfolioFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Watchlist */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={5}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Star className="text-yellow-400" size={20} />
              <h3 className="text-lg font-semibold">Watchlist</h3>
            </div>
            <div className="space-y-5">
              {watchlist.map((w) => (
                <div key={w.symbol} className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{w.symbol}</p>
                    <p className="text-slate-500 text-sm">{w.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${w.price.toFixed(2)}</p>
                    <p
                      className={`text-sm flex items-center justify-end gap-1 ${
                        w.change >= 0 ? "text-emerald-400" : "text-rose-400"
                      }`}
                    >
                      {w.change >= 0 ? (
                        <ArrowUpRight size={14} />
                      ) : (
                        <ArrowDownRight size={14} />
                      )}
                      {Math.abs(w.change)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Holdings + Activity */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Holdings table */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={6}
            className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 overflow-x-auto"
          >
            <h3 className="text-lg font-semibold mb-6">Your Holdings</h3>
            <table className="w-full text-left min-w-105">
              <thead>
                <tr className="text-slate-500 text-sm border-b border-slate-800">
                  <th className="pb-3 font-medium">Stock</th>
                  <th className="pb-3 font-medium">Shares</th>
                  <th className="pb-3 font-medium">Price</th>
                  <th className="pb-3 font-medium text-right">Change</th>
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
                      ${h.price.toFixed(2)}
                    </td>
                    <td className="py-4 text-right">
                      <span
                        className={`inline-flex items-center gap-1 font-medium ${
                          h.change >= 0 ? "text-emerald-400" : "text-rose-400"
                        }`}
                      >
                        {h.change >= 0 ? (
                          <ArrowUpRight size={14} />
                        ) : (
                          <ArrowDownRight size={14} />
                        )}
                        {Math.abs(h.change)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Activity feed */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={7}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Bell className="text-cyan-400" size={20} />
              <h3 className="text-lg font-semibold">Recent Activity</h3>
            </div>
            <div className="space-y-5">
              {activity.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${
                      a.positive ? "bg-emerald-400" : "bg-rose-400"
                    }`}
                  />
                  <div>
                    <p className="text-slate-300 text-sm">{a.text}</p>
                    <p className="text-slate-500 text-xs">{a.time}</p>
                  </div>
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

export default Dashboard;
