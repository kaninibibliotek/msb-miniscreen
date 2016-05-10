var player = (function() {
  var containers = {
    video: video,
    image: image
  };
  var playlist = [];
  var index    = 0;

  function next() {
    var toShow = playlist[index];
    show(toShow);

    if (++index >= playlist.length) {
      utils.shuffle(playlist);

      index = 0;
    }

    setTimeout(function() {
      next();
    }, toShow.duration * 1000);
  }

  function show(showObject) {
    for (var container in containers) {
      containers[container].hide();
    }

    containers[showObject.type].show(showObject.source, showObject.animation);
  }

  return {
    setPlaylist: function(newPlaylist) {
      playlist = newPlaylist;

      utils.shuffle(playlist);

      next();
    }
  };
})();
