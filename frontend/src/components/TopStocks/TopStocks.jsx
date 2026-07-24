import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const gainers = [
  {
    symbol: "NVDA",
    company: "NVIDIA",
    price: "$182.60",
    change: "+8.42%",
  },
  {
    symbol: "TSLA",
    company: "Tesla",
    price: "$334.20",
    change: "+6.15%",
  },
  {
    symbol: "META",
    company: "Meta",
    price: "$742.80",
    change: "+5.08%",
  },
  {
    symbol: "AAPL",
    company: "Apple",
    price: "$212.40",
    change: "+3.20%",
  },
];

const losers = [
  {
    symbol: "NFLX",
    company: "Netflix",
    price: "$965.20",
    change: "-3.24%",
  },
  {
    symbol: "INTC",
    company: "Intel",
    price: "$31.42",
    change: "-2.81%",
  },
  {
    symbol: "IBM",
    company: "IBM",
    price: "$247.70",
    change: "-1.94%",
  },
  {
    symbol: "ORCL",
    company: "Oracle",
    price: "$198.35",
    change: "-1.36%",
  },
];

const StockCard = ({ title, data, positive }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-xl">

      <div className="flex items-center gap-3 mb-8">

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
            positive
              ? "bg-green-500/20"
              : "bg-red-500/20"
          }`}
        >
          {positive ? (
            <TrendingUp className="text-green-400" size={30} />
          ) : (
            <TrendingDown className="text-red-400" size={30} />
          )}
        </div>

        <div>

          <h2 className="text-3xl font-bold">

            {title}

          </h2>

          <p className="text-slate-400">

            Today's market movers

          </p>

        </div>

      </div>

      <div className="space-y-5">

        {data.map((stock, index) => (

          <motion.div
            key={stock.symbol}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
            }}
            className="flex justify-between items-center rounded-2xl bg-slate-900/70 p-5 border border-white/5"
          >

            <div>

              <h3 className="text-xl font-bold">

                {stock.symbol}

              </h3>

              <p className="text-slate-400">

                {stock.company}

              </p>

            </div>

            <div className="text-right">

              <h4 className="text-xl font-bold">

                {stock.price}

              </h4>

              <span
                className={`font-semibold ${
                  positive
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {stock.change}
              </span>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
};

const TopStocks = () => {
  return (
    <section className="site-section bg-slate-900">

      <div className="site-container">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-intro text-center"
        >

          <h2 className="text-5xl font-bold">

            Market Highlights

          </h2>

          <p className="text-slate-400 mt-4 text-lg">

            Top gainers and losers from today's market.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          <StockCard
            title="Top Gainers"
            data={gainers}
            positive={true}
          />

          <StockCard
            title="Top Losers"
            data={losers}
            positive={false}
          />

        </div>

      </div>

    </section>
  );
};

export default TopStocks;
