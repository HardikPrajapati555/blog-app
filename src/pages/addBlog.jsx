import React from 'react';
import BlogForm from '../components/BlogForm';

const AddBlog = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">Add a New Blog</h2>
      <BlogForm />
    </div>
  );
};

export default AddBlog;
