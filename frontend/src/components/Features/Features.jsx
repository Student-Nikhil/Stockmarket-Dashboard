import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  BellRing,
  TrendingUp,
  Wallet,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Live Market Data",
    desc: "Monitor stock prices and market movements in real time.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Interactive Charts",
    desc: "Analyze trends using beautiful and responsive charts.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Wallet,
    title: "Portfolio Tracking",
    desc: "Track profits, losses and total investment with ease.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: BellRing,
    title: "Price Alerts",
    desc: "Receive instant notifications when stock prices change.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    desc: "Your investment data stays protected with secure storage.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Globe,
    title: "Global Markets",
    desc: "Track companies and indexes from worldwide exchanges.",
    color: "from-cyan-500 to-blue-600",
  },
];

const Features = () => {
  return (
    <section className="site-section bg-slate-900">

      <div className="site-container">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="section-intro text-center"
        >

          <h2 className="text-5xl font-bold">

            Why Choose StockPro?

          </h2>

          <p className="text-slate-400 mt-5 text-lg max-w-2xl mx-auto">

            Everything you need to manage investments,
            monitor stocks and make smarter financial decisions.

          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl"
              >

                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-r ${feature.color} flex items-center justify-center`}
                >

                  <Icon className="text-white" size={30} />

                </div>

                <h3 className="text-2xl font-bold mt-8">

                  {feature.title}

                </h3>

                <p className="text-slate-400 mt-4 leading-7">

                  {feature.desc}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default Features;
