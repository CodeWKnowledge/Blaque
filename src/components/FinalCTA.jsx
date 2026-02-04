import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
    return (
        <section className="py-32 px-8 flex flex-col items-center justify-center bg-ivory text-black-text text-center border-t border-onyx/5">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            >
                <h2 className="luxury-text text-4xl md:text-6xl mb-8 tracking-wider leading-tight text-black-text">
                    Own the presence. <br />
                    <span className="italic font-normal opacity-70">Discover Blaque.</span>
                </h2>

                <Link to="/shop">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-12 py-5 bg-onyx text-white-text font-sans text-[10px] tracking-[0.5em] uppercase hover:bg-gold hover:text-black-text transition-all duration-700 mt-8"
                    >
                        Enter Showroom
                    </motion.button>
                </Link>
            </motion.div>
        </section>
    );
};

export default FinalCTA;
