import { useEffect, useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate, Link } from "react-router-dom";

const Nav = () => {
  const [hamburger, setHamburger] = useState(false);
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  useEffect(() => {
    if (hamburger === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [hamburger]);
  return (
    <nav className="text-white sticky top-0 z-[100]">
      <div className="text-white bg-primary flex justify-between items-center h-16 md:px-10 border-b-white border-b-[1px] overflow-hidden w-full px-4">
        <h1 className="text-2xl">
          <Link to="/">
            <span className="text-secondary">E-</span>novate Labs
          </Link>
        </h1>
        <div>
          <ul className="md:flex items-center gap-x-6 hidden">
            <Link
              to="/"
              className={`cursor-pointer ${
                pathname === "/" && "border-b-2 border-secondary"
              } px-2`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`cursor-pointer ${
                pathname.slice(0, 6) === "/about" &&
                "border-b-2 border-secondary"
              } px-2`}
            >
              About Us
            </Link>
            <Link
              to="/courses"
              className={`cursor-pointer ${
                pathname.slice(0, 8) === "/courses" &&
                "border-b-2 border-secondary"
              } px-2`}
            >
              Courses
            </Link>
            <Link
              to="/blog"
              className={`cursor-pointer ${
                pathname.slice(0, 5) === "/blog" &&
                "border-b-2 border-secondary"
              } px-2`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`cursor-pointer ${
                pathname.slice(0, 8) === "/contact" &&
                "border-b-2 border-secondary"
              } px-2`}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="cursor-pointer flex items-center gap-x-1 bg-secondary p-1 rounded"
            >
              <BiLogIn />
              login
            </Link>
          </ul>
          <button
            className="md:hidden rounded border-white border-2 cursor-pointer flex justify-center"
            onClick={() => setHamburger(true)}
          >
            <GiHamburgerMenu className="bg-white text-primary rounded p-0.5 m-0.5" />
          </button>
        </div>
      </div>
      <div
        className={`absolute flex justify-center transition-[top] duration-500 left-[50%] translate-x-[-50%] mx-auto w-full md:hidden z-50 ${
          hamburger ? "top-20" : "-top-60"
        }`}
      >
        <OutsideClickHandler onOutsideClick={() => setHamburger(false)}>
          <nav className="bg-primary text-center rounded py-2 relative min-w-[80vw]">
            <h1 className="text-xl mb-2">
              <Link to="/">
                <span className="text-secondary">E-</span>novate Labs
              </Link>
            </h1>
            <ul className="flex flex-col justify-center items-center gap-y-2">
              <Link
                to="/"
                className={`cursor-pointer ${
                  pathname === "/" && "border-b-2 border-secondary"
                } px-2`}
                onClick={() => setHamburger(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`cursor-pointer ${
                  pathname.slice(0, 6) === "/about" &&
                  "border-b-2 border-secondary"
                } px-2`}
                onClick={() => setHamburger(false)}
              >
                About Us
              </Link>
              <Link
                to="/courses"
                className={`cursor-pointer ${
                  pathname.slice(0, 8) === "/courses" &&
                  "border-b-2 border-secondary"
                } px-2`}
                onClick={() => setHamburger(false)}
              >
                Courses
              </Link>
              <Link
                to="/blog"
                className={`cursor-pointer ${
                  pathname.slice(0, 5) === "/blog" &&
                  "border-b-2 border-secondary"
                } px-2`}
                onClick={() => setHamburger(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`cursor-pointer ${
                  pathname.slice(0, 8) === "/contact" &&
                  "border-b-2 border-secondary"
                } px-2`}
                onClick={() => setHamburger(false)}
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="cursor-pointer flex items-center gap-x-1 bg-secondary p-1 rounded"
                onClick={() => setHamburger(false)}
              >
                <BiLogIn />
                login
              </Link>
            </ul>
            <IoCloseOutline
              className="absolute top-2 right-[5vw] text-2xl cursor-pointer"
              onClick={() => setHamburger(false)}
            />
          </nav>
        </OutsideClickHandler>
      </div>
      <div
        className={`h-screen w-screen md:hidden absolute top-0 left-0  ${
          hamburger ? "block z-40" : "hidden"
        }`}
      ></div>
    </nav>
  );
};

export default Nav;
