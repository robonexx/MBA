import type { PortableTextBlock  } from 'sanity'

export type WrittenTypes = {
    _id: string;
    createdAt: Date;
    title: string;
    slug: string;
    author: string;
    customer: string;
    year: string;
    duration: string;
    premier: string;
    score: string;
    songUrl: string;
    image: string;
    url: string;
    desc: PortableTextBlock[];
}