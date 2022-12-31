const rssParser = require('rss-parser')

const FEED_URL = 'https://trends.google.com/trends/trendingsearches/daily/rss?geo=KR'

const parser = new rssParser()
// const feed = await parser.parseURL(FEED_URL)
const feed =  parser.parseURL(FEED_URL)

for(const item of feed.items.slice(0, 5)) {
  // console.log(item.link)
  // item.readableDoc = await readableDocFormUrl(item.link)
  item.readableDoc = readableDocFormUrl(item.link)
}

console.log(item.link)
