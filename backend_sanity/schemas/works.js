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
        name: 'isEquipmentsList',
        title: 'Does this work have equipments you want to list out ?',
        type: 'boolean'
      },
      {
        name: 'equipmentsList',
        title: 'Equipments List',
        type:'array',
        of: [
         {
           name:'equipment',
           title:'Equipment', 
           type:'string'
         }
       ]
      },
      {
        name: 'isRepairsList',
        title: 'Does this work have repairs you want to list out ?',
        type: 'boolean'
      },
      {
        name: 'repairsList',
        title: 'Repairs List',
        type:'array',
        of: [
          {
            name:'repair',
            title:'Repair', 
            type:'string'
          }
       ]
      },
      {
        name: 'isImgList',
        title: 'Does this work have images you want to list out ?',
        type: 'boolean'
      },
      {
        name:'imgListText',
        title:'Image List with Text',
        type:'array',
        of:[
            { 
                type:'imgList'
            }
        ]
    },
    ]
  };

  