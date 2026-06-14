import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { cn } from './lib/utils';

// --- Helper Component: MIcon ---
interface MIconProps {
  name: string;
  size?: number;
  weight?: number;
  fill?: number;
  grade?: number;
  opticalSize?: number;
  className?: string;
}

export function MIcon({
  name,
  size = 20,
  weight = 400,
  fill = 0,
  grade = 0,
  opticalSize = 24,
  className,
}: MIconProps) {
  return (
    <span
      className={cn('material-symbols-outlined select-none leading-none', className)}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
      }}
    >
      {name}
    </span>
  );
}

// --- Helper Component: FadeUp ---
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- Helper Component: SpotlightBorder ---
interface SpotlightBorderProps {
  children: React.ReactNode;
  className?: string;
  radius?: string;
  size?: number;
  intensity?: number;
}

export function SpotlightBorder({
  children,
  className,
  radius = '2xl',
  size = 520,
  intensity = 0.5,
}: SpotlightBorderProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--spot-x', `${x}px`);
    el.style.setProperty('--spot-y', `${y}px`);
  };

  const handlePointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--spot-x', '-9999px');
    el.style.setProperty('--spot-y', '-9999px');
  };

  const roundedClass =
    radius === '3xl'
      ? 'rounded-3xl'
      : radius === 'xl'
        ? 'rounded-xl'
        : radius === 'lg'
          ? 'rounded-lg'
          : radius === 'md'
            ? 'rounded-md'
            : radius === 'none'
              ? 'rounded-none'
              : 'rounded-2xl';

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn('relative p-[1px] group/spot overflow-hidden', roundedClass, className)}
      style={{
        ['--size' as any]: `${size}px`,
        ['--intensity' as any]: intensity,
        ['--spot-x' as any]: '-9999px',
        ['--spot-y' as any]: '-9999px',
      }}
    >
      {/* Spotlight border element */}
      <div
        className={cn('absolute inset-0 pointer-events-none', roundedClass)}
        style={{
          padding: '1px',
          background: `radial-gradient(circle var(--size) at var(--spot-x) var(--spot-y), rgba(255,255,255, var(--intensity)), transparent 60%)`,
          WebkitMask: `linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)`,
          mask: `linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)`,
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      {/* Content layer */}
      <div className="relative z-10 pointer-events-auto h-full w-full">
        {children}
      </div>
    </div>
  );
}

// --- Helper Component: AnimatedText ---
function AnimatedText({ children }: { children: string }) {
  return (
    <span className="relative block overflow-hidden h-4 leading-none">
      <span className="inline-block transition-transform duration-300 transform group-hover/btn:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-0 top-full inline-block transition-transform duration-300 transform group-hover/btn:-translate-y-full">
        {children}
      </span>
    </span>
  );
}

// --- Helper Component: PrimaryButton ---
interface ButtonProps {
  href: string;
  size?: 'sm' | 'md';
  children: string;
}

export function PrimaryButton({ href, size = 'sm', children }: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'group/btn inline-flex items-center justify-center rounded-full font-inter font-medium leading-none transition-colors select-none',
        'bg-white/80 hover:bg-white text-black',
        size === 'sm' ? 'h-8 px-4 text-sm' : 'h-10 px-6 text-base'
      )}
    >
      <AnimatedText>{children}</AnimatedText>
    </a>
  );
}

// --- Helper Component: SecondaryButton ---
export function SecondaryButton({ href, size = 'sm', children }: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'group/btn inline-flex items-center justify-center rounded-full font-inter leading-none transition-colors select-none',
        'bg-landing-surface hover:bg-landing-surface-hover border border-landing-border text-foreground backdrop-blur-[2.5px] font-medium',
        size === 'sm' ? 'h-8 px-4 text-sm' : 'h-10 px-6 text-base'
      )}
    >
      <AnimatedText>{children}</AnimatedText>
    </a>
  );
}

// --- Plans data ---
type Feature = { text: string; included: boolean };
type Plan = {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: Feature[];
  featured?: boolean;
  badge?: string;
  bg: string;
};

