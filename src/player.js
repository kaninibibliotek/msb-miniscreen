var player = (function() {
  var queue      = [];
  var queueIndex = 0;

  function next() {
    var toShow = queue[queueIndex];

    containers.hide();

    containers.show(toShow.index);

    if (++queueIndex >= queue.length) {
      utils.shuffle(queue);

      queueIndex = 0;
    }

    setTimeout(next, toShow.duration * 1000);
  }

  return {
    setPlaylist: function(playlist) {
      for (var i = 0; i < playlist.length; i++) {
        queue.push({
          index:    i,
          duration: playlist[i].duration
        });
      }

      utils.shuffle(queue);

      containers.clear();

      containers.setup(playlist);

      next();
    }
  };
})();
