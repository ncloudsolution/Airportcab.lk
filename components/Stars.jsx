import { IoStar } from "react-icons/io5";

const Stars = ({ count }) => {
  const stars = [];

  for (let i = 0; i < count; i++) {
    stars.push(
      <IoStar key={i} className="text-yellow-500 text-[25px] my-[10px] mr-1" />
    );
  }

  return <div className="flex ">{stars}</div>;
};

export default Stars;
