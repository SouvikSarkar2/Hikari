"use client";

import { ThemeProvider } from "next-themes";

const ThemeProviders = ({ children }) => {
  return (
    <ThemeProvider attribute="class" dafaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviders;
