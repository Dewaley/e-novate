import NewsLetter from '../components/NewsLetter';
import BlogCard from '../components/BlogCard';
import { Blog } from '../config/api';
import { useState, useEffect } from 'react';
import BlogRightSide from '../components/BlogRightSide';

const BlogPage = () => {
  const [blogList, setBlogList] = useState([]);
  const fetchBlog = async () => {
    const res = await fetch(Blog);
    const data = await res.json();
    setBlogList(data);
  };
  useEffect(() => {
    fetchBlog();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
            <BlogRightSide blogList={blogList}/>
          </div>
          <NewsLetter />
        </div>
      )}
    </div>
  );
};

export default BlogPage;
