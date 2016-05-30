function onReceivedPlaylist(playlist) {
  console.log("received", playlist);
  player.setPlaylist(playlist);
}

var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (request.readyState === 1) {
    request.send();
  }

  if (request.readyState === 4 && request.status == 200) {
    onReceivedPlaylist(JSON.parse(request.response));
  }
};

request.open('GET', constants.URL + 'blixt');
