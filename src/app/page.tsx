import Image from "next/image";
import { BsSkype } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiArrowUpRight, FiAtSign } from "react-icons/fi";
import IconContainer from "./IconContainer";

// FIXME: a single component, really? || Improve readability
// TODO: showoff Prisma typeGraphQL as a contributor

export default function Home() {
  // TODO: add secondary primary color profiles to tailwind config
  // TODO: Fix Responsive
  // TODO: for borders -> have 2 types of border radius - 32 - 8
  // TODO: radial gradient for cards
  // TODO: Dark mode theme

  // TODO: for background - idea1: gif with gradient animation - idea2: try gradient with noise - idea3: brighter background better card-shadows
  return (
    <main
      className='grid place-items-center grid-cols-1 text-neutral-600
      sm:text-sm
      md:text-xl
      '
    >
      {/* First Card */}

      {/* Second Card */}
      <div
        className='hidden col-span-2 rounded-bl-sm rounded-tr-2xl rounded-tl-3xl rounded-br-3xl bg-yellow-300 p-5 pb-0 flex-grow justify-center items-end bg-gradient-to-t from-yellow-50 via-yellow-200 to-yellow-400
              md:flex
              '
      >
        <Image
          src='/full-body-sticker.png'
          alt='sticker'
          width={600}
          height={700}
        />
      </div>

      {/* Third Card */}
      <div
        className='rounded-3xl col-span-8 bg-violet-700 p-8 flex flex-col
              md:rounded-tl-3xl md:rounded-bl-lg md:rounded-tr-sm md:col-span-3
              '
      >
        <h1 className='text-4xl font-semibold mt-3 mb-5 text-purple-200 max-w-xs'>
          Currently I&apos;m working on{" "}
          <span className='text-primary'>Atlas AI</span>
        </h1>
        <h4 className='text-purple-300 max-w-xs'>
          An AI Wiki and an area to learn prompts and how you can interact with
          different kinds of AI.
        </h4>
      </div>

      {/* Fourth Card */}
      <div
        className='col-span-full bg-background rounded rounded-br-3xl border border-gray-600/30 flex flex-col gap-3
              md:col-span-5
              '
      >
        <div className='flex gap-3 justify-start items-center cursor-pointer group/current'>
          <h1 className='text-primary'>Mora Website</h1>
          <div className='text-purple-300/80 aspect-square rounded-full bg-zinc-800 group-hover/current:bg-purple-300/80 group-hover/current:text-black transition-all ease-in-out'>
            <FiArrowUpRight className='m-1' />
          </div>
        </div>
        <h4 className='text-neutral-400 text-sm'>Smart AI Ranking Website</h4>
        <div className='self-center relative'>
          <Image
            fill
            className='rounded-t-xl'
            src={""}
            alt='A Picture of Prisma Graphql Website'
          />
        </div>
      </div>

      {/* Fifth Card */}
      <div
        className='col-span-full bg-background rounded-tr-3xl rounded-bl-xl p-5 border border-gray-600/30 py-10
              md:col-span-6
              '
      >
        <div className='max-w-xs flex flex-col gap-5'>
          <h3 className='text-gray-300 text-sm mb-2'>
            I constantly try to improve myself
          </h3>
          <h1 className='text-3xl text-primary'>
            Currently, I&apos;m Learning Solidity.
          </h1>
          <h4 className='text-gray-400 text-md'>
            I also constantly practice Typescript and NextJS.
          </h4>
        </div>
      </div>

      {/* Sixth Card */}
      <footer
        className='col-span-full p-8 rounded-tl-3xl rounded-tr-xl rounded-bl-sm rounded-br-3xl text-gray-50 flex flex-col gap-3 bg-gradient-to-tl from-orange-300 via-orange-500 to-orange-600 items-start
              md:col-span-2
              '
      >
        <h1 className='text-secondary text-2xl'>Contact me</h1>
        <p className='text-md text-orange-200'>
          Make a contact via email or Skype.
        </p>
        <div className='flex flex-col gap-1'>
          <div className='contact-card-icon-container'>
            <FiAtSign />
          </div>
          <div className='contact-card-icon-container'>
            <BsSkype />
          </div>
        </div>
      </footer>
    </main>
  );
}
