'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type PriceItem = {
    service: string;
    price: string | null;
    prefix?: string;
    unit?: string;
    highlight?: boolean;
    note?: boolean;
};

type PricingCategory = {
    category: string;
    items: PriceItem[];
    footnote?: string;
};

const pricingCategories: PricingCategory[] = [
    {
        category: 'NORMOHODINY',
        items: [
            {
                service: 'Ľahká práca – jednoduché, rýchle úkony bez väčšej demontáže',
                price: '28',
                unit: '/NH',
            },
            {
                service: 'Stredná práca – vyžadujúca viac času alebo čiastočnú demontáž',
                price: '33',
                unit: '/NH',
            },
            {
                service: 'Ťažká práca – náročné zásahy (rozvody, spojka, turbo, EGR, DPF, opravy motora, elektro, demontáž agregátov)',
                price: '38',
                unit: '/NH',
                highlight: true,
            },
        ],
    },
    {
        category: 'KONTROLY VOZIDLA',
        items: [
            { service: 'Všeobecná kontrola vozidla', price: '30' },
            { service: 'Dymová skúška netesností', price: '30' },
            { service: 'Kontrola podvozku a náprav', price: '30' },
            { service: 'Kontrola nastavenia geometrie', price: '30' },
            { service: 'Kontrola pred STK + EK', price: '30' },
            { service: 'Diagnostika vozidla', price: '30' },
            { service: 'Kontrola motorového priestoru', price: '30' },
            { service: 'Kontrola elektriky a osvetlenia', price: '30' },
            { service: 'Kontrola podvozku a náprav (základná)', price: '20' },
        ],
    },
    {
        category: 'GEOMETRIA',
        items: [
            { service: 'Kontrola nastavenia geometrie', price: '20' },
            { service: 'Geometria prednej nápravy', price: '55' },
            { service: 'Geometria prednej a zadnej nápravy', price: '65' },
        ],
    },
    {
        category: 'OLEJOVÝ SERVIS',
        items: [
            { service: 'Výmena oleja + olejový filter', price: '30' },
            { service: 'Výmena oleja + olejový filter + vzduchový filter', price: '40' },
            { service: 'Výmena oleja + olejový filter + vzduchový filter + kabínový filter', price: '50' },
            { service: 'Kompletný servis (vrátane palivového filtra)', price: '60' },
        ],
        footnote: '* Materiál naceňujeme individuálne podľa EČV',
    },
    {
        category: 'BRZDY',
        items: [
            { service: 'Kontrola bŕzd', price: '30' },
            { service: 'Výmena brzdovej kvapaliny', price: '40' },
            { service: 'Výmena predných kotúčov a platničiek', price: '60' },
            { service: 'Výmena predných platničiek', price: '40' },
            { service: 'Výmena zadných kotúčov a platničiek', price: '60' },
            { service: 'Výmena zadných platničiek', price: '40' },
        ],
    },
    {
        category: 'PREVODOVKY',
        items: [
            { service: 'Automatická prevodovka – výmena náplne', price: '60', prefix: 'od' },
            { service: 'Manuálna prevodovka – výmena náplne', price: '60', prefix: 'od' },
        ],
        footnote: '* Materiál naceňujeme individuálne',
    },
    {
        category: 'PODVOZOK',
        items: [
            { service: 'Kontrola podvozku', price: '20' },
            { service: 'Opravy (tlmiče, ramená, ložiská…)', price: null },
        ],
    },
    {
        category: 'KOMPLETNÉ PREZUTIE',
        items: [
            { service: '12" – 14"', price: '40' },
            { service: '15" – 17"', price: '50' },
            { service: '18" – 19"', price: '60' },
        ],
    },
    {
        category: 'PREVÁŽENIE A PREHODENIE KOLIES NA DISKU',
        items: [
            { service: '12" – 14"', price: '30' },
            { service: '15" – 17"', price: '40' },
            { service: '18" – 19"', price: '50' },
        ],
    },
    {
        category: 'STK A EK',
        items: [
            { service: 'Sprostredkovanie kontroly STK + EK', price: '130', highlight: true },
        ],
    },
    {
        category: 'KLIMATIZÁCIA',
        items: [
            { service: 'Kontrola, tlakovanie a preplnenie klimatizácie – staré chladivo R134a', price: '40' },
            { service: 'Kontrola, tlakovanie a preplnenie klimatizácie – nové chladivo R1234yf', price: '48' },
        ],
        footnote: '* Uvedené ceny sú bez materiálu. Chladivo R134a – 0,17 € bez DPH / 1 g, chladivo R1234yf – 0,28 € bez DPH / 1 g',
    },
    {
        category: 'DEZINFEKCIA',
        items: [
            { service: 'Ozónová dezinfekcia interiéru', price: '20' },
        ],
    },
    {
        category: 'PREVÁDZKOVÉ KVAPALINY',
        items: [
            { service: 'Ostrekovač', price: '2,50', unit: '/l' },
            { service: 'Chladiaca kvapalina G12', price: '3,50', unit: '/l' },
            { service: 'AdBlue 10 l', price: '25' },
            { service: 'Brzdová kvapalina DOT4', price: '6', unit: '/l' },
        ],
    },
    {
        category: 'ĎALŠIE SLUŽBY',
        items: [
            { service: 'Tepovanie cez deň', price: '50', prefix: 'od' },
            { service: 'Tepovanie v noci', price: '80', prefix: 'od' },
            { service: 'Čistenie interiéru + vysávanie', price: '45' },
            { service: 'Pickup vozidla', price: '50' },
            { service: 'Odťah vozidla', price: '170' },
            { service: 'Výmena batérie', price: '30', prefix: 'od' },
        ],
    },
];

