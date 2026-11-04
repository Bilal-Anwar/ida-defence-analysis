import { useEffect } from 'react';

/** Progressive enhancement: content stays visible if animation is unavailable. */
export function useScrollReveal() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    let mutations: MutationObserver | undefined;

    const setup = () => {
      observer?.disconnect();
      mutations?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      if (preference.matches || !window.IntersectionObserver || !Element.prototype.animate) return;

      const seen = new WeakSet<Element>();
      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          observer?.unobserve(target);
          if (target.contains(document.activeElement)) return;
          const animation = target.animate(
            [{ opacity: 0, translate: '0 24px' }, { opacity: 1, translate: '0 0' }],
            { duration: 650, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.12 });

      const register = () => document.querySelectorAll('[data-reveal]').forEach((element) => {
        if (seen.has(element)) return;
        seen.add(element);
        observer?.observe(element);
      });
      register();
      mutations = new MutationObserver(register);
      const main = document.querySelector('main');
      if (main) mutations.observe(main, { childList: true, subtree: true });
    };

    setup();
    preference.addEventListener('change', setup);
    return () => {
      preference.removeEventListener('change', setup);
      observer?.disconnect();
      mutations?.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, []);
}
