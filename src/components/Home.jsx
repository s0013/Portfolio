import React from 'react';
import HeroImage from '../assets/image.jpg';
import { RiArrowRightSLine } from 'react-icons/ri';



const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Self-motivated individual seeking a position where I can apply my technical expertise and leverage my
            excellent academic background to foster personal growth and gain valuable experience.
          </p>
          <div>
            <button to='portfolio' smooth duration={500} className='group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer'>
              Portfolio <span className='group-hover:rotate-90 duration-300'><RiArrowRightSLine size={20} className='ml-1' /></span>
            </button>
          </div>
          </div>
        <div>
          <img src={HeroImage} alt='my-profile' className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  );
};

export default Home;