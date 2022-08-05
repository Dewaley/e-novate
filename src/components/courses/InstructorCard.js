import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const InstructorCard = ({
  image,
  firstName,
  lastName,
  bio,
  email,
  facebook,
  instagram,
  linkedin,
  twitter,
}) => {
  return (
    <div className='bg-[#c4c4c4]/20 p-2 flex gap-x-4 p-2 rounded-md mb-4'>
      <div>
        <span
          style={{
            backgroundImage: `url(${image})`,
          }}
          className='flex w-12 h-12 rounded-full bg-center bg-cover'
        ></span>
      </div>
      <div className='flex flex-col gap-y-2'>
        <h1 className='text-3xl'>{firstName + ' ' + lastName}</h1>
        <p>{bio}</p>
        <span className='flex items-center gap-x-1'>
          <AiOutlineMail className='text-secondary' />
          <span>{email}</span>
        </span>
        <div className='flex items-center gap-x-2'>
          <a
            href={`${facebook}`}
            className='flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-xl'
          >
            <FaFacebookF />
          </a>
          <a
            href={`${instagram}`}
            className='flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-xl'
          >
            <FaInstagram />
          </a>
          <a
            href={`${linkedin}`}
            className='flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-xl'
          >
            <FaLinkedinIn />
          </a>
          <a
            href={`${twitter}`}
            className='flex justify-center items-center w-7 h-7 rounded-full text-white bg-secondary text-xl'
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
