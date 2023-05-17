"use client";

import { useState, useEffect } from "react";
import { SunIcon, MoonStarIcon } from "lucide-react";
import Icon from "./Icon";
import { useTheme } from "next-themes";

export default function ThemeIcon() {
  const [hasMounted, setHasMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // https://github.com/facebook/react/issues/17741
    setHasMounted(true);
  }, []);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Icon onClick={handleTheme}>
      {hasMounted ? (
        theme === "dark" ? (
          <SunIcon size={20} />
        ) : (
          <MoonStarIcon size={20} />
        )
      ) : (
        <></>
      )}
    </Icon>
  );
}
