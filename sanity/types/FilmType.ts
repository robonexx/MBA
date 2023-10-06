import type { File, Image, PortableTextBlock, Slug } from 'sanity'

export type FilmTypes = {
    _id: string;
    createdAt: Date;
    title: string;
    slug: Slug;
    producers: string;
    description: PortableTextBlock[];
    links?: string;
    image: Image;
    preview: File;
}