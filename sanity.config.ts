import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
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

