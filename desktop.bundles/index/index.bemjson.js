module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [
        {elem: 'js', url: 'https://code.jquery.com/jquery-3.3.1.min.js'},
        {elem: 'js', url: 'https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js'},
        { elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'flower' },
    content: [
        {
            block: 'header',
            tag: 'header',
            content: [

            ]
        },
        {
            block: 'content',
            content: [
                {
                    elem: "image",
                    attrs: {id: 'slides'},
                    mix: {block:'flex', mods:{center: 'center'}},
                    content:[{
                        block: 'svg',
                        attrs: {id : "flower"},
                        tag: 'svg',
                    }]
                },
                {
                  block: 'menu',
                  tag: 'menu',
                  content:['https://placeimg.com/340/480/any',
                      'https://placeimg.com/140/480/any',
                      'https://placeimg.com/240/480/any',
                      'https://placeimg.com/440/480/any'
                     ].map((url)=>{
                      return{

                          elem: 'flower',
                          elemMods:{display:'none' },
                          attrs:{href:'#'},
                          tag:'a',
                              content:[
                          {
                              block: 'image',
                              url: url,
                              alt: 'BEM'
                          },

                      ]
                      }
                  })
                },
                {elem: 'text',
                    mix:{block:'flex', mods:{direct: 'column',center: 'start'}},
                content: [
                    {tag:'p',content: 'благотворительный'},
                    {tag:'p',content: 'фонд поддержки'},
                    {tag:'p',content: 'и развития'},
                    {tag:'p',content: 'культурного'},
                    {tag:'p',content: 'творчества'},
                    {tag:'p',content: 'планеты'},
                    {tag:'p',content: 'земля'},
                ]
                }
            ]
        },

    ]
};
