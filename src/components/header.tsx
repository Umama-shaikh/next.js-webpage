import Link from "next/link";

function Header() {
  return (
    <header className="bg-blue-900 py-4 px-6 max-w-screen-lg mx-auto">
      <div className="flex flex-col items-center justify-between md:flex-row md:items-center md:justify-between">
        {/* Logo */}
        <div className="md:flex-shrink-0">
          <h2 className="text-yellow-500 text-3xl font-bold">
            <b>"Q"</b>uote Haven
          </h2>
        </div>

        {/* Links */}
        <nav className="mt-4 md:mt-0">
          <ul className=" text-sm flex space-x-6">
            <li className="px-4 py-2 rounded-full text-white bg-gray-700 hover:bg-yellow-500">
              <Link href="/">Home</Link>
            </li>
            <li className="px-4 py-2 rounded-full  text-white bg-gray-700 hover:bg-yellow-500">
              <Link href="/about">About</Link>
            </li>
            <li className="px-4 py-2 rounded-full  text-white bg-gray-700 hover:bg-yellow-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;