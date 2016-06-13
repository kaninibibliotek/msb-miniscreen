var player = (function() {
  var queue      = [];
  var queueIndex = 0;
  var isPlaying = false;

  function next() {
    var nextIndex = (queueIndex + 1) % queue.length;

    var duration = containers.show(queue[queueIndex]);

    if (queue[nextIndex].type !== 'video') {
      // If we are going to load an image, wait for the transition to end
      // so it doesn't change during the transition.
      setTimeout(function() {
        containers.load(queue[nextIndex]);
      }, 1000);
    } else {
      containers.load(queue[nextIndex]);
    }

    if (++queueIndex >= queue.length) {
      utils.shuffle(queue);

      queueIndex = 0;
    }

    setTimeout(next, duration);
  }

  return {
    setPlaylist: function(playlist) {
      queue = playlist;
    },

    start: function() {
      utils.shuffle(queue);

      containers.load(queue[0]);

      next();

      isPlaying = true;
    },

    get isPlaying() {
      return isPlaying;
    }
  };
})();
