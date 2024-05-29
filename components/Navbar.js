import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Navbar = () => {
  const changeDarkMode = () => {
    document.documentElement.classList.toggle("light");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Simple Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                href="/blog"
                className="nav-link active"
                aria-current="page"
              >
                Blog
              </Link>
            </li>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white"></div>
          </ul>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
            style={{ textDecoration: "none" }}
            href="https://drive.google.com/file/d/1x-Ic17kAfxlgK76n7ZIQqQv4p_nHHsya/view?usp=drive_link"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            {/* The _blank value specifies that the resource should be loaded into a new tab. */}
            Curriculum
          </a>
          <div>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="https://www.linkedin.com/in/santiago-moran-9b30b1227/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </div>

          <a
            href="https://github.com/santimoran2720"
            rel="noopener noreferrer"
            target="_blank"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          >
            <AiFillGithub />
          </a>
        </div>
        <nav className="py-10 mb-12 flex justify-center sm:justify-end">
          <ul className="flex items-center sm:items-left">
            <li>
              {/* DARK THEME */}
              <button
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1.5 rounded-md ml-8"
                onClick={changeDarkMode}
              >
                Noche/Dia
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
