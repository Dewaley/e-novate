import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const Testimonials = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center gap-y-8 w-[90vw] md:w-[80vw] gap-x-8 mb-8'>
      <header className='text-center md:basis-1/2 md:text-left md:max-w-sm'>
        <h2 className='text-secondary my-4'>TESTIMONIALS</h2>
        <p className='text-lg'>Here what people have to say regarding us.</p>
      </header>
      <div>
        <div className='border-t-8 border-t-primary rounded-md flex flex-col justify-center gap-x-4 shadow-md py-8 px-4 md:basis-1/2 max-w-lg mb-4'>
          <div className='flex justify-between my-4'>
            <ImQuotesLeft />
            <ImQuotesRight />
          </div>
          <p className='px-6 mb-4'>
            Laboris exercitation nostrud ipsum ex culpa exercitation quis ipsum
            est. Laboris exercitation nostrud ipsum .Laboris exercitation
            nostrud ipsum ex culpa exercitation quis ipsum est. Laboris
            exercitation nostrud ipsum .Laboris exercitation nostrud ipsum ex
            culpa exercitation quis ipsum est.
          </p>
          <div className='px-6 flex items-center gap-x-2'>
            <span className='flex h-12 w-12 bg-secondary rounded-full'></span>
            <div>
              <h2>Jane Doe</h2>
              <p className='text-secondary'>Developer</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <span className='flex gap-x-2 text-secondary text-4xl'>
            <MdOutlineNavigateBefore />
            <MdOutlineNavigateNext />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
