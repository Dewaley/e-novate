import { AiOutlineBars } from 'react-icons/ai';
import { BsBookHalf } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { TiUser } from 'react-icons/ti';
import { TbCertificate } from 'react-icons/tb';
import picture1 from '../images/home/picture.png';
import picture2 from '../images/home/Online learning-cuate.png';

const Home = () => {
  return (
    <div className='text-white overflow-x-hidden flex flex-col justify-center items-center'>
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
        <img
          src={picture1}
          alt=''
          className='md:max-w-sm lg:w-1/2 lg:max-w-none'
        />
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-x-16 gap-y-4 pb-12 pt-8 text-primary px-6'>
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
      <div className='flex flex-col md:flex-row justify-center text-primary max-w-[90vw] lg:max-w-[80vw] gap-x-8 gap-y-8 my-8'>
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
    </div>
  );
};

export default Home;
