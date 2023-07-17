export default {
    name: 'works',
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
        name: 'descriptionOne',
        title: 'First Work Description',
        type: 'string',
      },
      {
        name: 'subDescriptionTwo',
        title: 'Second Sub Work Description',
        type: 'string',
      },
      {
        name: 'subDescriptionThree',
        title: 'Third Sub Work Description',
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
        name: 'imgArray',
        title: 'ImageArray',
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
        name: 'equipmentArrays',
        title: 'Equipment Arrays',
        type:'array',
        of: [
         {
           name:'equipmentArray',
           title:'Equipment Array', 
           type:'string'
         }
       ]
      },
      {
        name: 'repairsList',
        title: 'Repairs List',
        type:'array',
        of: [
         {
          type:'repairs'
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

  