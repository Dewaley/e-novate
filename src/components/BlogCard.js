import picture3 from '../images/home/pexels-burst-374074.png';
import { FiUser } from 'react-icons/fi';
import {
  AiOutlineCalendar,
  AiOutlineMessage,
  AiOutlineArrowRight,
} from 'react-icons/ai';

const BlogCard = () => {
  return (
    <div className='flex flex-col shadow-md rounded-md md:h-[440px] lg:h-auto'>
      <div>
        <img src={picture3} alt='' className='w-full' />
      </div>
      <div className='flex flex-col px-6 pt-4 gap-y-2'>
        <div className='flex flex-wrap gap-y-2 gap-x-2 md:gap-x-4 text-secondary'>
          <span className='flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base'>
            <AiOutlineCalendar className='sm:text-lg text-base' />
            March 20, 2021
          </span>
          <span className='flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base'>
            <FiUser className='text-xl' />
            John Doe
          </span>
          <div className='flex justify-between'>
            <span className='flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base'>
              <AiOutlineMessage className='sm:text-lg text-base' />
              Comments
            </span>
          </div>
        </div>
        <div>
          <h3 className='text-xl py-2'>10 Reasons To Get Into Tech Today</h3>
          <p className='font-light text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis
            libero ac aliquet nibh et enim at eget aenean diam morbi
            morbi.-Lorem ipsum dolor sit amet, consectetur adipiscing elit
            convallis libero ac aliquet nibh et enim at eget aenean diam morbi
            morbi.
          </p>
        </div>
        <div className='py-2 mt-4 mb-2'>
          <button className='flex items-center bg-transparent text-secondary font-light py-2 gap-x-2 rounded'>
            <span>READ ON</span>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
