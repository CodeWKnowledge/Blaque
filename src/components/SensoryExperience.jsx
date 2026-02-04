import React from 'react';
import { motion } from 'framer-motion';

const SensoryExperience = () => {
    return (
        <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-ivory border-y border-onyx/5">
            {/* Background with subtle texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-noise bg-repeat" />
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20">
                {['Warm', 'Magnetic', 'Intimate', 'Refined'].map((word, index) => (
                    <motion.span
                        key={word}
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 0.8, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: index * 0.4 }}
                        className="luxury-text text-2xl md:text-3xl tracking-[0.4em] uppercase text-black-text text-center"
                    >
                        {word}
                    </motion.span>
                ))}
            </div>

            {/* Subtle floating light particles */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/3 w-64 h-64 bg-gold/5 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        opacity: [0.05, 0.2, 0.05]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-onyx/5 rounded-full blur-[120px]"
                />
            </div>
        </section>
    );
};

export default SensoryExperience;
