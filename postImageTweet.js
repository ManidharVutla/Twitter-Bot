console.log('Bot started');

var Twit = require('twit');

var config=require('./config');

var T = new Twit(config);

var fs=require('fs')
var exec= require('child_process').exec;


tweetIt();

function tweetIt()
{
    var cmd= 'processing-java --sketch="C:\Users\Manidhar Vutla\Desktop\Stuff\Twitter-Bot\rainbow" --run';
    exec(cmd, processing);
    function processing()
    {
        var filename='rainbow/output.png';
        var params={ encoding: 'base64' };
        var b64 = fs.readFileSync(filename, params);
        T.post('media/upload', { media_data: b64 }, uploaded);

        function uploaded(err, data, response)
        {
            var id = data.media_id_string ;
            var tweet={
                status: '#codingrainbow live from nodejs',
                media_ids: [id]

            }
            T.post('statuses/update', tweet, tweeted);  
        }
       
           
   
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

}