import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import PremiumButton from './PremiumButton';
import CustomMap from './CustomMap';

const Contact = () => {
    return (
        <section className="min-h-screen pt-24 pb-12 px-4 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm">Contáctanos</h2>
                    <h3 className="text-3xl md:text-5xl font-black uppercase">
                        Únete a la <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-600">Manada</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-12">
                        <h4 className="text-2xl font-black uppercase mb-8 text-white">Envíanos un mensaje</h4>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Nombre</label>
                                <input type="text" id="name" className="w-full bg-black border border-neutral-800 p-4 text-white focus:border-amber-500 outline-hidden transition-colors" placeholder="Tu nombre completo" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Email</label>
                                    <input type="email" id="email" className="w-full bg-black border border-neutral-800 p-4 text-white focus:border-amber-500 outline-hidden transition-colors" placeholder="tucorreo@ejemplo.com" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Teléfono</label>
                                    <input type="tel" id="phone" className="w-full bg-black border border-neutral-800 p-4 text-white focus:border-amber-500 outline-hidden transition-colors" placeholder="(55) 1234 5678" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="goal" className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Objetivo Principal</label>
                                <select id="goal" className="w-full bg-black border border-neutral-800 p-4 text-white focus:border-amber-500 outline-hidden transition-colors">
                                    <option value="">Selecciona tu objetivo</option>
                                    <option value="fuerza">Ganar Fuerza</option>
                                    <option value="condicion">Mejorar Condición</option>
                                    <option value="perdida">Pérdida de Peso</option>
                                    <option value="competencia">Competencia</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Mensaje</label>
                                <textarea id="message" rows={4} className="w-full bg-black border border-neutral-800 p-4 text-white focus:border-amber-500 outline-hidden transition-colors" placeholder="¿Tienes alguna duda específica?"></textarea>
                            </div>
                            <PremiumButton type="submit" className="w-full">
                                Enviar Mensaje <Send className="w-5 h-5" />
                            </PremiumButton>
                        </form>
                    </div>

                    {/* Info & Map */}
                    <div className="space-y-8">
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-neutral-900 border border-neutral-800 p-8 flex flex-col items-center text-center hover:border-amber-500/30 transition-colors">
                                <MapPin className="w-10 h-10 text-amber-500 mb-4" />
                                <h5 className="font-black uppercase text-white mb-2">Ubicación</h5>
                                <p className="text-neutral-500 text-sm">Av. Industrial 123<br />Col. Guerreros, CDMX</p>
                            </div>
                            <div className="bg-neutral-900 border border-neutral-800 p-8 flex flex-col items-center text-center hover:border-amber-500/30 transition-colors">
                                <Phone className="w-10 h-10 text-amber-500 mb-4" />
                                <h5 className="font-black uppercase text-white mb-2">Teléfono</h5>
                                <p className="text-neutral-500 text-sm">+52 (55) 9876-5432<br />Lunes a Domingo</p>
                            </div>
                            <div className="bg-neutral-900 border border-neutral-800 p-8 flex flex-col items-center text-center hover:border-amber-500/30 transition-colors">
                                <Mail className="w-10 h-10 text-amber-500 mb-4" />
                                <h5 className="font-black uppercase text-white mb-2">Email</h5>
                                <p className="text-neutral-500 text-sm">contacto@ironmind.com<br />Respuesta en 24hrs</p>
                            </div>
                            <div className="bg-neutral-900 border border-neutral-800 p-8 flex flex-col items-center text-center hover:border-amber-500/30 transition-colors">
                                <div className="flex gap-4 items-center h-10 mb-4">
                                    <Instagram className="w-6 h-6 text-white hover:text-amber-500 transition-colors cursor-pointer" />
                                    <Facebook className="w-6 h-6 text-white hover:text-amber-500 transition-colors cursor-pointer" />
                                    <Twitter className="w-6 h-6 text-white hover:text-amber-500 transition-colors cursor-pointer" />
                                </div>
                                <h5 className="font-black uppercase text-white mb-2">Síguenos</h5>
                                <p className="text-neutral-500 text-sm">@IronMindGym</p>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-80 rounded-2xl border border-neutral-800 relative z-0">
                            <CustomMap className="h-full rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
