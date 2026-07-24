import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", value: 4200 },
  { day: "Tue", value: 5100 },
  { day: "Wed", value: 4700 },
  { day: "Thu", value: 6200 },
  { day: "Fri", value: 5900 },
  { day: "Sat", value: 7100 },
  { day: "Sun", value: 8600 },
];

const MarketChart = () => {
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

          <h2 className="text-5xl font-bold text-white">

            Portfolio Performance

          </h2>

          <p className="text-slate-400 mt-4 text-lg">

            Weekly investment growth

          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl"
        >

          <div className="flex flex-wrap justify-between gap-8 mb-10">

            <div>

              <p className="text-slate-400">

                Total Portfolio

              </p>

              <h2 className="text-4xl font-bold text-white mt-2">

                $128,450

              </h2>

            </div>

            <div>

              <p className="text-slate-400">

                Weekly Return

              </p>

              <h2 className="text-4xl font-bold text-green-400 mt-2">

                +18.4%

              </h2>

            </div>

            <div>

              <p className="text-slate-400">

                Total Profit

              </p>

              <h2 className="text-4xl font-bold text-cyan-400 mt-2">

                $18,240

              </h2>

            </div>

          </div>

          <div className="h-105">

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={data}>

                <CartesianGrid
                  strokeDasharray="4 4"
                  stroke="#334155"
                />

                <XAxis
                  dataKey="day"
                  stroke="#94A3B8"
                />

                <YAxis
                  stroke="#94A3B8"
                />

                <Tooltip
                  contentStyle={{
                    background: "#0F172A",
                    border: "none",
                    borderRadius: 12,
                    color: "#fff",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#06B6D4"
                  strokeWidth={4}
                  dot={{
                    r: 5,
                  }}
                  activeDot={{
                    r: 8,
                  }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default MarketChart;
