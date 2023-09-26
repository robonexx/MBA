
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
            type: 'array',
            description: 'Who made the film',
            of: [{ type: 'block' }],
        },
        {
            name: 'description',
            description: 'aditional content description / text',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
        {
            name: 'image',
            title: 'Main image',
            type: 'image',
        },
        {
            name: 'preview',
            title: 'Preview video',
            description: 'The preview gif or movie file',
            type: 'file',
        },
    ]
}

export default  film 
