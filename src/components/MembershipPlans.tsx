import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import PremiumButton from './PremiumButton';

const plans = [
    {
        name: "Clase Suelta",
        price: "$150",
        period: "/ clase",
        description: "Perfecto para probar tu resistencia o si estás de visita.",
        features: ["Acceso a 1 clase", "Uso de vestidores", "Sin compromiso"],
        highlight: false
    },
    {
        name: "Mensualidad",
        price: "$850",
        period: "/ mes",
        description: "Compromiso total. Acceso ilimitado a todas las disciplinas.",
        features: ["Acceso ilimitado", "Todas las disciplinas", "Uso de Open Gym", "Descuento en merch"],
        highlight: true
    },
    {
        name: "Trimestral",
        price: "$2,200",
        period: "/ 3 meses",
        description: "Para los que saben lo que quieren. Ahorra y asegura tu lugar.",
        features: ["Todo lo del plan mensual", "Ahorro del 15%", "Asesoría nutricional básica", "Camiseta de regalo"],
        highlight: false
    }
];

const MembershipPlans = () => {
    return (
        <section id="planes" className="py-24 bg-neutral-900 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm">Inversión</h2>
                    <h3 className="text-3xl md:text-5xl font-black uppercase text-white">
                        Elige tu <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-600">Batalla</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 border ${plan.highlight ? 'bg-black border-amber-500 relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(245,158,11,0.2)]' : 'bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-colors'}`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-black text-xs font-black uppercase px-4 py-1 tracking-widest">
                                    Más Popular
                                </div>
                            )}

                            <h4 className="text-xl font-black uppercase text-white mb-2">{plan.name}</h4>
                            <div className="flex items-baseline mb-4">
                                <span className={`text-4xl font-black ${plan.highlight ? 'text-amber-500' : 'text-white'}`}>{plan.price}</span>
                                <span className="text-neutral-500 ml-2 text-sm">{plan.period}</span>
                            </div>
                            <p className="text-neutral-400 text-sm mb-8 leading-relaxed">{plan.description}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-neutral-300">
                                        <Check className={`w-5 h-5 mr-3 ${plan.highlight ? 'text-amber-500' : 'text-neutral-600'}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/contacto" className="block w-full">
                                <PremiumButton className="w-full text-sm py-4">
                                    Elegir Plan
                                </PremiumButton>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MembershipPlans;
