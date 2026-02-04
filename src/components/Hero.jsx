import React from 'react';
import { motion } from 'framer-motion';
import { useAdmin } from '../context/AdminContext';
import HeroPerfume from '../assets/Perfume-Images/Snake.png'

const Hero = () => {
    const { content } = useAdmin();

    if (!content.showHero) return null;

    return (
        <section className="relative h-screen md:h-[110vh] w-full bg-ivory overflow-hidden flex items-end justify-center pb-12">
            {/* Phase 1: Atmospheric Wake-Up (0.0s -> 0.6s) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-onyx/[0.02] to-transparent pointer-events-none"
            />

            {/* Subtle Grain Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
                <div className="absolute inset-0 bg-noise bg-repeat opacity-20" />
            </div>

            {/* Phase 2: Brand Wordmark Emergence (0.4s -> 1.6s) */}
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden -mt-50 md:-mt-40">
                <motion.h2
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1], // Closest to power2.out
                        delay: 0.4
                    }}
                    className="text-[25vw] md:text-[15vw] font-black text-black-text tracking-tighter pointer-events-none select-none uppercase leading-none luxury-text -mt-50"
                >
                    {content.heroTitle}
                </motion.h2>
            </div>

            {/* Phase 3 & 5: Bottle Descent & Interaction (1.2s -> 3.0s | 3.4s -> 5.2s) */}
            <div className="relative z-20 flex flex-col items-center mt-12 md:mt-20">
                <motion.div
                    initial={{ y: -160, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        y: { duration: 1.8, ease: [0.33, 1, 0.68, 1], delay: 1.2 }, // Power3.out style
                        opacity: { duration: 1, delay: 1.2 }
                    }}
                    className="relative w-[500px] md:w-[400px] aspect-[3/4] flex items-center justify-center md:mt-80"
                >
                    {/* Micro-bounce settle simulation using a separate animation */}
                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.4, delay: 3.0, ease: "easeOut" }}
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        {/* Phase 5: Interaction Glow */}
                        <motion.div
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 1.8, delay: 3.4, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gold/30 blur-[60px] rounded-full scale-110"
                        />

                        <img
                            src={HeroPerfume}
                            alt="BLAQUE Signature Fragrance"
                            className="w-full h-full object-cover drop-shadow-[0_45px_55px_rgba(0,0,0,0.4)] brightness-95 contrast-105"
                        />
                    </motion.div>
                </motion.div>

                {/* Phase 6: Supporting Copy Fade-In (4.6s -> 6.0s) */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 4.6, ease: "easeOut" }} // Power2.out
                    className="mt-2 text-center"
                >
                    <p className="luxury-text text-black-text text-base md:text-xl tracking-[0.2em] opacity-80 italic">
                        {content.heroTagline}
                    </p>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 40 }}
                        transition={{ duration: 1.5, delay: 5.5 }}
                        className="h-[1px] bg-gold/50 mx-auto mt-6"
                    />
                </motion.div>
            </div>

            {/* Phase 4: Light Waterfall Activation (2.2s -> 4.8s) & Phase 7 Ambient Idle */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden flex justify-center">
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: '100%', opacity: 1 }}
                    transition={{ duration: 2.6, delay: 2.2, ease: "easeInOut" }}
                    className="relative w-[12px] md:w-[20px] bg-gradient-to-b from-gold/40 via-onyx/10 to-transparent blur-[2px]"
                >
                    {/* Idle Breathing Effect (6.5s+) */}
                    <motion.div
                        animate={{ opacity: [2, 1, 2] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 6.5 }}
                        className="absolute inset-0 bg-gold/20 blur-[1px]"
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator (Fades in last) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 6.5, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 -mt-20"
            >
                <span className="text-[10px] tracking-[0.4em] uppercase opacity-60 font-sans text-black-text">Discover</span>
                <div className="w-[1px] h-12 bg-onyx/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 w-full h-4 bg-gold/60"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
