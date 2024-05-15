import React from "react";
import { client, ProjectType } from "../lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const getData = async () => {
  const query = `*[_type == 'project'] | order(_createdAt desc) [0...2]{
        _id,
        title,
        description,
        link,
        githubLink,
        tags,
        "imageUrl":image.asset -> url
    }`;

  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });
  return data;
};

const FavouriteProjects = async () => {
  const data: ProjectType[] = await getData();

  return (
    <div className="py-10">
      <h1 className="font-medium text-2xl lg:text-3xl ">
        Checkout my Projects
      </h1>
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
        {data.map((item) => (
          <div key={item._id} className="group block">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative">
              <Image
                src={item.imageUrl}
                alt="image"
                fill
                className="object-cover group-hover:scale-105 tion-transform duration-500 ease-in-out rounded-2xl"
              />
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-lg">{item.title}</h2>

              <p className="mt-1 text-muted-foreground line-clamp-3">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tagItem, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20"
                  >
                    {tagItem}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-around mt-5">
                <button
                  type="button"
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  <a href={item.link} target="_blank">
                    Visit
                  </a>
                </button>
                <button
                  type="button"
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  <a href={item.githubLink} target="_blank">
                    View Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full h-px my-8 bg-gray-200 border-0 " />
        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2">
        <Link href="/projects" type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
          Show All
          </Link>

        </span>
      </div>
    </div>
  );
};

export default FavouriteProjects;
