export default 
    {
      title: "Product",
      name: "product",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string"
        },
        {
          title: "Description",
          name: "description",
          type: "string"
        }
        ,
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
        }},
        {
          title: "Cost",
          name: "Cost",
          type: "number"
        },
        { 
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 90,
          }
        },
      ]
    }  
  