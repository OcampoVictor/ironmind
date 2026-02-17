import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PremiumButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
}

const PremiumButton = ({ children, onClick, className = "", type = "button" }: PremiumButtonProps) => {
    return (
        <motion.button
            type={type}
            onClick={onClick}
            whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(255,255,255)" }}
            whileTap={{ scale: 0.95 }}
            className={`group relative bg-white text-black text-xl font-black uppercase tracking-widest px-10 py-5 overflow-hidden clip-path-polygon cursor-pointer border-none outline-none ${className}`}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
            <div className="absolute inset-0 bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>

            <style>{`
                .clip-path-polygon {
                    clip-path: polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%);
                }
            `}</style>
        </motion.button>
    );
};

export default PremiumButton;
