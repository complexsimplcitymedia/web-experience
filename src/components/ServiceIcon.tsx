import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  Icon?: LucideIcon;
  label: string;
  imageUrl?: string;
  imageClassName?: string;
}

export function ServiceIcon({ Icon, label, imageUrl, imageClassName }: ServiceIconProps) {
  return (
    <div className="group">
      <div className="flex flex-col items-center cursor-pointer">
        <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-4 
                      backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20 
                      group-hover:scale-110 overflow-hidden border border-white/10">
          {Icon ? (
            <Icon className="w-10 h-10 text-white transition-transform duration-500 
                          group-hover:scale-110" />
          ) : (
            <img 
              src={imageUrl} 
              alt={label} 
              className={`w-14 h-14 object-contain transition-transform duration-500 
                       group-hover:scale-110 ${imageClassName || ''}`}
            />
          )}
        </div>
        <span className="text-sm uppercase tracking-widest text-gray-300 group-hover:text-white 
                       transition-colors duration-500 font-medium text-glow">{label}</span>
      </div>
    </div>
  );
}