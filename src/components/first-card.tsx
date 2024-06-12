import IconContainer from "@/app/IconContainer";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function FirstCard() {
  return (
    <div
      className='col-span-full rounded-3xl bg-gradient-to-tl from-stone-500 via-stone-700 to-stone-950  p-12 bg-white background-animate
              md:rounded-bl-3xl md:rounded-tr-3xl md:rounded-tl-lg md:rounded-br-lg md:col-span-6
              '
    >
      <div className='flex py-5'>
        <div className='flex gap-5 items-center'>
          <div className='aspect-square rounded-full bg-yellow-300 grid items-center'>
            <Image src='/sticker.png' width={60} height={60} alt='My Sticker' />
          </div>

          <div className='flex flex-col'>
            <span className='text-white text-3xl'>About Me</span>
            <span className='text-sm'>
              {/* calculate age */}
              {new Date().getFullYear() - 1997} years old, Full Stack Developer
            </span>
          </div>
        </div>
        <div className='flex gap-1 flex-grow justify-end'>
          <IconContainer>
            <FaTwitter />
          </IconContainer>
          <IconContainer>
            <FaLinkedinIn />
          </IconContainer>
          <IconContainer>
            <FaGithub />
          </IconContainer>
        </div>
      </div>

      <div className='leading-10 max-w-md'>
        <h1 className='text-white text-4xl font-semibold mt-3 mb-5'>
          Passionate to pursue the technology.
        </h1>
        <p className='text-gray-400'>
          I enjoy learning new things and try to overcome new challenges while
          analyzing how I improved through them.
        </p>
      </div>
    </div>
  );
}
