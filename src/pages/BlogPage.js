import NewsLetter from '../components/NewsLetter';
import BlogCard from '../components/BlogCard';
import { Blog } from '../config/api';
import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import LatestPosts from '../components/LatestPosts';
import CategoryList from '../components/CategoryList';
import { tags } from '../config/api';

const BlogPage = () => {
  const [blogList, setBlogList] = useState([]);
  const fetchBlog = async () => {
    const res = await fetch(Blog);
    const data = await res.json();
    setBlogList(data);
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <div>
      {blogList !== [] && (
        <div className='flex flex-col items-center'>
          <div className='text-primary flex flex-col items-center md:items-start md:flex-row pt-12 px-8 gap-x-8 md:mb-8'>
            <div className='flex flex-col gap-y-8 md:w-2/3 mb-8 w-[90vw]'>
              {blogList.map((article) => (
                <BlogCard
                  image={article.post_picture}
                  title={article.title}
                  preamble={article.preamble}
                  date={article.date_posted}
                  id={article.id}
                  key={article.id}
                />
              ))}
              <div className='flex gap-x-2 mt-4'>
                <span className='w-8 h-8 bg-secondary text-white flex justify-center items-center'>
                  1
                </span>
                <span className='w-8 h-8 text-primary flex justify-center items-center border-[1px] border-primary'>
                  2
                </span>
                <span className='w-8 h-8 text-primary flex justify-center items-center border-[1px] border-primary'>
                  3
                </span>
              </div>
            </div>
            <div className='md:w-1/3 flex flex-col gap-y-12 mb-8 w-[90vw]'>
              <div className='flex justify-center items-center border-[1px] border-[#263B5D]/50 py-10 px-4'>
                <form
                  action=''
                  className='flex h-full border-[1px] border-[#263B5D]/50 rounded overflow-hidden'
                >
                  <input
                    type='text'
                    name=''
                    id=''
                    className='p-2 h-10 outline-none placeholder:text-primary'
                    placeholder='Search'
                  />
                  <span className='h-10 w-10 bg-primary flex justify-center items-center p-2 text-secondary rounded'>
                    <AiOutlineSearch />
                  </span>
                </form>
              </div>
              <div className='flex justify-center p-8 gap-y-4 shadow-md border-t-2 border-primary rounded-md flex-col'>
                <div className='flex flex-col gap-y-2'>
                  <h1 className='text-lg text-secondary'>Latest Posts</h1>
                  <hr className='w-2/12 bg-primary h-1' />
                </div>
                <div className='flex flex-col gap-y-2'>
                  {blogList.map((article) => (
                    <LatestPosts
                      image={article.post_picture}
                      title={article.title}
                      date={article.date_posted}
                      id={article.id}
                      key={article.id}
                    />
                  ))}
                </div>
              </div>
              <div className='flex justify-center p-8 gap-y-4 shadow-md border-t-2 border-primary rounded-md flex-col'>
                <div className='flex flex-col gap-y-2'>
                  <h1 className='text-lg text-secondary'>Categories</h1>
                  <hr className='w-2/12 bg-primary h-1' />
                </div>
                <ul className='divide-y divide-[#263B5D]/30'>
                  <CategoryList />
                  <CategoryList />
                  <CategoryList />
                  <CategoryList />
                  <CategoryList />
                </ul>
              </div>
              <div className='flex justify-center p-8 gap-y-4 shadow-md border-t-2 border-primary rounded-md flex-col'>
                <div className='flex flex-col gap-y-2'>
                  <h1 className='text-lg text-secondary'>Tags</h1>
                  <hr className='w-2/12 bg-primary h-1' />
                </div>
                <div className='flex flex-wrap gap-x-2 gap-y-2'>
                  {tags.map((tag) => (
                    <p className='p-2 border-[0.5px] border-primary rounded-md'>
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <NewsLetter />
        </div>
      )}
    </div>
  );
};

export default BlogPage;