const hours = [
    { day: 'Pondelok – Štvrtok', time: '7:00 – 17:00' },
    { day: 'Piatok', time: '7:00 – 16:00' },
    { day: 'Sobota – Nedeľa', time: 'Zatvorené' },
];

function PriceRow({ item, index }: { item: PriceItem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className={`group flex items-center justify-between gap-4 py-4 px-6 rounded-sm border transition-all duration-300 hover:border-[#E31C25]/50 hover:bg-[#E31C25]/5 ${
                item.highlight
                    ? 'border-[#E31C25]/40 bg-[#E31C25]/10'
                    : 'border-white/8 bg-white/3'
            }`}
        >
            <div className="flex items-center gap-3 min-w-0">
                <span
                    className={`text-sm font-semibold tracking-wide leading-tight ${
                        item.highlight ? 'text-white' : 'text-white/80'
                    }`}
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    {item.service}
                </span>
            </div>

            <div className="flex-1 border-b border-dashed border-white/15 mx-2 min-w-[20px]" />

            <div className="flex items-baseline gap-1 flex-shrink-0">
                {item.price === null ? (
                    <span
                        className="text-white/40 text-sm font-medium"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        Na dopyt
                    </span>
                ) : (
                    <>
                        {item.prefix && (
                            <span
                                className="text-white/50 text-xs font-medium"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                {item.prefix}
                            </span>
                        )}
                        <span
                            className={`text-xl font-black ${
                                item.highlight ? 'text-[#E31C25]' : 'text-white'
                            }`}
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            {item.price}
                            <span className="text-base">€</span>
                            {item.unit && (
                                <span className="text-sm font-medium text-white/50">{item.unit}</span>
                            )}
                        </span>
                    </>
                )}
            </div>
        </motion.div>
    );
}

function CategorySection({
    cat,
    catIndex,
}: {
    cat: PricingCategory;
    catIndex: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIndex * 0.05 }}
            className="space-y-2"
        >
            <div className="flex items-center gap-3 mb-4 pt-2">
                <span
                    className="text-[#E31C25] font-black text-xs"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    //
                </span>
                <h2
                    className="text-white/60 text-xs tracking-[0.3em] uppercase font-bold"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    {cat.category}
                </h2>
                <div className="flex-1 h-px bg-white/8" />
            </div>

            <div className="space-y-2">
                {cat.items.map((item, i) => (
                    <PriceRow key={`${cat.category}-${item.service}`} item={item} index={i} />
                ))}
            </div>

            {cat.footnote && (
                <p
                    className="text-white/30 text-xs pl-6 pt-1"
                    style={{ fontFamily: 'var(--font-inter)' }}
                >
                    {cat.footnote}
                </p>
            )}
        </motion.div>
    );
}

const TABS = [
    { id: 'diagnostika', label: 'Diagnostika & STK', categories: ['NORMOHODINY', 'KONTROLY VOZIDLA', 'STK A EK', 'DEZINFEKCIA'] },
    { id: 'podvozok', label: 'Podvozok & Brzdy', categories: ['GEOMETRIA', 'BRZDY', 'PODVOZOK'] },
    { id: 'pneuservis', label: 'Pneuservis', categories: ['KOMPLETNÉ PREZUTIE', 'PREVÁŽENIE A PREHODENIE KOLIES NA DISKU'] },
    { id: 'kvapaliny', label: 'Kvapaliny & Servis', categories: ['OLEJOVÝ SERVIS', 'PREVODOVKY', 'KLIMATIZÁCIA', 'PREVÁDZKOVÉ KVAPALINY', 'ĎALŠIE SLUŽBY'] },
];

