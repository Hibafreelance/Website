"use client"

import React, { useState } from 'react';

const FaqPage = () => {
  const faqData = [
    {
      question: 'What is Hiba, and how does it differ from other freelancing platforms?',
      answer: 'Hiba is a free open source platform designed to empower individuals to learn freelancing and work online. What sets Hiba apart is its commitment to being an open-source community-driven project, fostering collaboration and learning among freelancers.',
    },
    {
      question: 'Is Hiba really free to use?',
      answer: 'Yes, the platform is entirely free. We believe in making education accessible to everyone, and our goal is to provide valuable content without any associated costs. Any payments received go towards supporting and maintaining the platfrom.',
    },
    {
      question: 'How can I support the project?',
      answer: 'You can support the project by making voluntary donations. These donations help cover server costs, maintenance, and allow us to continue offering free education. However, contributions are entirely optional, and our main focus is on providing free learning resources.',
    },
    {
        question: 'How can I get started with Hiba?',
        answer: 'Getting started on Hiba is easy! Simply join our Discord , Navigate through the various channels on our Discord server. We have dedicated spaces for general discussions, skill-specific channels, project collaborations, and announcements.',
      },
      {
        question: 'What types of skills and services can I offer or find on Hiba?',
        answer: 'Hiba supports a wide range of skills and services, including but not limited to graphic design, programming, writing, marketing, and more. Our platform is designed to accommodate diverse talents and industries.',
      },
      {
        question: 'Can I collaborate with other freelancers on Hiba for larger projects?',
        answer: 'Absolutely! Hiba encourages collaboration. You can easily connect with other freelancers on the platform to work on larger projects or form teams. Our messaging and project management features facilitate smooth collaboration.',
      },
      {
        question: 'How can I report issues or seek support if I encounter problems while using Hiba?',
        answer: 'If you encounter any issues or need support, our dedicated support team is ready to assist you. Contact any Admin on the discord or send us a direct email to Support@hiba.company',
      },
    // Add more questions and answers as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionToggle = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-gray-100  p-8">
      <div className="bg-white p-8 rounded-md shadow-md max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

        <div>
          {faqData.map((item, index) => (
            <div key={index} className="mb-4 mt-4">
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => handleAccordionToggle(index)}
              >
                <span className="text-gray-600 font-bold">{item.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="mt-2 text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
