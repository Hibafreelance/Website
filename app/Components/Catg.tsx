import Image from "next/image";


const categories = [
  {
    key: "cat0",
    href: "https://discord.com/channels/1115244106281648128/1187876269849854013",
    img: null,
    text:'Coding'
  },
  {
    key: "cat1",
    href: "https://discord.com/channels/1115244106281648128/1187876312883408937",
    img: null,
    text:'Graphic Design'
  },
  {
    key: "cat2",
    href: "https://discord.com/channels/1115244106281648128/1187876363005333665",
    img: null,
    text:'Marketing'
  },
  {
    key: "cat3",
    href: "https://discord.com/channels/1115244106281648128/1187876408953929768",
    img: null,
    text:'Customer Support'
  },
  {
    key: "cat4",
    href: "https://discord.com/channels/1115244106281648128/1187876440247652494",
    img: null,
    text:'Data Entry'
  },
  {
    key: "cat5",
    href: "https://discord.com/channels/1115244106281648128/1187876479602802718",
    img: null,
    text:'Project Managment'
  },
];

export default async function Catg() {
  return (
    <div className="bg-slate-50 rounded-lg mt-10 mx-auto max-w-7xl p-8">
      <h2 className="text-lg font-semibold leading-8 text-gray-900">
        What can you learn with us ?
      </h2>

      <div className="grid grid-cols-4 w-full items-center mx-auto mt-4 gap-x-8 gap-y-12 sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0">
        {categories.map((cat) => (
          <a
            key={cat.key}
            href={cat.href}
            className="col-span-2 w-full lg:col-span-1"
          >
            {cat.img && (
              <Image
                src={cat.img}
                alt={cat.key}
                unoptimized
                width={158}
                height={48}
                className="max-h-12 object-contain"
              />
            )}

            {!cat.img && (
              <div className="h-12 w-full text-center flex rounded-lg flex-col items-center justify-center leading-8 text-gray-700 bg-slate-200">
                {cat.text}
              </div>
            )}
          </a>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <p className="relative rounded-full bg-gray-100 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-00/5">
          <span className="hidden md:inline">
            Support our open-source project by contributing.
          </span>

          <a
            href="https://discord.com/channels/1115244106281648128/1188065366858022974"
            className="font-semibold text-indigo-600"
          >
            <span className="absolute inset-0" aria-hidden="true" /> See How ? <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </div>
  );
}