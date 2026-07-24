import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
    },
    {
      title: "Market",
      path: "/market",
    },
    {
      title: "News",
      path: "/news",
    },
  ];

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        theme === "dark"
          ? "border-white/10 bg-slate-950/80"
          : "border-slate-200 bg-white/90 shadow-sm"
      }`}
    >
      <div className="site-container">

        <div className="h-20 flex justify-between items-center">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">

              <TrendingUp className="text-white" size={22} />

            </div>

            <div>

              <h1 className="text-2xl font-extrabold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

                StockPro

              </h1>

              <p className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>

                Smart Investment

              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={`relative font-medium transition duration-300 group ${
                  theme === "dark" ? "text-slate-300 hover:text-cyan-400" : "text-slate-700 hover:text-cyan-500"
                }`}
              >
                {item.title}

                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

              </Link>
            ))}

          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <button
              onClick={toggleTheme}
              className={`w-11 h-11 rounded-full duration-300 flex justify-center items-center ${
                theme === "dark"
                  ? "bg-white/10 hover:bg-blue-600"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              {theme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            <button className="hidden lg:block px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 font-semibold hover:scale-105 duration-300 shadow-xl">
              Login
            </button>

            {/* Mobile Menu */}

            <button
              className={`lg:hidden ${theme === "dark" ? "text-white" : "text-slate-700"}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

        </div>

      </div>

      {/* Mobile Navigation */}

      {menuOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`lg:hidden border-t ${
            theme === "dark"
              ? "bg-slate-900 border-white/10"
              : "bg-white border-slate-200"
          }`}
        >

          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((item) => (

              <Link
                key={item.title}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`text-lg duration-300 ${
                  theme === "dark" ? "text-slate-300 hover:text-cyan-400" : "text-slate-700 hover:text-cyan-500"
                }`}
              >
                {item.title}
              </Link>

            ))}

            <button className="mt-4 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl py-3 font-semibold">

              Login

            </button>

          </div>

        </motion.div>

      )}

    </motion.header>
  );
};

export default Navbar;
