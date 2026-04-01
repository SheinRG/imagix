import React from 'react'
import { BrowserRouter , Link, Route, Routes } from 'react-router-dom';
import {logo} from './assets';
import {Home, CreatePost } from './pages';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <BrowserRouter>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full flex justify-between items-center bg-[#10131f]/80 backdrop-blur-md sm:px-8 px-4 py-4 border-b border-b-gray-800 sticky top-0 z-50'
      >
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex justify-center items-center shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-black text-xl">IX</span>
          </div>
          <span className="font-extrabold text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 group-hover:from-white group-hover:to-gray-200 transition-colors duration-300">
            IMAGIX
          </span>
        </Link>
        <Link to="/create-post" className='font-inter font-medium bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] text-white px-4 py-2 rounded-md transition-all duration-300'>
          Create
        </Link>
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