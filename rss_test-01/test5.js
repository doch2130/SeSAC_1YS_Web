let Parser = require('rss-parser');
let parser = new Parser();

const cheerio = require('cheerio');
// const request = require('request');

let url = 'https://trends.google.com/trends/trendingsearches/daily/rss?geo=KR';

(async () => {

  let feed = await parser.parseURL('https://trends.google.com/trends/trendingsearches/daily/rss?geo=KR');

  console.log(feed);
  // console.log(feed.title);

  let keywords = [];
  let traffic = [];
  let itemtitle = [];

  // keywords.append()

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();
