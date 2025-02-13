import { Button } from '@nextui-org/react'
import { Moon, Sun } from 'lucide-react'
import React from 'react'

const Navbar = ({isdark,toggleTheme}) => {
  return (
    <div
    className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl bg-opacity-90 backdrop-blur-md z-50 shadow-xs rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300 ${
      isdark ? "bg-gray-800" : "bg-white"
    }`}
  >
    <h1 className="text-xl font-bold text-zinc-400">FileStar</h1>
    <nav className="flex gap-10">
      {["Home", "Features", "Pricing", "Contact"].map((item, index) => (
        <a
          key={index}
          href="#"
          className="text-base font-semibold hover:text-cyan-500 text-zinc-400 uppercase"
        >
          {item}
        </a>
      ))}
    </nav>
    <Button
      className="relative flex items-center justify-center px-10 py-2 !border-none !outline-none   rounded-full transition-all"
      onPress={toggleTheme}
    >
      <div
        className={`absolute w-10 h-10 rounded-full transition-all ${
          isdark ? " left-10" : "left-0"
        }`}
      ></div>
      <Sun
        className={`absolute left-0 transition-all ${
          isdark ? "text-gray-500" : "text-yellow-400"
        }`}
        size={20}
      />
      <Moon
        className={`absolute left-10 transition-all ${
          isdark ? "text-purple-500" : "text-gray-500"
        }`}
        size={20}
      />
    </Button>
  </div>
  )
}

export default Navbar