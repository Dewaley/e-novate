import {
  FaFacebookF,
  FaWhatsapp,
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
    <div>
      <div>
        <img src={image} alt='' />
      </div>
      <div className='bg-[#c4c4c4]/20 p-2'>
        <h1>{firstName + ' ' + lastName}</h1>
        <p>{bio}</p>
        <span>
          <AiOutlineMail />
          <span>{email}</span>
        </span>
        <div className='flex items-center gap-x-2'>
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
      </div>
    </div>
  );
};

export default InstructorCard;
