var video = (function() {;
  var videoElem = document.getElementsByClassName('video')[0];

  return {
    show: function(source) {
      videoElem.src = source;

      removeClass(videoElem, 'hidden');

      videoElem.play();
    },

    hide: function() {
      addClass(videoElem, 'hidden');

      videoElem.pause();
    }
  };
})();
