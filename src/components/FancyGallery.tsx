import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';

const categories = ["Todos", "CrossFit", "Boxeo", "Comunidad", "Instalaciones"];

const galleryItems = [
    { id: 1, src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop", category: "CrossFit", title: "Fuerza Bruta" },
    { id: 2, src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", category: "Instalaciones", title: "El Templo" },
    { id: 3, src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop", category: "Boxeo", title: "Disciplina" },
    { id: 4, src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop", category: "CrossFit", title: "Levantamiento" },
    { id: 5, src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800&auto=format&fit=crop", category: "Comunidad", title: "Equipo" },
    { id: 6, src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop", category: "Instalaciones", title: "Equipamiento" },
    { id: 7, src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop", category: "Comunidad", title: "Apoyo Mutuo" },
    { id: 8, src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop", category: "CrossFit", title: "Intensidad" }, // Reused image for variety
    { id: 9, src: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=800&auto=format&fit=crop", category: "Boxeo", title: "Focus" }, // Reused image
];

const FancyGallery = () => {
    const [activeCategory, setActiveCategory] = useState("Todos");

    const filteredItems = activeCategory === "Todos"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <section className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm"
                    >
                        Nuestra Galería
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-black uppercase mb-8"
                    >
                        Capturando la <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-600">Esencia</span>
                    </motion.h3>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat, idx) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                                        ? 'bg-amber-500 text-black border-amber-500 scale-110 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                                        : 'bg-transparent text-neutral-500 border-neutral-800 hover:border-amber-500 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                className="group relative aspect-square overflow-hidden rounded-sm border border-neutral-900 cursor-pointer"
                            >
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                    <h4 className="text-2xl font-black uppercase text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{item.title}</h4>
                                    <span className="text-amber-500 text-xs font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">{item.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default FancyGallery;
