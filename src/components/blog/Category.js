import { useState, useEffect } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const res = await fetch(
      `https://e-novate.onrender.com/api` + "/blog/category/view"
    );
    const data = await res.json();
    setCategories(data.results);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      {categories !== undefined && (
        <div className="flex justify-center p-8 gap-y-4 shadow-md border-t-2 border-primary rounded-md flex-col">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-lg text-secondary">Categories</h1>
            <hr className="w-2/12 bg-primary h-1" />
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-2">
            {categories.map((category) => (
              <span className="p-2 border-[0.5px] border-primary rounded-md">
                {category.category_name}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
