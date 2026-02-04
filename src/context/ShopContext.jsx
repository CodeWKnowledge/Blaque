import React, { createContext, useContext, useState } from 'react';

// Image Imports
import ImgHugo from '../assets/Perfume-Images/Hugo-Boss.jpg';
import ImgDG from '../assets/Perfume-Images/Dolce-Gabanna.jpg';
import ImgVersace from '../assets/Perfume-Images/Versace-bright-crystal.jpg';
import ImgBadee from '../assets/Perfume-Images/BADDE AL OUD.jpg';
import ImgMusamam from '../assets/Perfume-Images/Snake.jpg';
import ImgMusamamWhite from '../assets/Perfume-Images/Musamam White Intense.jpg';
import ImgMaahir from '../assets/Perfume-Images/Horse.jpg';
import ImgHaya from '../assets/Perfume-Images/Haya.jpg';
import ImgEclaire from '../assets/Perfume-Images/Eclaire.jpg';
import ImgHerConfession from '../assets/Perfume-Images/Her-Confession.jpg';
import ImgHisConfession from '../assets/Perfume-Images/His-confession.jpg';
import ImgVeneno from '../assets/Perfume-Images/VENENO.jpg';
import ImgAfeef from '../assets/Perfume-Images/Peacock.jpg';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

