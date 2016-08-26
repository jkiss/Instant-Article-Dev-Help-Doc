# Instant-Article-Dev-Help-Doc

关于开发 Instant Articles 相关的数据结构和示例文件

### Original-Article-Content-Type.js：
这个文件主要包含了两部分内容：

一是根据CMS发布的文章所包含的内容总结出的内容类型，主要包含：正文小标题、正文段落、来源引用、单张图片、幻灯片、视频和地图:

```javascript
switch(contentType){
  case 1: '正文段落';
  case 2: '正文小标题';
  case 3: '引用';
  case 4: '单张图片';
  case 5: '轮播图片';
  case 6: '视频';
  case 7: '地图';
}
switch(coverType){
  case 1: '图片头图';
  case 2: '视频头图';
}
```

二是前端从 *contentString* 分解出来的数据类型:

```javascript
{
  data:{
    // cover是图片
    coverType: 1,
    imgUrl: '',

    // cover是视频
    coverType: 2,
    videoUrl: '',

    title: 'headline',
    link: 'shareUrl',
    description: '摘要',
    pubDate: '发布时间',
    author: ''
  },
  detail: [
    { // 正文段落
      contentType: 1,
      content: ''
    },

    { // 正文小标题
      contentType: 2,
      content: ''
    },

    { // 引用
      contentType: 3,
      content: {
        text: '',
        source: ''
      },
    },

    { // 单张图片
      contentType: 4,
      img: {
        url: '',
        caption: ''
      }
    },

    { // 轮播图片
      contentType: 5,
      imgs: [
        {
          url: '',
          caption: ''
        },
        {
          url: '',
          caption: ''
        }
      ]
    },

    { // 视频
      contentType: 6,
      video: {
        url: '',
        poster: '',
        caption: ''
      }
    },

    { // 地图
      contentType: 7,
      geometry: {
        coordinates: [x, y]
      }
    }
  ]
}
```
