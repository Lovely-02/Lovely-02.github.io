const nav =  [
    { text: '主页', link: '/' },
    { text: '使用帮助', link: '/help/help' },
    { text: '搭建教程', link: '/build/build' },
    {
      text: '功能',
      items: [
        {
          text: '🎮游戏查询', items: [
            { text: '原神', link: '/help/Game/gs', },
            { text: '星铁', link: '/help/Game/sr' },
            { text: '绝区零', link: '/help/Game/zzz' },
            { text: '鸣潮', link: '/help/Game/mc' },
            { text: '方舟', link: '/help/Game/ak' },
          ]
        },
        {
          text: '🎲群聊娱乐', items: [
            { text: '土块', link: '/help/Group/土块', },
            { text: '可爱', link: '/help/Group/可爱' },
            { text: '绘画', link: '/help/Group/绘画' },
            { text: 'GPT', link: '/help/Group/GPT' },
          ]
        },
      ],
    },
    {
        text: '其他',
        items: [
          {
            text: '关于',
            items: [
              { text: 'ZeroTwo', link: '/other/main' },
            ],
          },
          {
            text: '其他',
            items: [
              { text: '投喂', link: '/other/投喂' },
              { text: '联系', link: '/other/联系' },
            ],
          },
      ],
    },
  ]
  
export default nav