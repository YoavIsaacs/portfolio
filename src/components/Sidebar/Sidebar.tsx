import { useState } from "react";
import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  const [currentlyPicked, setCurrentlyPicked] = useState(null);
  const b1: string = "Hello!";
  const b2 = "Who am I?";
  const b3 = "What I've done";
  const b4 = "Contact me!";


  return (
    <nav className="bg-sidebar flex flex-col border-l-white min-h-screen w-1/6 py-32">
      <SidebarButton text={b1} />
      <SidebarButton text={b2} />
      <SidebarButton text={b3} />
      <SidebarButton text={b4} />
    </nav>

  );

}
