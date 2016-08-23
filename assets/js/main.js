var request = new XMLHttpRequest();

function requestContent() {
  request.open('GET', constants.URL + screenId);
}

function onError(status) {
  error.showMessage(constants.ERROR_SERVER + status);

  player.stop();
}

function onReceivedPlaylist(playlist) {
  //console.log("received", playlist);

  if (playlist.length === 0) {
    console.log("Empty playlist");
    error.showMessage(constants.ERROR_EMPTY);

    player.stop();
  } else {
    error.hide();

    player.setPlaylist(playlist);

    player.start();
  }
}

request.onreadystatechange = function() {
  if (request.readyState === 1) {
    request.send();
  }

  if (request.readyState === 4) {
    var status = parseInt(request.status);

    switch (status) {
      case 200:
        onReceivedPlaylist(JSON.parse(request.response).results);
        break;
      default:
        onError(status);
    }
  }
};

requestContent();

setInterval(requestContent, constants.POLL_INTERVAL);
