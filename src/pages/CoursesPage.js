import NewsLetter from "../components/NewsLetter";
import {AiOutlineSearch } from 'react-icons/ai'
import picture3 from '../images/home/pexels-burst-374074.png';
import tinyImage from '../images/home/lessons.svg';

const CoursesPage = () => {
  return (
    <div className='flex flex-col items-center mb-12 gap-y-4'>
      <div className='text-center font-light mt-6'>
        <h4 className='text-secondary my-2'>COURSES</h4>
        <p className='text-3xl my-2 mb-6'>We Offer These Courses</p>
      </div>
      <div className='flex flex-col md:justify-between md:items-center md:flex-row gap-y-4 w-[90vw] mb-4'>
        <p className='order-2 md:order-1'>Showing 4 of 4 results</p>
        <div className='flex justify-center items-center md:order-2 order-1'>
          <form
            action=''
            className='flex w-fit items-center text-lg gap-x-2 border-2 border-primary rounded-full p-2'
          >
            <AiOutlineSearch className='text-secondary' />
            <input
              type='text'
              name=''
              id=''
              placeholder='Search for anything here'
              className='bg-transparent border-none outline-none placeholder:text-primary'
            />
          </form>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 w-[90vw] gap-6 mb-6'>
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
              <button className='bg-secondary text-white font-light text-sm px-2 py-0.5 rounded'>
                Details
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
              <button className='bg-secondary text-white font-light text-sm px-2 py-0.5 rounded'>
                Details
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
              <button className='bg-secondary text-white font-light text-sm px-2 py-0.5 rounded'>
                Details
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
              <button className='bg-secondary text-white font-light text-sm px-2 py-0.5 rounded'>
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default CoursesPage