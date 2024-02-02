import { MouseEventHandler, ReactNode } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonProps {
  type?: "button" | "reset" | "submit";
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "warn";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  loading?: boolean;
  children?: ReactNode;
}

export function Button({
  type = "submit",
  variant = "contained",
  color = "primary",
  className = "",
  onClick = () => {},
  loading = false,
  children,
}: ButtonProps) {
  let classNameBtn: string[] = ["relative py-2 px-12", className];
  if (variant === "contained") {
    if (color === "warn") {
      classNameBtn.push("text-white bg-red-600 dark:bg-red-800");
    } else {
      classNameBtn.push("bg-neutral-200 dark:bg-neutral-900");
    }
  } else if (variant === "outlined") {
    classNameBtn.push("border box-border border-neutral-400");
  }
  return (
    <button type={type} className={classNameBtn.join(" ")} onClick={onClick}>
      <div className={loading ? "invisible" : ""}>{children}</div>
      {loading ? (
        <AiOutlineLoading3Quarters
          size={16}
          className="absolute animate-spin"
          style={{ top: "calc(50% - 8px)", left: "calc(50% - 8px)" }}
        ></AiOutlineLoading3Quarters>
      ) : (
        <></>
      )}
    </button>
  );
}
