// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBlog from "./pages/addBlog";
import ShowBlogs from "./pages/ShowBlogs";

import ShowProductList from "./pages/ShowProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow p-8"></main>
        <Routes>
          <Route path="/" element={<ShowProductList />} />
          <Route path="/add" element={<AddBlog />} />
          <Route path="/blogs" element={<ShowBlogs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
