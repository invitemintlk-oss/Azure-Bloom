import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroOverlayProps {
  onEnter: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ onEnter }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play().catch((e) => {
        console.error('Playback failed', e);
        onEnter();
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden bg-[#0f2742]">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        onEnded={onEnter}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/gemini_generated_video_ee76e431.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2742]/60 via-transparent to-[#0f2742]/30 pointer-events-none" />

      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full flex flex-col justify-end items-center pb-20 h-full text-center px-6"
          >
            <p className="font-script text-5xl sm:text-6xl text-white drop-shadow-[0_4px_12px_rgba(15,39,66,0.8)]">Uvini &amp; Kalhara</p>
            <p className="mt-2 mb-8 text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[#cfe5f7] drop-shadow">20 · 01 · 2027</p>
            <button
              onClick={handlePlay}
              className="relative font-sans px-10 py-4 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/60 shadow-[0_10px_40px_rgba(91,155,213,0.6)] hover:bg-white hover:text-[#1b3f66] hover:scale-105 transition-all duration-300 uppercase tracking-[0.3em] text-xs sm:text-sm"
            >
              <span className="absolute inset-0 rounded-full border border-white/50 animate-ping opacity-40" />
              Open Invitation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
