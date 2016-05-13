var containers = (function() {
  var containersElem  = document.getElementsByClassName('containers')[0];
  var mediaContainers = [];

  return {
    setup: function(mediaObjects) {
      for (var i = 0; i < mediaObjects.length; i++) {
        var mediaObject = mediaObjects[i];

        var containerElem = document.createElement('div');
        containerElem.className = 'container';

        var mediaElem;
        var mediaContainer;

        switch (mediaObject.type) {
          case 'video':
            mediaElem = document.createElement('video');
            mediaElem.className = 'video';

            mediaContainer = new VideoContainer(containerElem, mediaElem);
            break;
          case 'image':
            mediaElem = document.createElement('img');
            mediaElem.className = 'image';

            mediaContainer = new ImageContainer(containerElem, mediaElem);
            break;
        }

        containerElem.appendChild(mediaElem);

        containersElem.appendChild(containerElem);

        mediaContainer.load(mediaObject.source, mediaObject.animation);

        mediaContainers.push(mediaContainer);
      }
    },

    show: function(index) {
      mediaContainers[index].show();
    },

    hide: function() {
      for (var i = 0; i < mediaContainers.length; i++) {
        mediaContainers[i].hide();
      }
    },

    clear: function() {
      while (containersElem.firstChild) {
        containersElem.removeChild(containersElem.firstChild);
      }

      mediaContainers = {};
    }
  };
})();
