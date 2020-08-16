module.exports = {
    title: 'vuepress_demo', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    // description: 'vuepress', // meta 中的描述文字，用于SEO
    // // 注入到当前页面的 HTML <head> 中的标签
    // head: [
    //     ['link',
    //         { rel: 'icon', href: '/hero.png' }
    //         //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    //     ],
    // ],
    themeConfig: {
      logo: '/hero.png',
      nav: [
        { text: '首页', link: '/' },
        { text: '谷歌', link: 'https://google.com' },
      ],
      sidebar: {
        '/guide/': [
            {
                title: '后端',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                //path:'/guide/data.html',
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    ['data.md', '数据'],
                    ['run.md', '运维']
                ]
              },
              {
                title: '前端',
                collapsable: false, 
                sidebarDepth: 1,   
                children: [
                    ['view.md', '展示'],
                ]
              }
        ]
      }
    }
  }