import {
  AiOutlineBars,
  AiOutlineCalendar,
  AiOutlineMessage,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { BsBookHalf, BsTelephone } from 'react-icons/bs';
import {
  FaChalkboardTeacher,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { TiUser } from 'react-icons/ti';
import { TbCertificate } from 'react-icons/tb';
import picture1 from '../images/home/picture.png';
import picture2 from '../images/home/Online learning-cuate.png';
import picture3 from '../images/home/pexels-burst-374074.png';
import tinyImage from '../images/home/lessons.svg';
import {
  MdOutlineNavigateNext,
  MdOutlineNavigateBefore,
  MdOutlineMailOutline,
} from 'react-icons/md';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { RiStarSFill } from 'react-icons/ri';
import { IoLocationOutline } from 'react-icons/io5';

const Home = () => {
  return (
    <div className='text-white overflow-x-hidden flex flex-col justify-center items-center text-primary'>
      <div className='flex flex-col md:flex-row justify-center gap-x-8 items-center bg-primary gap-y-4 px-6 md:px-12 pt-4 pb-6 text-white'>
        <div className=''>
          <h1 className='text-4xl md:max-w-[75%] pb-6'>
            Convenient easy way of learning new skills
          </h1>
          <p className='opacity-60 pb-4 lg:max-w-[75%] font-light'>
            Consectetur proident occaecat enim magna amet ipsum ex enim
            incididunt culpa consectetur non cupidatat. Veniam laboris duis
            laboris mollit nisi sit ea amet ex. Velit fugiat commodo nisi sunt
            veniam amet irure ex velit duis nulla tempor velit et.{' '}
          </p>
          <button className='flex items-center gap-x-2.5 bg-secondary p-2 rounded'>
            <span className='border-white border-2 rounded'>
              <AiOutlineBars />
            </span>
            Courses
          </button>
        </div>
        <img
          src={picture1}
          alt=''
          className='md:max-w-sm lg:w-1/2 lg:max-w-none'
        />
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-x-16 gap-y-4 pb-12 pt-8  px-6'>
        <img src={picture2} alt='' className='md:max-w-md md:w-2/6' />
        <div className='flex flex-col gap-y-2'>
          <h4>FEATURES</h4>
          <h1 className='text-2xl'>
            Take the step, begin your journey into IT today.
          </h1>
          <div>
            <div className='flex items-center gap-x-2 bg-[#c4c4c4]/20 p-2 rounded mb-2'>
              <BsBookHalf className='text-4xl text-secondary' />
              <div>
                <h3>Extensive Curriculum</h3>
                <p>
                  Laboris exercitation nostrud ipsum ex culpa exercitation quis
                  ipsum est.
                </p>
              </div>
            </div>
            <div className='flex items-center gap-x-2 bg-[#c4c4c4]/20 p-2 rounded mb-2'>
              <FaChalkboardTeacher className='text-3xl text-secondary' />
              <div>
                <h3>Expert Tutors</h3>
                <p>
                  Laboris exercitation nostrud ipsum ex culpa exercitation quis
                  ipsum est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center  max-w-[90vw] lg:max-w-[80vw] gap-x-8 gap-y-8 my-8'>
        <div className='border-t-8 border-t-primary rounded-md flex justify-center gap-x-4 shadow-md p-8'>
          <div>
            <HiOutlineDocumentDuplicate className='text-4xl' />
          </div>
          <div>
            <h3 className='text-lg font-light mb-1'>Courses Materials</h3>
            <p className='font-extralight text-sm'>
              Laboris exercitation nostrud ipsum ex culpa exercitation quis
              ipsum est.
            </p>
          </div>
        </div>
        <div className='border-t-8 border-t-primary rounded-md flex justify-center gap-x-4 shadow-md p-8'>
          <div>
            <TiUser className='text-4xl' />
          </div>
          <div>
            <h3 className='text-lg font-light mb-1'>Mentorship</h3>
            <p className='font-extralight text-sm'>
              Laboris exercitation nostrud ipsum ex culpa exercitation quis
              ipsum est.
            </p>
          </div>
        </div>
        <div className='border-t-8 border-t-primary rounded-md flex justify-center gap-x-4 shadow-md p-8'>
          <div>
            <TbCertificate className='text-4xl' />
          </div>
          <div>
            <h3 className='text-lg font-light mb-1'>Certification</h3>
            <p className='font-extralight text-sm'>
              Laboris exercitation nostrud ipsum ex culpa exercitation quis
              ipsum est.
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center mb-12'>
        <div className='text-center font-light'>
          <h4 className='text-secondary my-2'>COURSES</h4>
          <p className='text-3xl my-2 mb-6'>We Offer These Courses</p>
        </div>
        <div className='flex justify-center gap-x-4 w-[90vw] lg:min-w-[80vw] relative'>
          <div className='flex flex-col shadow-md rounded-md'>
            <div className='basis-1/2'>
              <img src={picture3} alt='' className='w-full' />
            </div>
            <div className='basis-1/2 flex flex-col px-6 justify-between pt-4'>
              <div>
                <h3 className='text-xl'>Front-End Development</h3>
                <p className='font-light text-sm'>
                  Laboris exercitation nostrud ipsum ex culpa exercitation quis
                  ipsum est. Laboris exercitation nostrud ipsum .
                </p>
              </div>
              <div className='flex justify-between items-center border-t-primary border-t-[1px] py-2 mt-4 mb-2'>
                <div className='flex'>
                  <img src={tinyImage} alt='' className='pr-1 max-h-5' />
                  <span className='font-light text-sm'>22 lessons</span>
                </div>
                <button className='bg-secondary text-white font-light text-sm px-2 py-0.5 rounded'>
                  Details
                </button>
              </div>
            </div>
          </div>
          <div className='hidden md:flex flex-col shadow-md rounded-md'>
            <div className='basis-1/2'>
              <img src={picture3} alt='' className='w-full' />
            </div>
            <div className='basis-1/2 flex flex-col px-6 justify-between pt-4'>
              <div>
                <h3 className='text-xl'>Front-End Development</h3>
                <p className='font-light text-sm'>
                  Laboris exercitation nostrud ipsum ex culpa exercitation quis
                  ipsum est. Laboris exercitation nostrud ipsum .
                </p>
              </div>
              <div className='flex justify-between items-center border-t-primary border-t-[1px] py-2 mt-4 mb-2'>
                <div className='flex'>
                  <img src={tinyImage} alt='' className='pr-1 max-h-5' />
                  <span className='font-light text-sm'>22 lessons</span>
                </div>
                <button className='bg-secondary text-white font-light text-sm px-2 py-0.5 rounded'>
                  Details
                </button>
              </div>
            </div>
          </div>
          <div className='hidden lg:flex flex-col shadow-md rounded-md'>
            <div className='basis-1/2'>
              <img src={picture3} alt='' className='w-full' />
            </div>
            <div className='basis-1/2 flex flex-col px-6 justify-between pt-4'>
              <div>
                <h3 className='text-xl'>Front-End Development</h3>
                <p className='font-light text-sm'>
                  Laboris exercitation nostrud ipsum ex culpa exercitation quis
                  ipsum est. Laboris exercitation nostrud ipsum .
                </p>
              </div>
              <div className='flex justify-between items-center border-t-primary border-t-[1px] py-2 mt-4 mb-2'>
                <div className='flex'>
                  <img src={tinyImage} alt='' className='pr-1 max-h-5' />
                  <span className='font-light text-sm'>22 lessons</span>
                </div>
                <button className='bg-secondary text-white font-light text-sm px-2 py-0.5 rounded'>
                  Details
                </button>
              </div>
            </div>
          </div>
          <div className='hidden absolute text-xl  sm:flex justify-center items-center w-12 h-12 shadow-md top-[50%] right-[-1.5rem] translate-y-[-50%]  bg-white rounded-full'>
            <MdOutlineNavigateNext />
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-y-8 w-[90vw] md:w-[80vw] gap-x-8 mb-8'>
        <div className='text-center md:basis-1/2 md:text-left md:max-w-sm'>
          <h2 className='text-secondary my-4'>TESTIMONIALS</h2>
          <p className='text-lg'>Here what people have to say regarding us.</p>
        </div>
        <div>
          <div className='border-t-8 border-t-primary rounded-md flex flex-col justify-center gap-x-4 shadow-md py-8 px-4 md:basis-1/2 max-w-lg mb-4'>
            <div className='flex justify-between my-4'>
              <ImQuotesLeft />
              <ImQuotesRight />
            </div>
            <p className='px-6 mb-4'>
              Laboris exercitation nostrud ipsum ex culpa exercitation quis
              ipsum est. Laboris exercitation nostrud ipsum .Laboris
              exercitation nostrud ipsum ex culpa exercitation quis ipsum est.
              Laboris exercitation nostrud ipsum .Laboris exercitation nostrud
              ipsum ex culpa exercitation quis ipsum est.
            </p>
            <div className='flex gap-x-2 px-6 mb-4 text-xl text-secondary'>
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
            <div className='px-6 flex items-center gap-x-2'>
              <span className='flex h-12 w-12 bg-secondary rounded-full'></span>
              <div>
                <h2>Jane Doe</h2>
                <p className='text-secondary'>Developer</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <span className='flex gap-x-2 text-secondary text-4xl'>
              <MdOutlineNavigateBefore />
              <MdOutlineNavigateNext />
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center mb-12'>
        <div className='text-center font-light'>
          <h4 className='text-secondary my-2'>BLOG</h4>
          <p className='text-3xl my-2 mb-6'>Latest Blog Posts</p>
        </div>
        <div className='flex md:flex-row flex-col justify-center gap-x-4 w-[90vw] lg:min-w-[80vw] relative gap-y-4'>
          <div className='flex flex-col shadow-md rounded-md'>
            <div className='basis-1/2'>
              <img src={picture3} alt='' className='w-full' />
            </div>
            <div className='basis-1/2 flex flex-col px-6 justify-between pt-4'>
              <div>
                <h3 className='text-xl'>Blog Post</h3>
                <p className='font-light text-sm mb-4'>
                  Laboris exercitation nostrud ipsum ex culpa exercitation quis
                  ipsum est. Laboris exercitation nostrud ipsum .
                </p>
                <div className='flex justify-between'>
                  <span className='flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base'>
                    <AiOutlineMessage className='sm:text-lg sm:gap-x-2 text-base' />
                    Comments
                  </span>
                  <span className='flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base'>
                    <AiOutlineCalendar className='sm:text-lg sm:gap-x-2 text-base' />
                    March 20, 2021
                  </span>
                </div>
              </div>
              <div className='border-t-primary border-t-[1px] py-2 mt-4 mb-2'>
                <button className='flex items-center bg-secondary text-white font-light text-sm px-4 py-2 gap-x-2 rounded'>
                  <span>Read on</span>
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col shadow-md rounded-md'>
            <div className='basis-1/2'>
              <img src={picture3} alt='' className='w-full' />
            </div>
            <div className='basis-1/2 flex flex-col px-6 justify-between pt-4'>
              <div>
                <h3 className='text-xl'>Blog Post</h3>
                <p className='font-light text-sm mb-4'>
                  Laboris exercitation nostrud ipsum ex culpa exercitation quis
                  ipsum est. Laboris exercitation nostrud ipsum .
                </p>
                <div className='flex justify-between'>
                  <span className='flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base'>
                    <AiOutlineMessage className='sm:text-lg sm:gap-x-2 text-base' />
                    Comments
                  </span>
                  <span className='flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base'>
                    <AiOutlineCalendar className='sm:text-lg sm:gap-x-2 text-base' />
                    March 20, 2021
                  </span>
                </div>
              </div>
              <div className='border-t-primary border-t-[1px] py-2 mt-4 mb-2'>
                <button className='flex items-center bg-secondary text-white font-light text-sm px-4 py-2 gap-x-2 rounded'>
                  <span>Read on</span>
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col shadow-md rounded-md'>
            <div className='basis-1/2'>
              <img src={picture3} alt='' className='w-full' />
            </div>
            <div className='basis-1/2 flex flex-col px-6 justify-between pt-4'>
              <div>
                <h3 className='text-xl'>Blog Post</h3>
                <p className='font-light text-sm mb-4'>
                  Laboris exercitation nostrud ipsum ex culpa exercitation quis
                  ipsum est. Laboris exercitation nostrud ipsum .
                </p>
                <div className='flex justify-between'>
                  <span className='flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base'>
                    <AiOutlineMessage className='sm:text-lg sm:gap-x-2 text-base' />
                    Comments
                  </span>
                  <span className='flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base'>
                    <AiOutlineCalendar className='sm:text-lg sm:gap-x-2 text-base' />
                    March 20, 2021
                  </span>
                </div>
              </div>
              <div className='border-t-primary border-t-[1px] py-2 mt-4 mb-2'>
                <button className='flex items-center bg-secondary text-white font-light text-sm px-4 py-2 gap-x-2 rounded'>
                  <span>Read on</span>
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-primary w-[90vw] rounded-lg flex items-center justify-center text-white flex-col md:flex-row md:gap-x-8 md:justify-center md:items-center mb-8 md:py-6 lg:w-[70vw]'>
        <div className='text-center md:text-left'>
          <h2 className='text-secondary my-2 md:my-0'>NEWSLETTER</h2>
          <p className='text-xl mb-8 md:mb-0'>Subscribe to our Newsletter</p>
        </div>
        <form className='bg-white py-2 px-5 md:m-0 mb-4 rounded-full'>
          <input
            type='text'
            name=''
            id=''
            placeholder='E-mail Address'
            className='max-w-[400px] w-[50vw] md:w-[30vw] border-none outline-none text-primary mr-0.5 placeholder:text-primary'
          />
          <input
            type='submit'
            value='Submit'
            className='p-2 bg-secondary text-white p-3 rounded-full'
          />
        </form>
      </div>
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
              <h1 className="mb-2">Subscribe to our Newsletter</h1>
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
    </div>
  );
};

export default Home;
