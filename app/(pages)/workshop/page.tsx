"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Build a Personal Portfolio',
    difficulty: 'Beginner',
    field: 'Web-development', 
    points: 50,
    href:'https://discord.com/channels/1115244106281648128/1188044599441248306'
  },
  {
    id: 2,
    title: 'Create a To-Do App',
    difficulty: 'Intermediate',
    field: 'Web-development', 
    points: 75,
    href:'https://discord.com/channels/1115244106281648128/1188044615014699080'
  },
  {
    id: 3,
    title: 'Build a Weather App',
    difficulty: 'Advanced',
    field: 'Mobile-development', 
    points: 100,
    href:'https://discord.com/channels/1115244106281648128/1188044625659830284'
  },
  // Add more projects as needed
];

const WeeklyWorkshop = () => {
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [fieldFilter, setFieldFilter] = useState('all');

  const filteredProjects = projects.filter((project) => {
    const difficultyMatch = difficultyFilter === 'all' || project.difficulty === difficultyFilter;
    const fieldMatch = fieldFilter === 'all' || project.field === fieldFilter;

    return difficultyMatch && fieldMatch;
  });

  return (
    <div className="bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-md shadow-md max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Weekly Workshop</h1>

        {/* Filtering Options */}
        <div className="flex space-x-4 mb-4">
          <div>
            <label className="font-semibold">Difficulty:</label>
            <select
              className="border p-2 rounded-md"
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Field of Learning:</label>
            <select
              className="border p-2 rounded-md"
              value={fieldFilter}
              onChange={(e) => setFieldFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Web-development">Web Development</option>
              <option value="Mobile-development">Mobile Development</option>
              <option value="Data-science">Data Science</option>
              {/* Add more fields as needed */}
            </select>
          </div>
        </div>

        {/* Project List */}
        <div>
          {filteredProjects.map((project) => (
            <div key={project.id} className="border p-4 mb-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>
                <span className="font-semibold">Difficulty:</span> {project.difficulty}
              </p>
              <p>
                <span className="font-semibold">Field of Learning:</span> {project.field}
              </p>
              <p>
                <span className="font-semibold">Points:</span> {project.points}
              </p>
              <Link href={project.href} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md inline-block mt-2">
                     Start Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyWorkshop;