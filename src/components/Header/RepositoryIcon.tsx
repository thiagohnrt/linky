import Link from "next/link";
import Icon from "./Icon";
import { FaGithub } from "react-icons/fa";

export function RepositoryIcon() {
  return (
    <Link
      href="https://github.com/thiagohbhonorato/linky"
      target="_blank"
      tabIndex={-1}
    >
      <Icon title="View GitHub">
        <FaGithub size={20} />
      </Icon>
    </Link>
  );
}
