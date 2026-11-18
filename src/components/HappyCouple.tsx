import React from 'react';
import { motion } from 'motion/react';
import { Bloom, SkyHeading, SkyOrnament } from './SkyDecor';

/** Oval portrait medallion with layered sky/gold rings. */
const Medallion: React.FC<{ image: string; alt: string; flower: 1 | 2 }> = ({ image, alt, flower }) => (
  <div className="relative w-32 sm:w-40 md:w-48 aspect-[3/4] shrink-0">
    <div className="absolute -inset-2 rounded-[50%] border border-[#C9A54C]/60" />
    <div className="absolute inset-0 rounded-[50%] glass-sky flex items-center justify-center overflow-hidden">
      <img src={image} alt={alt} loading="lazy" className="absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-[50%] object-cover object-top" />
      <div className="absolute inset-1.5 rounded-[50%] border border-white/70 pointer-events-none" />
    </div>
    <img
      src={`/sky/flower-${flower}.png`}
      alt=""
      aria-hidden="true"
      className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 sm:w-20 animate-sway drop-shadow-lg"
    />
  </div>
);

const Person: React.FC<{ name: string; role: string; parents: React.ReactNode }> = ({ name, role, parents }) => (
  <div className="flex-1 min-w-0 w-full text-center">
    <h3 className="font-serif text-[#1b3f66] text-3xl sm:text-4xl md:text-5xl tracking-[0.12em] sm:tracking-[0.15em] uppercase break-words">{name}</h3>
    <SkyOrnament label={role} className="my-4 [&>div]:w-8 sm:[&>div]:w-16 md:[&>div]:w-24" />
    <p className="font-serif text-ink text-sm sm:text-base md:text-lg leading-relaxed italic px-2 sm:px-0">{parents}</p>
  </div>
);

// Stacked (portrait on top) on phones, side-by-side from tablets up
const cardClass =
  'w-full glass-sky rounded-[32px] px-5 pt-10 pb-9 sm:p-10 flex flex-col items-center gap-10 sm:gap-10';

export const HappyCouple: React.FC = () => {
  return (
    <section
      aria-label="The happy couple"
      className="w-full py-24 md:py-32 relative overflow-hidden flex items-center justify-center min-h-[100dvh] bg-[#dcebf7]"
      style={{
        backgroundImage: `url('/sky/chiffon-frame.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/25" />
      <Bloom variant={2} className="w-28 md:w-40 -top-4 -right-6 md:right-10 opacity-90" />
      <Bloom variant={1} className="w-24 md:w-36 bottom-6 -left-6 md:left-8" delay={0.3} />

      <div className="container px-4 md:px-8 mx-auto relative z-10 flex flex-col items-center max-w-4xl">
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <SkyHeading className="text-6xl md:text-8xl">The Happy<br />Couple</SkyHeading>
          <p className="mt-5 font-serif italic text-ink text-lg md:text-2xl leading-snug">
            What began as a moment<br />became our forever
          </p>
          <SkyOrnament className="mt-6" />
        </motion.div>

        <motion.div
          className={`${cardClass} sm:flex-row mb-10 sm:mb-14`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Medallion image="/sky/groom-sample.webp" alt="The groom" flower={1} />
          <Person
            name="Ravindu"
            role="The Groom"
            parents={<>Son of Mr. Sunil Perera &amp;<br className="hidden sm:block" /> Mrs. Kamala Perera</>}
          />
        </motion.div>

        <motion.div
          className={`${cardClass} flex-col-reverse sm:flex-row`}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Person
            name="Nethmi"
            role="The Bride"
            parents={<>Daughter of Mr. Ajith Fernando &amp;<br className="hidden sm:block" /> Mrs. Dilani Fernando</>}
          />
          <Medallion image="/sky/bride-sample.webp" alt="The bride" flower={2} />
        </motion.div>
      </div>
    </section>
  );
};
