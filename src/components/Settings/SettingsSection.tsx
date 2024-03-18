import { ReactNode } from "react";

interface SettingsSectionProps {
  title: string;
  children?: ReactNode;
  separator?: boolean;
}

export function SettingsSection({
  title,
  children,
  separator = true,
}: SettingsSectionProps) {
  return (
    <section>
      <h2
        className={[
          "text-xl mb-4 border-gray-500",
          separator ? "pb-2 border-b" : "",
        ].join(" ")}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
