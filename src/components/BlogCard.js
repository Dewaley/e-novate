import picture3 from '../images/home/pexels-burst-374074.png';
import { FiUser } from 'react-icons/fi';
import {
  AiOutlineCalendar,
  AiOutlineMessage,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { months } from '../config/api';

const BlogCard = ({ image, title, preamble, date, id }) => {
  const navigate = useNavigate();
  const dateArray = date.slice(0, 10).split('-', 3);
  const month = dateArray[1] - 1;
  const shortenedTitle = title.slice(0, 40) + '...';
  return (
    <div className='flex flex-col shadow-md rounded-md md:h-[440px] lg:h-auto overflow-hidden'>
      <div
        className='h-[250px] md:h-[350px] bg-center bg-cover'
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className='flex flex-col px-6 pt-4 gap-y-2'>
        <div className='flex flex-wrap gap-y-2 gap-x-2 md:gap-x-4 text-secondary'>
          <span className='flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base'>
            <AiOutlineCalendar className='sm:text-lg text-base' />
            {months[month] + ' ' + dateArray[2] + ', ' + dateArray[0]}
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
          <h3 className='text-xl py-2'>
            {title.length > 40 ? shortenedTitle : title}
          </h3>
          <p className='font-light text-sm'>{preamble.slice(0, 250)}...</p>
        </div>
        <div className='py-2 mt-4 mb-2'>
          <button
            className='flex items-center bg-transparent text-secondary font-light py-2 gap-x-2 rounded'
            onClick={() => navigate(`/blog/${id}`)}
          >
            <span>READ ON</span>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
