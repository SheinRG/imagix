import React from 'react'
import { BrowserRouter , Link, Route, Routes } from 'react-router-dom';
import {logo} from './assets';
import {Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-[#10131f]/80 backdrop-blur-md sm:px-8 px-4 py-4 border-b border-b-gray-800 sticky top-0 z-50'>
        <Link to="/">
          <img src={logo} alt="logo" className='w-28 object-contain invert hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all' />
        </Link>
        <Link to="/create-post" className='font-inter font-medium bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] text-white px-4 py-2 rounded-md transition-all duration-300'>
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-transparent min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App