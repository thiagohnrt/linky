import { ReactNode } from "react";

interface IconProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function Icon({ children, onClick }: IconProps) {
  return (
    <div
      className="p-2 rounded-full hover:bg-white dark:hover:bg-neutral-800 transition-colors duration-300 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
