var video = (function() {;
  var videos = [
    document.getElementsByClassName('video')[0],
    document.getElementsByClassName('video')[1]
  ];
  var activeVideo;

  function getInactiveVideo() {
    return videos.find(function(video) {
      return video !== activeVideo;
    });
  }

  return {
    show: function(source) {
      activeVideo = getInactiveVideo();

      utils.removeClass(activeVideo, 'hidden');
      activeVideo.src = source;

      // play() returns a promise which may be rejected
      // and throw an exception due to a bug in chromium.
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=593273
      activeVideo.play();
    },

    hide: function() {
      videos.forEach(function(video) {
        utils.addClass(video, 'hidden');

        video.pause();
      });
    }
  };
})();
