var cm = require('cloudmine');

var ws = new cm.WebService({
  appid: "a24f8f279128f749261986521d11abc2",
  apikey: "3fd216a6d1bb40d59bef6eeb008a6394"
});

module.exports = function(req, reply) {
  var body = req.payload.request.body;

  var numObjects = req.payload.request.body['number'] ? req.payload.request.body['number'] : 50;

  var names = ["John", "Alice", "Elfreth", "Esther"];

  var successCount = 0;
  var errorCount = 0;
  var total = 0;

  for (var i=0; i < numObjects; i++){
    var object = {
      name: names[Math.floor(Math.random() * names.length)],
      age: Math.floor((Math.random() * 62) + 18),
      temp: Math.floor((Math.random() * 5) + 97)
    }
    ws.set('', object).on('success', function(successData){
      successCount++;
      total++;

      if (total == numObjects){
        reply({
          success: successCount,
          error: errorCount,
        })
      }

    }).on('error', function(errorData){
      errorCount++;
      total++;

      if (total == numObjects){
        reply({
          success: successCount,
          error: errorCount,
        })
      }

    });
  }
};
