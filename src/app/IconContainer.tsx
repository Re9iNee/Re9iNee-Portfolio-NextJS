import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const IconContainer = ({ children }: Props) => {
  return (
    <div className='h-10 aspect-square text-white flex justify-center items-center rounded-lg border-gray-700 border text-2xl bg-neutral-800 cursor-pointer hover:text-neutral-800 transition-all hover:bg-neutral-200 hover:shadow-lg'>
      {children}
    </div>
  );
};

export default IconContainer;
