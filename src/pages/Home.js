import HomeBanner from "../components/HomeBanner";
import Features from '../components/Features'
import Offers from '../components/Offers'
import CoursesOverview from '../components/CoursesOverview'
import Testimonials from '../components/Testimonials'
import BlogOverview from '../components/BlogOverview'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div className='text-white overflow-x-hidden flex flex-col justify-center items-center text-primary scroll-smooth gap-y-8'>
      <HomeBanner/>
      <Features/>
      <Offers/>
      <CoursesOverview/>
      <Testimonials/>
      <BlogOverview/>
      <NewsLetter/>
    </div>
  );
};

export default Home;
