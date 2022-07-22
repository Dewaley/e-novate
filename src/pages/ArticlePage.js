import BlogRightSide from '../components/BlogRightSide';
import { Blog } from '../config/api';
import { useState, useEffect } from 'react';
import NewsLetter from '../components/NewsLetter';

const ArticlePage = () => {
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
    // <div>
    //   {blogList !== [] && (
    //     <div className='flex flex-col items-center'>
    //       <div className='text-primary flex flex-col items-center md:items-start md:flex-row pt-12 px-8 gap-x-8 md:mb-8'>
    //         <div className='flex flex-col gap-y-8 md:w-2/3 mb-8 w-[90vw] bg-black'>
              
    //         </div>
    //         <BlogRightSide blogList={blogList} />
    //       </div>
    //       <NewsLetter />
    //     </div>
    //   )}
    // </div>
    <div>Article</div>
  );
};

export default ArticlePage;
