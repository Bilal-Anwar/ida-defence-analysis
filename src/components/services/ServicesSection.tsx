import React from 'react';
import { SectionHeading } from '../shared/SectionHeading';
import { ServiceCard } from './ServiceCard';
import { IDA_SERVICES, ServiceItem } from '../../data/services';
import { PrimaryButton } from '../shared/PrimaryButton';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#0B0F0E]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <SectionHeading
            eyebrow="OUR EXPERTISE"
            title="BEYOND REPORTING — DRIVING IMPACT"
            accentWord="IMPACT"
            description="Connecting global defence contractors, aerospace primes, and security institutions with high-level military decision-makers and procurement delegations worldwide."
          />

          <PrimaryButton
            asAnchor
            href="#contact"
            variant="secondary"
            size="md"
            icon="right"
          >
            PARTNER WITH US
          </PrimaryButton>
        </div>

        {/* Spacious service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {IDA_SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onInquire={onSelectService}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
