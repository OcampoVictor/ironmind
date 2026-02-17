import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DisciplinesCTA = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                    alt="Gym Atmosphere"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/50"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-7xl font-black uppercase text-white mb-6 tracking-tighter">
                        ¿Estás listo para <span className="text-amber-500">Transformarte</span>?
                    </h2>

                    <p className="text-xl md:text-2xl text-neutral-300 mb-10 font-light max-w-3xl mx-auto">
                        La disciplina no se compra, se forja. Tu primera clase es el primer paso hacia tu mejor versión.
                    </p>

                    <Link to="/contacto">
                        <button className="bg-amber-500 text-black text-lg md:text-xl font-black uppercase tracking-widest px-10 py-5 hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                            Agenda tu Clase de Prueba
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default DisciplinesCTA;
