import Link from "next/link";

export default function Header() {
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
}
