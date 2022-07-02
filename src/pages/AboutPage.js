import picture1 from '../images/aboutPage/pexels-picha-stock-3894378 1.png';
import NewsLetter from '../components/NewsLetter';
import Features from '../components/Features';
import Offer from '../components/Offer';
import { MdOutlineTouchApp } from 'react-icons/md';
import { BsHeadset } from 'react-icons/bs';
import { IoIosLock } from 'react-icons/io';
import { TbBellRinging } from 'react-icons/tb';

const AboutPage = () => {
  return (
    <div className='text-primary overflow-x-hidden flex flex-col justify-center items-center text-primary scroll-smooth gap-y-8'>
      <div className='flex flex-col md:flex-row justify-center gap-x-8 items-center gap-y-4 px-6 md:px-12 pt-4 pb-6'>
        <img
          src={picture1}
          alt=''
          className='md:max-w-sm lg:w-1/2 lg:max-w-none'
        />
        <div className=''>
          <h1 className='text-4xl pb-6'>Our Vision</h1>
          <p className='opacity-60 pb-4 font-light'>
            Consectetur proident occaecat enim magna amet ipsum ex enim
            incididunt culpa consectetur non cupidatat. Veniam laboris duis
            laboris mollit nisi sit ea amet ex. Velit fugiat commodo nisi sunt
            veniam amet irure ex velit duis nulla tempor velit et.{' '}
            <p>
              &nbsp;&nbsp;&nbsp;Labore ad consectetur officia magna voluptate
              veniam. Qui aliqua culpa occaecat elit commodo in veniam excepteur
              pariatur. Dolor excepteur ad velit minim eiusmod ullamco duis ut
              dolore.
            </p>
          </p>
        </div>
      </div>
      <Features />
      <div className='flex flex-col justify-center items-center mb-8'>
        <div className='text-center font-light'>
          <h4 className='text-secondary my-2'>COURSES</h4>
          <p className='text-3xl my-2 max-w-[80vw] md:max-w-[70vw] lg:max-w-[50vw] mb-6'>
            Trainings are designed to provide you with the greatest possible
            experience.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[90vw] gap-8'>
          <Offer
            icon={<MdOutlineTouchApp />}
            heading={'Anywhere anytime access'}
            body={
              'Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum est. Laboris exercitation nostrud ipsum '
            }
          />
          <Offer
            icon={<BsHeadset />}
            heading={'On-site and remote support'}
            body={
              'Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum est. Laboris exercitation nostrud ipsum '
            }
          />
          <Offer
            icon={<IoIosLock />}
            heading={'Restrict content sharing'}
            body={
              'Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum est. Laboris exercitation nostrud ipsum '
            }
          />
          <Offer
            icon={<TbBellRinging />}
            heading={'On-time notifications'}
            body={
              'Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum est. Laboris exercitation nostrud ipsum '
            }
          />
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default AboutPage;
