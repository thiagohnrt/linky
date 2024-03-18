import { MouseEventHandler, ReactNode } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./button.css";

interface ButtonProps {
  type?: "button" | "reset" | "submit";
  variant?: "contained" | "outlined" | "reversed";
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  loading?: boolean;
  title?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export function Button({
  type = "submit",
  variant = "contained",
  color = "primary",
  className = "",
  onClick = () => {},
  loading = false,
  title = "",
  disabled = false,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={["button-component", variant, color, className].join(" ")}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
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
