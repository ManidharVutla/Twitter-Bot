console.log('Bot started');

var Twit = require('twit');

var config=require('./config');

var T = new Twit(config);

var params= { q: 'rainbow', count: 2 };

T.get('search/tweets', params, goData);

function goData(err, data, response) {
    var tweets= data.statuses;
    for (var i=0;i<tweets.length;i++)
        console.log(tweets[i].text);
  };
