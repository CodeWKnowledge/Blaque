import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
    const [content, setContent] = useState({
        heroTitle: "BLAQUE",
        heroTagline: '"The art of selection. Handpicked for the discerning."',
        philosophyTitle: "Curated for the Individual.",
        philosophyBody: "BLAQUE is a sanctuary of scent. We do not manufacture; we discover. Each fragrance in our collection is meticulously handpicked from the world's most evocative perfume houses, curated for those who seek a presence that defines the space before a word is spoken.",
        showHero: true,
        showPhilosophy: true,
        showSignature: true,
        showSensory: true,
    });

    const updateContent = (updates) => {
        setContent(prev => ({ ...prev, ...updates }));
    };

    return (
        <AdminContext.Provider value={{ content, updateContent }}>
            {children}
        </AdminContext.Provider>
    );
};
