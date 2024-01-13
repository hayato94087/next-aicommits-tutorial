import { type FC } from "react";

interface ButtonProps {}

const Button: FC<ButtonProps> = ({}) => {
  return (
    <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md">
      クリック
    </button>
  );
};

export default Button;
