import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'right' | 'diagonal' | 'none';
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon = 'right',
  children,
  className = '',
  asAnchor = false,
  href = '#',
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-xs sm:text-sm px-6 py-3 gap-2',
    lg: 'text-sm sm:text-base px-8 py-3.5 gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-brand-yellow text-[#000000] font-bold uppercase tracking-wider hover:bg-brand-yellow-hover hover:shadow-[0_4px_20px_rgba(249,245,56,0.35)] hover:-translate-y-0.5 active:translate-y-0 border border-transparent',
    secondary:
      'bg-transparent text-white font-medium uppercase tracking-wider border border-white/25 hover:border-brand-yellow hover:text-brand-yellow hover:bg-white/[0.03] active:translate-y-0',
    ghost:
      'bg-transparent text-[#A7ADA9] hover:text-white font-medium hover:bg-white/[0.05] border border-transparent',
  }[variant];

  const content = (
    <>
      <span className="whitespace-nowrap shrink-0">{children}</span>
      {icon === 'right' && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {icon === 'diagonal' && (
        <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const combinedClass = `group inline-flex items-center justify-center rounded-full transition-all duration-300 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow ${sizeClasses} ${variantClasses} ${className}`;

  if (asAnchor) {
    return (
      <a href={href} className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
};
