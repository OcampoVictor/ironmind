import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [hoveredPath, setHoveredPath] = useState(location.pathname);

    const navItems = [
        { path: "/", label: "Inicio" },
        { path: "/disciplinas", label: "Disciplinas" },
        { path: "/galeria", label: "Galería" },
        { path: "/horarios", label: "Horarios" },
        { path: "/contacto", label: "Contacto" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center gap-2 shrink-0">
                        <img src={logo} alt="IronMind Logo" className="h-20 w-auto" />
                    </Link>

                    {/* Desktop Menu - Fancy Hover Effect */}
                    <div className="hidden md:flex items-center space-x-2" onMouseLeave={() => setHoveredPath(location.pathname)}>
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onMouseEnter={() => setHoveredPath(item.path)}
                                className="relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-colors"
                            >
                                <span className={`relative z-10 ${item.path === location.pathname ? 'text-amber-500' : 'text-neutral-300 hover:text-white'}`}>
                                    {item.label}
                                </span>
                                {hoveredPath === item.path && (
                                    <motion.span
                                        layoutId="nav-hover"
                                        className="absolute inset-0 bg-neutral-800/80 rounded-md -z-0"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {location.pathname === item.path && (
                                    <motion.span
                                        layoutId="nav-active"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-amber-500 transition-colors p-2"
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-t border-neutral-800 fixed top-20 left-0 w-full overflow-hidden flex flex-col items-center justify-center space-y-8 z-40"
                    >
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.path}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: i * 0.1 + 0.2 }}
                            >
                                <Link
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-3xl font-black uppercase tracking-widest transition-all duration-300 ${location.pathname === item.path
                                            ? 'text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-500 scale-110'
                                            : 'text-neutral-500 hover:text-white hover:scale-105'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}

                        {/* Decorative line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="w-20 h-1 bg-amber-500 mt-8"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
