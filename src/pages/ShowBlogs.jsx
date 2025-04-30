import React, { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';

const ShowBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4">📚 All Blogs</h2>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default ShowBlogs;
