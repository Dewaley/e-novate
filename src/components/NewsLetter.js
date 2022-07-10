const NewsLetter = () => {
  return (
    <div className='bg-primary w-[90vw] rounded-lg flex items-center justify-center text-white flex-col md:flex-row md:gap-x-8 md:justify-center md:items-center mb-16 md:py-6 md:px-3 lg:w-[70vw]'>
      <div className='text-center md:text-left'>
        <h2 className='text-secondary my-2 md:my-0'>NEWSLETTER</h2>
        <p className='text-xl mb-8 md:mb-0'>Subscribe to our Newsletter</p>
      </div>
      <div className="flex justify-center">
        <form className='bg-white py-2 px-2 md:m-0 mb-4 w-fit rounded-full'>
        <input
          type='text'
          name=''
          id=''
          placeholder='E-mail Address'
          className='border-none w-[160px] sm:w-auto outline-none text-primary mr-0.5 placeholder:text-primary pl-2'
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
