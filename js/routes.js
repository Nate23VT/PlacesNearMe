var routes = [
  // Index page
  {
    path: '/home/',
    url: './index.html',
    name: 'home',
  },
  // About page
 {
    path: '/about/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Requested route
      // Get external data and return template7 template
      app.request.json('data.json', function (data) {
          var items = [];
          for (var i = 0; i < data.news.length; i++) {
              items.push({
                ID: data.news[i].ID,
                TitleImg: data.news[i].TitleImg,
                Title: data.news[i].Title,
                Header: data.news[i].Header
              });
              console.log(data.news[i]);
            }
          console.log(items);
        resolve(
          {
            template: `<div class="page">
                        <div class="navbar">
                            <div class="navbar-inner sliding">
                              <div class="left">
                                <a href="/home/" class="link" data-animate="false" >
                                  <i class="icon icon-back"></i>
                                  <span class="ios-only">Back</span>
                                </a>
                              </div>
                              <div class="title">News</div>
                            </div>
                          </div>
                          <div class="page-content">
                            {{#each items}}
                            <div class="card demo-card-header-pic">
                                <a href="/about/{{ID}}/">
                                  <div style="background-image:url({{TitleImg}})" class="card-header align-items-flex-end"><div class="card-headerTxt">{{Title}}</div></div>
                                  <div class="card-content card-content-padding">
                                    <p>{{Header}}</p>
                                  </div>
                                    </a>
                                </div>
                            {{/each}}
                        </div>`
          },
          {
             context: { items: items }
          }
        );
      });
    }
  },
    {
    path: '/stories/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Requested route
      // Get external data and return template7 template
      app.request.json('data.json', function (data) {
          var stories = [];
          for (var i = 0; i < data.stories.length; i++) {
              stories.push({
                ID: data.stories[i].ID,
                TitleImg: data.stories[i].TitleImg,
                Title: data.stories[i].Title,
                Header: data.stories[i].Header
              });
            }
          console.log(stories);
        resolve(
          {
            template: `<div class="page">
                        <div class="navbar">
                            <div class="navbar-inner sliding">
                              <div class="left">
                                <a href="/home/" class="link" data-animate="false" >
                                  <i class="icon icon-back"></i>
                                  <span class="ios-only">Back</span>
                                </a>
                              </div>
                              <div class="title">Stories</div>
                            </div>
                          </div>
                          <div class="page-content">
                            {{#each stories}}
                            <div class="card demo-card-header-pic">
                                <a href="/stories/{{ID}}/">
                                  <div style="background-image:url({{TitleImg}})" class="card-header align-items-flex-end"><div class="card-headerTxt">{{Title}}</div></div>
                                  <div class="card-content card-content-padding">
                                    <p>{{Header}}</p>
                                  </div>
                                    </a>
                                </div>
                            {{/each}}
                        </div>`
          },
          {
            context: { stories: stories }
          }
        );
      });
    }
  },
    {
    path: '/exercises/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Requested route
      // Get external data and return template7 template
      app.request.json('data.json', function (data) {
         var items = [];
          for (var i = 0; i < data.exercises.length; i++) {
              items.push({
                ID: data.exercises[i].ID,
                TitleImg: data.exercises[i].TitleImg,
                Title: data.exercises[i].Title,
                Header: data.exercises[i].Header,
                Description: data.exercises[i].Description
              });
            }
          console.log(items);
        resolve(
          {
            template: `<div class="page">
                        <div class="navbar">
                            <div class="navbar-inner sliding">
                              <div class="left">
                                <a href="/home/" class="link" data-animate="false" >
                                  <i class="icon icon-back"></i>
                                  <span class="ios-only">Back</span>
                                </a>
                              </div>
                              <div class="title">Exercises</div>
                            </div>
                          </div>
                          <div class="page-content">
<div class="list accordion-list">
  <ul>
    
                            {{#each items}}
                            <div class="card demo-card-header-pic">
                                <a href="/about/{{ID}}/">
                                  <div style="background-image:url({{TitleImg}})" class="card-header align-items-flex-end"><div class="card-headerTxt">{{Title}}</div></div>
                                  <div class="card-content card-content-padding">
                                    <li class="accordion-item">
                                    <a href="#" class="item-content item-link">
                                            <div class="item-inner">
                                              <div class="item-title">{{Header}}</div>
                                            </div></a>
                                          <div class="accordion-item-content">
                                            <div class="block">
                                              <p>{{Description}}</p>
                                            </div>
                                          </div>
                                    </div>
                                  </li>
                                    </a>
                                </div>
                            {{/each}}
                        </div>`
          },
          {
             context: { items: items }
          }
        );
      });
    }
  },
  {
    path: '/about/:storyId/',
    url: './pages/about.html?id={{storyId}}',
    name: 'story',
  },
    {
    path: '/stories/:storyId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Requested route
      // Get external data and return template7 template
      app.request.json('data.json?storyId={{storyId}}', function (data) {
          for (var i = 0; i < data.stories.length; i++) {
              items.push({
                ID: data.stories[i].ID,
                TitleImg: data.stories[i].TitleImg,
                Title: data.stories[i].Title,
                Header: data.stories[i].Header
              });
              console.log(data.stories[i]);
            }
          console.log(items);
        resolve(
          {
            template: `<div class="page">
                        <div class="navbar">
                            <div class="navbar-inner sliding">
                              <div class="left">
                                <a href="#" class="link back">
                                  <i class="icon icon-back"></i>
                                  <span class="ios-only">Back</span>
                                </a>
                              </div>
                              <div class="title">Case Study: LEGO</div>
                            </div>
                          </div>
                          <div class="page-content">
                            <div class="card demo-card-header-pic" v-for="item in items">
                                <a href="/stories/1/">
                                  <div style="background-image:url(img/Lego.png)" class="card-header align-items-flex-end"></div>
                                  <div class="card-content card-content-padding">
                                    <p>
                                        <div class="video-responsive">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/L7Uo5Q9tLAY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                        </div>
                                    </p>
                                  </div>
                                    </a>
                                </div>
                          </div>
                        </div>`
          },
          {
            items: items,
          }
        );
      });
    }
  },
    
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
