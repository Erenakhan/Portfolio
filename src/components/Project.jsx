import React from 'react';
import data from './data.json';
import Booking from './images/Booking.png';
import Getir from './images/Getir.png';
import tesla from './images/tesla.png';
import Water from './images/Water.png';
import bomb1 from './images/bomb1.png';
import converter from './images/converter.png';
import drumkit1 from './images/drumkit1.png';
import movie1 from './images/movie1.png';
import note1 from './images/note1.png';
import portfolio2 from './images/portfolio2.png';
import weatherApp from './images/weatherApp.png';

const photos = {
    "Booking App":Booking,
    "Tesla Home Page":tesla,
    "Getir Home Page":Getir,
    "Water Purifier Freelance":Water,
    "Bomb Game": bomb1,
    "NoteApp": note1,
    "Money Converter": converter,
    "Drum Kit": drumkit1,
    "Movie App": movie1,
    "Weather App": weatherApp,
    "Portfolio": portfolio2,
};

export default function Project() {
    return (
        <div id="projects"  className='min-h-screen w-full lg:px-20 md:px-10  '>
            <h1 className='w-full flex justify-center font-semibold text-5xl mt-2 mb-8 text-white '>Projects</h1> 
            <div className='mt-8 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-8 '>
                {data.map((project) => (
                    <div  key={project.name} className='w-[400px] gap-4    p-4 mx-auto flex  flex-col'>
                      <img src={photos[project.name]} alt={project.name} className='object-cover h-[300px] w-full ' />
                      <div className='w-full flex'>
                        <div className='w-1/2 ml-0 '>
                        <h1 className='font-semibold text-2xl text-white'>{project.name}</h1>
                        </div>
                        <div className='w-1/2 mr-0 '>

                        <div className='w-full h-full flex items-center'>
                            <div className='w-1/2 ml-0 flex justify-center'>
                            <a className='hover:scale-110 hover:text-primary text-blue-200' href={project.github}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                              </svg>
                              </a>
                            </div>
                            <div className='w-1/2 mr-0  flex justify-center'>
                            {project.live ?
                              <a className='hover:scale-110 hover:text-primary text-blue-200' href={project.live}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            
                            </a> : ""}
                         </div>
                        
                        </div>
                      </div>
                      </div>
                      
                       <h2 className='text-[#dddd]  h-[70px]'>{project.info}</h2> 
                    </div>
                ))}
            </div>
        </div>
    )
}
