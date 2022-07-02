import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-primary flex justify-center items-center w-full'>
      <div className='text-white flex flex-col md:flex-row justify-center gap-x-4 py-4 w-[90vw] font-light'>
        <div className='md:w-1/3 flex flex-col justify-between gap-y-4'>
          <div className='flex flex-col gap-y-2 md:mb-4'>
            <h5 className='tetx-lg font-normal'>About Us</h5>
            <p className='text-sm'>
              Laboris exercitation nostrud ipsum ex culpa exercitation quis
              ipsum est. Laboris exercitation nostrud ipsum .Laboris
              exercitation nostrud ipsum ex culpa exercitation quis ipsum est.
              ipsum ex culpa exercitation quis ipsum est.
            </p>
            <div className='flex gap-x-2'>
              <span className='flex justify-center items-center w-6 h-6 rounded-full text-primary bg-white text-sm'>
                <FaFacebookF />
              </span>
              <span className='flex justify-center items-center w-6 h-6 rounded-full text-primary bg-white text-sm'>
                <FaInstagram />
              </span>
              <span className='flex justify-center items-center w-6 h-6 rounded-full text-primary bg-white text-sm'>
                <FaLinkedinIn />
              </span>
              <span className='flex justify-center items-center w-6 h-6 rounded-full text-primary bg-white text-sm'>
                <FaWhatsapp />
              </span>
            </div>
          </div>
          <span className='hidden md:block text-xs'>
            &#169;2022. E-novate Labs. All Rights Reserved
          </span>
          <hr className='w-[60vw] h-2 md:hidden' />
        </div>
        <div className='md:w-1/3 flex flex-col md:items-center gap-y-4'>
          <ul className='flex flex-col gap-y-2'>
            <h1 className='text-lg font-normal'>Corporate</h1>
            <li>About us</li>
            <li>Contact us</li>
            <li>Projects</li>
            <li>Terms and Conditions</li>
            <li>Privacy policy</li>
          </ul>
          <hr className='w-[60vw] h-2 md:hidden' />
        </div>
        <div className='md:1/3 flex flex-col justify-between gap-y-4'>
          <div className='flex flex-col md:mb-4 gap-y-2'>
            <h2 className='text-lg font-normal'>Contact Us</h2>
            <ul className='flex flex-col gap-y-2'>
              <li className='flex items-center gap-x-2'>
                <span>
                  <BsTelephone className='text-secondary' />
                </span>
                <p>0803 353 0335</p>
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <MdOutlineMailOutline className='text-secondary' />
                </span>
                <p>VillageSquareOnline@gmail.com</p>
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <IoLocationOutline className='text-secondary' />
                </span>
                <p>Ivan 5, VCH Estate, Lekki, Lagos, Nigeria.</p>
              </li>
            </ul>
          </div>
          <hr className='w-[60vw] h-2 md:hidden' />
          <div>
            <h1 className='mb-2'>Subscribe to our Newsletter</h1>
            <form className='border-2 border-white rounded-lg flex w-fit p-1'>
              <input
                type='text'
                name=''
                id=''
                placeholder='E-mail Address'
                className='border-none bg-transparent outline-none text-white mr-0.5 placeholder:text-white p-0.5'
              />
              <button
                type='submit'
                className='p-1 bg-secondary rounded text-white flex justify-center items-center'
              >
                <AiOutlineArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
