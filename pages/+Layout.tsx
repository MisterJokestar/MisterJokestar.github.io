import React from "react";
import "./style.css";
import { ThemeToggle } from "/components/ThemeToggle";

function Layout({ children }) {
  return (
    <>
      <header className="fixed top-0 right-0 p-2 z-50">
        <ThemeToggle />
      </header>
      <footer className="fixed bottom-0 right-0 p-2 z-50">
        <a
          href="/contact"
          className="text-text px-2 rounded transition bg-gray-200/40 dark:bg-gray-500/40 hover:bg-gray-400/70 dark:hover:bg-gray-700/70"
        >
          Contact Me!
        </a>
      </footer>
      <main>{children}</main>
    </>
  );
}

export default Layout;
