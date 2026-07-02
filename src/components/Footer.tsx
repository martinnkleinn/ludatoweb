'use client';

import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
    { href: '/#sluzby', label: 'Služby' },
    { href: '/#o-nas', label: 'O nás' },
    { href: '/cennik', label: 'Cenník' },
    { href: '/#recenzie', label: 'Recenzie' },
    { href: '/#kontakt', label: 'Kontakt' },
];

export default function Footer() {
    return (
        <footer className="bg-[#1D1D1B] border-t border-[#E31C25]/20">
            {/* Top strip */}
            <div className="bg-[#E31C25] h-1" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Logo & tagline */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-16 h-14 flex-shrink-0">
                                <Image
                                    src="/logo.svg"
                                    alt="LUDATO FAMILY Cars Services"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <div
                                    className="text-white font-black text-lg leading-tight tracking-wider"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    LUDATO
                                </div>
                                <div
                                    className="text-white/50 text-xs tracking-widest uppercase"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    Family Cars Services
                                </div>
                            </div>
                        </div>
                        <p
                            className="text-white/40 text-sm leading-relaxed"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Rodinné hodnoty.<br />
                            Prémiová precíznosť.<br />
                            Poctivá práca bez kompromisov.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4
                            className="text-white font-bold text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> Navigácia
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/50 hover:text-[#E31C25] text-sm tracking-wide transition-colors duration-200 flex items-center gap-2 group"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-[#E31C25] transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4
                            className="text-white font-bold text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-2"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="text-[#E31C25]">//</span> Kontakt
                        </h4>
                        <ul className="space-y-3 text-white/50 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                            <li className="flex items-center gap-2">
                                <span className="text-[#E31C25]">✆</span>
                                <a href="tel:+421944236257" className="hover:text-[#E31C25] transition-colors">+421 944 236 257</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#E31C25] mt-0.5">📍</span>
                                <a
                                    href="https://www.google.com/maps/place/Odbor%C3%A1rska+52,+831+02+Bratislava/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#E31C25] transition-colors"
                                >
                                    <span className="font-semibold text-white">Odborárska 52</span><br />
                                    831 02 Bratislava
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#E31C25] mt-0.5">🕐</span>
                                <span>
                                    Po–Št: 9:00–16:00<br />
                                    Pia: 7:00–14:00<br />
                                    Obedová prestávka: 12:00–13:00
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p
                        className="text-white/30 text-xs text-center sm:text-left"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        © {new Date().getFullYear()} Prevádzkovateľ: LUDATO FAMILY, s.r.o., Karpatské námestie 10/A, Bratislava. Všetky práva vyhradené.
                    </p>
                    <a
                        href="https://byforma.eu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/30 hover:text-[#E31C25] text-xs transition-colors"
                        style={{ fontFamily: 'var(--font-inter)' }}
                    >
                        Vytvorilo Studio Forma
                    </a>
                </div>
            </div>
        </footer>
    );
}
