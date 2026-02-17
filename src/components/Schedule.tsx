import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const days = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'];

const classes = [
    { hour: '07:00', name: 'CrossFit', coach: 'Alex "The Tank"', status: '8 cupos' },
    { hour: '09:00', name: 'Boxing', coach: 'Marta "Savage"', status: '5 cupos' },
    { hour: '11:00', name: 'Powerlifting', coach: 'Ivan Iron', status: 'Cerrado' },
    { hour: '17:00', name: 'Conditioning', coach: 'Sara HIIT', status: '12 cupos' },
    { hour: '19:00', name: 'CrossFit', coach: 'Alex "The Tank"', status: 'Completo' },
];

const Schedule = () => {
    const [activeDay, setActiveDay] = useState('LUN');

    return (
        <section id="horarios" className="py-24 bg-black border-t border-neutral-900">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm">Tu Entrenamiento</h2>
                    <h3 className="text-4xl md:text-5xl font-black uppercase">Horarios de <span className="text-amber-500">Guerra</span></h3>
                </div>

                {/* Day Selector */}
                <div className="flex flex-wrap justify-between gap-2 mb-12 bg-neutral-900/50 p-2 rounded-lg border border-neutral-800">
                    {days.map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`flex-1 min-w-[60px] py-3 text-xs font-black transition-all ${activeDay === day
                                    ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                                    : 'text-neutral-500 hover:text-white'
                                }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Schedule Table */}
                <div className="overflow-hidden">
                    <div className="grid grid-cols-4 pb-4 border-b border-neutral-800 px-4 text-[10px] font-black uppercase tracking-widest text-neutral-500">
                        <div>Hora</div>
                        <div>Clase</div>
                        <div>Coach</div>
                        <div className="text-right">Acción</div>
                    </div>

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeDay}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="divide-y divide-neutral-900"
                        >
                            {classes.map((cls, idx) => (
                                <div key={idx} className="grid grid-cols-4 py-6 px-4 items-center group hover:bg-neutral-900/40 transition-colors">
                                    <div className="text-sm font-black italic">{cls.hour}</div>
                                    <div>
                                        <div className="text-sm font-black uppercase text-white group-hover:text-amber-500 transition-colors">{cls.name}</div>
                                        <div className="text-[10px] text-amber-500/60 ">{cls.status}</div>
                                    </div>
                                    <div className="text-xs text-neutral-400 font-medium">{cls.coach}</div>
                                    <div className="text-right">
                                        <button className={`text-[10px] font-black uppercase tracking-tighter px-4 py-2 border ${cls.status === 'Completo' || cls.status === 'Cerrado'
                                                ? 'border-neutral-800 text-neutral-600 cursor-not-allowed'
                                                : 'border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-black transition-all'
                                            }`}>
                                            {cls.status === 'Completo' ? 'Lleno' : 'Reservar'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
