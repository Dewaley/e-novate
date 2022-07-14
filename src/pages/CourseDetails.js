import { MdOutlinePlayLesson } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';
import { FiUsers, FiUser } from 'react-icons/fi';
import { BiTimeFive } from 'react-icons/bi';
import { BsBarChartLine, BsCheckLg } from 'react-icons/bs';
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import picture from '../images/home/pexels-burst-374074.png';
import NewsLetter from '../components/NewsLetter';

const CourseDetails = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-primary flex flex-col md:flex-row pt-12 px-8 gap-x-8 md:mb-8'>
        <div className='flex flex-col gap-y-8 md:w-2/3 mb-8'>
          <h1 className='text-4xl'>Front-End Development</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <hr />
          <img src={picture} alt='' />
          <ul className='flex justify-between items-center border-[1px] border-[#666666]/[0.6] px-4 rounded-lg'>
            <li className='py-4 border-b-2 border-secondary'>Overview</li>
            <li className='py-4'>Topics</li>
            <li className='py-4'>Instructor</li>
            <li className='py-4'>Feedback</li>
          </ul>
          <p>
            Aliqua nisi amet labore laborum cillum occaecat mollit. Fugiat
            cillum aliquip et consequat consequat duis. Laboris consectetur qui
            fugiat excepteur consequat incididunt deserunt anim eiusmod.
            Occaecat magna veniam ut esse tempor pariatur velit. Consequat
            adipisicing nostrud dolor velit ea occaecat laborum excepteur magna
            dolor aute cupidatat cillum. Dolor quis labore amet ullamco. Nostrud
            veniam laboris dolore ut ad sit ex id cillum mollit. Nulla dolor
            labore aliqua reprehenderit esse amet amet et id. Aliquip cupidatat
            fugiat deserunt enim deserunt aute ullamco excepteur ipsum dolore do
            enim. Quis exercitation minim occaecat elit fugiat fugiat sint.
            Velit consectetur voluptate aute nostrud culpa dolor proident ipsum
            cupidatat id. Laborum sit nostrud est adipisicing duis culpa duis
            laborum. Officia nisi irure in laboris laborum veniam elit sint in
            ut nostrud quis.
          </p>
          <div className='p-4 bg-[#666666]/[.05] rounded-lg'>
            <div className='flex flex-col gap-y-2'>
              <h1 className='text-lg'>What you will learn</h1>
              <hr className='w-2/12 bg-primary h-1' />
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
              <ul className='md:w-1/2'>
                <li className='flex items-center gap-x-2 my-2'>
                  <p className='w-4 h-4'>
                    <BsCheckLg className='text-secondary text-xl' />
                  </p>
                  <p>Foundations Of The Internet.</p>
                </li>
                <li className='flex items-center gap-x-2 my-2'>
                  <p className='w-4 h-4'>
                    <BsCheckLg className='text-secondary text-xl' />
                  </p>
                  <p>Programming Principles, and Techniques</p>
                </li>
                <li className='flex items-center gap-x-2 my-2'>
                  <p className='w-4 h-4'>
                    <BsCheckLg className='text-secondary text-xl' />
                  </p>
                  <p>Web hosting.</p>
                </li>
              </ul>
              <ul className='md:w-1/2'>
                <li className='flex items-center gap-x-2 my-2'>
                  <p className='w-4 h-4'>
                    <BsCheckLg className='text-secondary text-xl' />
                  </p>
                  <p>GIt and Version Control.</p>
                </li>
                <li className='flex items-center gap-x-2 my-2'>
                  <p className='w-4 h-4'>
                    <BsCheckLg className='text-secondary text-xl' />
                  </p>
                  <p>HTML, CSS and Javascript</p>
                </li>
                <li className='flex items-center gap-x-2 my-2'>
                  <p className='w-4 h-4'>
                    <BsCheckLg className='text-secondary text-xl' />
                  </p>
                  <p>Working With React</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='md:w-1/3 flex flex-col gap-y-12 mb-8'>
          <div className='flex justify-center items-center p-8 gap-x-2 shadow-md border-t-2 border-primary rounded-md'>
            <FiUsers className='text-xl text-secondary' />
            <span>Students Enrolled: </span>
            <span className='text-secondary'>100</span>
          </div>
          <div className='flex flex-col items-center p-8 border-t-2 border-primary rounded-md shadow-md gap-y-2'>
            <div className='flex gap-x-2 items-end'>
              <span className='text-lg'>Price:</span>
              <span className='text-4xl'>#25,000</span>
            </div>
            <button className='bg-secondary text-white w-1/2 p-1 rounded-md'>
              Pay
            </button>
          </div>
          <div className='p-8 border-t-2 border-primary rounded-md shadow-md flex flex-col gap-y-2'>
            <div className='flex flex-col gap-y-2'>
              <h1 className='text-lg'>This Course Includes:</h1>
              <hr className='w-2/12 bg-primary h-1' />
            </div>
            <ul className='flex flex-col gap-y-2'>
              <li className='flex justify-between items-center'>
                <div className='flex gap-x-2 items-center'>
                  <span>
                    <BsBarChartLine className='text-secondary text-xl' />
                  </span>
                  <span>Skill Level</span>
                </div>
                <span>Beginner</span>
              </li>
              <li className='flex justify-between items-center'>
                <div className='flex gap-x-2 items-center'>
                  <span>
                    <FiUser className='text-secondary text-xl' />
                  </span>
                  <span>Tutor</span>
                </div>
                <span>John Doe</span>
              </li>
              <li className='flex justify-between items-center'>
                <div className='flex gap-x-2 items-center'>
                  <span>
                    <BiTimeFive className='text-secondary text-xl' />
                  </span>
                  <span>Duration</span>
                </div>
                <span>2 weeks</span>
              </li>
              <li className='flex justify-between items-center'>
                <div className='flex gap-x-2 items-center'>
                  <span>
                    <MdOutlinePlayLesson className='text-secondary text-xl' />
                  </span>
                  <span>Lessons</span>
                </div>
                <span>22</span>
              </li>
              <li className='flex justify-between items-center'>
                <div className='flex gap-x-2 items-center'>
                  <span>
                    <TbCertificate className='text-secondary text-xl' />
                  </span>
                  <span>Certificate</span>
                </div>
                <span>Yes</span>
              </li>
            </ul>
          </div>
          <div className='p-8 border-t-2 border-primary rounded-md shadow-md flex justify-between items-center'>
            <span>Share</span>
            <span className='flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-lg'>
              <FaFacebookF />
            </span>
            <span className='flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-lg'>
              <FaInstagram />
            </span>
            <span className='flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-lg'>
              <FaLinkedinIn />
            </span>
            <span className='flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-lg'>
              <FaWhatsapp />
            </span>
          </div>
          <div className='p-8 border-t-2 border-primary rounded-md shadow-md'>
            <div className='flex flex-col gap-y-2'>
              <h1 className='text-lg'>Requirements</h1>
              <hr className='w-2/12 bg-primary h-1' />
            </div>
            <ul>
              <li className='flex items-center gap-x-2 my-2'>
                <p className='w-4 h-4'>
                  <BsCheckLg className='text-secondary text-xl' />
                </p>
                <span>No previous knowledge of Front-End required.</span>
              </li>
              <li className='flex items-center gap-x-2 my-2'>
                <p className='w-4 h-4'>
                  <BsCheckLg className='text-secondary text-xl' />
                </p>
                <span>A working device e.g. Laptop, phone or tablet e.t.c</span>
              </li>
              <li className='flex items-center gap-x-2 my-2'>
                <p className='w-4 h-4'>
                  <BsCheckLg className='text-secondary text-xl' />
                </p>
                <span>Internet Access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default CourseDetails;
