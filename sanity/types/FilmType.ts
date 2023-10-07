import type { File, PortableTextBlock} from 'sanity'

export type FilmTypes = {
    _id: string;
    createdAt: Date;
    title: string;
    slug: string;
    producers: string;
    description: PortableTextBlock[];
    links?: string;
    image: string;
    preview: File;
}