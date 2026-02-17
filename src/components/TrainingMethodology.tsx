import { motion } from 'framer-motion';
import { Target, Users, TrendingUp } from 'lucide-react';

const methodologies = [
    {
        icon: <Target className="w-12 h-12 text-black" />,
        title: "Enfoque Real",
        description: "Sin máquinas innecesarias. Aquí levantas hierro real para desarrollar fuerza funcional y duradera."
    },
    {
        icon: <Users className="w-12 h-12 text-black" />,
        title: "Hermandad",
        description: "No entrenas solo. Formas parte de una manada que te empuja a romper tus propios récords."
    },
    {
        icon: <TrendingUp className="w-12 h-12 text-black" />,
        title: "Progreso Continuo",
        description: "Medimos resultados. Si no estás mejorando, no estás entrenando. Aquí venimos a evolucionar."
    }
];

const TrainingMethodology = () => {
    return (
        <section className="py-24 bg-neutral-900 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm">Nuestra Filosofía</h2>
                    <h3 className="text-3xl md:text-5xl font-black uppercase text-white">
                        Más que un <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-600">Gimnasio</span>
                    </h3>
                    <p className="mt-6 text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        En IronMind no vendemos membresías, construimos atletas. Nuestra metodología se basa en tres pilares inquebrantables.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {methodologies.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-black border border-neutral-800 p-10 relative group hover:border-amber-500/50 transition-colors"
                        >
                            <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                                {item.icon}
                            </div>

                            <h4 className="text-xl font-black uppercase text-center mb-4 text-white group-hover:text-amber-500 transition-colors">
                                {item.title}
                            </h4>

                            <p className="text-neutral-500 text-center text-sm leading-relaxed">
                                {item.description}
                            </p>

                            <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingMethodology;
