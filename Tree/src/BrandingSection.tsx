import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

// --- Glitch blocks coordinates: (x%, y%, width px, height px) ---
const GLITCH_BLOCKS = [
  { left: '2%', top: '-3%', w: 22, h: 22 },
  { left: '12%', top: '-5%', w: 14, h: 10 },
  { left: '28%', top: '-2%', w: 10, h: 10 },
  { left: '82%', top: '22%', w: 8, h: 8 },
  { left: '-4%', top: '75%', w: 16, h: 12 },
  { left: '8%', top: '82%', w: 10, h: 10 },
  { left: '-2%', top: '88%', w: 18, h: 16 },
  { left: '56%', top: '82%', w: 12, h: 14 },
  { left: '70%', top: '90%', w: 10, h: 10 },
  { left: '42%', top: '94%', w: 8, h: 6 },
];

export default function BrandingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  // Custom Trigonometric coordinates helper
  const getCoords = (angleDeg: number, radius: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: 50 + radius * Math.cos(rad),
      y: 50 + radius * Math.sin(rad),
    };
  };

  const diagramItems = [
    { label: 'signals', angle: 215, x: 8, y: 23 },
    { label: 'workflows', angle: 335, x: 93, y: 31 },
    { label: 'actions', angle: 110, x: 36, y: 88 },
  ];

  // Easing curve
  const easeCurve = [0.22, 1, 0.36, 1];

  return (
    <section
      ref={sectionRef}
      className="overflow-x-hidden bg-[#4f795a] text-white select-none"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        
        {/* Header */}
        <div className="flex items-start justify-between w-full mb-20 gap-4">
          <div className="flex flex-col">
            {/* Line 1 */}
            <motion.h2
              className="text-[#dbebdf] font-light tracking-[-0.01em] leading-[1.18]"
              style={{ fontSize: 'clamp(2rem, 3.4vw, 2.6rem)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: easeCurve }}
            >
              Our Seamless
            </motion.h2>
            {/* Line 2 */}
            <motion.h2
              className="text-white font-light tracking-[-0.01em] leading-[1.18]"
              style={{ fontSize: 'clamp(2rem, 3.4vw, 2.6rem)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: easeCurve }}
            >
              Integration Approach
            </motion.h2>
          </div>

          {/* Plus Button */}
          <motion.button
            className="flex items-center justify-center h-7 w-7 border border-white/20 text-white/70 hover:bg-white/10 hover:text-white rounded transition-colors self-start"
            aria-label="Expand approach info"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: easeCurve }}
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
            >
              <line x1="6" y1="2" x2="6" y2="10" />
              <line x1="2" y1="6" x2="10" y2="6" />
            </svg>
          </motion.button>
        </div>

        {/* Content Row */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-10">
          
          {/* Left Side Container */}
          <div className="flex min-w-0 flex-1 flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
            
            {/* Glitch Portrait Group */}
            <motion.div
              className="relative shrink-0 w-[250px] h-[310px] origin-center"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: easeCurve }}
            >
              <img
                src="https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Portrait of Alex West"
                className="w-full h-full object-cover rounded shadow-lg"
              />
              
              {/* Green theme Glitch blocks */}
              {GLITCH_BLOCKS.map((block, idx) => (
                <motion.div
                  key={idx}
                  className="absolute bg-[#1b3021] pointer-events-none"
                  style={{
                    left: block.left,
                    top: block.top,
                    width: `${block.w}px`,
                    height: `${block.h}px`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: [0, 1, 0.9] } : {}}
                  transition={{
                    delay: 0.5 + idx * 0.05,
                    duration: 0.35,
                    ease: easeCurve,
                  }}
                />
              ))}
            </motion.div>

            {/* Testimonial Text */}
            <div className="min-w-0 max-w-[420px] flex flex-col justify-start">
              {/* Quote Mark */}
              <motion.div
                className="text-[#bce3c5] leading-[0.7] select-none"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: '3.2rem' }}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease: easeCurve }}
              >
                &ldquo;
              </motion.div>

              {/* Quote Paragraph */}
              <motion.p
                className="text-[#dbebdf] font-normal leading-[1.58]"
                style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.28rem)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4, ease: easeCurve }}
              >
                We kept seeing the same pattern &mdash; high-potential systems lost between messy custom scripts, scattered APIs, and fragmented tools. LinkFlow exists to align it all into one clear, automated stream.
              </motion.p>

              {/* Attribution */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.55, ease: easeCurve }}
              >
                <div className="text-[1.15rem] font-medium tracking-[0.01em] text-white">
                  Alex West
                </div>
                <div className="mt-1 text-[0.85rem] tracking-wide text-[#bce3c5]">
                  Founder &amp; CEO
                </div>
              </motion.div>
            </div>

          </div>

          {/* Right Side: Circle Diagram */}
          <div className="flex w-full max-w-[360px] shrink-0 items-center justify-center self-center sm:max-w-[400px] lg:max-w-[440px]">
            <motion.div
              className="w-full aspect-square relative"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: easeCurve }}
            >
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                {/* Main Circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  stroke="white"
                  strokeWidth="0.18"
                  fill="none"
                  opacity="0.45"
                />

                {/* Radiating Lines */}
                {diagramItems.map((item, index) => {
                  const lineEnd = getCoords(item.angle, 36);
                  const isHovered = hoveredIndex === index;
                  return (
                    <line
                      key={index}
                      x1={50}
                      y1={50}
                      x2={lineEnd.x}
                      y2={lineEnd.y}
                      stroke={isHovered ? '#bce3c5' : 'white'}
                      strokeWidth={isHovered ? '0.6' : '0.18'}
                      opacity={isHovered ? '1' : '0.45'}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {/* Text Labels */}
              {diagramItems.map((item, index) => {
                const isHovered = hoveredIndex === index;
                return (
                  <motion.div
                    key={index}
                    className="absolute whitespace-nowrap cursor-pointer select-none transition-all duration-300"
                    style={{
                      left: `${item.x}%`,
                      top: `${item.y}%`,
                      transform: 'translate(-50%, -50%)',
                      fontWeight: isHovered ? 700 : 300,
                      color: isHovered ? '#bce3c5' : 'white',
                      fontSize: 'clamp(1.25rem, 2.8vw, 2.4rem)',
                      letterSpacing: '-0.01em',
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{
                      delay: 0.6 + index * 0.15,
                      duration: 0.7,
                      ease: easeCurve,
                    }}
                  >
                    {item.label}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