export default function CennikPage() {
    const [activeTab, setActiveTab] = useState('diagnostika');

    const activeTabObj = TABS.find((t) => t.id === activeTab);
    const activeCategories = pricingCategories.filter((cat) =>
        activeTabObj?.categories.includes(cat.category)
    );

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#111111]">
                {/* Hero strip */}
                <div className="relative bg-gradient-to-b from-[#1D1D1B] to-[#111111] pt-32 pb-20 overflow-hidden">
                    <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-[22vw] font-black text-white/3 leading-none select-none pointer-events-none"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        //
                    </div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="font-black">//</span> Transparentné ceny
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            CENNÍK <span className="text-[#E31C25]">SERVISU</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="text-white/50 max-w-xl mx-auto text-base"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Žiadne prekvapenia, žiadne skryté poplatky. Ceny sú orientačné a
                            závisia od konkrétneho vozidla.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="mt-8 inline-grid grid-cols-3 divide-x divide-white/20 bg-white/5 border border-white/10 rounded-sm overflow-hidden shadow-xl"
                        >
                            {[
                                { label: 'Ľahká práca', price: '28', note: 'rýchle úkony' },
                                { label: 'Stredná práca', price: '33', note: 'čiastočná demontáž' },
                                { label: 'Ťažká práca', price: '38', note: 'náročné zásahy', accent: true },
                            ].map((tier) => (
                                <div
                                    key={tier.label}
                                    className={`flex flex-col items-center px-6 py-5 gap-1 ${tier.accent ? 'bg-[#E31C25]/15' : ''}`}
                                >
                                    <span
                                        className="text-white/50 text-[10px] uppercase tracking-widest font-semibold"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {tier.label}
                                    </span>
                                    <span
                                        className={`text-3xl font-black ${tier.accent ? 'text-[#E31C25]' : 'text-white'}`}
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {tier.price}<span className="text-xl">€</span>
                                        <span className="text-sm font-medium text-white/40">/NH</span>
                                    </span>
                                    <span
                                        className="text-white/35 text-[10px]"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    >
                                        {tier.note}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4">
                    <div className="flex flex-wrap justify-center gap-2 border-b border-white/10 pb-4">
                        {TABS.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative px-5 py-3 text-xs md:text-sm font-bold uppercase tracking-widest transition-colors duration-300 rounded-sm cursor-pointer ${
                                        isActive ? 'text-white' : 'text-white/50 hover:text-white'
                                    }`}
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    <span className="relative z-10">{tab.label}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeCennikTab"
                                            className="absolute inset-0 bg-[#E31C25] rounded-sm"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Pricing by category grid */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
                    <motion.div 
                        layout
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                    >
                        {activeCategories.map((cat, i) => (
                            <CategorySection key={cat.category} cat={cat} catIndex={i} />
                        ))}
                    </motion.div>
                </div>

                {/* Disclaimer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto px-4 sm:px-6 pb-8"
                >
                    <p
                        className="text-white/30 text-xs text-center leading-relaxed border border-white/8 rounded-sm p-4"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        * Ceny sú orientačné a môžu sa líšiť v závislosti od značky, modelu a stavu vozidla. Konečná cena bude vždy odsúhlasená pred zahájením prác. Ceny sú uvedené bez DPH, pokiaľ nie je uvedené inak.
                    </p>
                </motion.div>

                {/* Opening hours + info */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 border border-white/10 rounded-sm p-8"
                    >
                        <h2
                            className="text-white font-black text-lg mb-6 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> OTVÁRACIE HODINY
                        </h2>
                        <div className="space-y-4">
                            {hours.map((h) => (
                                <div
                                    key={h.day}
                                    className="flex justify-between items-center border-b border-white/10 pb-3"
                                >
                                    <span
                                        className="text-white/70 text-sm font-medium"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {h.day}
                                    </span>
                                    <span
                                        className="text-[#E31C25] font-bold text-sm"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {h.time}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-sm p-8"
                    >
                        <h2
                            className="text-white font-black text-lg mb-6 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> INFORMÁCIE O FIRME
                        </h2>
                        <ul className="space-y-3 text-white/70 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E31C25] flex-shrink-0 text-base">🏢</span>
                                <div>
                                    <div className="text-white font-bold" style={{ fontFamily: 'var(--font-montserrat)' }}>LUDATO FAMILY, s.r.o</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E31C25] flex-shrink-0 text-base">📍</span>
                                <div>
                                    Odborárska 52<br />
                                    <span className="text-[#E31C25] font-semibold">831 02 Bratislava</span>
                                    <div className="text-white/40 text-xs mt-2" style={{ fontFamily: 'var(--font-inter)' }}>
                                        Fakturačné údaje:<br />
                                        LUDATO FAMILY, s.r.o<br />
                                        Karpatské námestie 10/A
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E31C25] flex-shrink-0 text-base">📞</span>
                                <a href="tel:+421944236257" className="hover:text-[#E31C25] transition-colors font-medium">
                                    +421 944 236 257
                                </a>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <a
                                href="/#kontakt"
                                className="inline-flex items-center gap-2 bg-[#E31C25] hover:bg-[#c0151d] text-white font-bold text-xs px-5 py-3 rounded-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#E31C25]/40"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                REZERVOVAŤ TERMÍN
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Back CTA */}
                <div className="text-center pb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/40 hover:text-[#E31C25] text-sm tracking-widest uppercase transition-colors"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Späť na hlavnú stránku
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
