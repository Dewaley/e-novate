import { NavLink } from "react-router-dom";
import { TbCertificate } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { RiUserFill } from "react-icons/ri";
import { FaTasks, FaFolder } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import logo from "../../images/dashboard/logo.png";

const index = () => {
  const link =
    "no-underline flex gap-x-2 items-center pl-4 py-2 border-l-2 border-transparent hover:text-secondary hover:bg-secondary/25 hover:border-secondary transition-all";
  const activeLink =
    "no-underline flex gap-x-2 items-center pl-4 text-secondary bg-secondary/25 py-2 border-l-2 border-secondary transition-all";

  return (
    <div className={`w-[70%] max-w-[15rem] md:max-w-none md:w-[20%] bg-primary h-screen overflow-hidden text-white flex flex-col items-center justify-between py-8 text-sm absolute md:relative -left-[15rem] md:left-0`}>
      <nav className='flex flex-col gap-y-4'>
        <img src={logo} alt='' />
        <ul className='flex flex-col gap-y-2'>
          <li>
            <NavLink
              to=''
              end
              className={({ isActive }) => (isActive ? activeLink : link)}
            >
              <MdOutlineDashboard className='text-xl' />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to='profile'
              className={({ isActive }) => (isActive ? activeLink : link)}
            >
              <RiUserFill className='text-xl' />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to='courses'
              className={({ isActive }) => (isActive ? activeLink : link)}
            >
              <FaFolder className='text-xl' />
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to='resources'
              className={({ isActive }) => (isActive ? activeLink : link)}
            >
              <ImBook className='text-xl' />
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink
              to='exercises'
              className={({ isActive }) => (isActive ? activeLink : link)}
            >
              <FaTasks className='text-xl' />
              Exercises
            </NavLink>
          </li>
          <li>
            <NavLink
              to='certifications'
              className={({ isActive }) => (isActive ? activeLink : link)}
            >
              <TbCertificate className='text-xl' />
              Certifications
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className='px-6 py-2 rounded bg-secondary w-fit'>Log out</button>
    </div>
  );
};

export default index;
