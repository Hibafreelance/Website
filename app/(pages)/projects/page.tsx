
import React from 'react';
import { IconBrandAdobe , IconFileTypeCss , IconShoppingCart , IconSeo , IconBrandJavascript , IconBrandShopee, IconBrandStripe,IconBrandWordpress ,IconLanguageHiragana ,IconBrandApple ,IconCalendarClock ,IconMessage,IconMail} from '@tabler/icons-react';
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title:'Porjects'
}


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
  {
    title: "Fatha'A",
    description: "Abaya brand for women's.",
    technologies: [<IconBrandAdobe />,<IconBrandApple />,<IconShoppingCart />,<IconSeo />], // Use icons here
    screenshot: '/projectimgs/fatha.webp', 
    link: 'https://fathaa-thelabel.com/en',
  },
  {
    title: "SO Dental",
    description: "Dental health clinic to schedule appointments.",
    technologies: [<IconBrandAdobe />,<IconBrandWordpress />,<IconCalendarClock />,<IconSeo />], // Use icons here
    screenshot: '/projectimgs/sodentaire.webp', 
    link: 'https://santedentaireso.com/en/',
  },
  {
    title: "Volcan",
    description: "Digital market for license and software.",
    technologies: [<IconBrandAdobe />,<IconFileTypeCss />,<IconShoppingCart />,<IconSeo />], // Use icons here
    screenshot: '/projectimgs/volcan.webp', 
    link: 'https://volcanstore.com/',
  },
  {
    title: "Outshine",
    description: "Store for Neon lights.",
    technologies: [<IconBrandAdobe />,<IconFileTypeCss />,<IconShoppingCart />,<IconSeo />], // Use icons here
    screenshot: '/projectimgs/outshine.webp', 
    link: 'https://outshine0.com/',
  },
  {
    title: "Pro Tec",
    description: "Travel Agency that help people plan their trips.",
    technologies: [<IconBrandWordpress />,<IconFileTypeCss />,<IconSeo />,<IconMessage />], // Use icons here
    screenshot: '/projectimgs/protec.webp', 
    link: 'https://protecagency.com/',
  },
  {
    title: "The Mind Weapon",
    description: "PUBG Esport team.",
    technologies: [<IconBrandWordpress />,<IconFileTypeCss />,<IconSeo />,<IconShoppingCart />], // Use icons here
    screenshot: '/projectimgs/tmw.webp', 
    link: 'https://themindweapon.com/',
  },
  {
    title: "Vorvil",
    description: "Clothing brand for young people.",
    technologies: [<IconBrandAdobe />,<IconFileTypeCss />,<IconSeo />,<IconShoppingCart />], // Use icons here
    screenshot: '/projectimgs/vorvil.webp', 
    link: 'https://vorvil.com/',
  },
  {
    title: "NoodyWorld",
    description: "Beauty products shop.",
    technologies: [<IconBrandAdobe />,<IconFileTypeCss />,<IconSeo />,<IconShoppingCart />], // Use icons here
    screenshot: '/projectimgs/noody.webp', 
    link: 'https://noodyworld.com/',
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

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              <img
              src={project.screenshot}
              alt={project.title}
              className="mb-4 rounded-md transition-transform transform hover:scale-105"
              width='auto'
            />
            <span className="text-blue-500 hover:underline self-center">Visit the website</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
