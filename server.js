var express = require('express');
var fs      = require('fs');

var media = [];

fs.readdir(__dirname + '/mediajson', function(err, files) {
  if (err) {
    console.log(err);
  } else {
    files.forEach(function(file) {
      fs.readFile(__dirname + '/mediajson/' + file, 'utf8', function(err, data) {
        if (err) {
          console.log(err);
        } else {
          media.push(JSON.parse(data));
        }
      });
    });
  }
});

var app = express();

app.use(express.static(__dirname));

app.get('/miniscreen/:id', function(req, res) {
  console.log("GET miniscreen", req.params.id);

  res.send(media);
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Miniscreen server running on ' + port);
});
