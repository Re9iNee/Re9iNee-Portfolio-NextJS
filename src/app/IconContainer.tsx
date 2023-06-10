import React, { ReactNode } from "react";
import { FaTwitter, FaTwitterSquare } from "react-icons/fa";

type Props = {
    children: ReactNode;
};
const IconContainer = ({ children }: Props) => {
    return (
        <div className='text-white p-3 grid items-center rounded-md border-gray-700 border text-lg'>
            {children}
        </div>
    );
};

export default IconContainer;
