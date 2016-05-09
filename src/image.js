var image = (function() {
  var imageElem = document.getElementsByClassName('image')[0];

  return {
    show: function(source) {
      imageElem.src = source;

      removeClass(imageElem, 'hidden');
    },

    hide: function() {
      addClass(imageElem, 'hidden');
    }
  }
})();
