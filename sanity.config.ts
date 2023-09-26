import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { dataset, projectId, } from './sanity/env'
import schemas from './sanity/schemas'


const config = defineConfig<any>({
    projectId,
    dataset,
    title: "mba",
    basePath: "/admin",
    apiVersion: "2023-08-12",
    plugins: [deskTool()],
    schema: {
        types: schemas
    },
})

export default config

