import React, { useState } from 'react';
import { Shield, Radio, Crosshair } from 'lucide-react';

interface TacticalImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  overlayGradient?: boolean;
  tacticalBadge?: string;
}

export const TacticalImage: React.FC<TacticalImageProps> = ({
  src,
  alt = 'Defence Intelligence Imagery',
  className = '',
  containerClassName = '',
  overlayGradient = true,
  tacticalBadge,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#121715] select-none ${containerClassName}`}>
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${className}`}
          {...props}
        />
      ) : null}

      {/* Styled Tactical SVG Fallback if image fails or before load */}
      {(hasError || !src) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#191E1B] via-[#121715] to-[#0B0F0E] p-6 text-center">
          <div className="relative mb-3 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-brand-yellow/30 flex items-center justify-center bg-[#222824]/50 relative">
              <Crosshair className="w-8 h-8 text-brand-yellow/70 animate-pulse" />
              <div className="absolute inset-0 border border-white/10 rounded-full animate-ping opacity-25" />
            </div>
            <Radio className="absolute -top-1 -right-1 w-4 h-4 text-brand-yellow" />
          </div>
          <span className="font-['Barlow_Condensed'] uppercase tracking-wider text-sm font-bold text-white/90">
            {alt}
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#A7ADA9] uppercase tracking-widest mt-1">
            IDA Tactical Field Telemetry
          </span>
        </div>
      )}

      {/* Optional Dark Scrim Gradient for text contrast */}
      {overlayGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/40 to-transparent pointer-events-none" />
      )}

      {/* Optional Tactical Label Badge */}
      {tacticalBadge && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#0B0F0E]/80 backdrop-blur-md border border-white/10 text-[10px] font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider text-brand-yellow">
          <Shield className="w-3 h-3 text-brand-yellow" />
          <span>{tacticalBadge}</span>
        </div>
      )}
    </div>
  );
};
