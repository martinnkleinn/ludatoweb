'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const pricingItems = [
    { service: 'VÝMENA OLEJA', price: '30', prefix: 'od' },
    { service: 'VÝMENA BŔZD', price: '50', prefix: 'od' },
    { service: 'DIAGNOSTIKA', price: '20', prefix: 'od' },
    { service: 'VÝMENA PNEUMATÍK', price: '20', prefix: 'od' },
    { service: 'VÝMENA BATÉRIE', price: '30', prefix: 'od' },
    { service: 'GEOMETRIA', price: '65', prefix: '' },
    { service: 'TEPOVANIE cez deň', price: '50', prefix: 'od' },
    { service: 'TEPOVANIE v noci', price: '80', prefix: 'od' },
    { service: 'ČISTENIE INTERIÉRU + VYSAVANIE', price: '45', prefix: '' },
    { service: 'PICKUP VOZIDLA', price: '50', prefix: '' },
    { service: 'ODŤAH VOZIDLA', price: '170', prefix: '' },
    {
        service: 'SPROSTREDKOVANIE STK/EK + KONTROLA PRED STK/EK',
        price: '130',
        prefix: '',
        highlight: true,
    },
];

const hours = [
    { day: 'Pondelok – Štvrtok', time: '9:00 – 16:00' },
    { day: 'Piatok', time: '7:00 – 14:00' },
    { day: 'Obedová prestávka', time: '12:00 – 13:00' },
];

function PriceRow({
    item,
    index,
}: {
    item: (typeof pricingItems)[0];
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-40px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`group flex items-center justify-between gap-4 py-4 px-6 rounded-sm border transition-all duration-300 hover:border-[#E31C25]/50 hover:bg-[#E31C25]/5 ${item.highlight
                ? 'border-[#E31C25]/40 bg-[#E31C25]/10'
                : 'border-white/8 bg-white/3'
                }`}
        >
            {/* Service name */}
            <div className="flex items-center gap-3 min-w-0">
                <span
                    className={`text-[#E31C25] font-black text-sm flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity`}
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
          //
                </span>
                <span
                    className={`text-sm font-semibold tracking-wide leading-tight ${item.highlight ? 'text-white' : 'text-white/80'
                        }`}
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    {item.service}
                </span>
            </div>

            {/* Dotted line */}
            <div className="flex-1 border-b border-dashed border-white/15 mx-2 min-w-[20px]" />

            {/* Price */}
            <div className="flex items-baseline gap-1 flex-shrink-0">
                {item.prefix && (
                    <span
                        className="text-white/50 text-xs font-medium"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        {item.prefix}
                    </span>
                )}
                <span
                    className={`text-xl font-black ${item.highlight ? 'text-[#E31C25]' : 'text-white'
                        }`}
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                    {item.price}
                    <span className="text-base">€</span>
                </span>
            </div>
        </motion.div>
    );
}

export default function CennikPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#111111]">
                {/* Hero strip */}
                <div className="relative bg-gradient-to-b from-[#1D1D1B] to-[#111111] pt-32 pb-20 overflow-hidden">
                    {/* Background // */}
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
                            závisejú od konkrétneho vozidla.
                        </motion.p>
                        {/* Normohodina badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="mt-8 inline-flex items-center gap-4 bg-[#E31C25] text-white px-8 py-4 rounded-sm shadow-lg shadow-[#E31C25]/30"
                        >
                            <div>
                                <div className="text-xs uppercase tracking-widest opacity-80" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                    Normohodina
                                </div>
                                <div className="text-4xl font-black" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                    28€
                                </div>
                            </div>
                            <div className="w-px h-12 bg-white/30" />
                            <div className="text-left">
                                <div className="text-xs opacity-80" style={{ fontFamily: 'var(--font-inter)' }}>
                                    Pracovný čas<br />technika vrátane<br />materiálu
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Pricing table */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-3">
                    {pricingItems.map((item, i) => (
                        <PriceRow key={item.service} item={item} index={i} />
                    ))}
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
                    {/* Hours */}
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

                    {/* Company info */}
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
                                    Kadnárova 3<br />
                                    <span className="text-[#E31C25] font-semibold">831 54 Bratislava – Rača</span>
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
