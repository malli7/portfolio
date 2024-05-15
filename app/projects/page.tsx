import React from "react";
import { client, ProjectType } from "../lib/sanity";
import Image from "next/image";

const getData = async () => {
  const query = `*[_type == 'project'] | order(_createdAt desc){
        _id,
        title,
        description,
        link,
        tags,
        "imageUrl":image.asset -> url
      }`;

  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });
  return data;
};

const page = async () => {
  const data: ProjectType[] = await getData();

  return (
    <section className="max-w-7xl w-full px4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Projects</h1>
      <p className="leading-7 text-muted-foreground mt-2">
        Checkout what projects I have created
      </p>
      <div className="py-12 grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 lg:gap-12">
        {data.map((item) => (
          <div className="group block">
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
    </section>
  );
};

export default page;
