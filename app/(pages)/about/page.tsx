import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About us | Hiba",
    description: "How hiba (the open source platform) got from an idea to a reality."
  };

const About = () => {
    return (
      <div className="bg-gray-100 p-8">
      <div className="container mx-auto bg-white rounded-md p-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">About Hiba</h1>
      <p className="mb-4">
        Welcome to Hiba, a freelance open source community. The name "Hiba" is
        derived from Arabic, meaning a gift from God. We believe in the
        transformative power of learning and earning, and we are here to help
        people build a steady income by acquiring freelance skills.
      </p>
      <p className="mb-4">
        At Hiba, we provide a platform for individuals to learn valuable skills,
        connect with like-minded freelancers, and access opportunities to
        showcase their talents. Our community is built on the principles of
        collaboration, mentorship, and empowerment.
      </p>
      <p>
        Whether you are a seasoned freelancer or just starting your journey,
        Hiba is your partner in success. Join us, explore new horizons, and
        turn your passion into a fulfilling career.
      </p>

      <h1 className="text-3xl font-bold mt-8 mb-4">What Sets Us Apart</h1>
      <h3 className="text-xl font-bold mb-4">Open Source Philosophy</h3>
      <p className="mb-4">
      Hiba embraces the open-source philosophy, making education freely accessible to anyone, anywhere.
      We believe that knowledge should be a communal resource, and by keeping our platform open source,
      we invite collaboration and contributions from a global community of educators, developers, and learners.
      </p>
      <h3 className="text-xl font-bold mb-4">Holistic Learning</h3>
      <p className="mb-4">
      Our platform offers more than just skill acquisition. We provide a holistic learning experience, 
      combining practical freelancing skills with insights into building a sustainable freelancing career.
       From technical expertise to soft skills and business acumen, Hiba equips learners with a well-rounded toolkit for success.
      </p>
      <h3 className="text-xl font-bold mb-4">Community-Centric Approach</h3>
      <p className="mb-4">
      We understand the importance of a supportive community on the freelancing journey. Hiba fosters a vibrant community where learners can connect,
       collaborate, and support each other. Join forums, participate in discussions, and network with fellow freelancers who share your aspirations.
      </p>
      <h1 className="text-3xl font-bold mt-8 mb-4">Join Us on the Journey</h1>
      <p className="mb-4">
      Whether you are looking to make freelancing your main source of income or seeking a supplementary stream of revenue,
       Hiba is here to support your journey. Join us in reshaping the future of work, where individuals can harness their talents to create meaningful and impactful contributions.
      </p>
      <p className="mb-4 font-bold">
      Thank you for being a part of the Hiba community. Let's learn, grow, and make a difference together!
      </p>
    </div>
    </div>
  );
};
  
  export default About;
  