import React, { useState } from 'react';
import TypewriterText from './TypewriterText';
import Project from './Project';

export default function Main() {
    const [showSecondText, setShowSecondText] = useState(false);

    const handleFirstTextComplete = () => {
      setShowSecondText(true);
    };
  
  return (
    <>
      <div id='home' className='h-screen '>
        <div className='h-1/4 w-full md:text-3xl text-xl md:gap-5 gap-3 md:pr-3 pr-1 flex justify-end items-center text-white'>
          <a href="#about" className='group transition duration-300'>
            About me
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
          </a>
          <a href="#projects" className='group transition duration-300'>
            Project
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
          </a>
          <a href="#tech" className='group transition duration-300'>
            Tech
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
          </a>
          <a href="#contact" className='group transition duration-300'>
            Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
          </a>
        </div>
        <div className='w-full flex h-1/3  '>
          <div className='pl-[30px] md:pl-[150px] w-full text-[25px] md:text-[50px] text-white'> 
          <TypewriterText
            text="Hello, I'm  Eren"
            onComplete={handleFirstTextComplete}
          />
          {showSecondText && (
            <TypewriterText text="I am a MERN developer" />
          )}
          </div>
        </div>
        <div className='h-1/4 w-full flex justify-center gap-[20px] md:gap-[100px] lg:gap-[150px]'>

        <a href="https://github.com/Erenakhan">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="100" height="100" className='hover:scale-110 md:h-15 md:w-15 h-12 w-12 lg:w-20 lg:h-20' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
        </a>

       <a href="https://www.linkedin.com/in/mustafa-eren-akhan/">
       <svg  xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="100" height="100"  className='hover:scale-110 md:h-15 md:w-15 h-12 w-12 lg:w-20 lg:h-20' viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>
       </a>
            
        </div>
        
        <div className='w-full h-1/4 flex justify-center '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 animate-bounce text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
        </svg>
        </div>

      </div>
      <div id='about' className='h-screen w-full flex '>
            <div className='w-1/2 ml-0 md:px-[75px] px-[20px]  flex justify-center flex-col'>
            <h1 className='font-bold text-2xl md:text-5xl text-white'>About me</h1>
            <p className=' bg-gradient-to-tr from-purple-100 via-purple-600 to-white bg-clip-text text-transparent text-4xl lg:text-8xl uppercase animate-gradient'>hello</p>


            <p className='mt-5 tetx-lg md:text-3xl text-white'>
            My name is Mustafa Eren. I'm Software Developer. My purpose is that make people's life easier in software technologies.
            </p>
            </div>
            <div className='w-1/2 mr-0 flex justify-center items-center'>
            <img src="https://avatars.githubusercontent.com/u/100142188?v=4" alt=""  className='rounded-full md:w-[400px] md:h-[400px] w-[220px] h-[220px] '/>
            </div>
      </div>
      <Project />
      <div id='tech' className='min-h-[700px] w-full'>
        <div className='min-h-[350px] w-full text-center text-white'>
          <h1 className='text-5xl'>Tech I used</h1>
          <div className='px-5 md:px-20 flex   justify-center pt-[70px] gap-5 flex-wrap'>
            
          <img className="w-[40px] h-[40xp] md:w-[80px] md:h-[80px]" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="html" />
          <img className="w-[40px] h-[40xp] md:w-[80px] md:h-[80px]" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt="css" />
          <img className="w-[40px] h-[40xp] md:w-[80px] md:h-[80px]" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="javascript"/>
          <img className="w-[40px] h-[40xp] md:w-[80px] md:h-[80px]" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="react"/>
          <img className="w-[40px] h-[40xp] md:w-[80px] md:h-[80px]" src="https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png" alt="nextjs"/>
          <img className="w-[40px] h-[40xp] md:w-[80px] md:h-[80px]" src="https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/tailwind/tailwind.png" alt="tailwind"/>
          <img className="w-[40px] h-[40xp] md:w-[80px] md:h-[80px]" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png" alt="bootstrap"/>
          <img className="w-[40px] h-[40xp] md:w-[80px] md:h-[80px]" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" alt="redux"/>
          <img className="w-[40px] h-[40xp] md:w-[80px] md:h-[80px]" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt="nodejs"/>
          <img className="w-[40px] h-[40xp] md:w-[80px] md:h-[80px]" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" alt="express"/>



          </div>
        </div>
        <hr />
        <div id='contact' className='min-h-[350xp] w-full pt-4 text-center text-white'>
          <h1 className='text-5xl'>Contact With me</h1>
          <div className='px-5 md:px-20 flex py-8 justify-center pt-[40px] gap-5 flex-wrap'>
            <form  action="https://formsubmit.co/akhanmustafaeren@gmail.com" method="POST" className='gap-2 flex flex-col  '>
            <span className='text-left'>Name <br /><input type="name" className=' w-80 p-2  bg-transparent border-2'  placeholder='John Doe'/></span>
            <span className='text-left '>Email <br /><input type="email" className='bg-transparent w-80 p-2 border-2 ' placeholder='example@mail.com' /></span>
            <span className='text-left'>Text <br /><textarea type="text" placeholder='text me:)' className='border-2 bg-transparent w-80 p-2 ' /></span>
            <button className='border-2 p-2 rounded-lg'>Send</button>
            </form>
          </div>
        </div>
        <div className='flex text-white justify-end md:px-16 md:pb-8 px-8 pb-4 '>
          <a href="#home">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 animate-bounce">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

          </a>
        </div>
      </div>
    </>
  );
}
