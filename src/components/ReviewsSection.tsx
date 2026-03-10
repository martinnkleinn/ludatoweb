'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const reviews = [
    {
        name: 'Martin Kováčik',
        car: 'VW Golf VII',
        rating: 5,
        text: 'Konečne servis, kde cítite, že vám na aute naozaj záleží. Diagnostika bola hotová za hodinu, oprava za deň. Cena zodpovedá kvalite — odporúčam všetkým!',
        initials: 'MK',
    },
    {
        name: 'Jana Novotná',
        car: 'Škoda Octavia',
        rating: 5,
        text: 'Ako žena nemusím mať strach, že ma obklamu. V servise mi všetko podrobne vysvetlili a ukázali, čo treba vymeniť. Takúto úprimnosť a ochotu som dávno nezažila.',
        initials: 'JN',
    },
    {
        name: 'Tomáš Blaho',
        car: 'BMW 3 Série',
        rating: 5,
        text: 'Prišiel som so záhadnou chybou, ktorú iné servisy nevedeli odhaliť. Tu to našli hneď. Rodinný prístup, moderná technika — perfektná kombinácia!',
        initials: 'TB',
    },
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#E31C25] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function ReviewsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="recenzie" className="bg-[#1D1D1B] py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -60 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p
                        className="text-[#E31C25] text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <span className="font-black">//</span> Čo o nás hovoria
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-black text-white mb-4"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        RECENZIE <span className="text-[#E31C25]">ZÁKAZNÍKOV</span>
                    </h2>
                    <p
                        className="text-white/40 max-w-lg mx-auto"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        Spokojnosť zákazníka je naším najväčším ocenením.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ y: -4, borderColor: 'rgba(227,28,37,0.5)' }}
                            className="relative bg-white/5 border border-white/10 rounded-sm p-8 transition-colors duration-300 group"
                        >
                            {/* Quote mark */}
                            <div
                                className="absolute top-4 right-6 text-6xl text-[#E31C25]/20 font-serif leading-none select-none"
                            >
                                "
                            </div>

                            {/* Stars */}
                            <StarRating count={review.rating} />

                            {/* Text */}
                            <p
                                className="text-white/70 text-sm leading-relaxed mt-4 mb-6"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                {review.text}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#E31C25] flex items-center justify-center flex-shrink-0">
                                    <span
                                        className="text-white text-xs font-black"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {review.initials}
                                    </span>
                                </div>
                                <div>
                                    <div
                                        className="text-white text-sm font-bold"
                                        style={{ fontFamily: 'var(--font-montserrat)' }}
                                    >
                                        {review.name}
                                    </div>
                                    <div
                                        className="text-white/40 text-xs"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    >
                                        {review.car}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E31C25] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>

                {/* Google rating badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 flex justify-center"
                >
                    <div className="inline-flex items-center gap-4 border border-white/10 rounded-sm px-8 py-4 bg-white/5">
                        <div>
                            <div
                                className="text-3xl font-black text-white"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                5.0
                            </div>
                            <StarRating count={5} />
                        </div>
                        <div className="w-px h-10 bg-white/20" />
                        <div
                            className="text-white/60 text-sm"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            <span className="block font-semibold text-white">Google</span>
                            hodnotenie
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
