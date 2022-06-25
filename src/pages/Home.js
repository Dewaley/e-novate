import { AiOutlineBars } from 'react-icons/ai';
import { BsBookHalf } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';
import picture1 from '../images/home/picture.png';
import picture2 from '../images/home/Online learning-cuate.png';

const Home = () => {
  return (
    <div className='text-white overflow-x-hidden'>
      <div className='flex flex-col md:flex-row justify-center gap-x-8 items-center bg-primary gap-y-4 px-6 md:px-12 pt-4 pb-6'>
        <div className=''>
          <h1 className='text-4xl md:max-w-[75%] pb-6'>
            Convenient easy way of learning new skills
          </h1>
          <p className='opacity-60 pb-4 lg:max-w-[75%]'>
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
        <img src={picture1} alt='' className='w-1/2' />
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4 pb-6 text-primary'>
        <img src={picture2} alt='' className='max-w-md md:w-2/5' />
        <div className='flex flex-col gap-y-2'>
          <h4>FEATURES</h4>
          <h1 className='text-2xl'>
            Take the step, begin your journey into IT today.
          </h1>
          <div>
            <div className='flex items-center gap-x-2 bg-[#c4c4c4]/20 p-2 rounded mb-2'>
              <BsBookHalf className='text-3xl text-secondary'/>
              <div>
                <h3>Extensive Curriculum</h3>
                <p>
                  Laboris exercitation nostrud ipsum ex culpa exercitation quis
                  ipsum est.
                </p>
              </div>
            </div>
            <div className='flex items-center gap-x-2 bg-[#c4c4c4]/20 p-2 rounded mb-2'>
              <FaChalkboardTeacher className='text-3xl text-secondary'/>
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
    </div>
  );
};

export default Home;
