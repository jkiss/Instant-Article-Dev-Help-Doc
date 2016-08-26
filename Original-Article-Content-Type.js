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

{
  header:{
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
