import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const disciplines = [
    {
        id: 1,
        title: 'CrossFit',
        description: 'Domina el caos con sesiones de alta intensidad.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
        tag: 'Fuerza & Cardio'
    },
    {
        id: 2,
        title: 'Boxeo',
        description: 'Técnica, potencia y disciplina sin piedad.',
        image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1974&auto=format&fit=crop',
        tag: 'Combate'
    },
    {
        id: 3,
        title: 'Powerlifting',
        description: 'Levantamientos pesados para fuerza absoluta.',
        image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070&auto=format&fit=crop',
        tag: 'Elite'
    },
    {
        id: 4,
        title: 'Condicionamiento',
        description: 'Resistencia total para el mundo real.',
        image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop',
        tag: 'HIIT'
    }
];

const Disciplines = () => {
    return (
        <section id="disciplinas" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text- amber-500 font-bold tracking-widest uppercase mb-4 text-sm">Nuestras Disciplinas</h2>
                    <h3 className="text-4xl md:text-6xl font-black uppercase">Elegidas por los <span className="text-amber-500">Fuertes</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {disciplines.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-all"
                        >
                            <div className="h-80 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

                                <span className="absolute top-4 right-4 bg-amber-500 text-black text-[10px] font-black uppercase px-3 py-1">
                                    {item.tag}
                                </span>
                            </div>

                            <div className="p-6">
                                <h4 className="text-xl font-black uppercase mb-2 group-hover:text-amber-500 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>

                                <Link to="/disciplinas" className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Saber más <div className="h-[1px] w-8 bg-amber-500"></div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Disciplines;
