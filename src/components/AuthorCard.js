import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
const AuthorCard = ({
  image,
  name,
  bio,
  facebook,
  instagram,
  linkedin,
  twitter,
}) => {
  return (
    <div className='bg-[#c4c4c4]/20 p-2 flex gap-x-4 p-8 rounded-md mb-4'>
      <div>
        <span
          style={{
            backgroundImage: `url(${image})`,
          }}
          className='flex w-12 h-12 rounded-full bg-center bg-cover'
        ></span>
      </div>
      <div className='flex flex-col gap-y-2'>
        <h1 className='text-3xl'>{name }</h1>
        <p>{bio}</p>
        <div className='flex items-center gap-x-2'>
          <a
            href={`${facebook}`}
            className='flex justify-center items-center w-7 h-7 rounded-full text-white bg-primary text-xl'
          >
            <FaFacebookF />
          </a>
          <a
            href={`${instagram}`}
            className='flex justify-center items-center w-7 h-7 rounded-full text-white bg-primary text-xl'
          >
            <FaInstagram />
          </a>
          <a
            href={`${linkedin}`}
            className='flex justify-center items-center w-7 h-7 rounded-full text-white bg-primary text-xl'
          >
            <FaLinkedinIn />
          </a>
          <a
            href={`${twitter}`}
            className='flex justify-center items-center w-7 h-7 rounded-full text-white bg-primary text-xl'
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
