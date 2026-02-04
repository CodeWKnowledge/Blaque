import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-ivory text-black-text selection:bg-gold selection:text-black-text">
            <Navbar />
            <main>
                {children}
            </main>
            <footer className="pt-32 pb-16 px-8 md:px-12 border-t border-onyx/5 bg-onyx/[0.02]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <h2 className="luxury-text text-2xl tracking-[0.3em] uppercase mb-8">BLAQUE</h2>
                        <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 leading-loose max-w-sm mb-10">
                            A curated sanctuary of sensory excellence. We believe in the power of invisible presence and the art of modern curation.
                        </p>
                        <div className="flex gap-6">
                            {['Instagram', 'Journal', 'Studio'].map(link => (
                                <button key={link} className="text-[10px] tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-opacity">
                                    {link}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold mb-8">Collection</h3>
                        <div className="flex flex-col gap-4">
                            <Link to="/shop" className="text-[10px] tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-opacity">Showroom</Link>
                            <Link to="/cart" className="text-[10px] tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-opacity">Your Bag</Link>
                            <button className="text-[10px] tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-opacity text-left">The Journal</button>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold mb-8">Join the Aura</h3>
                        <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 mb-6 leading-relaxed">
                            Be the first to know about new curations.
                        </p>
                        <div className="flex border-b border-onyx/20 pb-2">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="bg-transparent border-none focus:outline-none text-[10px] tracking-[0.2em] w-full"
                            />
                            <button className="opacity-40 hover:opacity-100 transition-opacity">
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto pt-16 border-t border-onyx/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="luxury-text text-[9px] opacity-30 tracking-[0.4em] uppercase">
                        © 2026 BLAQUE. Crafted with Intent.
                    </div>
                    <div className="flex gap-8 text-[9px] tracking-[0.4em] uppercase opacity-30">
                        <button className="hover:opacity-100 transition-opacity">Privacy</button>
                        <button className="hover:opacity-100 transition-opacity">Terms</button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
