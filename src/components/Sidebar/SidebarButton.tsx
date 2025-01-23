import React from "react";

interface SidebarButtonProps {
  text: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ text }) => {

  return(
    <button className="p-8 text-text-default rounded-lg hover:bg-sidebar-hover">{text}</button>
  );
}

export default SidebarButton;
