import { useState, useEffect } from "react";
import { BiLogIn } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink } from "react-router-dom";
import logo from "../../images/universal/logo.png";

const Nav = () => {
  const [hamburger, setHamburger] = useState(false);
  useEffect(() => {
    if (hamburger === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [hamburger]);
  let defaultClassName = "border-b-2 border-transparent cursor-pointer px-2 no-underline";
  let activeClassName = "border-secondary border-b-2 cursor-pointer px-2 no-underline";
  return (
    <nav className="text-primary sticky top-0 z-[100]">
      <div className="text-primary bg-white flex justify-between items-center h-16 md:px-10 border-b-primary border-b-[1px] overflow-hidden w-full px-3">
        <NavLink to="/">
          <img src={logo} className="h-8" alt="" />
        </NavLink>
        <div>
          <ul className="md:flex items-center gap-x-3 lg:gap-x-6 hidden">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : defaultClassName
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClassName : defaultClassName
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? activeClassName : defaultClassName
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? activeClassName : defaultClassName
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClassName : defaultClassName
              }
            >
              Contact
            </NavLink>
            {/* <NavLink
              to="/login"
              className="cursor-pointer flex items-center gap-x-1 bg-secondary p-1 rounded"
            >
              <BiLogIn />
              login
            </NavLink> */}
          </ul>
          <button
            className="md:hidden rounded border-primary border-2 cursor-pointer flex justify-center"
            onClick={() => setHamburger(true)}
          >
            <GiHamburgerMenu className="bg-primary text-white rounded p-0.5 m-0.5" />
          </button>
        </div>
      </div>
      <div
        className={`absolute flex justify-center transition-[top] duration-500 left-[50%] translate-x-[-50%] mx-auto w-full md:hidden ${
          hamburger ? "top-20 z-[50]" : "-top-80 z-[1]"
        }`}
      >
        <OutsideClickHandler onOutsideClick={() => setHamburger(false)}>
          <nav className="bg-white text-center rounded py-2 relative min-w-[80vw] flex flex-col gap-y-2 items-center shadow-md">
            <ul className="flex flex-col justify-center items-center gap-y-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClassName : defaultClassName
                }
                onClick={() => setHamburger(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClassName : defaultClassName
                }
                onClick={() => setHamburger(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive ? activeClassName : defaultClassName
                }
                onClick={() => setHamburger(false)}
              >
                Courses
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? activeClassName : defaultClassName
                }
                onClick={() => setHamburger(false)}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeClassName : defaultClassName
                }
                onClick={() => setHamburger(false)}
              >
                Contact
              </NavLink>
              {/* <NavLink
                to="/login"
                className="cursor-pointer flex items-center gap-x-1 bg-secondary p-1 rounded"
                onClick={() => setHamburger(false)}
              >
                <BiLogIn />
                login
              </NavLink> */}
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
