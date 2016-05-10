var image = (function() {
  var images = [
    {
      element: document.getElementsByClassName('image')[0],
      animation: ''
    },
    {
      element: document.getElementsByClassName('image')[1],
      animation: ''
    }
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

      utils.removeClass(activeImage.element, 'hidden');

      if (animation) {
        activeImage.animation = animation;
        utils.addClass(activeImage.element, animation);
      }

      activeImage.element.src = source;
    },

    hide: function() {
      images.forEach(function(image) {
        utils.addClass(image.element, 'hidden');

        if (image.animation) {
          utils.removeClass(image.element, image.animation);
        }
      });
    }
  }
})();
