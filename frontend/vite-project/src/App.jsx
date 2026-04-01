import React, { useState, useEffect } from 'react';
import { BrowserRouter , Link, Route, Routes } from 'react-router-dom';
import {logo} from './assets';
import {Home, CreatePost } from './pages';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: theme === 'light' ? '#fff' : '#1a1d2d',
            color: theme === 'light' ? '#333' : '#fff',
            border: theme === 'light' ? '1px solid #e5e7eb' : '1px solid #374151',
            borderRadius: '8px',
          },
        }}
      />
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full flex justify-between items-center bg-white/80 dark:bg-[#10131f]/80 backdrop-blur-md sm:px-8 px-4 py-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50'
      >
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex justify-center items-center shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-black text-xl">IX</span>
          </div>
          <span className="font-extrabold text-2xl tracking-widest text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-gray-100 dark:to-gray-400 group-hover:dark:from-white group-hover:dark:to-gray-200 transition-colors duration-300">
            IMAGIX
          </span>
        </Link>
        <div className='flex gap-4 items-center'>
          <button 
            onClick={toggleTheme}
            className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm'
            title="Toggle Light/Dark Mode"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Link to="/create-post" className='font-inter font-medium bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] text-white px-4 py-2 rounded-md transition-all duration-300'>
            Create
          </Link>
        </div>
      </motion.header>
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='sm:p-8 px-4 py-8 w-full bg-transparent min-h-[calc(100vh-73px)]'
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </motion.main>
    </BrowserRouter>
  )
}

export default App