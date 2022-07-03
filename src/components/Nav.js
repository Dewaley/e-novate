import { useState } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseOutline } from 'react-icons/io5';
import OutsideClickHandler from 'react-outside-click-handler';
import { useNavigate,Link } from 'react-router-dom';

const Nav = () => {
  const [hamburger, setHamburger] = useState(false);
  const navigate = useNavigate()
  return (
    <div className='text-white bg-primary flex justify-between items-center py-4 px-4 md:px-10 border-b-white border-b-[1px] overflow-hidden'>
      <h1 className='text-2xl'>
        <span className='text-secondary'>E-</span>novate Labs
      </h1>
      <nav>
        <ul className='md:flex items-center gap-x-8 hidden'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/courses'>Courses</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>
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
                  navigate('/');
                  setHamburger(false);
                }}
              >
                Blog
              </li>
              <li
                onClick={() => {
                  navigate('/');
                  setHamburger(false);
                }}
              >
                Contact
              </li>
              <li
                onClick={() => {
                  navigate('/');
                  setHamburger(false);
                }}
                className='flex items-center gap-x-1 bg-secondary p-1 rounded'
              >
                <BiLogIn />
                login
              </li>
            </ul>
            <button
              className='absolute top-2 right-10 text-2xl cursor-pointer'
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
