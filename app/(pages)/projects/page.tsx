// pages/projects.tsx
import React from 'react';
import { IconBrandAdobe , IconFileTypeCss , IconShoppingCart , IconSeo , IconBrandJavascript , IconBrandShopee, IconBrandStripe,IconBrandWordpress ,IconLanguageHiragana} from '@tabler/icons-react';


const projects = [
  {
    title: 'Create Paris',
    description: 'Store for a unique fragrance brand.',
    technologies: [<IconBrandAdobe />,<IconFileTypeCss />,<IconShoppingCart />,<IconLanguageHiragana />], // Use icons here
    screenshot: '/projectimgs/create.webp', 
    link: 'https://createparis.com/',
  },
  {
    title: 'Al-Qataf',
    description: 'Law Firm website.',
    technologies: [<IconBrandWordpress />,<IconBrandAdobe />,<IconFileTypeCss />,<IconSeo />], // Use icons here
    screenshot: '/projectimgs/qataf.webp', 
    link: 'https://alqattaf.com/',
  },
  {
    title: 'Dharma Trading',
    description: 'Bulk supplier of food and beverages.',
    technologies: [<IconBrandShopee />,<IconBrandJavascript />,<IconFileTypeCss />,<IconBrandStripe />], // Use icons here
    screenshot: '/projectimgs/dharma.webp', 
    link: 'https://dharmatradinguae.com/',
  },
  {
    title: 'Smart Drive Solutions',
    description: 'Oils and additives and German car spare parts.',
    technologies: [<IconBrandAdobe />,<IconFileTypeCss />,<IconShoppingCart />,<IconSeo />], // Use icons here
    screenshot: '/projectimgs/sdsarabia.webp', 
    link: 'https://sdsarabia.com/',
  },
  
  
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-8 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md p-6 mb-4 flex flex-col justify-between"
          >
            <h2 className="text-xl font-bold mb-2 self-center">{project.title}</h2>
            <p className="text-gray-600 mb-4 self-center">{project.description}</p>
            <div className="flex items-center mb-4 self-center">
              {project.technologies.map((icon, iconIndex) => (
                <span key={iconIndex} className="mr-2 text-gray-500">
                  {icon}
                </span>
              ))}
            </div>
            <img
              src={project.screenshot}
              alt={project.title}
              className="mb-4 rounded-md"
              width='auto'
            />
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline self-center"
            >
              Visit the website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
