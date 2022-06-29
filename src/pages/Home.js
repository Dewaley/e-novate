import { AiOutlineBars } from 'react-icons/ai';
import { BsBookHalf } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { TiUser } from 'react-icons/ti';
import { TbCertificate } from 'react-icons/tb';
import picture1 from '../images/home/picture.png';
import picture2 from '../images/home/Online learning-cuate.png';
import picture3 from '../images/home/pexels-burst-374074.png';
import tinyImage from '../images/home/lessons.svg';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { RiStarSFill } from 'react-icons/ri';

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
          <div className='absolute text-xl  flex justify-center items-center w-12 h-12 shadow-md top-[50%] right-[-1.5rem] translate-y-[-50%]  bg-white rounded-full'>
            <MdOutlineNavigateNext />
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-y-8 w-[90vw] md:w-[80vw] gap-x-8'>
        <div className='text-center md:basis-1/2 md:text-left md:max-w-sm'>
          <h2 className='text-secondary my-4'>TESTIMONIALS</h2>
          <p className='text-lg'>Here what people have to say regarding us.</p>
        </div>
        <div>
          <div className='border-t-8 border-t-primary rounded-md flex flex-col justify-center gap-x-4 shadow-md py-8 px-4 md:basis-1/2 max-w-lg'>
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
    </div>
  );
};

export default Home;
