import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HeroButtonProps {
  icon: LucideIcon;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export default function HeroButton({ icon: Icon, children, variant = 'primary', onClick }: HeroButtonProps) {
  const baseStyles = "w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md md:py-4 md:text-lg md:px-10";
  const styles = variant === 'primary'
    ? `${baseStyles} border-transparent text-white bg-indigo-600 hover:bg-indigo-700`
    : `${baseStyles} border-indigo-600 text-indigo-600 hover:bg-indigo-50`;

  return (
    <button className={styles} onClick={onClick}>
      <Icon className="w-5 h-5 mr-2" />
      {children}
    </button>
  );
}