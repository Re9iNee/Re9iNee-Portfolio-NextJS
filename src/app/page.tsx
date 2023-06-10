import Image from "next/image";
import { FaGithub, FaImage, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import IconContainer from "./IconContainer";

export default function Home() {
    return (
        <main className='bg-black w-full h-full text-gray-700'>
            <div className='px-60'>
                <header className='flex justify-between py-32'>
                    <div>
                        <span className='text-gray-200'>Re9iNee</span>,
                        Front-end
                    </div>
                    <div className='flex gap-4'>
                        <div>Skills</div>
                        <div>Contact</div>
                    </div>
                </header>
                <div>
                    {/* First Row */}
                    <div className='flex gap-4'>
                        {/* First Card */}
                        <div className='rounded-bl-3xl rounded-tr-3xl rounded-tl-lg rounded-br-lg bg-gray-900 p-12'>
                            {/* card header: */}
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    <CgProfile className='text-3xl' />

                                    <div className='flex flex-col'>
                                        <span className='text-gray-200'>
                                            Hi, I&apos;m Reza.
                                        </span>
                                        <span>Front-end developer</span>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
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

                            <div>
                                <h1 className='text-gray-200 text-xl'>
                                    Passionate to pursue the technology.
                                </h1>
                                <p>
                                    I enjoy learning new things and try to
                                    overcome new challenges while analyzing how
                                    I improved through them.
                                </p>
                            </div>
                        </div>
                        <div className='rounded-bl-sm rounded-tr-2xl rounded-tl-3xl rounded-br-3xl bg-yellow-300 p-5 flex-grow flex justify-center items-end bg-gradient-to-t from-yellow-50 via-yellow-200 to-yellow-400'>
                            <FaImage className='text-2xl' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
