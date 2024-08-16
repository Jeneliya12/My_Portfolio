function Header() {
  return (
    <header className="text-black py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">Jeneliya Gurung</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
