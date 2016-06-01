var containers = (function() {
  var mediaContainers = [
    new VideoContainer(
      document.getElementsByClassName('container')[0],
      document.getElementsByClassName('video')[0]
    ),

    new VideoContainer(
      document.getElementsByClassName('container')[1],
      document.getElementsByClassName('video')[1]
    ),

    new ImageContainer(
      document.getElementsByClassName('container')[2],
      document.getElementsByClassName('image')[0]
    ),

    new ImageContainer(
      document.getElementsByClassName('container')[3],
      document.getElementsByClassName('image')[1]
    )
  ];

  function switchNextVideo() {
    nextVideo = mediaContainers.find(function(container) {
      return container instanceof VideoContainer && container !== nextVideo;
    });
  }

  function switchNextImage() {
    nextImage = mediaContainers.find(function(container) {
      return container instanceof ImageContainer && container !== nextImage;
    });
  }

  var nextVideo;
  var nextImage;

  return {
    show: function(mediaObject) {
      var next = mediaObject.type === 'video' ? nextVideo : nextImage;

      for (var i = 0; i < mediaContainers.length; i++) {
        if (mediaContainers[i] === next) {
          mediaContainers[i].show();
        } else {
          mediaContainers[i].hide();
        }
      }
    },

    load: function(mediaObject) {
      switch (mediaObject.type) {
        case 'video':
          switchNextVideo();

          nextVideo.load(mediaObject.url);

          break;
        case 'image':
        case 'krumelur':
          switchNextImage();

          nextImage.load(mediaObject.url, mediaObject.behavior);

          break;
      }
    },
  };
})();
