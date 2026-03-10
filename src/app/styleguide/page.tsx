'use client';

import Link from 'next/link';

export default function StyleguidePage() {
    return (
        <div className="min-h-screen bg-[#111111] text-white p-8 md:p-16" style={{ fontFamily: 'var(--font-inter)' }}>
            <div className="max-w-5xl mx-auto space-y-24">

                {/* Header */}
                <div>
                    <h1
                        className="text-4xl md:text-5xl font-black mb-4"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        LUDATO <span className="text-[#E31C25]">STYLEGUIDE</span>
                    </h1>
                    <p className="text-white/50 max-w-2xl text-lg">
                        This is a hidden reference page containing all foundational design tokens and components used across the LUDATO FAMILY Cars Services website. Use this to sync with Figma.
                    </p>
                </div>

                {/* Colors */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-sm tracking-[0.3em] uppercase text-[#E31C25] font-bold mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>// Farby</h2>
                        <p className="text-white/40">Primary brand palette.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Red */}
                        <div className="space-y-3">
                            <div className="h-32 rounded-sm bg-[#E31C25] border border-white/10 shadow-lg shadow-[#E31C25]/20 flex items-end p-4">
                                <span className="font-mono text-xs bg-black/40 px-2 py-1 rounded backdrop-blur-sm">#E31C25</span>
                            </div>
                            <div>
                                <div className="font-bold text-sm tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>Brand Red</div>
                                <div className="text-xs text-white/50">Primary Accent / CTA</div>
                            </div>
                        </div>

                        {/* Jet Black */}
                        <div className="space-y-3">
                            <div className="h-32 rounded-sm bg-[#111111] border border-white/20 flex items-end p-4">
                                <span className="font-mono text-xs bg-white/10 px-2 py-1 rounded backdrop-blur-sm">#111111</span>
                            </div>
                            <div>
                                <div className="font-bold text-sm tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>Deep Black</div>
                                <div className="text-xs text-white/50">Main Background</div>
                            </div>
                        </div>

                        {/* Soft Black Component */}
                        <div className="space-y-3">
                            <div className="h-32 rounded-sm bg-[#1D1D1B] border border-white/10 flex items-end p-4">
                                <span className="font-mono text-xs bg-white/10 px-2 py-1 rounded backdrop-blur-sm">#1D1D1B</span>
                            </div>
                            <div>
                                <div className="font-bold text-sm tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>Jet Black</div>
                                <div className="text-xs text-white/50">Component Background / Footer</div>
                            </div>
                        </div>

                        {/* White Info */}
                        <div className="space-y-3">
                            <div className="h-32 rounded-sm bg-[#FFFFFF] border border-white/10 flex items-end p-4">
                                <span className="font-mono text-xs bg-black/40 text-black px-2 py-1 rounded backdrop-blur-sm">#FFFFFF</span>
                            </div>
                            <div>
                                <div className="font-bold text-sm tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>White</div>
                                <div className="text-xs text-white/50">Headings / Body Text (opacity variations)</div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-white/10" />

                {/* Typography */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-sm tracking-[0.3em] uppercase text-[#E31C25] font-bold mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>// Typografia</h2>
                        <p className="text-white/40">Font families and scale.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Montserrat */}
                        <div className="space-y-6">
                            <div className="pb-4 border-b border-white/10">
                                <div className="text-xs text-white/50 uppercase tracking-widest mb-1">Headings & Accents</div>
                                <div className="text-2xl font-black" style={{ fontFamily: 'var(--font-montserrat)' }}>Montserrat</div>
                                <div className="text-sm ext-white/40 mt-1 font-mono">Weights: 500, 600, 700, 900 (Black)</div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs text-white/30 mb-1">H1 - Text 6xl (60px), Font Black, Uppercase</div>
                                    <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>Veľký Nadpis</h1>
                                </div>
                                <div>
                                    <div className="text-xs text-white/30 mb-1">H2 - Text 4xl (36px), Font Black, Uppercase</div>
                                    <h2 className="text-4xl font-black uppercase tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>Sekcia O Nás</h2>
                                </div>
                                <div>
                                    <div className="text-xs text-white/30 mb-1">H3 - Text 2xl (24px), Font Bold</div>
                                    <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-montserrat)' }}>Menší nadpis karty</h3>
                                </div>
                                <div>
                                    <div className="text-xs text-white/30 mb-1">Labels - Text XS (12px), Tracking Widest, Uppercase</div>
                                    <div className="text-xs font-bold tracking-[0.3em] uppercase text-[#E31C25]" style={{ fontFamily: 'var(--font-montserrat)' }}>// Subtitle label</div>
                                </div>
                            </div>
                        </div>

                        {/* Inter & Script */}
                        <div className="space-y-10">
                            {/* Inter */}
                            <div className="space-y-6">
                                <div className="pb-4 border-b border-white/10">
                                    <div className="text-xs text-white/50 uppercase tracking-widest mb-1">Body Text</div>
                                    <div className="text-2xl font-medium" style={{ fontFamily: 'var(--font-inter)' }}>Inter</div>
                                    <div className="text-sm text-white/40 mt-1 font-mono">Weights: 300, 400, 500, 600</div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="text-xs text-white/30 mb-1">Body Large - Text LG (18px), Text White/70, Relaxed</div>
                                        <p className="text-lg text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                                            LUDATO FAMILY Cars Services je splneným snom jedného mechanika s vášňou pre autá. Ukážkový čitateľný text pre dlhšie odstavce.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/30 mb-1">Body Small - Text SM (14px), Text White/50</div>
                                        <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                                            Menší text používaný pre popisy služieb, detaily v kartách a doplnkové informácie.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Script */}
                            <div className="space-y-6 pt-4">
                                <div className="pb-4 border-b border-white/10">
                                    <div className="text-xs text-white/50 uppercase tracking-widest mb-1">Flourish & Signatures</div>
                                    <div className="text-3xl" style={{ fontFamily: 'var(--font-dancing)' }}>Dancing Script</div>
                                </div>
                                <div>
                                    <div className="text-xs text-white/30 mb-1">Flourish - Text 3xl (30px)</div>
                                    <p className="text-3xl text-white/80" style={{ fontFamily: 'var(--font-dancing)' }}>
                                        Poctivá práca bez kompromisov.
                                    </p>
                                    <div className="text-xs text-white/30 mb-1 mt-4">Signature - Text 2xl (24px)</div>
                                    <p className="text-2xl text-[#E31C25]" style={{ fontFamily: 'var(--font-dancing)' }}>
                                        — Lucia, Damian, Tomáš
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-white/10" />

                {/* UI Elements */}
                <section>
                    <div className="mb-8">
                        <h2 className="text-sm tracking-[0.3em] uppercase text-[#E31C25] font-bold mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>// UI Komponenty</h2>
                        <p className="text-white/40">Buttons, inputs, and recurring graphic elements.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Buttons */}
                        <div className="space-y-8">
                            <div>
                                <div className="text-xs text-white/30 mb-4 font-mono">Primary Button (CTA)</div>
                                <button
                                    className="relative inline-flex items-center gap-2 bg-[#E31C25] hover:bg-[#c0151d] text-white font-bold text-sm px-6 py-3 rounded-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-[#E31C25]/20 hover:shadow-[#E31C25]/40 hover:-translate-y-0.5 group overflow-hidden"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    <span className="relative z-10">REZERVOVAŤ TERMÍN</span>
                                    <span className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
                                </button>
                                <div className="text-xs text-white/40 mt-3 max-w-sm">Hover reveals a skewed bright sheen passing over the button, elevates slightly, and drops a red glow shadow.</div>
                            </div>

                            <div>
                                <div className="text-xs text-white/30 mb-4 font-mono">Secondary Outline Button (Forms)</div>
                                <button
                                    className="px-6 py-3 border border-white/10 hover:bg-white/5 text-white/70 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors rounded-sm text-center"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    Odmietnuť
                                </button>
                            </div>

                            <div>
                                <div className="text-xs text-white/30 mb-4 font-mono">Text Link / Secondary CTA</div>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-3 text-white/70 hover:text-[#E31C25] text-sm font-semibold tracking-widest uppercase transition-colors duration-300 group"
                                    style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                    <span className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
                                    Zistiť viac
                                    <span className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
                                </a>
                            </div>
                        </div>

                        {/* Inputs & Elements */}
                        <div className="space-y-8">
                            <div>
                                <div className="text-xs text-white/30 mb-4 font-mono">Form Input Fields</div>
                                <div className="max-w-xs space-y-4">
                                    <div>
                                        <label className="block text-white/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                            Meno *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Vaše meno"
                                            readOnly
                                            className="w-full bg-white/5 border border-white/10 hover:border-[#E31C25]/40 focus:border-[#E31C25] focus:outline-none text-white placeholder-white/30 px-4 py-3 rounded-sm text-sm transition-colors duration-300"
                                            style={{ fontFamily: 'var(--font-inter)' }}
                                        />
                                    </div>
                                    <div className="text-xs text-white/40">Uses bg-white/5, transparent border, red border on focus.</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-xs text-white/30 mb-4 font-mono">Recurring Slash Accent</div>
                                <div className="p-6 bg-[#1D1D1B] rounded-sm border border-white/5 inline-block">
                                    <span className="text-[#E31C25] font-black mr-2 select-none text-xl">{'// '}</span>
                                    <span className="text-white font-bold tracking-widest uppercase text-sm" style={{ fontFamily: 'var(--font-montserrat)' }}>Decorated Heading</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Back */}
                <div className="pt-16 pb-32 border-t border-white/10 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/40 hover:text-[#E31C25] text-sm tracking-widest uppercase transition-colors"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Návrat na web
                    </Link>
                </div>

            </div>
        </div>
    );
}
