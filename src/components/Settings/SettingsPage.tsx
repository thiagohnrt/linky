import { ReactNode } from "react";

interface SettingsPageProps {
  title: string;
  children?: ReactNode;
}

export function SettingsPage({ title, children }: SettingsPageProps) {
  return (
    <div className="px-8 pt-8">
      <h1 className="text-2xl mb-8 pb-4 border-b border-gray-500">{title}</h1>
      {children}
    </div>
  );
}
