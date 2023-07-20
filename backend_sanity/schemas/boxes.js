export default{
    name:'boxes',
    title:'Boxes',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'dataAosDelay',
            title:'Data-Aos-Delay',
            type:'string'
        }
    ]
}