'use client';

import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export default function StudioFormaAd() {
  return (
    <div className={`${spaceGrotesk.variable}`}>
      <section 
        className="py-16 md:py-20 px-6 md:px-12 bg-[#0c0c0b] text-[#f4f4f0] border-t border-white/10 font-sans select-none"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-8 space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#ff3300]/80">
              // Spolupráca
            </div>
            
            <h2 
              className="font-bold tracking-tight uppercase text-3xl md:text-4xl"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              Páči sa vám dizajn tohto webu?
            </h2>
            
            <p className="text-base text-white/70 max-w-3xl leading-relaxed">
              Tento web navrhlo a naprogramovalo <strong>Studio Forma</strong>. Pomáhame lokálnym aj medzinárodným značkám rásť pomocou moderného dizajnu, rýchlych webových aplikácií a SEO optimalizácie na mieru.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 w-full justify-end lg:items-end">
            <a
              href="https://byforma.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff3300] hover:bg-white text-[#0c0c0b] px-6 py-4 text-xs font-bold uppercase tracking-widest transition-colors duration-300 border-2 border-[#ff3300] hover:border-white text-center rounded-none w-full sm:flex-1 lg:w-64"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              Navštíviť štúdio →
            </a>
            
            <a
              href="https://byforma.eu/sk/calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/20 hover:border-white text-white px-6 py-4 text-xs font-bold uppercase tracking-widest transition-colors duration-300 text-center rounded-none w-full sm:flex-1 lg:w-64"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              €stimátor projektu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
