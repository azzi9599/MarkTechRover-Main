// src/Category.js
import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ icon, label, link }) => {
  return (
    <Link to={link} className="flex flex-col items-center p-4 bg-blue bg-cover object-cover rounded-lg mt-10  gap-2 hover:scale-105">
      <img src={icon} alt={label} className="w-20 h-20 object-contain rounded-lg border-2  p-2 " />
      <span className="text-center text-sm p-2 font-medium">{label}</span>
    </Link>
  );
};

export default Category;
