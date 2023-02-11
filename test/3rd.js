const axios = require('axios');

const TTBKey = 'ttbdoch21301445001';

axios({
  method: 'get',
  url: `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${[TTBKey]}&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`
})
.then((response) => {
  console.log(response.data);
});
