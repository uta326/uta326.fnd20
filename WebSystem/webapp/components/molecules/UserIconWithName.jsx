import { memo } from "react";
import { useRecoilValue } from "recoil";

export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");
  const { image, name, height, width } = props;
  return (
    <div className="text-center">
      <img
        className="w-[160px] h-[160px] rounded-full mx-auto"
        src={image}
        alt="Profile"
      />
      <p className="text-lg font-bold mt-2 text-gray-700">{name}</p>
    </div>
  );
});