import React from 'react';

const BlogList = ({ blogs }) => {
  if (!blogs.length) return <p>No blogs found. Try adding one!</p>;

  return (
    <div className="space-y-6">
      {blogs.map((blog, index) => (
        <div key={index} className="p-4 border rounded shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-600">{blog.title}</h3>
          <p className="text-gray-700 mt-2">{blog.content}</p>
          <p className="text-sm text-gray-400 mt-2">📅 {blog.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
