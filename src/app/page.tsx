import Image from "next/image";
import { BsSkype } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiArrowUpRight, FiAtSign } from "react-icons/fi";
import IconContainer from "./IconContainer";
import Header from "./Header";

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
      className='max-w-screen-2xl text-neutral-600
      sm:text-sm
      md:text-xl
      '
    >
      <div className='mx-auto px-6'>
        <Header />
        <div>
          <div className='grid gap-4 grid-cols-8'>
            {/* First Card */}
            <div
              className='col-span-8 rounded-3xl bg-gradient-to-tl from-stone-500 via-stone-700 to-stone-950  p-12 bg-white background-animate
              md:rounded-bl-3xl md:rounded-tr-3xl md:rounded-tl-lg md:rounded-br-lg md:col-span-6
              '
            >
              {/* card header: */}
              <div className='flex py-5'>
                <div className='flex gap-5 items-center'>
                  <div className='aspect-square rounded-full bg-yellow-300 grid items-center'>
                    <Image
                      src='/sticker.png'
                      width={60}
                      height={60}
                      alt='My Sticker'
                    />
                  </div>

                  <div className='flex flex-col'>
                    <span className='text-white text-3xl'>
                      Hi, I&apos;m Reza.
                    </span>
                    <span className='text-sm'>Front-end developer</span>
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
                  I enjoy learning new things and try to overcome new challenges
                  while analyzing how I improved through them.
                </p>
              </div>
            </div>

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
                <span className='text-white'>Atlas AI</span>
              </h1>
              <h4 className='text-purple-300 max-w-xs'>
                An AI Wiki and an area to learn prompts and how you can interact
                with different kinds of AI.
              </h4>
            </div>

            {/* Fourth Card */}
            <div
              className='col-span-full bg-black rounded rounded-br-3xl p-5 pb-0 border border-gray-600/30 flex flex-col gap-3
              md:col-span-5
              '
            >
              <div className='flex gap-3 justify-start items-center cursor-pointer group/current'>
                <h1 className='text-white'>Mora Website</h1>
                <div className='text-purple-300/80 aspect-square rounded-full bg-zinc-800 group-hover/current:bg-purple-300/80 group-hover/current:text-black transition-all ease-in-out'>
                  <FiArrowUpRight className='m-1' />
                </div>
              </div>
              <h4 className='text-neutral-400 text-sm'>
                Smart AI Ranking Website
              </h4>
              <div className='self-center'>
                <Image
                  width={500}
                  height={100}
                  className='rounded-t-xl'
                  src={"/mora-website.png"}
                  alt='A Picture of Prisma Graphql Website'
                />
              </div>
            </div>

            {/* Fifth Card */}
            <div
              className='col-span-full bg-black rounded-tr-3xl rounded-bl-xl p-5 border border-gray-600/30 py-10
              md:col-span-6
              '
            >
              <div className='max-w-xs flex flex-col gap-5'>
                <h3 className='text-gray-300 text-sm mb-2'>
                  I constantly try to improve myself
                </h3>
                <h1 className='text-3xl text-white'>
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
              <h1 className='text-white text-2xl'>Contact me</h1>
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
          </div>
        </div>
      </div>
    </main>
  );
}
