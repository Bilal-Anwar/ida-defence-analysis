import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  accentWord?: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  accentWord,
  description,
  alignment = 'left',
  className = '',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[alignment];

  // Render title with optional accentWord in Instrument Serif Italic
  const renderTitle = () => {
    if (!accentWord || !title.includes(accentWord)) {
      return title;
    }

    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="font-['Instrument_Serif'] italic font-normal tracking-normal text-[#FFAF00] px-1 normal-case">
          {accentWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block w-4 h-[1px] bg-[#FFAF00]" />
          <span className="font-['Plus_Jakarta_Sans'] font-bold text-[11px] tracking-[0.16em] text-[#FFAF00] uppercase">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="font-['Barlow_Condensed'] font-extrabold uppercase text-white tracking-tight leading-[0.98] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance">
        {renderTitle()}
      </h2>

      {description && (
        <p className="font-['Inter'] text-sm sm:text-base text-[#A7ADA9] leading-relaxed mt-4 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
