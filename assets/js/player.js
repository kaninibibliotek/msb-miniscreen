var player = (function() {
  var playlist = [];
  var playlistIndex = 0;
  var queue = [];
  var isPlaying = false;

  function next() {
    var nextIndex = (playlistIndex + 1) % playlist.length;

    var duration = containers.show(playlist[playlistIndex]);

    if (playlist[nextIndex].type !== 'video') {
      // If we are going to load an image, wait for the transition to end
      // so it doesn't change during the transition.
      setTimeout(function() {
        containers.load(playlist[nextIndex]);
      }, 1000);
    } else {
      containers.load(playlist[nextIndex]);
    }

    if (++playlistIndex >= playlist.length) {
      console.log("resetting");
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
      playlist = queue;

      containers.load(playlist[0]);

      next();

      isPlaying = true;
    },

    get isPlaying() {
      return isPlaying;
    }
  };
})();