const plans: Plan[] = [
  {
    name: 'Starter Flow Plan',
    price: '159',
    originalPrice: '497',
    description: 'Once. Lifetime. 68% off.',
    bg: '#162a1b',
    features: [
      { text: 'All standard automation pipelines', included: true },
      { text: 'Unlimited workflow executions', included: true },
      { text: 'AI Workflow Builder', included: true },
      { text: 'Unlimited Cloud Connectors', included: false },
      { text: 'Unlimited Protocol Integrations', included: false },
    ],
  },
  {
    name: 'Ultimate Flow Plan',
    price: '239',
    originalPrice: '697',
    description: 'Once. Lifetime. Best deal.',
    bg: '#1b3021',
    features: [
      { text: 'All standard automation pipelines', included: true },
      { text: 'Unlimited workflow executions', included: true },
      { text: 'AI Workflow Builder', included: true },
      { text: 'Unlimited Cloud Connectors', included: true },
      { text: 'Unlimited Protocol Integrations', included: true },
    ],
    featured: true,
    badge: 'Best Value',
  },
];

// --- PricingCard Component ---
function PricingCard({ plan }: { plan: Plan }) {
  return (
    <SpotlightBorder
      radius="2xl"
      size={460}
      intensity={0.5}
      className="relative h-full p-2 sm:p-3"
    >
      <div
        className="relative flex h-full flex-col rounded-2xl border border-white/10 p-7 sm:p-8"
        style={{ backgroundColor: plan.bg }}
      >
        {plan.badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white px-3 py-1 text-xs font-medium text-black shadow-md">
            {plan.badge}
          </div>
        )}

        <FadeUp delay={0}>
          <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/60 font-inter font-medium">
            {plan.name}
          </div>
        </FadeUp>
        
        <div className="mt-3 border-t border-white/10" />

        <FadeUp delay={0.1}>
          <div className="mt-10 flex items-baseline gap-2">
            <span className="text-[2.75rem] leading-none font-normal tracking-tight text-foreground font-inter">
              ${plan.price}
            </span>
            {plan.originalPrice && (
              <span className="text-lg text-foreground/40 line-through font-inter">
                ${plan.originalPrice}
              </span>
            )}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-4 text-sm leading-relaxed text-foreground/60">
            {plan.description}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-7">
            {plan.featured ? (
              <PrimaryButton href="/auth?mode=signup" size="sm">
                Get Started
              </PrimaryButton>
            ) : (
              <SecondaryButton href="/auth?mode=signup" size="sm">
                Get Started
              </SecondaryButton>
            )}
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <ul className="mt-7 flex flex-1 flex-col gap-2">
            {plan.features.map((f, i) => (
              <li
                key={f.text}
                className={cn(
                  'flex items-center gap-3 py-4 text-sm font-inter',
                  i !== 0 && 'border-t border-white/10',
                  f.included ? 'text-foreground/85' : 'text-foreground/40'
                )}
              >
                <span
                  className={cn(
                    'flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border',
                    f.included
                      ? 'border-white/20 bg-white/[0.06]'
                      : 'border-white/10 bg-transparent'
                  )}
                >
                  {f.included ? (
                    <MIcon name="check" size={12} className="text-foreground font-semibold" />
                  ) : (
                    <MIcon name="close" size={12} className="text-foreground/50" />
                  )}
                </span>
                {f.text}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </SpotlightBorder>
  );
}

// --- Main PricingSection Component ---
export default function PricingSection() {
  return (
    <section id="pricing" className="relative w-full bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
        
        {/* HEADER */}
        <div className="mb-14 flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <FadeUp>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-landing-surface border border-white/10 px-3 py-1 text-xs text-foreground/80 backdrop-blur font-inter">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
                Pricing
              </span>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.02em] leading-[1.05] text-foreground font-inter">
                Clear pricing plans
                <br className="hidden sm:block" /> that scale with you.
              </h2>
            </FadeUp>
          </div>
          
          <FadeUp delay={0.2}>
            <p className="max-w-sm text-sm sm:text-base text-foreground/60 font-inter">
              One-time payment. Lifetime access. Pick the plan that fits how far
              you want to go.
            </p>
          </FadeUp>
        </div>

        {/* CARDS */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <PricingCard key={p.name} plan={p} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
