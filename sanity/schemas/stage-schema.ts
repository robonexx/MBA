
const stage = {
    name: 'stage',
    title: 'Stage',
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
            description: 'Slug is the link the the page will have',
            options: {
                source: 'title'
            },
            validation: (rule: { required: () => any }) => rule.required(),
        },
        {
            name: 'producers',
            title: 'Producers',
            type: 'array',
            description: 'Who did the piece',
            of: [{ type: 'block' }],
            validation: false,
        },
        {
            name: 'description',
            description: 'aditional content description / text',
            title: 'Description',
            type: 'array',
            validation: (rule: { required: () => any }) => rule.required(),
            of: [{ type: 'block' }],
            
        },
        {
            name: 'links',
            title: 'Links',
            type: 'object',
            fields: [
                {
                    name: 'watch',
                    title: 'Link to live project',
                    type: 'url',
                },
                {
                    name: 'listen',
                    title: 'Link to audio sound',
                    type: 'url',
                },
                {
                    name: 'read',
                    title: 'Link to file',
                    type: 'url',
                },
            ],
        },
        {
            name: 'image',
            title: 'Main image',
            type: 'image',
            validation: (rule: { required: () => any }) => rule.required(),
        },
    ]
}

export default  stage 
