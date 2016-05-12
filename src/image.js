var image = (function() {
  var imagesElem = document.getElementsByClassName('images')[0];

  var images = [
    {
      container: imagesElem.getElementsByClassName('container')[0],
      element:   imagesElem.getElementsByClassName('image')[0],
      animation: ''
    },
    {
      container: imagesElem.getElementsByClassName('container')[1],
      element:   imagesElem.getElementsByClassName('image')[1],
      animation: ''
    },
  ];
  var activeImage;

  function getInactiveImage() {
    return images.find(function(image) {
      return image !== activeImage;
    });
  }

  return {
    show: function(source, animation) {
      activeImage = getInactiveImage();

      utils.removeClass(activeImage.container, 'hidden');

      if (animation) {
        activeImage.animation = animation;
        utils.addClass(activeImage.element, animation);
      }

      activeImage.element.src = source;
    },

    hide: function() {
      images.forEach(function(image) {
        utils.addClass(image.container, 'hidden');

        if (image.animation) {
          utils.removeClass(image.element, image.animation);
        }
      });
    }
  }
})();
