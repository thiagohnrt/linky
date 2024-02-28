import * as RP from "@radix-ui/react-progress";
import { CSSProperties } from "react";

interface ProgressBarProps {
  value: number;
  className?: string;
  style?: CSSProperties;
}

export function ProgressBar({ value, className, style }: ProgressBarProps) {
  return (
    <RP.Root
      className={["relative overflow-hidden translate-y-0", className].join(
        " "
      )}
      value={value}
      style={style}
    >
      <RP.Indicator
        className="bg-purple-950 w-full h-full"
        style={{
          transition: "transform 100ms cubic-bezier(0.65, 0, 0.35, 1)",
          transform: `translateX(-${100 - value}%)`,
        }}
      />
    </RP.Root>
  );
}
