import type { Metadata } from 'next'
export const metadata: Metadata = {
  title:'Environment'
}
const Environment = () => {
    return (
      <div className="bg-gray-100 p-8">
        <div className="bg-white p-8 rounded-md shadow-md max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Environment</h1>
  
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Technology Stack</h2>
            <p>
              Our learning platform is built using Next.js for the frontend,
              utilizing React for a dynamic user interface. We leverage Tailwind
              CSS for styling, keeping our website fast and responsive.
            </p>
          </section>
  
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Development Tools</h2>
            <p>
              Our development team uses popular tools like Visual Studio Code
              for coding, Git for version control, and GitHub for collaboration.
              We follow best practices for code reviews and use GitHub Actions
              for continuous integration and deployment.
            </p>
          </section>
  
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Hosting Infrastructure</h2>
            <p>
              Hiba is hosted on Vercel, a serverless platform that allows us to
              deploy and scale our website seamlessly. The serverless architecture
              ensures high performance and reliability without the need for a
              traditional database.
            </p>
          </section>
  
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Security and Monitoring</h2>
            <p>
              We prioritize security by implementing basic measures to protect
              user data. Our platform is monitored for performance and analytics
              using tools to ensure a smooth and secure learning experience.
            </p>
          </section>
  
          <section>
            <h2 className="text-xl font-bold mb-2">Open Source Contributions</h2>
            <p>
              Hiba is an open-source community, and we welcome contributions
              from everyone. Check out our GitHub repository to explore and
              contribute to our projects.
            </p>
          </section>
        </div>
      </div>
    );
  };
  
  export default Environment;