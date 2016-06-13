var request = new XMLHttpRequest();

function requestContent() {
  request.open('GET', constants.URL + screenId);
}

function onReceivedPlaylist(playlist) {
  console.log("received", playlist);
  player.setPlaylist(playlist);

  if (!player.isPlaying) {
    player.start();
  }
}

request.onreadystatechange = function() {
  if (request.readyState === 1) {
    request.send();
  }

  if (request.readyState === 4 && request.status == 200) {
    onReceivedPlaylist(JSON.parse(request.response).results);
  }
};

requestContent();

setInterval(requestContent, constants.POLL_INTERVAL);
