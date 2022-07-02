import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { TiUser } from 'react-icons/ti';
import { TbCertificate } from 'react-icons/tb';

const Offers = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center  max-w-[90vw] lg:max-w-[80vw] gap-x-8 gap-y-8 my-8'>
      <div className='border-t-8 border-t-primary rounded-md flex justify-center gap-x-4 shadow-md p-8'>
        <div>
          <HiOutlineDocumentDuplicate className='text-4xl' />
        </div>
        <div>
          <h3 className='text-lg font-light mb-1'>Courses Materials</h3>
          <p className='font-extralight text-sm'>
            Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum
            est.
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
            Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum
            est.
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
            Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum
            est.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
