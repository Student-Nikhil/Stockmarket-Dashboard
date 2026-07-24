import { motion } from "framer-motion";
import { TrendingUp, Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="site-container py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 flex items-center justify-center">

                <TrendingUp className="text-white" size={24} />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  StockPro
                </h2>

                <p className="text-slate-400 text-sm">
                  Smart Stock Dashboard
                </p>

              </div>

            </div>

            <p className="text-slate-400 leading-7">
              A modern stock market dashboard built using the MERN stack.
              Track portfolios, monitor market trends and analyze stock
              performance with a beautiful user interface.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition">
                  Dashboard
                </a>
              </li>

              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition">
                  Market
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-slate-400">

                <Mail size={18} />

                <span>support@stockpro.com</span>

              </div>

              <div className="flex items-center gap-3 text-slate-400">

                <Phone size={18} />

                <span>+91 98765 43210</span>

              </div>

              <div className="flex items-center gap-3 text-slate-400">

                <MapPin size={18} />

                <span>Mumbai, India</span>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition duration-300"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition duration-300"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition duration-300"
              >
                <FaTwitter size={22} />
              </a>

            </div>

          </div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-14 pt-8 text-center"
        >

          <p className="text-slate-500">

            © {new Date().getFullYear()} StockPro Dashboard. Built with React, Tailwind CSS, Node.js, Express & MongoDB.

          </p>

        </motion.div>

      </div>

    </footer>
  );
};

export default Footer;
