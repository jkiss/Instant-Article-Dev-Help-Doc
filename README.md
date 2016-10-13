# Instant-Article-Dev-Help-Doc

关于开发 Instant Articles 相关的数据结构和示例文件，或直接参考 [官方文档](https://developers.facebook.com/docs/instant-articles?locale=zh_CN)

## Original-Article-Content-Type.js：
这个文件主要包含了两部分内容：

一、根据 CMS 发布的文章所包含的内容总结出的内容类型，主要包含：正文小标题、正文段落、来源引用、单张图片、幻灯片、视频和地图:

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

二、前端从 *contentString* 分解出来的数据类型:

```javascript
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
    author: '',
    section: ''
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
        // x: lat, y: lng [经度，纬度]
        coordinates: [x, y]
      }
    }
  ]
}
```

## Instant-Article-RSS-example.rss
根据咱们文章所包含的内容类型，这个文件包含了一个完整的需要生成的RSS文件所需要的所有元素（是官方元素的一个子集），其中，每一个 **&lt;item&gt;** 包含一篇文章，**&lt;item&gt;** 主要分为两部分：

一、7 个标签：
```xml
<item>
  <title>This is an Instant Article</title>
  <link>http://example.com/article.html</link>
  <guid>2fd4e1c67a2d28fced849ee1bb76e7391b93eb12</guid>
  <pubDate>2014-12-11T04:44:16Z</pubDate>
  <author>CCTVNEWS</author>
  <description>This is my first Instant Article. How awesome is this?</description>
  <content:encoded>
    <![CDATA[
      {以 CDATA 包裹的HTML内容（这部分内容由当前文章的JSON数据结构结合 Instant Articles 指定的HTML5标签重新生成得到）}
    ]]>
  </content:encoded>
</item>
```
详情可以参考[官方文档](https://developers.facebook.com/docs/instant-articles/publishing/setup-rss-feed?locale=zh_CN)

二、**&lt;content:encoded&gt;** 标签里的静态页内容：
```html
<!doctype html>
<html lang="en" prefix="op: http://media.facebook.com/op#">
  <head>
    <meta charset="utf-8">
    <link rel="canonical" href="当前文章静态页地址">
    <meta property="op:markup_version" content="v1.0">
  </head>
  <body>
    <article>
      <header>
        <!-- Article Header Goes Here: -->
        <!-- if 封面是视频： -->
        <figure class="fb-feed-cover">
          <video>
              <source src="http://videos.cctvnews.cn/publish/website/data/data/2016/08/26/1869145/83eac0be-5564-454a-b446-962faab0ee51.mp4" type="video/mp4" />
          </video>
        </figure>
        <!-- elseif 封面是图片： -->
        <figure>
          <img src="http://www.cctvnews.cn/publish/website/data/data/2016/08/26/1869220/ad5be653-5f4e-4969-afb7-0e0d22334ab4.jpg" />
        </figure>
        <!-- endif -->
        
        <!-- Title -->
        <h1>China's next-generation carrier rocket on way to launch site</h1>
        
        <!-- A article's section -->
        <h3 class="op-kicker">
          Introduction
        </h3>
        
        <!-- The author of your article -->
        <address>
          <a rel="facebook" href="https://www.facebook.com/cctvnewschina">CCTVNEWS</a>
        </address>
        
        <!-- The published and last modified time stamps -->
        <time class="op-published" datetime="2016-08-26T06:17:20Z">2016-08-26T06:17:20Z</time>
        <time class="op-modified" dateTime="2016-08-26T06:17:20Z">2016-08-26T06:17:20Z</time>
        
        <!-- End Article Header -->
      </header>
      <!-- Article Body Goes Here: -->
      <h1>正文内小标题</h1>
      <p>正文内段落</p>
      <aside>
        引用的内容
        <cite>source</cite>
      </aside>
      <!-- 单张图片 -->
      <figure data-feedback="fb:likes,fb:comments">
        <img src="http://www.cctvnews.cn/publish/website/data/data/2016/08/26/1869145/1d793e93-b22b-4783-adb5-32ec024f4dfe.jpg" />
        <figcaption>Caption</figcaption>
      </figure>
      <!-- 轮播幻灯片 -->
      <figure class="op-slideshow">
        <figure data-feedback="fb:likes,fb:comments">
            <img src="http://fb.me/ia-img-townhouses.jpg"/>
            <figcaption class="op-vertical-bottom">
              This caption becomes visible once you enter the slideshow by tapping the first image.
            </figcaption>
         </figure>
          
        <figure data-feedback="fb:likes,fb:comments">
          <img src="http://fb.me/ia-img-grafitti.jpg" />
          <figcaption class="op-vertical-bottom">
            Each photo in a slideshow can have its own caption.
          </figcaption>
        </figure>
      </figure>
      <!-- 视频 -->
      <figure data-feedback="fb:likes, fb:comments">
        <img src="http://fb.me/ia-img-video_frame.jpg" /> 
        <video controls>
          <source src="http://fb.me/ia-video-fb_ia_product_video.mov" />
        </video>
      </figure>
      <!-- 地图 -->
      <figure class="op-map">
        <script type="application/json" class="op-geotag">
          {
            "type": "Feature",
            "geometry":
              {
                "type": "Point",
                "coordinates": [ 40.730852, -73.991364 ]
              },
            "properties":
              {
                "radius": 100000,
                "pivot": true
              }
          }
        </script>
      </figure>
      <!-- End Article Body -->
      <!-- GA -->
      <figure class="op-tracker">
        <iframe>
          <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-66998167-4', 'auto');
            ga('send', {
              'hitType': 'pageview',
              'page': 'This is my first Instant Article. How awesome is this?'
            });
          </script>
        </iframe>
      </figure>
      <!-- Footer -->
      <footer>
        <!-- Article Footer Goes Here: -->
        <aside>
          Official account for CCTV NEWS, the English language news channel of China Central Television (CCTV), the nation's largest national broadcasting network.
        </aside>
        <small>© CCTVNEWS</small>
        <!-- End Article Footer -->
      </footer>
    </article>
  </body>
</html>
```
所有元素详情可以参考 [官方文档](https://developers.facebook.com/docs/instant-articles/reference)，旧的 CMS 系统生成的 RSS 文件可以 [参考这里](http://rss.cctvnews.cn/cctvnews.rss)

###生成更新规则：

> 1. 只抓取普通新闻；
> 2. 每次抓取最新的 **100** 篇文章，每隔 **30分钟** 更新一次 RSS
