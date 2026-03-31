import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-slate-300'>
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-slate-700/50 hover:bg-slate-600 border border-slate-600 text-cyan-400 py-1 px-2 rounded-[5px] transition-colors'
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-[#1a1d2d] border border-gray-700 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 outline-none block w-full p-3 placeholder-slate-500 shadow-inner focus:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all duration-300'
      />
    </div>
  )
}

export default FormField