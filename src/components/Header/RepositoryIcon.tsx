import Link from "next/link";
import Icon from "./Icon";
import { FaGithub } from "react-icons/fa";

interface RepositoryIconProps {
  className?: string;
}

export function RepositoryIcon({ className }: RepositoryIconProps) {
  return (
    <Link
      href="https://github.com/thiagohnrt/linky"
      target="_blank"
      tabIndex={-1}
      className={className}
    >
      <Icon title="View GitHub">
        <FaGithub size={20} />
      </Icon>
    </Link>
  );
}
