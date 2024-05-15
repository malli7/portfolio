import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "v24s4w2u",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export interface ProjectType {
  _id: string;
  title: string;
  description: string;
  link: string;
  githubLink: string;
  tags: string[];
  imageUrl: string;
}
