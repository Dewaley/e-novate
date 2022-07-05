import picture3 from '../images/home/pexels-burst-374074.png';
import tinyImage from '../images/home/lessons.svg';
import { MdOutlineNavigateNext } from 'react-icons/md';

const CoursesOverview = () => {
  return (
    <div className='flex flex-col justify-center mb-12'>
      <div className='text-center font-light'>
        <h4 className='text-secondary font-extralight my-2'>COURSES</h4>
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
              <button className='bg-secondary text-white font-light text-sm px-4 py-1 rounded-md'>
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
              <button className='bg-secondary text-white font-light text-sm px-4 py-1 rounded-md'>
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
              <button className='bg-secondary text-white font-light text-sm px-4 py-1 rounded-md'>
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
  );
};

export default CoursesOverview;
