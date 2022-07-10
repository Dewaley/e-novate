import picture3 from '../images/home/pexels-burst-374074.png';
import { MdOutlinePlayLesson } from 'react-icons/md';


const Card = ({ title, preamble, lessons, id }) => {
  return (
    <div className='flex flex-col shadow-md rounded-md md:h-[440px] lg:h-auto'>
      <div className='basis-1/2'>
        <img src={picture3} alt='' className='w-full' />
      </div>
      <div className='basis-1/2 flex flex-col px-6 justify-between pt-4'>
        <div>
          <h3 className='text-xl'>{title}</h3>
          <p className='font-light text-sm'>{preamble.slice(0,125)}...</p>
        </div>
        <div className='flex justify-between items-center border-t-primary border-t-[1px] py-2 mt-4 mb-2'>
          <div className='flex items-end gap-x-0.5'>
            <MdOutlinePlayLesson className='text-secondary text-2xl'/>
            <span className='font-light text-sm'>{lessons}</span>
          </div>
          <button className='bg-secondary text-white font-light text-sm px-4 py-1 rounded-md'>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
