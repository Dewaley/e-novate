import NewsLetter from "../components/NewsLetter";
import BlogCard from '../components/BlogCard'

const BlogPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-primary flex flex-col md:flex-row pt-12 px-8 gap-x-8 md:mb-8'>
        <div className='flex flex-col gap-y-8 md:w-2/3 mb-8'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <div className='flex gap-x-2 mt-4'>
            <span className='w-8 h-8 bg-secondary text-white flex justify-center items-center'>1</span>
            <span className='w-8 h-8 text-primary flex justify-center items-center border-[1px] border-primary'>2</span>
           <span className='w-8 h-8 text-primary flex justify-center items-center border-[1px] border-primary'>3</span>
          </div>
        </div>
        <div className='md:w-1/3 flex flex-col gap-y-12 mb-8'></div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default BlogPage