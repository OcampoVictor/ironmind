import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Carlos "La Roca"',
        role: 'Atleta CrossFit',
        content: 'Aquí no vienes a jugar, vienes a transformarte. El ambiente es simplemente incomparable.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop'
    },
    {
        name: 'Sofia Mendez',
        role: 'Powerlifter',
        content: 'IronMind me dio la disciplina que necesitaba. Mis marcas han subido un 40% en 6 meses.',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop'
    },
    {
        name: 'Julian King',
        role: 'Boxeador Amateur',
        content: 'Hardcore de verdad. El equipo es de primera y los coaches te empujan al límite.',
        image: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=400&auto=format&fit=crop'
    },
    {
        name: 'Elena "Valkiria"',
        role: 'CrossFit',
        content: 'No es solo un gym, es una familia. Aquí todos nos empujamos a ser mejores cada día.',
        image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&auto=format&fit=crop'
    }
];

const Testimonials = () => {
    return (
        <section id="testimonios" className="py-24 bg-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-24 opacity-5">
                <Quote className="w-96 h-96 text-amber-500" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 mb-16 text-center">
                <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm">Voces del Hierro</h2>
                <h3 className="text-4xl md:text-5xl font-black uppercase text-white">Guerreros <span className="text-amber-500">Forjados</span></h3>
            </div>

            {/* Marquee Animation */}
            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-10"></div>

                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {[...testimonials, ...testimonials].map((t, idx) => (
                        <div
                            key={idx}
                            className="bg-neutral-900 border border-neutral-800 p-8 w-[350px] md:w-[450px] shrink-0 relative hover:border-amber-500/50 transition-colors"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                                ))}
                            </div>

                            <p className="text-neutral-300 italic mb-8 relative z-10 text-sm md:text-base">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 object-cover grayscale border-2 border-amber-500/20 rounded-full"
                                />
                                <div>
                                    <h4 className="text-sm font-black uppercase text-white">{t.name}</h4>
                                    <p className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
