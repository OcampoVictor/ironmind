import { motion } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=600&auto=format&fit=crop",
];

// Double images for infinite look
const duplicatedImages = [...images, ...images];

const Gallery = () => {

    return (
        <section className="py-24 bg-black overflow-hidden relative select-none">
            <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-black to-transparent z-10 pointer-events-none"></div>

            <div className="text-center mb-16 px-4">
                <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm">Visuales de Impacto</h2>
                <h3 className="text-4xl md:text-5xl font-black uppercase italic">DENTRO DEL <span className="text-amber-500">HIERRO</span></h3>
            </div>

            <div className="flex items-center -rotate-2 scale-110 md:scale-100">
                <motion.div
                    className="flex gap-4 px-4 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: -2000, right: 0 }}
                    animate={{ x: [0, -2000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    whileHover={{ animationPlayState: 'paused' }}
                >
                    {duplicatedImages.map((src, idx) => (
                        <motion.div
                            key={idx}
                            className="relative w-[300px] md:w-[450px] aspect-video shrink-0 bg-neutral-900 overflow-hidden border border-neutral-800 transition-all skew-x-3 hover:skew-x-0"
                            whileHover={{
                                scale: 1.05,
                                zIndex: 20,
                                borderColor: '#f59e0b',
                                boxShadow: "0 0 30px rgba(245,158,11,0.2)"
                            }}
                        >
                            <img
                                src={src}
                                alt={`IronMind Gallery ${idx}`}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors"></div>

                            {/* Overlay elements */}
                            <div className="absolute bottom-4 left-4 border-l-2 border-amber-500 pl-3 py-1 opacity-0 hover:opacity-100 transition-opacity">
                                <span className="text-[10px] font-black uppercase text-white tracking-[0.2em]">Sessión #00{idx + 1}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Decorative lines */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-amber-500/10 -translate-y-1/2 pointer-events-none"></div>
        </section>
    );
};

export default Gallery;
