import { GrFormNext } from 'react-icons/gr';

const CategoryItem = ({category}) => {
  return (
    <li className='flex justify-between items-center py-3'>
      <span className='flex justify-between items-center'>
        <GrFormNext />
        <h4>{category}</h4>
      </span>
      <p>(11)</p>
    </li>
  );
};

export default CategoryItem;
