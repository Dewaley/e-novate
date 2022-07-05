import {
  AiOutlineCalendar,
  AiOutlineMessage,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import picture3 from '../images/home/pexels-burst-374074.png';

const BlogOverview = () => {
  return (
    <div className='flex flex-col justify-center mb-12'>
      <div className='text-center font-light'>
        <h4 className='text-secondary my-2 font-extralight'>BLOG</h4>
        <p className='text-3xl my-2 mb-6'>Latest Blog Posts</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 w-[90vw] lg:min-w-[80vw] relative gap-y-4'>
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
                  <AiOutlineMessage className='sm:text-lg text-base' />
                  Comments
                </span>
                <span className='flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base'>
                  <AiOutlineCalendar className='sm:text-lg text-base' />
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
  );
};

export default BlogOverview;
