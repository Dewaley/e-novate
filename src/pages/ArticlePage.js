import BlogRightSide from '../components/BlogRightSide';
import { Blog } from '../config/api';
import { useState, useEffect } from 'react';
import NewsLetter from '../components/NewsLetter';
import { useParams } from 'react-router-dom';
import { AiOutlineCalendar, AiOutlineMessage } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { months } from '../config/api';
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';

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
    setArticle(data[numeration]);
    if (numeration > 0) {
      setPrevArticle(data[numeration - 1]);
    } else {
      setPrevArticle([]);
    }
    if (numeration < data.length - 1) {
      setNextArticle(data[numeration + 1]);
    } else {
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
          <div className='text-primary flex flex-col items-center md:items-start md:flex-row pt-12 px-8 gap-x-8 md:w-[90vw] md:mb-8'>
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
              <hr className='w-full border-b-[#263B5D]/20 border-b-[2px] mt-4' />
              <div className='w-full flex divide-x-[2px] divide-[#263B5D]/20'>
                <div className='w-1/2 flex justify-center'>
                  {prevArticle !== [] ? (
                    <div>
                      <h1
                        className='flex items-center gap-x-2 text-[#263238]/70'
                        onClick={() => setIndex(parseInt(prevArticle.id))}
                      >
                        <BiLeftArrowAlt />
                        <span>PREVIOUS POST</span>
                      </h1>
                      <p className='font-light text-xl'>{prevArticle.title}</p>
                    </div>
                  ) : (
                    <div>
                      <h1 className='flex items-center gap-x-2 text-[#263238]/70'>
                        <BiLeftArrowAlt />
                        <span>PREVIOUS POST</span>
                      </h1>
                    </div>
                  )}
                </div>
                <div className='w-1/2 flex justify-center'>
                  {nextArticle !== [] ? (
                    <div>
                      <h1
                        className='w-full flex items-center gap-x-2 text-[#263238]/70 justify-end'
                        onClick={() => setIndex(parseInt(nextArticle.id))}
                      >
                        <BiRightArrowAlt />
                        <span>NEXT POST</span>
                      </h1>
                      <p className='font-light text-xl'>{nextArticle.title}</p>
                    </div>
                  ) : (
                    <div>
                      <h1 className='w-full flex items-center gap-x-2 text-[#263238]/70 justify-end'>
                        <BiRightArrowAlt />
                        <span>NEXT POST</span>
                      </h1>
                    </div>
                  )}
                </div>
              </div>
              <hr className='w-full border-b-[#263B5D]/20 border-b-[2px] mb-4' />
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