const initialProducts = [
    {
        id: 1,
        name: "BOSS BOTTLED",
        brand: "Hugo Boss",
        price: 85,
        size: "100ml",
        description: "An absolute classic for the modern man. An elegant, woody fragrance that reflects a sophisticated, yet warm personality.",
        notes: {
            top: "Apple, Citrus, Geranium",
            heart: "Cinnamon, Cloves",
            base: "Sandalwood, Vetiver, Cedar"
        },
        mood: "Confident. Classic. Refined.",
        image: ImgHugo
    },
    {
        id: 2,
        name: "THE ONE",
        brand: "Dolce & Gabbana",
        price: 110,
        size: "100ml",
        description: "A sensual, elegant fragrance that is both modern yet also a unique, timeless classic. The quintessence of DG masculinity.",
        notes: {
            top: "Grapefruit, Coriander, Basil",
            heart: "Ginger, Cardamom, Orange Blossom",
            base: "Tobacco, Amber, Cedarwood"
        },
        mood: "Sensual. Elegant. Magnetic.",
        image: ImgDG
    },
    {
        id: 3,
        name: "BADEE AL OUD",
        brand: "Lattafa",
        price: 60,
        size: "100ml",
        description: "Known as 'Oud for Glory', this is a prestige fragrance with an intensive, smoky, and dark character. A masterpiece of oriental perfumery.",
        notes: {
            top: "Saffron, Nutmeg, Lavender",
            heart: "Agarwood (Oud), Patchouli",
            base: "Oud, Musk, Patchouli"
        },
        mood: "Dark. Majestic. Intense.",
        image: ImgBadee
    },
    {
        id: 4,
        name: "MUSAMAM",
        brand: "Lattafa",
        price: 55,
        size: "100ml",
        description: "A bold statement of power and mystery. Housed in a striking snake-adorned bottle, this scent is a complex woody oriental.",
        notes: {
            top: "Mandarin, Lavender, Saffron",
            heart: "Geranium, Cedar, Amberwood",
            base: "Incense, Akigalawood, Cistus"
        },
        mood: "Mysterious. Bold. Powerful.",
        image: ImgMusamam
    },
    {
        id: 5,
        name: "MUSAMAM WHITE INTENSE",
        brand: "Lattafa",
        price: 70,
        size: "100ml",
        description: "A creamy, sophisticated oriental floral that balances fresh citrus with deep amber and coconut. A true sun-drenched luxury.",
        notes: {
            top: "Bergamot, Orange, Spices",
            heart: "Mahonial, Coconut, Ylang-Ylang, Ambroxan",
            base: "Sandalwood, Benzoin, Musk"
        },
        mood: "Creamy. Radiant. Exotic.",
        image: ImgMusamamWhite
    },
    {
        id: 6,
        name: "MAAHIR",
        brand: "Lattafa",
        price: 50,
        size: "100ml",
        description: "An elegant amber floral fragrance. The iconic horse-head bottle represents strength and grace, much like the scent itself.",
        notes: {
            top: "Red Berries, Peach, Bergamot",
            heart: "Jasmine, Peony, Red Lily",
            base: "Sandalwood, Vanilla, Musk"
        },
        mood: "Graceful. Vibrant. Elegant.",
        image: ImgMaahir
    },
    {
        id: 7,
        name: "ECLAIRE",
        brand: "Lattafa",
        price: 55,
        size: "100ml",
        description: "A gourmand lover's dream. Eclaire is a comforting, sweet embrace of caramel and milk that feels like a refined dessert.",
        notes: {
            top: "Caramel, Milk, Sugar",
            heart: "Honey, White Flowers",
            base: "Vanilla, Praline, Musk"
        },
        mood: "Sweet. Comforting. Gourmand.",
        image: ImgEclaire
    },
    {
        id: 8,
        name: "HAYA",
        brand: "Lattafa",
        price: 45,
        size: "100ml",
        description: "An ultra-feminine, sparkling floral fragrance. Haya is joyful, bright, and perfect for moments of celebration.",
        notes: {
            top: "Champagne, Strawberry, Tangerine",
            heart: "Gardenia, Jasmine, Vanilla Orchid",
            base: "Amber, Sandalwood, Chestnut"
        },
        mood: "Sparkling. Joyful. Feminine.",
        image: ImgHaya
    },
    {
        id: 9,
        name: "BRIGHT CRYSTAL",
        brand: "Versace",
        price: 95,
        size: "90ml",
        description: "Inspired by a mixture of Donatella Versace's favorite floral fragrances. A fresh, sensual blend of refreshing chilled yuzu and pomegranate.",
        notes: {
            top: "Yuzu, Pomegranate, Water Notes",
            heart: "Lotus, Magnolia, Peony",
            base: "Musk, Mahogany, Amber"
        },
        mood: "Fresh. Timeless. Radiant.",
        image: ImgVersace
    },
    {
        id: 10,
        name: "HER CONFESSION",
        brand: "Lattafa",
        price: 55,
        size: "100ml",
        description: "A captivating amber vanilla fragrance. It reveals a story of intimacy through sweet florals and soft, creamy woods.",
        notes: {
            top: "Mystikal, Cinnamon",
            heart: "Tuberose, Jasmine, Incense",
            base: "Vanilla, Tonka, Musk"
        },
        mood: "Intimate. Captivating. Sweet.",
        image: ImgHerConfession
    },
    {
        id: 11,
        name: "HIS CONFESSION",
        brand: "Lattafa",
        price: 55,
        size: "100ml",
        description: "A bold and deep amber woody fragrance. It commands attention with a blend of masculine iris and warm, resinous base notes.",
        notes: {
            top: "Mandarin, Cinnamon, Lavender",
            heart: "Iris, Cypress, Benzoin",
            base: "Vanilla, Patchouli, Incense"
        },
        mood: "Bold. Warm. Commanding.",
        image: ImgHisConfession
    },
    {
        id: 12,
        name: "VENENO",
        brand: "French Avenue",
        price: 65,
        size: "100ml",
        description: "An aromatic fruity fragrance that is both edgy and sophisticated. Smokey apple meets deep tobacco for a unique olfactory journey.",
        notes: {
            top: "Apple, Smoke, Cinnamon",
            heart: "Tobacco, Moss",
            base: "Bourbon Vanilla, Orcanox"
        },
        mood: "Edgy. Sophisticated. Unique.",
        image: ImgVeneno
    },
    {
        id: 13,
        name: "AFEEF",
        brand: "Lattafa",
        price: 60,
        size: "100ml",
        description: "The 'Peacock' fragrance. Afeef is a masterclass in creamy white florals and juicy fruits, presented in a bottle as ornate as a royal garden.",
        notes: {
            top: "Peach, Bergamot, Pink Pepper",
            heart: "Jasmine, Orange Blossom, Tuberose",
            base: "Sandalwood, Amber, Praline"
        },
        mood: "Royal. Creamy. Elegant.",
        image: ImgAfeef
    }
];

export const ShopProvider = ({ children }) => {
    const [products] = useState(initialProducts);
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity = 1) => {
        setCart(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        setCart(prev =>
            prev.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <ShopContext.Provider value={{ products, cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </ShopContext.Provider>
    );
};
