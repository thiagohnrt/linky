import * as RP from "@radix-ui/react-progress";

interface ProgressBarProps {
  value: number;
  className?: string;
}

export function ProgressBar({ value, className }: ProgressBarProps) {
  return (
    <RP.Root
      className={["relative overflow-hidden translate-y-0", className].join(
        " "
      )}
      value={value}
    >
      <RP.Indicator
        className="bg-blue-900 w-full h-full"
        style={{
          transition: "transform 100ms cubic-bezier(0.65, 0, 0.35, 1)",
          transform: `translateX(-${100 - value}%)`,
        }}
      />
    </RP.Root>
  );
}
