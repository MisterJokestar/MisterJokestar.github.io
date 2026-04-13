import React from "react";
import "./style.css";
import { ThemeToggle } from "./ThemeToggle";

function Layout({ children }) {
  return (
    <>
      <header className="fixed top-0 right-0 p-2 z-50">
        <ThemeToggle />
      </header>
      <footer className="fixed bottom-0 right-0 p-2 z-50">
        <a href="/contact" className="text-text">
          Contact Me!
        </a>
      </footer>
      <main>{children}</main>
    </>
  );
}

export default Layout;
