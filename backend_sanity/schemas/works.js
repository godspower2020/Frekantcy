export default {
    name: 'workTitle',
    title: 'Kind Of Work',
    type: 'document',
    fields: [
    {
      name: 'title',
      title: 'Initial Title',
      type: 'string',
    },
    {
      name: 'titleOne',
      title: 'First Title',
      type: 'string',
    },
    {
      name: 'titleTwo',
      title: 'Second Title',
      type: 'string',
    },
    {
      name: 'titleThree',
      title: 'Third Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Initial Description',
      type: 'string',
    },
      {
        name: 'descriptionOne',
        title: 'First Work Description',
        type: 'string',
      },
      {
        name: 'descriptionTwo',
        title: 'Second Work Description',
        type: 'string',
      },
      {
        name: 'descriptionThree',
        title: 'Third Work Description',
        type: 'string',
      },
      {
        name: 'heroImg',
        title: 'Hero Image',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'array',
        of: [
          { type: 'image', },
        ],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'tags',
        title: 'Tags',
        type:'array',
        of: [
         {
           name:'tag',
           title:'Tag', 
           type:'string'
         }
       ]
      },
      {
        name: 'worksList',
        title: 'Works List',
        type:'array',
        of: [
         {
           name:'workList',
           title:'Work List',
           type:'string'
         }
       ]
      },
      {
        name:'appleColor',
        title:'apple Color',
        type:'string'
      }
    ]
  };