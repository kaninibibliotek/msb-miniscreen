var krumelur = (function() {
  // canvas animation or img with css keyframes?
  var canvasElem = document.getElementsByClassName('krumelur')[0];

  return {
    show: function(source) {
      removeClass(canvasElem, 'hidden');
    },

    hide: function() {
      addClass(canvasElem, 'hidden');
    }
  }
})();
