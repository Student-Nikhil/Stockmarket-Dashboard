import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Activity,
} from "lucide-react";

const stats = [
  {
    title: "Portfolio Value",
    value: "$128,450",
    change: "+12.8%",
    icon: DollarSign,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Today's Profit",
    value: "$2,430",
    change: "+5.4%",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Today's Loss",
    value: "$430",
    change: "-1.2%",
    icon: TrendingDown,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Active Stocks",
    value: "32",
    change: "+4",
    icon: Activity,
    color: "from-purple-500 to-indigo-500",
  },
];

const Stats = () => {
  return (
    <section className="site-section bg-slate-950">

      <div className="site-container">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-intro text-center"
        >
          <h2 className="text-5xl font-bold">
            Dashboard Overview
          </h2>

          <p className="text-slate-400 mt-5 text-lg">
            Monitor your investments in real time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-xl"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-r ${item.color} flex items-center justify-center`}
                >
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="text-slate-400 mt-8">
                  {item.title}
                </h3>

                <h1 className="text-4xl font-bold mt-3">
                  {item.value}
                </h1>

                <div className="mt-5">

                  <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 font-semibold">

                    {item.change}

                  </span>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Stats;
