import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface UseHlsVideoOptions {
  src: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export function useHlsVideo({ src, autoplay = true, muted = true, loop = true }: UseHlsVideoOptions) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    setHasError(false);
    setIsLoaded(false);

    // Apply mandatory properties
    video.muted = muted;
    video.loop = loop;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleLoadedMetadata = () => {
      setIsLoaded(true);
      if (autoplay) {
        video.play().catch((err) => {
          // Autoplay was prevented or postponed
          console.warn('Autoplay prevented or interrupted:', err);
        });
      }
    };
    const handleError = () => {
      setHasError(true);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);

    // Check if native HLS is supported (Safari / iOS)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: false, // Required by specification
        lowLatencyMode: true,
        backBufferLength: 30,
      });
      hlsRef.current = hls;

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoaded(true);
        if (autoplay) {
          video.play().catch((err) => {
            console.warn('Autoplay prevented after HLS manifest parsed:', err);
          });
        }
      });

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.warn('HLS network error encountered, attempting recovery...');
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.warn('HLS media error encountered, attempting recovery...');
              hls.recoverMediaError();
              break;
            default:
              console.warn('HLS fatal unrecoverable error:', data);
              setHasError(true);
              hls.destroy();
              break;
          }
        }
      });
    } else {
      // Fallback
      video.src = src;
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);

      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [src, autoplay, muted, loop]);

  return { videoRef, isPlaying, isLoaded, hasError };
}
