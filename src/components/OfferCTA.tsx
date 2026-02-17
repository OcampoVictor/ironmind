import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Timer, Zap } from 'lucide-react';
import PremiumButton from './PremiumButton';

const OfferCTA = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return { hours: 23, minutes: 59, seconds: 59 };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative py-32 overflow-hidden bg-black flex items-center justify-center">
            {/* Background Texture & Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
                    alt="Hardcore Gym Texture"
                    className="w-full h-full object-cover opacity-30 grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left: Text Content */}
                    <div className="lg:w-1/2 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <span className="bg-amber-500 text-black px-3 py-1 text-xs font-black uppercase tracking-[0.2em]">
                                    Oferta Limitada
                                </span>
                                <div className="h-[2px] w-20 bg-amber-500/50"></div>
                            </div>

                            <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] italic mb-6 text-white tracking-tighter">
                                Entrena <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-br from-amber-400 to-amber-700 filter drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] pr-4">
                                    Gratis
                                </span>
                            </h2>

                            <p className="text-xl text-neutral-400 font-light max-w-lg mb-10 border-l-4 border-amber-500 pl-6 py-2">
                                7 días de acceso total. Sin contratos. Sin letras pequeñas. Solo tú contra el hierro.
                            </p>

                            <Link to="/contacto">
                                <PremiumButton className='w-full md:w-auto px-12 py-6'>
                                    Reclamar Pase <Zap className="w-5 h-5 fill-black" />
                                </PremiumButton>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Industrial Timer */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", duration: 1 }}
                            className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 relative"
                            style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)" }}
                        >
                            {/* Decorative screws */}
                            <div className="absolute top-2 left-2 w-2 h-2 bg-neutral-600 rounded-full"></div>
                            <div className="absolute top-2 right-2 w-2 h-2 bg-neutral-600 rounded-full"></div>
                            <div className="absolute bottom-2 left-2 w-2 h-2 bg-neutral-600 rounded-full"></div>
                            <div className="absolute bottom-2 right-2 w-2 h-2 bg-neutral-600 rounded-full"></div>

                            <div className="flex items-center gap-3 mb-8 justify-center">
                                <Timer className="text-amber-500 w-6 h-6 animate-pulse" />
                                <h3 className="text-neutral-400 text-sm font-bold uppercase tracking-[0.3em]">Tiempo Restante</h3>
                            </div>

                            <div className="flex gap-4 md:gap-6">
                                {Object.entries(timeLeft).map(([unit, value]) => (
                                    <div key={unit} className="flex flex-col items-center">
                                        <div className="bg-black border border-neutral-700 w-20 h-24 md:w-28 md:h-36 flex items-center justify-center relative overflow-hidden group">
                                            {/* Scanning line effect */}
                                            <div className="absolute top-0 left-0 w-full h-[2px] bg-amber-500/30 animate-scan"></div>

                                            <span className="text-5xl md:text-7xl font-black text-white font-mono z-10 tabular-nums">
                                                {value.toString().padStart(2, '0')}
                                            </span>

                                            {/* Background number reflection */}
                                            <span className="absolute text-7xl md:text-9xl font-black text-neutral-800/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm">
                                                88
                                            </span>
                                        </div>
                                        <span className="text-[10px] md:text-xs text-amber-600 font-bold uppercase tracking-widest mt-2">
                                            {unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Minutos' : 'Segundos'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes scan {
                    0% { top: 0; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                .animate-scan {
                    animation: scan 2s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default OfferCTA;
