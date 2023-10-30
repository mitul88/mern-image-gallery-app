import React from 'react';
import { Link, useRouteLoaderData } from 'react-router-dom';

import jwtDecode from 'jwt-decode';

const HeroSection = () => {
  const token = useRouteLoaderData('root');
  let decoded;
  if (token){
    if(token !== "EXPIRED") {
      decoded = jwtDecode(token)
    }
  };

  return (
    <div className='hidden md:block h-[220px] bg-sky-800 bg-fixed bg-gradient-to-r from-sky-800 via-sky-900 to-sky-950 text-white'>
        <div className='container mx-auto h-full'>
          <div className='w-full md:w-1/2 h-full mx-auto flex flex-col items-center justify-center'>
            <h3 className="text-2xl lg:text-3xl text-center my-5">Showcase your photgraphy skills to the world and share your thoughts with other photographers</h3>
            <Link 
              to={`${decoded && decoded._id}/profile/upload`} 
              className='bg-orange-600 shadow shadow-sky-950 shadow-lg ease-in duration-150 hover:shadow-none text-white text-lg rounded-md px-5 tracking-wider font-semibold text-sm py-2 flex flex-row items-center'
              style={{fontFamily: 'Quicksand'}}  
            >Upload</Link>
          </div>
        </div>
      </div>
  )
}

export default HeroSection