// const trendsService = require('./google_trends_service');
const trendsService = require('./test1.js');

trendsService.getDailySearchTrends()
.then(trendsList => {
    console.log(JSON.stringify(trendsList, null, 2));
})
.catch(err => console.err);

