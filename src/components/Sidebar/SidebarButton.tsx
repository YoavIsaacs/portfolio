import React from "react";

interface SidebarButtonProps {
  text: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ text }) => {
  return (
    <div className="relative group">
      <button className="relative z-10 p-8 text-text-default rounded-lg w-full">
        {text}
      </button>
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />
    </div>
  );
}

export default SidebarButton;
