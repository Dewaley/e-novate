import { RiStarSFill } from 'react-icons/ri';
import { TbCertificate } from 'react-icons/tb';
import { FiUsers, FiUser } from 'react-icons/fi';
import { BsBarChartLine, BiTimeFive, BsCheck2 } from 'react-icons/bs';
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import picture from '../images/home/pexels-burst-374074.png';

const CourseDetails = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div>
        <div className='flex gap-x-2 px-6 mb-4 text-xl text-secondary'>
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <span>(5.00)</span>
        </div>
        <h1>Front-End Development</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <hr />
        <img src={picture} alt='' />
        <ul>
          <li>Overview</li>
          <li>Topics</li>
          <li>Instructor</li>
          <li>Feedback</li>
        </ul>
        <p>
          Aliqua nisi amet labore laborum cillum occaecat mollit. Fugiat cillum
          aliquip et consequat consequat duis. Laboris consectetur qui fugiat
          excepteur consequat incididunt deserunt anim eiusmod. Occaecat magna
          veniam ut esse tempor pariatur velit. Consequat adipisicing nostrud
          dolor velit ea occaecat laborum excepteur magna dolor aute cupidatat
          cillum. Dolor quis labore amet ullamco. Nostrud veniam laboris dolore
          ut ad sit ex id cillum mollit. Nulla dolor labore aliqua reprehenderit
          esse amet amet et id. Aliquip cupidatat fugiat deserunt enim deserunt
          aute ullamco excepteur ipsum dolore do enim. Quis exercitation minim
          occaecat elit fugiat fugiat sint. Velit consectetur voluptate aute
          nostrud culpa dolor proident ipsum cupidatat id. Laborum sit nostrud
          est adipisicing duis culpa duis laborum. Officia nisi irure in laboris
          laborum veniam elit sint in ut nostrud quis.
        </p>
        <div>
          <div>
            <h1>What you will learn</h1>
            <hr />
          </div>
          <div>
            <ul>
              <li>
                <BsCheck2 />
                <p>Foundations Of The Internet.</p>
              </li>
              <li>
                <BsCheck2 />
                <p>Programming Principles, and Techniques</p>
              </li>
              <li>
                <BsCheck2 />
                <p>Web hosting.</p>
              </li>
            </ul>
            <ul>
              <li>
                <BsCheck2 />
                <p>GIt and Version Control.</p>
              </li>
              <li>
                <BsCheck2 />
                <p>HTML, CSS and Javascript</p>
              </li>
              <li>
                <BsCheck2 />
                <p>Working With React</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
          <FiUsers />
          <span>Students Enrolled: </span>
          <span>100</span>
        </div>
        <div>
          <div>
            <span>Price:</span>
            <span>#25,000</span>
          </div>
          <button>Pay</button>
        </div>
        <div>
          <div>
            <h1>This Course Includes:</h1>
            <hr />
          </div>
          <ul>
            <li>
              <div>
                <span>
                  <BsBarChartLine />
                </span>
                <span>Skill Level</span>
              </div>
              <span>Beginner</span>
            </li>
            <li>
              <div>
                <span>
                  <FiUser />
                </span>
                <span>Tutor</span>
              </div>
              <span>John Doe</span>
            </li>
            <li>
              <div>
                <span>
                  <BiTimeFive />
                </span>
                <span>Duration</span>
              </div>
              <span>2 weeks</span>
            </li>
            <li>
              <div>
                <span>
                  <img src='' alt='' />
                </span>
                <span>Lessons</span>
              </div>
              <span>22</span>
            </li>
            <li>
              <div>
                <span>
                  <TbCertificate />
                </span>
                <span>Certificate</span>
              </div>
              <span>Yes</span>
            </li>
          </ul>
        </div>
        <div className='flex'>
          <span>Share</span>
          <span className='flex justify-center items-center w-6 h-6 rounded-full text-primary bg-white text-sm'>
            <FaFacebookF />
          </span>
          <span className='flex justify-center items-center w-6 h-6 rounded-full text-primary bg-white text-sm'>
            <FaInstagram />
          </span>
          <span className='flex justify-center items-center w-6 h-6 rounded-full text-primary bg-white text-sm'>
            <FaLinkedinIn />
          </span>
          <span className='flex justify-center items-center w-6 h-6 rounded-full text-primary bg-white text-sm'>
            <FaWhatsapp />
          </span>
        </div>
        <div>
          <div>
            <h1>Requirements</h1>
            <hr />
          </div>
          <ul>
            <li>
              <BsCheck2 />
              <span>No previous knowledge of Front-End required.</span>
            </li>
            <li>
              <BsCheck2 />
              <span>A working device e.g. Laptop, phone or tablet e.t.c</span>
            </li>
            <li>
              <BsCheck2 />
              <span>Internet Access</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
