import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, BarChart3, ShieldCheck } from "lucide-react";

const Hero = () => {
  const stats = [
    { title: "Active Investors", value: "25K+" },
    { title: "Market Accuracy", value: "98%" },
    { title: "Stocks Tracked", value: "500+" },
  ];

  return (
    <section className="site-section site-hero relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-white">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full"></div>

      <div className="site-container w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-5 py-2 text-sm mb-8">

              <TrendingUp size={18} />

              Smart Investment Platform

            </span>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">

              Trade Smarter

              <br />

              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

                Build Wealth Faster

              </span>

            </h1>

            <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">

              Analyze stock performance, monitor your portfolio,
              track market trends and make better investment
              decisions with a beautiful analytics dashboard.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="px-8 py-4 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 font-semibold flex items-center gap-2 hover:scale-105 duration-300">

                Get Started

                <ArrowRight size={20} />

              </button>

              <button className="px-8 py-4 rounded-xl border border-white/20 hover:border-cyan-500 duration-300">

                Explore Market

              </button>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-5 mt-16">

              {stats.map((item) => (

                <div key={item.title}>

                  <h2 className="text-3xl font-bold text-cyan-400">

                    {item.value}

                  </h2>

                  <p className="text-slate-400 mt-2 text-sm">

                    {item.title}

                  </p>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-400">

                    Portfolio Balance

                  </p>

                  <h2 className="text-4xl font-bold mt-2">

                    $124,860

                  </h2>

                </div>

                <span className="text-green-400 font-bold text-xl">

                  +12.8%

                </span>

              </div>

              <div className="mt-10 space-y-5">

                {[
                  {
                    stock: "Apple",
                    price: "$212.40",
                    profit: "+3.2%",
                  },
                  {
                    stock: "Tesla",
                    price: "$334.20",
                    profit: "+6.1%",
                  },
                  {
                    stock: "NVIDIA",
                    price: "$183.50",
                    profit: "+8.4%",
                  },
                ].map((stock) => (

                  <div
                    key={stock.stock}
                    className="bg-white/5 rounded-xl p-4 flex justify-between items-center hover:bg-white/10 duration-300"
                  >

                    <div>

                      <h3 className="font-semibold">

                        {stock.stock}

                      </h3>

                      <p className="text-slate-400">

                        Stock

                      </p>

                    </div>

                    <div className="text-right">

                      <h4 className="font-semibold">

                        {stock.price}

                      </h4>

                      <p className="text-green-400">

                        {stock.profit}

                      </p>

                    </div>

                  </div>

                ))}

              </div>

              <div className="grid grid-cols-2 gap-5 mt-10">

                <div className="bg-blue-500/20 rounded-xl p-5">

                  <BarChart3
                    className="text-blue-400 mb-3"
                    size={30}
                  />

                  <h3 className="font-bold">

                    Analytics

                  </h3>

                  <p className="text-sm text-slate-300 mt-2">

                    Live market insights

                  </p>

                </div>

                <div className="bg-cyan-500/20 rounded-xl p-5">

                  <ShieldCheck
                    className="text-cyan-400 mb-3"
                    size={30}
                  />

                  <h3 className="font-bold">

                    Secure

                  </h3>

                  <p className="text-sm text-slate-300 mt-2">

                    Protected portfolio

                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
