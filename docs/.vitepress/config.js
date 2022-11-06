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
            { text: '介绍', link: '/programming/mysql/Introduction' },
            { text: 'DDL', link: '/programming/mysql/DDL' },
            { text: 'DML', link: '/programming/mysql/DML' },
            { text: 'DQL', link: '/programming/mysql/DQL' },
            { text: 'DCL', link: '/programming/mysql/DCL' },
            { text: '函数', link: '/programming/mysql/函数' },
            { text: '多表查询', link: '/programming/mysql/多表查询' },
            { text: '事务', link: '/programming/mysql/事务' }
          ]
        }
      ],
      '/programming/redis/': [
        {
          text: 'Redis',
          items: [
            { text: '介绍', link: '/programming/redis/Introduction' },
            { text: '数据类型', link: '/programming/redis/数据类型' },
            { text: '通用命令', link: '/programming/redis/通用命令' },
          ]
        }
      ],
      '/programming/typescript/': [
        {
          text: 'TypeScript',
          items: [
            { text: '介绍', link: '/programming/typescript/Introduction' },
            { text: '基础类型', link: '/programming/typescript/basic-types' },
            { text: 'Functions', link: '/programming/typescript/functions' },
            { text: 'Enums', link: '/programming/typescript/enums' },
            { text: 'Assert', link: '/programming/typescript/assert' },
            { text: 'Generics', link: '/programming/typescript/generics' },
            { text: 'Class', link: '/programming/typescript/classes' },
            { text: 'Interfaces', link: '/programming/typescript/interfaces' },
            { text: 'Types', link: '/programming/typescript/types' },
            { text: 'Types and Interface', link: '/programming/typescript/types-and-interface' },
          ]
        }
      ],
      '/university/linux/': [
        {
          text: 'Linux',
          items: [
            { text: '文件管理', link: '/university/linux/file-management' },
            { text: 'Vim', link: '/university/linux/vim' }
          ]
        }
      ],
    },
    footer: {
      copyright: 'Copyright © 2022-present Briver'
    }
  }
}