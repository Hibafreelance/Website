"use client"
import React, { useState } from 'react';
import Link from 'next/link'

const videos = [
  {
    title: 'How to learn programming',
    videoId: '1tog8kvcawI',
    source:'PirateSoftware',
    href:'https://www.youtube.com/@PirateSoftware'
  },
  {
    title: 'Google Fonts',
    videoId: '8ubmqUL3KR8',
    source:'FreeCodeCamp',
    href:'https://www.youtube.com/@freecodecamp'
  },
  {
    title: 'Develop Games',
    videoId: 'B0X3xburLxo',
    source:'PirateSoftware',
    href:'https://www.youtube.com/@PirateSoftware'
  },
  {
    title: 'Beginner Dev Tip',
    videoId: '12hygBk-fXI',
    source:'Net Ninja',
    href:'https://www.youtube.com/@NetNinja'
  },
  {
    title: 'Email only Auth',
    videoId: 'xXvImYER1G8',
    source:'WebDevSimplified',
    href:'https://www.youtube.com/@WebDevSimplified'
  },
  {
    title: 'Github actions explained',
    videoId: 'brD0NxyQwPo',
    source:'SoftwareLevelUp',
    href:'https://www.youtube.com/@SoftwareLevelUp'
  },
  {
    title: 'Get BETTER at CODING',
    videoId: 'Xj6lUopD8fA',
    source:'ForrestKnight',
    href:'https://www.youtube.com/@fknight'
  },
  {
    title: 'FULL STACK Trap',
    videoId: 'ORJucOn2E40',
    source:'Aaron Jack',
    href:'https://www.youtube.com/@AaronJack'
  },
  {
    title: 'Passion',
    videoId: 'wu2pi8R277M',
    source:'ThePrimeTime',
    href:'https://www.youtube.com/@ThePrimeTimeagen'
  },
  {
    title: 'Future Of Hacking',
    videoId: '2bDwk1_BAZY',
    source:'LiveOverflow ',
    href:'https://www.youtube.com/@LiveOverflow'
  },
  // Add more videos as needed
];


const YoutubeShortsPage = () => {
  const [visibleVideos, setVisibleVideos] = useState(5);

  const loadMoreVideos = () => {
    // Increase the number of visible videos by a certain amount (e.g., 4 in this case)
    setVisibleVideos((prevVisibleVideos) => prevVisibleVideos + 5);
  };

  return (
    <div className="container mx-auto mt-8 text-center ">
      <h1 className="mx-auto max-w-4xl text-4xl font-medium tracking-tight text-slate-700 sm:text-7xl mb-8">Hiba Shorts</h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-500">
        This is some of my favorite content creators on youtube that i learned from over the years !✨
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        {videos.slice(0, visibleVideos).map((video, index) => (
          <div key={index} className="bg-white rounded-md shadow-md p-6 mb-4">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
              className="mb-4"
            ></iframe>
            <h2 className="text-xl font-bold mb-2">{video.title}</h2>
            <p className="text-gray-600 mb-2">
              Video by : <Link className="text-blue-500" href={video.href} target="_blank">{video.source}</Link>
            </p>
          </div>
        ))}
      </div>
      {visibleVideos < videos.length && (
        <button
          onClick={loadMoreVideos}
          className="bg-purple-500 text-white font-bold py-2 px-4 rounded mt-4"
        >
          More Content
        </button>
      )}
    </div>
  );
};

export default YoutubeShortsPage;