import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import PremiumButton from './PremiumButton';

interface CustomMapProps {
    className?: string;
}

const CustomMap = ({ className = "h-[600px]" }: CustomMapProps) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <section className={`relative w-full bg-neutral-900 ${className}`}>
            {/* Map Background (Styled Dark Mode Map Simulation) */}
            <div className="absolute inset-0 bg-neutral-800 overflow-hidden rounded-2xl">
                {/* Grid Pattern to simulate map streets */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                {/* Fake "streets" for visual flair */}
                <div className="absolute top-1/2 left-0 w-full h-2 bg-neutral-700 -rotate-3"></div>
                <div className="absolute top-0 left-1/2 h-full w-2 bg-neutral-700 rotate-12"></div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80"></div>
            </div>

            {/* Interactive Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.button
                    onClick={() => setShowInfo(!showInfo)}
                    className="relative group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {/* Pulse Animation */}
                    <div className="absolute inset-0 bg-amber-500 rounded-full opacity-50 animate-ping"></div>
                    <div className="relative bg-amber-500 text-black p-4 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.6)] border-4 border-black">
                        <MapPin className="w-8 h-8 fill-current" />
                    </div>
                </motion.button>
            </div>

            {/* Info Card Modal */}
            <AnimatePresence>
                {showInfo && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-80 bg-black/90 backdrop-blur-xl border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Header Image */}
                        <div className="h-32 bg-neutral-800 relative">
                            <img
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop"
                                alt="Gym Location"
                                className="w-full h-full object-cover grayscale opacity-60"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-black to-transparent">
                                <h3 className="text-white font-black uppercase text-lg">IronMind HQ</h3>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start gap-3 text-sm text-neutral-300">
                                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                                <p>Av. Insurgentes Sur 1234, CDMX, México.</p>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-neutral-300">
                                <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                                <p>Lun - Dom: 05:00 - 23:00</p>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-neutral-300">
                                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                                <p>+52 55 1234 5678</p>
                            </div>

                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full mt-4"
                            >
                                <PremiumButton className="w-full text-xs py-3">
                                    <Navigation className="w-4 h-4" /> Cómo Llegar
                                </PremiumButton>
                            </a>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => setShowInfo(false)}
                            className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CustomMap;
