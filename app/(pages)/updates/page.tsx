"use client"
import React, { useState } from 'react';

const Updates = () => {
  const allUpdates = [
    {
        title: 'First Video Rlease',
        date: 'December 26, 2023',
        content:
          'We are excited to share with you our first video , it took alote of work to get here and we wish we can provide more and better content!',
      },
      {
        title: 'Hiba Creation',
        date: 'December 1, 2023',
        content:
          'The name Hiba was chosen based of the arabic name هبة , the meaning of it is a gift from god , and certainly it was for me , i didnt have a job and found financial stability in it',
      },
      {
        title: 'Open Source Odyssey',
        date: 'Octobre 10, 2023',
        content:
          'After working as a freelancer for a full year and making a stable income i decided i should share my knowldge and progress to help other people do the same.',
      },
    // Add more updates as needed
  ];

  const [visibleUpdates, setVisibleUpdates] = useState(3);

  const loadMore = () => {
    setVisibleUpdates((prevVisibleUpdates) => prevVisibleUpdates + 3);
  };

  return (
    <div className="container mx-auto p-8 max-w-2xl flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Updates</h1>

      {allUpdates.slice(0, visibleUpdates).map((update, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-xl font-bold mb-2">{update.title}</h2>
          <p className="text-gray-500 text-sm mb-2">{update.date}</p>
          <p>{update.content}</p>
        </div>
      ))}

      {visibleUpdates < allUpdates.length && (
        <button
          className="bg-purple-300 hover:bg-purple-400 text-white px-4 py-2 rounded-md "
          onClick={loadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Updates;