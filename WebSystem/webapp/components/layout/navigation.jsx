import Link from "next/link";

export default function Navigation() {
  return (
    <header className="container flex flex-row items-center mx-auto px-5 py-12 max-w-screen-lg">
      <Link href="/">
        <p className="text-4xl font-bold text-fuchsia-300">どくしょのきろく</p>
      </Link>
      <nav className="ml-auto flex items-center">
        <Link href="/create">
          <p className="mr-5 text-gray-800 font-medium">きろく</p>
        </Link>
        <Link href="/about">
          <p className="mr-5 text-gray-800 font-medium">あぷりについて</p>
        </Link>
        <Link href="/profile1">
          <p className="mr-5 text-gray-800 font-medium">ろぐいん</p>
        </Link>
      </nav>
    </header>
  );
}