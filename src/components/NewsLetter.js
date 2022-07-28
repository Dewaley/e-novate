const NewsLetter = () => {
  return (
    <div className='bg-primary w-[90vw] rounded-lg flex items-center justify-center text-white flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-8 md:justify-center md:items-center mb-16 py-4 md:py-6 md:px-3 lg:w-[70vw]'>
      <div className='text-center md:text-left gap-y-2'>
        <h2 className='text-secondary'>NEWSLETTER</h2>
        <p className='text-xl'>Subscribe to our Newsletter</p>
      </div>
      <div className='flex justify-center'>
        <form className='bg-white py-2 px-2 md:m-0 w-fit rounded-full'>
          <input
            type='text'
            name=''
            id=''
            placeholder='E-mail Address'
            className='border-none w-[50vw] sm:w-auto outline-none text-primary mr-0.5 placeholder:text-primary pl-2'
          />
          <input
            type='submit'
            value='Submit'
            className='bg-secondary text-white p-3 rounded-full'
          />
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
