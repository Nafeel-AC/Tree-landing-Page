import { ArrowRight } from 'lucide-react';

export default function FeaturesSection() {
  const partners = [
    'KUCOIN',
    'NGC',
    'NxGen',
    'Matter Labs',
    'DEXTOOLS',
    'NGRAVE',
    'Polychain',
  ];

  return (
    <section className="overflow-x-hidden bg-[#4f795a] text-white py-24 px-6 md:px-12 lg:px-[120px] w-full">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Header Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[160px] items-start justify-between">
          <div className="flex-1">
            <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-normal leading-[1.05] tracking-tight text-white">
              Meet LinkFlow.
            </h2>
            <button className="group mt-6 bg-white hover:bg-white/90 text-[#1b3021] flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm">
              Discover it
              <span className="flex items-center justify-center w-5 h-5 bg-[#1b3021] text-white rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </button>
          </div>
          
          <div className="flex-1 lg:pt-3">
            <p className="text-base md:text-lg text-[#dbebdf] leading-relaxed max-w-xl">
              LinkFlow is a reward-earning workflow automation protocol that lets your systems grow while remaining securely tied to your existing operations.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          
          {/* Card 1: Double Width with Sprout Image Background */}
          <div className="md:col-span-2 rounded-3xl overflow-hidden relative min-h-[360px] group">
            {/* Background Image */}
            <img
              src="/defi_sprout_bg.png"
              alt="DeFi sprout growth background"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1b3021]/95 via-[#1b3021]/60 to-[#1b3021]/10 md:from-[#1b3021]/95 md:via-[#1b3021]/40 md:to-transparent" />
            
            {/* Content Container */}
            <div className="relative z-10 flex flex-col justify-between h-full p-8 min-h-[360px]">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                  Savings that bloom
                </h3>
              </div>
              <div>
                <p className="text-[#dbebdf] text-xs md:text-sm leading-relaxed max-w-xs mt-12 md:mt-24 font-medium">
                  Gain steady returns as your dollar tokens are routed into top-performing DeFi strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Medium dark green */}
          <div className="bg-[#1b3021] text-white rounded-3xl p-8 flex flex-col justify-between min-h-[360px]">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              Always fluid,<br />always pegged.
            </h3>
            <p className="text-[#bce3c5] text-xs md:text-sm leading-relaxed mt-16">
              Keep fully dollar-anchored with on-demand access to funds &mdash; no lockups or waits.
            </p>
          </div>

          {/* Card 3: Medium dark green */}
          <div className="bg-[#1b3021] text-white rounded-3xl p-8 flex flex-col justify-between min-h-[360px]">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              Fully<br />automated
            </h3>
            <p className="text-[#bce3c5] text-xs md:text-sm leading-relaxed mt-16">
              Skip the task of tuning positions yourself. LinkFlow runs in the background for you.
            </p>
          </div>

        </div>

        {/* Partners Row */}
        <div className="mt-24 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="text-xs font-semibold text-[#bce3c5] w-full md:max-w-[180px] leading-relaxed uppercase tracking-wider">
            Funded by premier partners and forward-thinking leaders.
          </div>
          
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-xs font-bold text-white/80 tracking-widest select-none">
            {partners.map((partner) => (
              <span key={partner} className="hover:text-white hover:opacity-100 transition-opacity duration-300">
                {partner}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
