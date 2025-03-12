import { useState } from "react";
import { Bars3Icon, BellIcon, HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-yellow-400 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left Section - Menu Icon & Logo */}
        <div className="flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <Bars3Icon className="h-8 w-8 text-red-600" />
          </button>
          <a href="#" className="ml-4 text-2xl font-bold text-green-800">
            <span className="text-blue-600">भक्ति</span> भारत
          </a>
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <ul className="hidden md:flex space-x-6 text-red-700 font-semibold">
          <li className="hover:text-red-900 cursor-pointer">🕉️ मंदिर</li>
          <li className="hover:text-red-900 cursor-pointer">📆 तिथि</li>
          <li className="hover:text-red-900 cursor-pointer">🎉 त्यौहार</li>
          <li className="hover:text-red-900 cursor-pointer">🪔 आरती</li>
          <li className="hover:text-red-900 cursor-pointer">🎵 भजन</li>
          <li className="hover:text-red-900 cursor-pointer">📖 कथाएँ</li>
          <li className="hover:text-red-900 cursor-pointer">🧘 मंत्र</li>
          <li className="hover:text-red-900 cursor-pointer">🎼 चालीसा</li>
          <li className="hover:text-red-900 cursor-pointer">📚 कहानियाँ</li>
          <li className="hover:text-red-900 cursor-pointer">💬 मैसेज</li>
          <li className="hover:text-red-900 cursor-pointer">📝 ब्लॉग</li>
        </ul>

        {/* Right Section - Icons */}
        <div className="flex items-center space-x-4">
          <MagnifyingGlassIcon className="h-6 w-6 text-red-600 cursor-pointer" />
          <HeartIcon className="h-6 w-6 text-green-600 cursor-pointer relative">
            <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs rounded-full px-1">1</span>
          </HeartIcon>
          <BellIcon className="h-6 w-6 text-red-700 cursor-pointer relative">
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">6</span>
          </BellIcon>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-yellow-300 text-red-800 p-4 space-y-2">
          <a href="#" className="block">🕉️ मंदिर</a>
          <a href="#" className="block">📆 तिथि</a>
          <a href="#" className="block">🎉 त्यौहार</a>
          <a href="#" className="block">🪔 आरती</a>
          <a href="#" className="block">🎵 भजन</a>
          <a href="#" className="block">📖 कथाएँ</a>
          <a href="#" className="block">🧘 मंत्र</a>
          <a href="#" className="block">🎼 चालीसा</a>
          <a href="#" className="block">📚 कहानियाँ</a>
          <a href="#" className="block">💬 मैसेज</a>
          <a href="#" className="block">📝 ब्लॉग</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
