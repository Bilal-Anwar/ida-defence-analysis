import React from 'react';
import { useHlsVideo } from '../../hooks/useHlsVideo';

interface HLSBackgroundVideoProps {
  streamUrl?: string;
  fallbackImageUrl?: string;
  className?: string;
}

export const HLSBackgroundVideo: React.FC<HLSBackgroundVideoProps> = ({
  streamUrl = 'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8',
  fallbackImageUrl = 'https://images.unsplash.com/photo-1517976487588-66236b22ee05?auto=format&fit=crop&w=1920&q=80',
  className = '',
}) => {
  const { videoRef, isLoaded, hasError } = useHlsVideo({
    src: streamUrl,
    autoplay: true,
    muted: true,
    loop: true,
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Fallback Image is always present behind video and shows if error occurs or while stream buffers */}
      <img
        src={fallbackImageUrl}
        alt="Defence fighter aircraft backdrop"
        referrerPolicy="no-referrer"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded && !hasError ? 'opacity-30' : 'opacity-60'
        }`}
      />

      {/* Video Element */}
      {!hasError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isLoaded ? 'opacity-60' : 'opacity-0'
          }`}
        />
      )}

      {/* Specified Left Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #0B0F0E 0%, rgba(11,15,14,0.85) 35%, transparent 100%)',
        }}
      />

      {/* Specified Bottom Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, #0B0F0E 0%, transparent 70%)',
        }}
      />

      {/* Subtle Dark Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 60% 40%, transparent 40%, rgba(11,15,14,0.75) 100%)',
        }}
      />
    </div>
  );
};
