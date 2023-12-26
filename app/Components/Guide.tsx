import { IconThumbUp, IconTrophy } from "@tabler/icons-react";
import Image from "next/image";

import playImage from "../../public/discord.webp";

const features = [
  {
    name: "Collaborative Environment.",
    description:
      "Connect with like-minded individuals who share your passion for digital work. Collaborate on projects, exchange ideas, and build a network that will fuel your online success.",
    icon: IconTrophy,
  },
  {
    name: "Supportive Community.",
    description:
      " Join a supportive community where everyone is invested in your success. Share your achievements, seek advice, and celebrate milestones together.",
    icon: IconThumbUp,
  },
];

export default function PlayerFeatures() {
  return (
    <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
    <div className="overflow-hidden mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 max-w-7xl px-6 lg:px-8 bg-slate-50 rounded-lg py-8 lg:py-32 ">
      <div className="lg:pr-8 lg:max-w-lg">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Better learning
        </h2>

        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Free Access to Lessons
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-600">
        Dive into a treasure trove of resources curated to help you master the skills required for online work and freelancing. From programming and design to marketing and writing, we've got you covered.
        </p>

        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                {feature.icon && (
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                    aria-hidden="true"
                  />
                )}
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Image
        src={playImage}
        alt="Screenshot of the course list"
        className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
        width={1024}
        height={805}
        unoptimized
      />
    </div>
    </main>
  );
}
