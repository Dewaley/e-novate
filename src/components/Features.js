import picture2 from '../images/home/Online learning-cuate.png';
import { BsBookHalf } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';

const Features = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-x-16 gap-y-4 pb-12 pt-8  px-6'>
      <img src={picture2} alt='' className='md:max-w-md md:w-2/6' />
      <div className='flex flex-col gap-y-2'>
        <h4>FEATURES</h4>
        <h1 className='text-2xl'>
          Take the step, begin your journey into IT today.
        </h1>
        <div>
          <div className='flex items-center gap-x-4 bg-[#c4c4c4]/20 p-2 rounded mb-2'>
            <div className='w-10'>
              <BsBookHalf className='text-4xl text-secondary' />
            </div>
            <div>
              <h3 className='text-lg'>Extensive Curriculum</h3>
              <p className='text-sm font-light'>
                Laboris exercitation nostrud ipsum ex culpa exercitation quis
                ipsum est.
              </p>
            </div>
          </div>
          <div className='flex items-center gap-x-4 bg-[#c4c4c4]/20 p-2 rounded mb-2'>
            <div className='w-10'>
              <FaChalkboardTeacher className='text-4xl text-secondary' />
            </div>
            <div>
              <h3 className='text-lg'>Expert Tutors</h3>
              <p className='text-sm font-light'>
                Laboris exercitation nostrud ipsum ex culpa exercitation quis
                ipsum est.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
