let Parser = require('rss-parser');
let parser = new Parser();




(async () => {

  let feed = await parser.parseURL('https://trends.google.com/trends/trendingsearches/daily/rss?geo=KR');

  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();

