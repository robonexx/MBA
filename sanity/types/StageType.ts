import { PortableTextBlock } from "sanity";

export type StageTypes = {
  _id: string;
  createdAt: Date;
  title: string;
  slug: string;
  producers: string;
  year: string;
  description: PortableTextBlock[];
  watch: string;
  listen: string;
  read: string;
  image: string;
}