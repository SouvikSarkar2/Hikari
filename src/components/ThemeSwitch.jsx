"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return;

  return (
    <div>
      {resolvedTheme === "dark" ? (
        <Moon onClick={() => setTheme("light")} />
      ) : (
        <Sun onClick={() => setTheme("dark")} />
      )}
    </div>
  );
};

export default ThemeSwitch;
