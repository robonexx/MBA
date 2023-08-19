import { PortableTextBlock } from "sanity";

export type WorkTypes = {
    _id: string;
    createdAt: Date;
    title: string;
    slug: string;
    author: string;
    customer: string;
    year: number;
    duration: number;
    premier: string;
    score: string;
    songUrl: string
    image: string;
    url: string;
    desc: PortableTextBlock[];
}