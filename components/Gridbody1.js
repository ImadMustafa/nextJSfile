import React from 'react';

const Gridbody1 = ({ items }) => {
  return (
    <div className="flex flex-col items-center mt-10 mb-10 md:flex-row md:justify-center md:items-start 2xl:container mx-auto grid-cols-3">
      {items.map((item, index) => (
        <div key={index} className="mb-8 md:mb-0 md:mx-10 ml-10 mr-10">
          <img src={item.imageUrl} className="flex justify-center h-60" alt="Image" />
          <p className="mt-3 md:mt-7">{item.text}</p>
        </div>
      ))}
    </div>
  );
};


export default Gridbody1;
