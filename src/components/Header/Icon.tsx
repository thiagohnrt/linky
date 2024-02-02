import { ReactNode } from "react";

interface IconProps {
  title?: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function Icon({ title = "", children, onClick }: IconProps) {
  return (
    <div
      title={title}
      className="p-2 rounded-full hover:bg-white dark:hover:bg-neutral-800 transition-colors duration-300 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
