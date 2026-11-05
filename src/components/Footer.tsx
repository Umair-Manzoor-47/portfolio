import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white border-t border-neutral-100 text-neutral-500 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-neutral-800">Umair Manzoor</span>
          <span className="text-neutral-500"> — Systems &amp; Backend Engineer</span>
        </div>
        <div className="text-neutral-400">
          © {new Date().getFullYear()} Umair Manzoor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
