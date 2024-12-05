import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import category from "../../data/category.json";
import { useEffect } from "react";

const Category = () => {
  useEffect(() => {
    console.log(category);
  }, []);

  return (
    <div className="max-w-[1120px] mx-auto my-7">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">{"What's on your mind?"}</h2>
        <div className="flex gap-2">
          <div className="cursor-pointer rounded-full bg-slate-200 p-2 text-[#f37f28]">
            <FaArrowLeft />
          </div>
          <div className="cursor-pointer rounded-full bg-slate-200 p-2 text-[#f37f28]">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        {category.map((item) => {
          return (
            <div key={item.id} className="w-[2200px]">
              <img
                src={item.image}
                alt={item.path || "Category"}
                className="w-full object-cover"
              />
              <p className="text-center mt-2">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
