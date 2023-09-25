const work = {
    name: 'written',

    title: 'Written',

    type: 'document',

    fields:[
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: 'title'
            }
        },
        {
            name: "author",
            title: "Author",
            type: 'string'
        },
        {
            name: "customer",
            title: "Customer",
            type: 'string'
        },
        {
            name: "year",
            title: "Year",
            type: 'number'
        },
        {
            name: "duration",
            title: "Duration",
            type: 'number'
        },
        {
            name: "desc",
            title: "Desc",
            type: "array",
            of: [{ type: 'block'}],
        },
        {
            name: "score",
            title: "Score",
            type: "string",
        },
        {
            name: "songUrl",
            title: "Song url",
            type: "url",
        },
        {
            name: "premier",
            title: "Premier",
            type: "string",
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
    ]
}

export default work;