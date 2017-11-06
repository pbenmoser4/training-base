var cm = require('cloudmine');
var _ = require('underscore');

module.exports = function(req, reply){
  var session = req.payload.session;
  var body = req.payload.request.body;

  var ws = new cm.WebService({
    appid: session.app_id.toString(),
    apikey: session.api_key.toString()
  });

  var date = new Date();

  var additional_fields = {
    date: date,
    location: "Philadelphia, PA",
    awesome: true
  }

  ws.set('', _.extend(body["object"], additional_fields)).on('complete', function(data){
    reply(data);
  })

}
