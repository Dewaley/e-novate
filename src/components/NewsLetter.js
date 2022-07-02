const NewsLetter = () => {
  return (
    <div className='bg-primary w-[90vw] rounded-lg flex items-center justify-center text-white flex-col md:flex-row md:gap-x-8 md:justify-center md:items-center mb-16 md:py-6 lg:w-[70vw]'>
      <div className='text-center md:text-left'>
        <h2 className='text-secondary my-2 md:my-0'>NEWSLETTER</h2>
        <p className='text-xl mb-8 md:mb-0'>Subscribe to our Newsletter</p>
      </div>
      <form className='bg-white py-2 px-5 md:m-0 mb-4 rounded-full'>
        <input
          type='text'
          name=''
          id=''
          placeholder='E-mail Address'
          className='max-w-[400px] w-[50vw] md:w-[30vw] border-none outline-none text-primary mr-0.5 placeholder:text-primary'
        />
        <input
          type='submit'
          value='Submit'
          className='p-2 bg-secondary text-white p-3 rounded-full'
        />
      </form>
    </div>
  );
};

export default NewsLetter;
