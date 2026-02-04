import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import { ArrowLeft, CreditCard, Truck, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const { cart, clearCart } = useShop();
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review
    const [showSuccess, setShowSuccess] = useState(false);

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = total > 200 ? 0 : 25;
    const finalTotal = total + shipping;

    if (cart.length === 0) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-ivory text-black-text px-8 text-center">
                <h1 className="luxury-text text-2xl tracking-[0.3em] uppercase mb-8">Bag is Empty</h1>
                <Link to="/shop" className="text-[10px] tracking-[0.4em] uppercase border border-onyx/20 px-10 py-5 hover:bg-onyx hover:text-white-text transition-all duration-700">
                    Return to Showroom
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-40 px-4 md:px-8 bg-ivory min-h-screen text-black-text">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left Column: Flow */}
                    <div className="lg:col-span-7">
                        <Link to="/cart" className="inline-flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-opacity mb-12">
                            <ArrowLeft size={14} /> Back to Bag
                        </Link>

                        {/* Progress Tracker */}
                        <div className="flex items-center gap-4 md:gap-8 mb-16 overflow-x-auto no-scrollbar pb-4">
                            {[
                                { id: 1, name: 'Shipping' },
                                { id: 2, name: 'Payment' },
                                { id: 3, name: 'Review' }
                            ].map((s) => (
                                <div key={s.id} className="flex items-center gap-4 flex-shrink-0">
                                    <span className={`text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${step >= s.id ? 'text-black-text opacity-100' : 'text-black-text opacity-20'}`}>
                                        {s.name}
                                    </span>
                                    {s.id < 3 && <ChevronRight size={12} className="opacity-20" />}
                                </div>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="shipping"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-12"
                                >
                                    <section>
                                        <h2 className="luxury-text text-xl tracking-widest uppercase mb-8 flex items-center gap-4">
                                            <Truck size={20} strokeWidth={1} /> Delivery Details
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[9px] tracking-[0.3em] uppercase opacity-40 ml-1">First Name</label>
                                                <input type="text" className="bg-onyx/[0.03] border border-onyx/5 p-4 focus:outline-none focus:border-gold/50 transition-colors font-sans text-sm" placeholder="Alexander" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[9px] tracking-[0.3em] uppercase opacity-40 ml-1">Last Name</label>
                                                <input type="text" className="bg-onyx/[0.03] border border-onyx/5 p-4 focus:outline-none focus:border-gold/50 transition-colors font-sans text-sm" placeholder="McQueen" />
                                            </div>
                                            <div className="md:col-span-2 flex flex-col gap-2">
                                                <label className="text-[9px] tracking-[0.3em] uppercase opacity-40 ml-1">Email Address</label>
                                                <input type="email" className="bg-onyx/[0.03] border border-onyx/5 p-4 focus:outline-none focus:border-gold/50 transition-colors font-sans text-sm" placeholder="alex@blaque.com" />
                                            </div>
                                            <div className="md:col-span-2 flex flex-col gap-2">
                                                <label className="text-[9px] tracking-[0.3em] uppercase opacity-40 ml-1">Shipping Address</label>
                                                <textarea className="bg-onyx/[0.03] border border-onyx/5 p-4 focus:outline-none focus:border-gold/50 transition-colors font-sans text-sm h-32 resize-none" placeholder="123 Luxury Lane, Mayfair, London" />
                                            </div>
                                        </div>
                                    </section>
                                    <button
                                        onClick={() => setStep(2)}
                                        className="w-full py-6 bg-onyx text-white-text font-sans text-[10px] tracking-[0.5em] uppercase hover:bg-gold hover:text-black-text transition-all duration-700"
                                    >
                                        Continue to Payment
                                    </button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="payment"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-12"
                                >
                                    <section>
                                        <div className="flex justify-between items-end mb-8">
                                            <h2 className="luxury-text text-xl tracking-widest uppercase flex items-center gap-4">
                                                <CreditCard size={20} strokeWidth={1} /> Secure Payment
                                            </h2>
                                            <div className="flex items-center gap-2 opacity-40">
                                                <ShieldCheck size={14} />
                                                <span className="text-[8px] tracking-widest uppercase">SSL Encrypted</span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="md:col-span-2 flex flex-col gap-2">
                                                <label className="text-[9px] tracking-[0.3em] uppercase opacity-40 ml-1">Card Number</label>
                                                <input type="text" className="bg-onyx/[0.03] border border-onyx/5 p-4 focus:outline-none focus:border-gold/50 transition-colors font-sans text-sm tracking-[0.2em]" placeholder="**** **** **** ****" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[9px] tracking-[0.3em] uppercase opacity-40 ml-1">Expiry Date</label>
                                                <input type="text" className="bg-onyx/[0.03] border border-onyx/5 p-4 focus:outline-none focus:border-gold/50 transition-colors font-sans text-sm" placeholder="MM/YY" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[9px] tracking-[0.3em] uppercase opacity-40 ml-1">CVV</label>
                                                <input type="password" size="3" className="bg-onyx/[0.03] border border-onyx/5 p-4 focus:outline-none focus:border-gold/50 transition-colors font-sans text-sm" placeholder="***" />
                                            </div>
                                        </div>
                                    </section>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <button
                                            onClick={() => setStep(1)}
                                            className="flex-1 py-6 border border-onyx/20 text-black-text font-sans text-[10px] tracking-[0.5em] uppercase hover:bg-onyx hover:text-white-text transition-all duration-700"
                                        >
                                            Previous
                                        </button>
                                        <button
                                            onClick={() => setStep(3)}
                                            className="flex-[2] py-6 bg-onyx text-white-text font-sans text-[10px] tracking-[0.5em] uppercase hover:bg-gold hover:text-black-text transition-all duration-700"
                                        >
                                            Review Order
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="review"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-12"
                                >
                                    <section className="bg-onyx/[0.02] border border-onyx/5 p-8">
                                        <h2 className="luxury-text text-xl tracking-widest uppercase mb-8">Confirm Selection</h2>
                                        <p className="text-xs leading-relaxed opacity-60 mb-8 max-w-md italic">
                                            Please verify your shipping details and payment information before finalizing your curated collection order.
                                        </p>
                                        <div className="space-y-4 text-[10px] tracking-widest uppercase">
                                            <div className="flex justify-between border-b border-onyx/5 pb-2">
                                                <span className="opacity-40">Recipient</span>
                                                <span>Alexander McQueen</span>
                                            </div>
                                            <div className="flex justify-between border-b border-onyx/5 pb-2">
                                                <span className="opacity-40">Payment</span>
                                                <span>Visa ending in 4242</span>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <button
                                            onClick={() => setStep(2)}
                                            className="flex-1 py-6 border border-onyx/20 text-black-text font-sans text-[10px] tracking-[0.5em] uppercase hover:bg-onyx hover:text-white-text transition-all duration-700"
                                        >
                                            Edit Payment
                                        </button>
                                        <button
                                            onClick={() => {
                                                setShowSuccess(true);
                                                clearCart();
                                            }}
                                            className="flex-[2] py-6 bg-onyx text-white-text font-sans text-[10px] tracking-[0.5em] uppercase hover:bg-gold hover:text-black-text transition-all duration-700"
                                        >
                                            Finalize Order
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-40 bg-onyx/5 p-8 md:p-12 border border-onyx/5">
                            <h3 className="luxury-text text-xl tracking-[0.3em] uppercase mb-12 border-b border-onyx/10 pb-8">Summary</h3>

                            <div className="space-y-8 mb-12 max-h-[400px] overflow-y-auto pr-4 no-scrollbar">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-6 items-center">
                                        <div className="w-16 h-20 bg-onyx/10 flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="luxury-text text-[11px] tracking-widest uppercase">{item.name}</p>
                                            <p className="text-[8px] tracking-widest uppercase opacity-40 mt-1">{item.quantity} × ${item.price}</p>
                                        </div>
                                        <p className="luxury-text text-xs tracking-widest">${item.price * item.quantity}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-5 pt-8 border-t border-onyx/10">
                                <div className="flex justify-between items-center text-[10px] tracking-[0.3em] uppercase opacity-40">
                                    <span>Subtotal</span>
                                    <span>${total}</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px] tracking-[0.3em] uppercase opacity-40">
                                    <span>Shipping</span>
                                    <span>{shipping === 0 ? 'Complimentary' : `$${shipping}`}</span>
                                </div>
                                <div className="flex justify-between items-center pt-5 border-t border-onyx/10">
                                    <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Total</span>
                                    <span className="luxury-text text-2xl tracking-widest">${finalTotal}</span>
                                </div>
                            </div>

                            <div className="mt-12 flex items-center gap-4 p-4 border border-gold/20 bg-gold/5">
                                <ShieldCheck size={18} className="text-gold" />
                                <p className="text-[8px] tracking-[0.2em] uppercase opacity-60 leading-relaxed">
                                    Your curator transaction is protected by industry-standard encryption for maximum security.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Success Modal Overlay */}
            <AnimatePresence>
                {showSuccess && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-onyx/40 backdrop-blur-md flex items-center justify-center px-4"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-ivory border border-onyx/10 p-12 md:p-20 max-w-2xl w-full text-center shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="mb-12 inline-flex items-center justify-center w-24 h-24 rounded-full border border-gold/20 relative"
                                >
                                    <ShieldCheck size={40} className="text-gold" strokeWidth={1} />
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 rounded-full bg-gold/5"
                                    />
                                </motion.div>

                                <motion.h2
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="luxury-text text-3xl md:text-4xl tracking-[0.4em] uppercase mb-6"
                                >
                                    Order Received
                                </motion.h2>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-xs md:text-sm tracking-[0.2em] uppercase opacity-40 mb-12 max-w-sm mx-auto leading-loose"
                                >
                                    Your selection has been curated. A confirmation email will follow shortly. Welcome to the aura of BLAQUE.
                                </motion.p>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <button
                                        onClick={() => navigate('/')}
                                        className="text-[10px] tracking-[0.5em] uppercase bg-onyx text-white-text px-12 py-5 hover:bg-gold hover:text-black-text transition-all duration-700 w-full md:w-auto"
                                    >
                                        Return to Home
                                    </button>
                                </motion.div>

                                <div className="mt-12 opacity-20 text-[8px] tracking-[0.4em] uppercase">
                                    Reference ID: BQ-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CheckoutPage;
