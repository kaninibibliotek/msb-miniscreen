var krumelur = (function() {
  var canvasElem = document.getElementsByClassName('krumelur')[0];
  var context    = canvasElem.getContext('2d');
  var loop       = false;
  var image;

  function draw() {
    if (loop) {
      requestAnimationFrame(draw);

      context.clearRect(0, 0, 800, 600);

      context.drawImage(image, 0, 0, 800, 600);
    }
  }

  function start() {
    loop = true;
    requestAnimationFrame(draw);
  }

  function stop() {
    loop = false;
  }

  return {
    show: function(source) {
      removeClass(canvasElem, 'hidden');

      image     = new Image();
      image.src = source;

      start();
    },

    hide: function() {
      addClass(canvasElem, 'hidden');

      stop();
    }
  }
})();
