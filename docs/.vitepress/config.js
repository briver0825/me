export default {
  title: "Briver",
  themeConfig: {
    nav: [
      // { text: 'Guide', link: '/guide' },
      {
        text: 'Programming',
        items: [
          { text: 'Mysql', link: '/programming/mysql/Introduction' },
          { text: 'Redis', link: '/programming/redis/Introduction' },
          { text: 'TypeScript', link: '/programming/typescript/Introduction' }
        ]
      },
      {
        text: 'University courses',
        items: [
          { text: 'Linux', link: '/university/linux/file-management' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaozhuclassmate' }
    ],
    sidebar: {
      '/programming/mysql/': [
        {
          text: 'Mysql',
          items: [
            { text: '介绍', link: '/mysql/Introduction' },
            { text: 'DDL', link: '/mysql/DDL' },
            { text: 'DML', link: '/mysql/DML' },
            { text: 'DQL', link: '/mysql/DQL' },
            { text: 'DCL', link: '/mysql/DCL' },
            { text: '函数', link: '/mysql/函数' },
            { text: '多表查询', link: '/mysql/多表查询' },
            { text: '事务', link: '/mysql/事务' }
          ]
        }
      ],
      '/programming/redis/': [
        {
          text: 'Redis',
          items: [
            { text: '介绍', link: '/redis/Introduction' },
            { text: '数据类型', link: '/redis/数据类型' },
            { text: '通用命令', link: '/redis/通用命令' },
          ]
        }
      ],
      '/programming/typescript/': [
        {
          text: 'TypeScript',
          items: [
            { text: '介绍', link: '/typescript/Introduction' },
            { text: '基础类型', link: '/typescript/basic-types' },
            { text: 'Functions', link: '/typescript/functions' },
            { text: 'Enums', link: '/typescript/enums' },
            { text: 'Assert', link: '/typescript/assert' },
            { text: 'Generics', link: '/typescript/generics' },
            { text: 'Class', link: '/typescript/classes' },
            { text: 'Interfaces', link: '/typescript/interfaces' },
            { text: 'Types', link: '/typescript/types' },
            { text: 'Types and Interface', link: '/typescript/types-and-interface' },
          ]
        }
      ]
    },
    footer: {
      copyright: 'Copyright © 2022-present Briver'
    }
  }
}