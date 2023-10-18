import type { File, PortableTextBlock} from 'sanity'

export type FilmTypes = {
    _id: string;
    createdAt: Date;
    title: string;
    slug: string;
    producers: string;
    description: PortableTextBlock[];
    link?: string;
    image: string;
}