import React from 'react';
import { motion } from 'framer-motion';

const CurationRitual = () => {
    return (
        <section className="py-32 px-8 bg-onyx text-white-text flex flex-col md:flex-row items-center gap-16 overflow-hidden">
            <div className="flex-1 max-w-xl">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.4 }}
                    transition={{ duration: 1 }}
                    className="text-[10px] tracking-[0.5em] uppercase mb-8 block text-white-text"
                >
                    Process / Ritual
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="luxury-text text-3xl md:text-5xl tracking-widest uppercase mb-12 leading-tight text-white-text"
                >
                    The Art of <br /> The Handpicked
                </motion.h2>
                <div className="space-y-8 opacity-60 font-sans text-xs tracking-widest leading-loose uppercase text-white-text">
                    <p>
                        A true scent is more than a formula; it is a memory waiting to be triggered. At BLAQUE, our curation process begins with a blank slate and an open mind.
                    </p>
                    <p>
                        We analyze the architecture of every note, ensuring that the transition from Top to Base is seamless, poetic, and persistent.
                    </p>
                </div>
            </div>

            <div className="flex-1 relative aspect-[4/5] w-full max-w-md">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.7 }}
                    transition={{ duration: 2 }}
                    className="w-full h-full border border-ivory/10 relative overflow-hidden"
                >
                    <img
                        src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1000"
                        alt="Ritual"
                        className="w-full h-full object-cover mix-blend-luminosity brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent" />
                </motion.div>

                {/* Floating detail */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-8 -left-8 bg-ivory text-black-text px-8 py-10 border border-onyx/5 shadow-2xl z-30"
                >
                    <p className="luxury-text text-lg tracking-widest uppercase mb-2">Authenticated</p>
                    <p className="text-[10px] tracking-widest opacity-40 uppercase">Batch No. 2026-X</p>
                </motion.div>
            </div>
        </section>
    );
};

export default CurationRitual;
