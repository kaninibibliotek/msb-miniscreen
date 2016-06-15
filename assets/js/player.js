var player = (function() {
  var playlist = [];
  var playlistIndex = 0;
  var queue = [];
  var run = false;

  function next() {
    if (!run) {
      return;
    }

    var nextIndex = (playlistIndex + 1) % playlist.length;
    var nextItem  = playlist[nextIndex];

    var duration = containers.show(playlist[playlistIndex]);

    if (nextItem.type !== 'video') {
      // If we are going to load an image, wait for the transition to end
      // so it doesn't change during the transition.
      setTimeout(function() {
        containers.load(nextItem);
      }, 1000);
    } else {
      containers.load(nextItem);
    }

    if (++playlistIndex >= playlist.length) {
      playlist = queue;

      queue = [];

      playlistIndex = 0;
    }

    setTimeout(next, duration);
  }

  return {
    setPlaylist: function(newPlaylist) {
      queue = newPlaylist;
    },

    start: function() {
      if (run) {
        return;
      }

      playlist = queue;

      containers.load(playlist[0]);

      run = true;

      next();
    },

    stop: function() {
      run = false;
    },

    get isPlaying() {
      return run;
    }
  };
})();
