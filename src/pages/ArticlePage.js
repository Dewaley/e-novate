import BlogRightSide from '../components/BlogRightSide';
import { Blog } from '../config/api';
import { useState, useEffect } from 'react';
import NewsLetter from '../components/NewsLetter';
import { useParams } from 'react-router-dom';
import { AiOutlineCalendar, AiOutlineMessage } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { months } from '../config/api';
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import AuthorCard from '../components/AuthorCard';

const ArticlePage = () => {
  const { id } = useParams();
  const [blogList, setBlogList] = useState([]);
  const [article, setArticle] = useState([]);
  const [month, setMonth] = useState();
  const [tags, setTags] = useState([]);
  const [dateArray, setDateArray] = useState();
  const [nextArticle, setNextArticle] = useState([]);
  const [prevArticle, setPrevArticle] = useState([]);
  const [index, setIndex] = useState(parseInt(id));
  const fetchArticle = async () => {
    const res = await fetch(Blog);
    const data = await res.json();
    setBlogList(data);
    const numeration = data.findIndex((item) => {
      return item.id === index;
    });
    console.log(numeration);
    console.log(data);
    setArticle(data[numeration]);
    if (numeration > 0) {
      setPrevArticle(data[numeration - 1]);
    } else if (numeration <= 0) {
      setPrevArticle([]);
    }
    if (numeration + 1 < data.length) {
      setNextArticle(data[numeration + 1]);
    } else if (numeration + 1 === data.length) {
      setNextArticle([]);
    }
    setTags(data[numeration].tags);
    setDateArray(data[numeration].date_posted.slice(0, 10).split('-', 3));
    setMonth(data[numeration].date_posted.slice(0, 10).split('-', 3)[1] - 1);
  };
  useEffect(() => {
    fetchArticle();
  }, [index]);
  return (
    <div>
      {blogList !== [] && (
        <div className='flex flex-col items-center'>
          <div className='text-primary flex flex-col  items-center md:items-start md:flex-row pt-12 md:mb-8 gap-x-8 overflow-hidden w-[90vw]'>
            <div className='flex flex-col gap-y-8 md:w-2/3 mb-8 w-full'>
              <div
                className='h-[250px] md:h-[350px] bg-center bg-cover w-full'
                style={{
                  backgroundImage: `url(${article.post_picture})`,
                }}
              ></div>
              {Number.isInteger(month) && (
                <div className='flex flex-wrap gap-y-2 gap-x-2 md:gap-x-4 text-secondary w-full border-b-[#263B5D]/20 border-b-[2px] pb-2 text-[#263238]/70'>
                  <span className='flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base'>
                    <AiOutlineCalendar className='sm:text-lg text-base' />
                    {months[month] + ' ' + dateArray[2] + ', ' + dateArray[0]}
                  </span>
                  <span className='flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base'>
                    <FiUser className='text-xl' />
                    John Doe
                  </span>
                  <div className='flex justify-between'>
                    <span className='flex items-center gap-x-0.5 sm:gap-x-2 text-sm sm:text-base'>
                      <AiOutlineMessage className='sm:text-lg text-base' />
                      Comments
                    </span>
                  </div>
                </div>
              )}
              <p>{article.article_body}</p>
              <div className='flex flex-wrap gap-x-2 gap-y-2'>
                {tags.map((tag) => (
                  <p className='p-2 border-[0.5px] border-primary rounded-md'>
                    {tag}
                  </p>
                ))}
              </div>
              <hr className='w-full border-b-[#263B5D]/20 border-b-[2px] mt-12' />
              <div className='w-full flex flex-col md:flex-row justify-center items-center md:divide-x-[2px] divide-y-[2px] md:divide-y-0 divide-[#263B5D]/20'>
                <div className='md:w-1/2 flex justify-center p-2'>
                  {prevArticle !== [] ? (
                    <div>
                      <h1
                        className='flex items-center gap-x-2 text-[#263238]/70 justify-center md:justify-start cursor-pointer'
                        onClick={() => setIndex(parseInt(prevArticle.id))}
                      >
                        <BiLeftArrowAlt />
                        <span>PREVIOUS POST</span>
                      </h1>
                      <p className='font-light text-xl'>{prevArticle.title}</p>
                    </div>
                  ) : (
                    <div>
                      <h1 className='flex justify-center items-center gap-x-2 text-[#263238]/70 cursor-pointer'>
                        <BiLeftArrowAlt />
                        <span>PREVIOUS POST</span>
                      </h1>
                    </div>
                  )}
                </div>
                <div className='md:w-1/2 flex justify-center p-2'>
                  {nextArticle !== [] ? (
                    <div>
                      <h1
                        className='w-full flex items-center gap-x-2 text-[#263238]/70 justify-center md:justify-end cursor-pointer'
                        onClick={() => setIndex(parseInt(nextArticle.id))}
                      >
                        <BiRightArrowAlt />
                        <span>NEXT POST</span>
                      </h1>
                      <p className='font-light text-xl'>{nextArticle.title}</p>
                    </div>
                  ) : (
                    <div>
                      <h1 className='w-full flex items-center gap-x-2 text-[#263238]/70 justify-center cursor-pointer'>
                        <BiRightArrowAlt />
                        <span>NEXT POST</span>
                      </h1>
                    </div>
                  )}
                </div>
              </div>
              <hr className='w-full border-b-[#263B5D]/20 border-b-[2px] mb-12' />
              <AuthorCard
                image={article.author_picture}
                name={article.author}
                bio={article.author_bio}
                facebook={article.facebook_link}
                instagram={article.instagram_link}
                twitter={article.twitter_link}
                linkedin={article.linkedin_link}
              />
              <form className='bg-[#c4c4c4]/20 p-2 flex flex-col items-center gap-y-4 p-8 rounded-md mb-12'>
                <div className='flex flex-col gap-y-0.5 w-full'>
                  <label htmlFor='' className='font-bold'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='p-2 rounded outline-none focus:outline-primary sm:w-1/2'
                    placeholder='John Doe'
                  />
                </div>
                <div className='flex flex-col gap-y-0.5 w-full'>
                  <label htmlFor='' className='font-bold'>
                    Email
                  </label>
                  <input
                    type='text'
                    className='p-2 rounded outline-none focus:outline-primary sm:w-1/2'
                    placeholder='johndoe@gmail.com'
                  />
                </div>
                <div className='flex flex-col gap-y-0.5 w-full'>
                  <label htmlFor='' className='font-bold'>
                    Comment
                  </label>
                  <textarea
                  rows={8}
                    className='p-2 rounded outline-none focus:outline-primary resize-none'
                    placeholder='Leave a comment...'
                  ></textarea>
                </div>
                <button
                  className='bg-secondary px-8 py-2 text-white font-bold rounded mt-4'
                  type='submit'
                >
                  Submit
                </button>
              </form>
            </div>
            <BlogRightSide blogList={blogList} />
          </div>
          <NewsLetter />
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
