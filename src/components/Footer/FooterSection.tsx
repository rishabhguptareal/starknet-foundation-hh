import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {children}
      </ul>
    </div>
  );
}