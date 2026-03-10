'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: '/#sluzby', label: 'Služby' },
    { href: '/#o-nas', label: 'O nás' },
    { href: '/cennik', label: 'Cenník' },
    { href: '/#recenzie', label: 'Recenzie' },
    { href: '/#kontakt', label: 'Kontakt' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[#1D1D1B]/95 backdrop-blur-md shadow-2xl border-b border-[#E31C25]/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 relative">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group flex-1">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="relative w-16 h-14 flex-shrink-0"
                        >
                            <Image
                                src="/logo.svg"
                                alt="LUDATO FAMILY Cars Services"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Nav (Center) */}
                    <nav className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className="nav-link text-white/90 hover:text-white font-medium text-sm tracking-wide uppercase transition-colors duration-200"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* CTA (Right) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="hidden md:flex flex-1 justify-end"
                    >
                        <Link
                            href="/#kontakt"
                            className="relative inline-flex items-center gap-2 bg-[#E31C25] hover:bg-[#c0151d] text-white font-bold text-sm px-6 py-3 rounded-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#E31C25]/40 hover:-translate-y-0.5 group overflow-hidden"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            <span className="relative z-10">REZERVOVAŤ TERMÍN</span>
                            <span className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                        </Link>
                    </motion.div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Menu"
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-white origin-center transition-colors"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-6 h-0.5 bg-white"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-0.5 bg-white origin-center"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#1D1D1B] border-t border-[#E31C25]/20"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-white/90 hover:text-[#E31C25] font-semibold tracking-widest uppercase text-sm py-2 border-b border-white/10 transition-colors"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/nacenenie"
                                onClick={() => setMenuOpen(false)}
                                className="mt-2 text-center bg-[#E31C25] hover:bg-[#c0151d] text-white font-bold text-sm px-6 py-3 rounded-sm tracking-widest uppercase transition-colors"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                                OBJEDNAŤ SA
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
