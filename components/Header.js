import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link href="/">
            <a>Biketastic</a>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
