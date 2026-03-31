import React from 'react'
import {download} from '../assets';
import {downloadImage} from '../utils';

const Card = ({_id, name, prompt, photo}) => {
  return (
    <div className='rounded-xl group relative shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] card overflow-hidden transition-all duration-300'>
      <img
        className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110'
        src={photo}
        alt={prompt}
      />
      <div className='flex flex-col max-h-[94.5%] absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md m-2 p-4 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300'>
        <p className='text-white text-sm overflow-y-auto prompt drop-shadow-md'>{prompt}</p>
        <div className='mt-5 flex justify-between items-center gap-2'>
          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 rounded-full object-cover bg-gradient-to-tr from-purple-500 to-cyan-500 flex justify-center items-center text-white text-xs font-bold shadow-md'>
              {name[0]}
            </div>
            <p className='text-white text-sm font-medium drop-shadow-md'>{name}</p>
          </div>
          <button type='button' onClick={() => downloadImage(_id, photo)} className='outline-none bg-transparent border-none hover:scale-110 transition-transform'>
            <img src={download} alt="download" className='w-6 h-6 object-contain invert hover:brightness-150' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card