import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-900 dark:text-gray-100'
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-gray-200 dark:bg-gray-800 py-1 px-2 rounded-[5px] text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        className='bg-white dark:bg-[#1a1d2d] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 outline-none block w-full p-3 transition-all duration-300 shadow-sm dark:shadow-[0_0_15px_rgba(0,0,0,0.5)]'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  )
}

export default FormField