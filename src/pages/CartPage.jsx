import React from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import { Trash2, ArrowRight, ShoppingBag, Plus, Minus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useShop();
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="pt-32 pb-40 px-8 bg-ivory min-h-screen text-black-text">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="luxury-text text-4xl tracking-[0.3em] uppercase mb-4"
                    >
                        Your Selection
                    </motion.h1>
                    <div className="h-[1px] w-12 bg-gold/40 mx-auto mb-6"></div>
                    <p className="font-sans text-[10px] tracking-[0.4em] uppercase opacity-40">
                        {itemCount} {itemCount === 1 ? 'Item' : 'Items'} in Bag
                    </p>
                </header>

                {cart.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center py-20 border-y border-onyx/5"
                    >
                        <ShoppingBag size={40} strokeWidth={0.5} className="opacity-20 mb-8" />
                        <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-12 italic">Your bag is empty</p>
                        <Link to="/shop" className="text-[10px] tracking-[0.4em] uppercase border border-onyx/20 px-8 py-4 hover:bg-onyx hover:text-white-text transition-all duration-500">
                            Continue Shopping
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 gap-12">
                        {/* Cart Items */}
                        <div className="space-y-8">
                            {cart.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-8 pb-8 border-b border-onyx/5 last:border-0"
                                >
                                    <div className="w-24 h-32 bg-onyx/[0.02] border border-onyx/5 overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="luxury-text text-lg tracking-widest uppercase">{item.name}</h3>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="opacity-20 hover:opacity-100 hover:text-red-500 transition-all"
                                                >
                                                    <Trash2 size={16} strokeWidth={1} />
                                                </button>
                                            </div>
                                            <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-1">{item.brand}</p>
                                            <p className="text-[9px] tracking-[0.2em] opacity-30 uppercase italic">{item.size}</p>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <div className="flex items-center border border-onyx/10 bg-white/50">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="px-3 py-1 hover:bg-onyx/5 transition-colors border-r border-onyx/10"
                                                >
                                                    <Minus size={10} strokeWidth={1} />
                                                </button>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                                                    className="w-10 text-center bg-transparent font-sans text-[10px] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                />
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-3 py-1 hover:bg-onyx/5 transition-colors border-l border-onyx/10"
                                                >
                                                    <Plus size={10} strokeWidth={1} />
                                                </button>
                                            </div>
                                            <p className="luxury-text text-sm tracking-widest">${item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-onyx/[0.02] border border-onyx/5 p-10 mt-12"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <p className="text-[10px] tracking-[0.4em] uppercase opacity-40">Subtotal</p>
                                <p className="luxury-text text-xl tracking-widest">${total}</p>
                            </div>
                            <div className="flex justify-between items-center mb-12 text-[10px] tracking-[0.2em] opacity-30 uppercase italic">
                                <p>Shipping & taxes calculated at checkout</p>
                            </div>
                            <button
                                onClick={() => navigate('/checkout')}
                                className="w-full py-6 bg-onyx text-white-text font-sans text-[10px] tracking-[0.5em] uppercase hover:bg-gold hover:text-black-text transition-all duration-700 flex items-center justify-center gap-4"
                            >
                                Proceed to Checkout <ArrowRight size={14} />
                            </button>
                        </motion.div>

                        <div className="text-center mt-8">
                            <Link to="/shop" className="text-[9px] tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-all border-b border-transparent hover:border-gold pb-1">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
