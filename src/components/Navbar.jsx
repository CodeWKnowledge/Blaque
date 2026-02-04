import React, { useState } from 'react';
import { ShoppingBag, Menu, User, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { cart } = useShop();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 mix-blend-difference">
                {/* Desktop Left - Hidden on Mobile */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/shop" className="text-ivory opacity-80 hover:opacity-100 transition-opacity uppercase text-xs tracking-widest font-sans">
                        Shop
                    </Link>
                    <a href="/#about" className="text-ivory opacity-80 hover:opacity-100 transition-opacity uppercase text-xs tracking-widest font-sans">
                        About
                    </a>
                </div>

                {/* Mobile Menu Toggle - Only on Mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="text-ivory opacity-80 hover:opacity-100 transition-opacity p-2"
                    >
                        <Menu size={20} strokeWidth={1} />
                    </button>
                </div>

                {/* Logo - Centered */}
                <div className="absolute left-1/2 mt-10 md:mt-0 -translate-x-1/2 text-center pointer-events-auto">
                    <Link to="/">
                        <h1 className="luxury-text text-lg md:text-2xl font-semibold tracking-[0.3em] uppercase cursor-pointer text-ivory">
                            BLAQUE
                        </h1>
                        <p className="text-ivory opacity-80 hover:opacity-100 transition-opacity uppercase text-xs tracking-widest font-sans font-bold">
                            AURA. AMPLIFIED
                        </p>
                    </Link>
                </div>

                {/* Right side - Consolidated */}
                <div className="flex items-center space-x-2 md:space-x-6 text-ivory">
                    <Link to="/admin" className="hidden sm:flex opacity-80 hover:opacity-100 transition-opacity p-2">
                        <User size={18} strokeWidth={1} />
                    </Link>
                    <Link to="/cart" className="relative opacity-80 hover:opacity-100 transition-opacity p-2">
                        <ShoppingBag size={20} strokeWidth={1} />
                        {cartCount > 0 && (
                            <span className="absolute top-1 right-1 bg-gold text-black text-[8px] font-bold min-w-[12px] h-3 px-1 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    {/* Desktop Menu Indicator */}
                    <button className="hidden md:block opacity-80 hover:opacity-100 transition-opacity p-2">
                        <Menu size={20} strokeWidth={1} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 z-[60] bg-onyx/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                            className="fixed top-0 left-0 bottom-0 w-[80%] max-w-xs z-[70] bg-onyx flex flex-col p-8 shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-20">
                                <h2 className="luxury-text text-ivory text-xl tracking-widest uppercase">Menu</h2>
                                <button onClick={() => setIsMenuOpen(false)} className="text-ivory p-2">
                                    <X size={24} strokeWidth={1} />
                                </button>
                            </div>

                            <nav className="flex flex-col space-y-10">
                                <Link
                                    to="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="luxury-text text-3xl text-ivory tracking-widest uppercase"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/shop"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="luxury-text text-3xl text-ivory tracking-widest uppercase"
                                >
                                    Shop
                                </Link>
                                <Link
                                    to="/cart"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="luxury-text text-3xl text-ivory tracking-widest uppercase flex items-center justify-between"
                                >
                                    Cart {cartCount > 0 && <span className="text-sm border border-ivory/20 px-3 py-1 rounded-full">{cartCount}</span>}
                                </Link>
                                <Link
                                    to="/admin"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="luxury-text text-3xl text-ivory tracking-widest uppercase"
                                >
                                    Admin
                                </Link>
                            </nav>

                            <div className="mt-auto pt-10 border-t border-ivory/5">
                                <p className="text-[9px] tracking-[0.5em] uppercase text-ivory/30 mb-6">Socials</p>
                                <div className="flex flex-col space-y-4">
                                    <span className="text-[10px] tracking-widest text-ivory/60 uppercase hover:text-gold transition-colors cursor-pointer">Instagram</span>
                                    <span className="text-[10px] tracking-widest text-ivory/60 uppercase hover:text-gold transition-colors cursor-pointer">Journal</span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
