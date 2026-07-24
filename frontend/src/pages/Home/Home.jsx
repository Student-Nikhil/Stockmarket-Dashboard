import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats";
import Features from "../../components/Features/Features";
import MarketChart from "../../components/MarketChart/MarketChart";
import TopStocks from "../../components/TopStocks/TopStocks";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <MarketChart />

      <TopStocks />

      <Footer />

    </div>
  );
};

export default Home;