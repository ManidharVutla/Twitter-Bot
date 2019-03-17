console.log('Bot started');

var Twit = require('twit');

var config=require('./config');

var T = new Twit(config);

var stream=T.stream('user');

stream.on('follow', followed);


function followed(event)
{
    console.log('Someone followed you!');
    var name=event.source.name;
    var screenName=event.source.screen_name;
    tweetIt('.@' + screenName + 'do you like a rainbow')''
}
function tweetIt(txt)
{
    
    var tweet={
        status: txt
    }
    T.post('statuses/update', tweet, tweeted); 

    function tweeted(err, data, response) {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("It worked");

        }
    }

}