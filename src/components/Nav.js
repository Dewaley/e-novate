import { useState } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseOutline } from 'react-icons/io5';
import OutsideClickHandler from 'react-outside-click-handler';
import { useNavigate,Link } from 'react-router-dom';

const Nav = () => {
  const [hamburger, setHamburger] = useState(false);
  const navigate = useNavigate()
  const pathname = window.location.pathname;
  return (
    <div className='text-white bg-primary flex justify-between items-center py-4 px-4 md:px-10 border-b-white border-b-[1px] overflow-hidden'>
      <h1 className='text-2xl'>
        <span className='text-secondary'>E-</span>novate Labs
      </h1>
      <nav>
        <ul className='md:flex items-center gap-x-8 hidden'>
          <Link
            to='/'
            className={`${pathname === '/' && 'border-b-2 border-secondary'} px-2`}
          >
            Home
          </Link>
          <Link
            to='/about'
            className={`${pathname === '/about' && 'border-b-2 border-secondary'} px-2`}
          >
            About Us
          </Link>
          <Link
            to='/courses'
            className={`${pathname === '/courses' && 'border-b-2 border-secondary'} px-2`}
          >
            Courses
          </Link>
          <Link
            to='/blog'
            className={`${pathname === '/blog' && 'border-b-2 border-secondary'} px-2`}
          >
            Blog
          </Link>
          <Link
            to='/contact'
            className={`${pathname === '/contact' && 'border-b-2 border-secondary'} px-2`}
          >
            Contact
          </Link>
          <Link
            to='/login'
            className='flex items-center gap-x-1 bg-secondary p-1 rounded'
          >
            <BiLogIn />
            login
          </Link>
        </ul>
        <div
          className='md:hidden rounded border-white border-2 cursor-pointer flex justify-center'
          onClick={() => setHamburger(true)}
        >
          <button className='bg-white text-primary rounded p-0.5 m-0.5'>
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
      <div
        className={`absolute flex justify-center transition-[top] duration-500 left-[50%] translate-x-[-50%] mx-auto w-full md:hidden ${
          hamburger ? 'top-20 z-30' : '-top-60'
        }`}
      >
        <OutsideClickHandler onOutsideClick={() => setHamburger(false)}>
          <nav className='bg-primary text-center rounded py-2 relative min-w-[80vw]'>
            <h1 className='text-xl mb-2'>
              <span className='text-secondary'>E-</span>novate Labs
            </h1>
            <ul className='flex flex-col justify-center items-center gap-y-2'>
              <li
                onClick={() => {
                  navigate('/');
                  setHamburger(false);
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  navigate('/about');
                  setHamburger(false);
                }}
              >
                About Us
              </li>
              <li
                onClick={() => {
                  navigate('/courses');
                  setHamburger(false);
                }}
              >
                Courses
              </li>
              <li
                onClick={() => {
                  navigate('/blog');
                  setHamburger(false);
                }}
              >
                Blog
              </li>
              <li
                onClick={() => {
                  navigate('/contact');
                  setHamburger(false);
                }}
              >
                Contact
              </li>
              <li
                onClick={() => {
                  navigate('/login');
                  setHamburger(false);
                }}
                className='flex items-center gap-x-1 bg-secondary p-1 rounded'
              >
                <BiLogIn />
                login
              </li>
            </ul>
            <button
              className='absolute top-2 right-[5vw] text-2xl cursor-pointer'
              onClick={() => setHamburger(false)}
            >
              <IoCloseOutline />
            </button>
          </nav>
        </OutsideClickHandler>
      </div>
      <div
        className={`h-screen w-screen md:hidden absolute top-0 left-0 bg-transparent ${
          hamburger ? 'block z-10' : 'hidden'
        }`}
      ></div>
    </div>
  );
};

export default Nav;
