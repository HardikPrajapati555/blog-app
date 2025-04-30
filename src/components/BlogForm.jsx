import React, { useState } from 'react';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const saveToLocalStorage = (blog) => {
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    existingBlogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(existingBlogs));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Please fill all fields");

    const newBlog = { title, content, createdAt: new Date().toLocaleString() };
    saveToLocalStorage(newBlog);
    alert('Blog Added!');
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Blog Title"
        className="w-full p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Blog Content"
        className="w-full p-2 border rounded h-40"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
