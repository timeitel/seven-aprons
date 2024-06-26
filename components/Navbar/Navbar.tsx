import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#home"
              >
                Seven Aprons
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#about"
                >
                  About
                </a>
              </li>

              {/* <li className="flex items-center">
                <a
                  className="bg-primary text-white text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  href="images/menu.jpg"
                  target="_blank"
                >
                  Menu
                  <i
                    className="fas fa-external-link-square-alt ml-1"
                    aria-hidden="true"
                  ></i>
                </a>
              </li> */}

              {/* <li className="flex items-center">
                <a
                  href="#order"
                  className="bg-primary text-white text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Order Online
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
