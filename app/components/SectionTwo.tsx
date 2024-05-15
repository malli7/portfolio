import Image from "next/image";
import React from "react";
import square from "../../public/square.svg";
import twitter from "../../public/twitter.svg";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";
import {
  aws,
  css,
  docker,
  figma,
  git,
  html,
  java,
  javascript,
  mongodb,
  mysql,
  nextjs,
  nodejs,
  powerbi,
  python,
  reactjs,
  redux,
  tailwind,
  typescript,
} from "../assets";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const icons = [
  html,
  css,
  javascript,
  reactjs,
  nextjs,
  nodejs,
  redux,
  tailwind,
  typescript,
  git,
  docker,
  figma,
  mongodb,
  mysql,
  python,
  java,
  aws,
  powerbi,
];

const socialMedia = [
  {
    id: 1,
    icon: insta,
    name: "Instagram",
    username: "@malli.7",
    link: "https://www.instagram.com/malli.7/",
  },
  {
    id: 2,
    icon: twitter,
    name: "X / Twitter",
    username: "@mallireddy0",
    link: "https://twitter.com/mallireddy0",
  },
  {
    id: 3,
    icon: linkedin,
    name: "Linkedin",
    username: "@mallikarjuna-reddy-gayam",
    link: "https://www.linkedin.com/in/mallikarjuna-reddy-gayam/",
  },
];

const SectionTwo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4">
      <div className="hidden sm:block w-full col-span-1 relative">
        <Image
          src={square}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none">
          <CardHeader>
            <CardTitle>Explore My Stack</CardTitle>
            <CardDescription>Checkout my skills </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((item, index) => (
              <Image src={item} key={index} alt="icon" className="w-16 h-16" />
            ))}
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
            >
              <Image src={item.icon} alt="Icon" className="w-16 h-16" />
              <h1 className="text-2xl font-medium pt-3"> {item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link}>Follow</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
