import { PortableTextBlock } from "sanity";

export type StageTypes = {
  _id: string;
  createdAt: Date;
  title: string;
  slug: string;
  producers: string;
  description: PortableTextBlock[];
  links?: { watch?: string; listen?: string; read?: string };
  image: string;
}