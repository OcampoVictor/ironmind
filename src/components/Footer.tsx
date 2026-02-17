import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer id="contacto" className="bg-neutral-950 border-t border-neutral-900 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={logo} alt="IronMind Logo" className="h-24 w-auto" />
                        </div>
                        <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                            No es solo un gimnasio, es el lugar donde los límites dejan de existir. Forja tu legado hoy mismo.
                        </p>
                        <div className="flex gap-4">
                            <Instagram className="w-5 h-5 text-neutral-400 hover:text-amber-500 transition-colors cursor-pointer" />
                            <Facebook className="w-5 h-5 text-neutral-400 hover:text-amber-500 transition-colors cursor-pointer" />
                            <Twitter className="w-5 h-5 text-neutral-400 hover:text-amber-500 transition-colors cursor-pointer" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-black uppercase text-sm mb-6 tracking-widest">Explora</h4>
                        <ul className="space-y-4">
                            <li><a href="#hero" className="text-neutral-500 hover:text-amber-500 text-xs font-bold uppercase transition-colors">Inicio</a></li>
                            <li><a href="#disciplinas" className="text-neutral-500 hover:text-amber-500 text-xs font-bold uppercase transition-colors">Disciplinas</a></li>
                            <li><a href="#horarios" className="text-neutral-500 hover:text-amber-500 text-xs font-bold uppercase transition-colors">Horarios</a></li>
                            <li><a href="#testimonios" className="text-neutral-500 hover:text-amber-500 text-xs font-bold uppercase transition-colors">Atletas</a></li>
                        </ul>
                    </div>

                    {/* Training */}
                    <div>
                        <h4 className="text-white font-black uppercase text-sm mb-6 tracking-widest">Entrenamiento</h4>
                        <ul className="space-y-4">
                            <li className="text-neutral-500 text-xs font-bold uppercase">CrossFit Elite</li>
                            <li className="text-neutral-500 text-xs font-bold uppercase">Boxeo Pro</li>
                            <li className="text-neutral-500 text-xs font-bold uppercase">Powerlifting</li>
                            <li className="text-neutral-500 text-xs font-bold uppercase">HIIT & Cardio</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-black uppercase text-sm mb-6 tracking-widest">Encuéntranos</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                                <span className="text-neutral-500 text-xs leading-relaxed font-bold">Av. Industrial 123, <br />Col. Guerreros, CDMX</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                                <span className="text-neutral-500 text-xs font-bold">+52 (55) 9876-5432</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                                <span className="text-neutral-500 text-xs font-bold">contacto@ironmind.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-neutral-900 text-center">
                    <p className="text-[10px] text-neutral-600 font-black uppercase tracking-[0.4em]">
                        © 2024 Gimnasio IronMind - Sin Excusas
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
