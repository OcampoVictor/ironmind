import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumButton from './PremiumButton';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                    alt="Gimnasio IronMind"
                    className="w-full h-full object-cover opacity-40 grayscale"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-amber-500 text-lg md:text-xl font-bold tracking-[0.3em] uppercase mb-4">
                        Sin Excusas. Sin Límites.
                    </h2>
                    <h1 className="text-4xl md:text-8xl font-black leading-none mb-8 tracking-tighter md:tracking-normal">
                        FORJA TU <span className="tracking-[3px]" style={{ WebkitTextStroke: '1px white', WebkitTextFillColor: 'transparent', color: 'transparent' }}>LEGADO</span>
                    </h1>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
                        Entrenamiento de alta intensidad en un ambiente diseñado para romper tus marcas personales. La élite se forma aquí.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contacto">
                            <PremiumButton>
                                Elegir Clase Gratis
                            </PremiumButton>
                        </Link>
                        <button
                            onClick={() => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })}
                            className="cursor-pointer border border-white/20 hover:border-amber-500/50 hover:bg-amber-500/10 px-10 py-5 text-sm font-black uppercase tracking-[0.2em] transition-all"
                        >
                            Ver Membresías
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative vertical badge */}
            <div className="absolute right-8 bottom-12 hidden lg:block">
                <div className="flex items-center gap-4 rotate-90 origin-right">
                    <div className="w-12 h-[1px] bg-amber-500"></div>
                    <span className="text-[10px] font-black tracking-[0.5em] text-neutral-500 uppercase">Establecido 2024</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
