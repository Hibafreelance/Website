// pages/freelance-tools.js

import React from 'react';
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title:'Freelance Tools'
}


const toolsByCategory = {
  collaboration: [
    {
      title: 'GitHub',
      description: 'Platform for version control and collaboration.',
      link: 'https://github.com/',
    },
    {
      title: 'Slack',
      description: 'Connect with clients and collaborators through organized channels.',
      link: 'https://slack.com/',
    },
    {
      title: 'Zoom or Google Meet',
      description: 'Virtual meetings and video calls with clients.',
      link: 'https://meet.google.com/',
    },
    {
      title: 'Trello or Asana',
      description: 'Manage projects, tasks, and deadlines collaboratively.',
      link: 'https://trello.com',
    },
  ],
  FileSharing: [
    {
      title: 'Google Drive or Dropbox',
      description: 'Store and share files securely with clients.',
      link: 'https://drive.google.com/',
    },
    {
      title: 'WeTransfer',
      description: 'Send large files to clients without the need for an account.',
      link: 'https://wetransfer.com/',
    }
  ],  
  development: [
    {
      title: 'VS Code',
      description: 'Free source-code editor with a rich ecosystem of extensions.',
      link: 'https://code.visualstudio.com/',
    },
    {
      title: 'Git',
      description: 'The Version control system for tracking changes in source code.',
      link: 'https://git-scm.com/',
    },
    {
      title: 'Postman',
      description: 'A collaboration platform for API development, testing, and monitoring.',
      link: 'https://www.postman.com/',
    },
    {
      title: 'SonarQube',
      description: 'An open-source platform for continuous inspection of code quality.',
      link: 'https://www.sonarsource.com/',
    }
  ],
  design: [
    {
      title: 'Figma',
      description: 'Collaborative interface design tool.',
      link: 'https://www.figma.com/',
    },
    {
      title: 'Canva',
      description: 'Create stunning graphics and marketing materials.',
      link: 'https://www.canva.com/',
    },
    {
      title: 'Gimp',
      description: 'A powerful, open-source alternative to Adobe Photoshop.',
      link: 'https://www.gimp.org/downloads/',
    }
    // Add more tools as needed
  ],
};

const FreelanceToolsPage = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-md shadow-md mb-8">
          <h1 className="text-3xl font-bold mb-6">Freelance Tools</h1>

          {Object.entries(toolsByCategory).map(([category, tools]) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              <ul className="list-disc">
                {tools.map((tool, index) => (
                  <li key={index}>
                    <span className="text-gray-600 font-bold">{tool.title}</span> - {tool.description}{' '}
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Learn more
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelanceToolsPage;
