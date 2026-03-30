import React from 'react';

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover'>
      <img
        className='w-full h-auto object-cover rounded-xl'
        src={photo}
        alt={prompt}
      />
      <div className='group-hover:flex flex-col hidden absolute inset-0 bg-[#10131f] bg-opacity-80 rounded-xl p-4'>
        <p className='text-white text-sm overflow-y-auto flex-1'>{prompt}</p>
        <div className='flex items-center gap-2 mt-2'>
          <div className='w-7 h-7 rounded-full bg-green-700 flex justify-center items-center text-white text-xs font-bold'>
            {name?.[0]}
          </div>
          <p className='text-white text-sm'>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;