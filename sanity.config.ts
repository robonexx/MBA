import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
/* import project from './sanity/Schemas/project-schema'
import blog from './sanity/Schemas/blog-schema'
import page from './sanity/Schemas/page-schema' */
import schemas from './sanity/schemas'


const config = defineConfig<any>({
    projectId: "hy2vked2",
    dataset: "production",
    title: "mba",
    basePath: "/admin",
    apiVersion: "2023-08-12",
    plugins: [deskTool()],
    schema: {
        types: schemas
    },
})

export default config

/* const studioID = process.env.SANITY_STUDIO_ID

export const config = {
    projectId: '',
    dataset: "production",
    title: "mba",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {
        types: [
            {
                name: "blog",
                title: "Blogs",
                type: "document",
                fields: [
                    {
                        name: "name",
                        title: "Name",
                        type: "string",
                    },
                    {
                        name: "slug",
                        title: "Slug",
                        type: "slug",
                        options: {
                            source: 'name'
                        }
                    },
                    {
                        name: "image",
                        title: "Image",
                        type: "image",
                        options: {
                            hotspot: true,
                        },
                        fields: [
                            {
                                name: "alt",
                                title: "Alt",
                                type: "string",
                            }
                        ]
                    },
                    {
                        name: "content",
                        title: "Content",
                        type: "array",
                        of: [{ type: 'block'}],
                    }
                ]
            },
        ]
    },
} */