import { AiOutlineBars } from 'react-icons/ai';
import picture1 from '../images/home/picture.png';

const Home = () => {
  return (
    <div className='px-12 pt-4 pb-8 bg-primary text-white'>
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-4'>
        <div className='md:w-2/5'>
          <h1 className='text-4xl md:max-w-[75%] pb-6'>
            Convenient easy way of learning new skills
          </h1>
          <p className='opacity-60 pb-4'>
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
        <img src={picture1} alt='' />
      </div>
    </div>
  );
};

export default Home;
