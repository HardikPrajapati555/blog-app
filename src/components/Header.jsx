import React from 'react';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hellow</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/add" className="hover:text-gray-300">add</a></li>
            <li><a href="/blogs" className="hover:text-gray-300">blogs</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;


