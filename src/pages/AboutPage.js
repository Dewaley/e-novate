import picture1 from '../images/aboutPage/pexels-picha-stock-3894378 1.png';
import NewsLetter from '../components/NewsLetter';
import Features from '../components/Features';

const AboutPage = () => {
  return (
    <div className='text-primary'>
      <div className='flex flex-col md:flex-row justify-center gap-x-8 items-center gap-y-4 px-6 md:px-12 pt-4 pb-6'>
        <img
          src={picture1}
          alt=''
          className='md:max-w-sm lg:w-1/2 lg:max-w-none'
        />
        <div className=''>
          <h1 className='text-4xl md:max-w-[75%] pb-6'>Our Vision</h1>
          <p className='opacity-60 pb-4 lg:max-w-[75%] font-light'>
            Consectetur proident occaecat enim magna amet ipsum ex enim
            incididunt culpa consectetur non cupidatat. Veniam laboris duis
            laboris mollit nisi sit ea amet ex. Velit fugiat commodo nisi sunt
            veniam amet irure ex velit duis nulla tempor velit et. <p>&nbsp;&nbsp;&nbsp;Labore ad
            consectetur officia magna voluptate veniam. Qui aliqua culpa
            occaecat elit commodo in veniam excepteur pariatur. Dolor excepteur
            ad velit minim eiusmod ullamco duis ut dolore.</p>
          </p>
        </div>
      </div>
      <Features/>
      <NewsLetter/>
    </div>
  );
}

export default AboutPage