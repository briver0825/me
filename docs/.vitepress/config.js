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
          { text: 'TypeScript', link: '/programming/typescript/Introduction' },
          { text: 'Docker', link: '/programming/docker/介绍' },
          { text: 'Nginx', link: '/programming/nginx/介绍' },
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
            { text: '事务', link: '/programming/mysql/事务' },
            { text: '建表约束', link: '/programming/mysql/constraint' },
            { text: '多表查询', link: '/programming/mysql/多表查询' }
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
      '/programming/docker/': [
        {
          text: 'Docker',
          items: [
            { text: '介绍', link: '/programming/docker/介绍' },
            { text: '镜像', link: '/programming/docker/镜像' },
            { text: '容器', link: '/programming/docker/容器' },
            { text: '存储', link: '/programming/docker/存储' },
            { text: '网络', link: '/programming/docker/网络' },
            { text: 'Docker File', link: '/programming/docker/Dockerfile' },
            { text: 'Docker Compose', link: '/programming/docker/Docker Compose' },
          ]
        }
      ],
      '/programming/nginx/': [
        {
          text: 'Nginx',
          items: [
            { text: '介绍', link: '/programming/nginx/介绍' },
            { text: '配置', link: '/programming/nginx/配置' },
            { text: '防盗链', link: '/programming/nginx/防盗链' },
          ]
        }
      ],
      '/university/linux/': [
        {
          text: 'Linux',
          items: [
            { text: '文件管理', link: '/university/linux/file-management' },
            { text: '用户管理', link: '/university/linux/user-management' },
            { text: '用户组管理', link: '/university/linux/user-group-management' },
            { text: '权限管理', link: '/university/linux/authority-management' },
            { text: '磁盘管理', link: '/university/linux/disk-management' },
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