import TagsItem from "./Card.realization.tags.item";
import CardRealizationTags from "./Card.realization.tags";
import { FaGithub, FaGlobe } from "react-icons/fa";

type Realization = {
  title: string;
  url: string;
  urlGithub: string;
  tags: string[];
  description: string[];
  image: string;
};

export default function CardRealization({
  realization,
}: {
  realization: Realization;
}) {
  return (
    <div className="mx-auto md:mx-0 my-3 px-0 py-2 md:px-4 h-[400px] min-h-[200px] w-full lg:w-1/2">
      <div className="w-full h-full bg-gray-600 rounded-md realization shadow-rl shadow-gray-400">
        <div className=" w-full h-full relative overflow-hidden rounded-md">
          <img
            loading="lazy"
            src={realization.image}
            className="object-cover object-top w-full h-full rounded-md"
          />
          <div className="w-full h-full absolute bg-white  border-t border-gray-300 right-0 left-0 top-[85%] transition-all duration-700 ease-in-out realization-overlay px-4 pb-4 flex flex-col">
            {/* title */}
            <div className="w-full h-[calc(15%)] flex items-center justify-center cursor-default">
              <h1 className="text-lg md:text-xl lg:text-2xl font-semibold font-coiny">
                {realization.title}
              </h1>
            </div>

            {/* tags */}
            <CardRealizationTags>
              {realization.tags.map((tag, index) => (
                <TagsItem key={index} tag={tag} />
              ))}
            </CardRealizationTags>

            {/* descriptions */}

            <ul className="flex-1 mb-4 overflow-y-scroll cursor-default">
              {realization.description.map((desc, index) => (
                <li
                  key={index}
                  className="py-1 px-2 text-gray-800 font-light text-sm"
                >
                  {desc}
                </li>
              ))}
            </ul>

            {/* buttons */}
            <div className="flex w-full items-center justify-around space-x-2">
              <a
                target="_blank"
                href={realization.url}
                className=" w-[120px] md:my-4 px-2 py-1.5 bg-amber-200 text-amber-800 flex items-center justify-center rounded-md shadow-md hover:bg-amber-300 transition-all duration-300 ease-in-out"
                type="button"
              >
                <FaGlobe className="inline-block mr-1" />
                <span>Voir le site</span>
              </a>
              <a
                target="_blank"
                href={realization.urlGithub}
                type="button"
                className=" w-[120px] md:my-4 px-2 py-1.5 bg-black text-white flex items-center justify-center rounded-md shadow-md hover:bg-gray-700 transition-all duration-300 ease-in-out"
              >
                <FaGithub className="inline-block mr-1" />
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
