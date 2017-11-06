var cm = require('cloudmine');

var ws = new cm.WebService({
  appid: "a24f8f279128f749261986521d11abc2",
  apikey: "3fd216a6d1bb40d59bef6eeb008a6394"
});

module.exports = function(req, reply) {
  ws.destroy(null, {all:true}).on('success', function(data){
    var today = new Date();
    reply("On this day, " + today + ", a day that will live in infamy, you destroyed every last object in your application.");
  })
  .on('complete', function(data){
    console.log(data);
  })
}
