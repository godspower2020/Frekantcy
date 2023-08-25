export default{
    name:'imgList',
    title:'Image List',
    type: 'document',
    fields:[
        {
            name:'img',
            title:'Images',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'name',
            title:'Name',
            type:'string'
        }
    ]
}