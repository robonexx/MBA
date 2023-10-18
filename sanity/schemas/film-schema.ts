
const film = {
    name: 'film',
    title: 'Film',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'The title of the project',
            type: 'string',
            validation: (rule: { required: () => any }) => rule.required(),
        },
     {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: 'title'
            },
            validation: (rule: { required: () => any }) => rule.required(),
        },
        {
            name: 'producers',
            title: 'Producers',
            type: "string",
            description: 'Who made the film'
        },
        {
            name: 'description',
            description: 'aditional content description / text',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
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
        }
    ]
}

export default  film 
