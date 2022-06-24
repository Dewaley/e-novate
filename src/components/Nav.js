import { useState } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseOutline } from 'react-icons/io5';
import OutsideClickHandler from 'react-outside-click-handler';

const Nav = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <div className='text-white bg-primary flex justify-between items-center py-4 px-10 border-b-white border-b-2 overflow-hidden'>
      <h1 className='text-2xl'>
        <span className='text-secondary'>E-</span>novate Labs
      </h1>
      <nav>
        <ul className='md:flex items-center gap-x-8 hidden'>
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>Blog</li>
          <li>Contact</li>
          <li className='flex items-center gap-x-1 bg-secondary p-1 rounded'>
            <BiLogIn />
            login
          </li>
        </ul>
        <div
          className='md:hidden rounded border-white border-2 cursor-pointer'
          onClick={() => setHamburger(!hamburger)}
        >
          <button className='p-0.5 bg-white text-primary m-0.5 rounded'>
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
      <div
        className={`absolute transition-[top] left-[50%] translate-x-[-50%] mx-auto w-full md:hidden ${
          hamburger ? 'top-20' : '-top-60'
        }`}
      >
        <OutsideClickHandler onOutsideClick={() => setHamburger(false)}>
          <nav className='bg-primary text-center rounded mx-10 py-2 relative'>
            <h1 className='text-xl mb-2'>
              <span className='text-secondary'>E-</span>novate Labs
            </h1>
            <ul className='flex flex-col justify-center items-center gap-y-2'>
              <li>Home</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact</li>
              <li className='flex items-center gap-x-1 bg-secondary p-1 rounded'>
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
    </div>
  );
};

export default Nav;
