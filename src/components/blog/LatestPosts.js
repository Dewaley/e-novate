import { useNavigate } from 'react-router-dom';
import { months } from '../../config/monthsApi';

const LatestPosts = ({ image, title, date, id }) => {
  const navigate = useNavigate();
  const dateArray = date.slice(0, 10).split('-', 3);
  const month = dateArray[1] - 1;
  const shortenedTitle = title.slice(0, 40) + '...';
  return (
    <div className='flex items-center gap-x-2'>
      <div>
        <div
          className='h-12 w-12 rounded-full bg-center bg-cover'
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
      <div>
        <h4 className='font-extralight text-sm'>
          {months[month] + ' ' + dateArray[2] + ', ' + dateArray[0]}
        </h4>
        <h1 className='font-light text-lg'>
          {title.length > 40 ? shortenedTitle : title}
        </h1>
      </div>
    </div>
  );
};

export default LatestPosts;
