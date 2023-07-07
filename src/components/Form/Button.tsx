import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react";

interface ButtonProps {
  type?: "button" | "reset" | "submit";
  variant?: "text" | "contained" | "outlined";
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export function Button({
  type = "submit",
  variant = "contained",
  className = "",
  onClick = () => {},
  children,
}: ButtonProps) {
  let classNameBtn: string[] = ["py-2 px-12", className];
  if (variant === "contained") {
    classNameBtn.push("bg-neutral-200 dark:bg-neutral-900");
  } else if (variant === "outlined") {
    classNameBtn.push("border box-border border-neutral-400");
  }
  return (
    <button type={type} className={classNameBtn.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
}
