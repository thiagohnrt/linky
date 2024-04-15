import { Menubar } from "@/components/Settings/Menubar";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <div className="flex-initial p-3 bg-neutral-100 dark:bg-neutral-800">
        <Menubar />
      </div>
      <div className="flex-auto ">{children}</div>
    </div>
  );
}
