import React from "react";
import "./style.css";
import { ThemeToggle } from "./ThemeToggle";

function Layout({ children }) {
  return (
    <>
      <header className="fixed top-0 right-0 p-2 z-50">
        <ThemeToggle />
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
