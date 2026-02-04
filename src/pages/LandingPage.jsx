import React from 'react';
import Hero from '../components/Hero';
import CurationDetails from '../components/CurationDetails';
import CurationRitual from '../components/CurationRitual';
import SignatureScents from '../components/SignatureScents';
import SensoryExperience from '../components/SensoryExperience';
import FinalCTA from '../components/FinalCTA';
import CuratorsJournal from '../components/CuratorsJournal';
import { useAdmin } from '../context/AdminContext';

const LandingPage = () => {
    const { content } = useAdmin();

    return (
        <div className="w-full bg-ivory">
            <Hero />

            <CurationDetails />

            <CuratorsJournal />

            {/* Brand Philosophy Section */}
            {content.showPhilosophy && (
                <section className="py-12 px-8 flex justify-center bg-onyx/20 text-black-text border border-onyx/20">
                    <div className="max-w-3xl text-center">
                        <p className="luxury-text text-3xl md:text-5xl leading-tight mb-8 text-black-text">
                            {content.philosophyTitle}
                        </p>
                        <div className="h-px w-12 bg-onyx/20 mx-auto mb-8"></div>
                        <p className="font-sans text-sm md:text-base tracking-[0.2em] opacity-80 leading-loose max-w-xl mx-auto uppercase text-black-text">
                            {content.philosophyBody}
                        </p>
                    </div>
                </section>
            )}

            <CurationRitual />

            {content.showSignature && <SignatureScents />}

            {content.showSensory && <SensoryExperience />}

            <FinalCTA />
        </div>
    );
};

export default LandingPage;
