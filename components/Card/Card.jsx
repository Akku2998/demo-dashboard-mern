import React from "react";

const Card = () => {
  return (
    <div className="max-w-md bg-white p-8 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Card Title</h2>
      <p className="text-gray-600 mb-4">
        This is a simple card using Tailwind CSS.
      </p>
      <a href="#" className="text-blue-500 hover:underline">
        Read More
      </a>
    </div>
  );
};

export default Card;
