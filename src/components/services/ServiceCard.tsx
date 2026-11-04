import React from 'react';
import { Check } from 'lucide-react';
import { ServiceItem } from '../../data/services';

interface ServiceCardProps {
  service: ServiceItem;
  onInquire: (service: ServiceItem) => void;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className = '' }) => {
  return (
    <article data-reveal className={`motion-card group relative overflow-hidden flex flex-col rounded-2xl border border-white/10 bg-[#121916] p-6 sm:p-8 transition-colors duration-300 hover:border-brand-yellow/50 ${className}`}>
      <div aria-hidden="true" className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-yellow/60 to-transparent" />
      <h3 className="font-['Barlow_Condensed'] font-bold uppercase text-3xl sm:text-[34px] text-white leading-tight">{service.title}</h3>
      <p className="text-sm text-[#A7ADA9] leading-7 mt-3 max-w-xl">{service.description}</p>
      <div className="mt-6 pt-5 border-t border-white/[0.07] flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">What we deliver</p>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4 text-xs text-[#D0D6D2] leading-relaxed">
          {service.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check aria-hidden="true" className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
