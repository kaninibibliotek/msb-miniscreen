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

      removeClass(activeVideo, 'hidden');
      activeVideo.src = source;

      activeVideo.play();
    },

    hide: function() {
      videos.forEach(function(video) {
        addClass(video, 'hidden');

        video.pause();
      });
    }
  };
})();
