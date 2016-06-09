function VideoContainer(containerElem, videoElem) {
  this.container = containerElem;
  this.video     = videoElem;
}

VideoContainer.prototype.load = function(source) {;
  console.log("loading", source);

  var ext = source.substring(source.lastIndexOf('.'));

  switch (ext) {
    case '.mp4':
      this.video.type = 'video/mp4';
      break;
    case '.mov':
      this.video.type = 'video/quicktime';
      break;
  }

  this.video.src = source;

  this.video.load();
};

VideoContainer.prototype.show = function() {
  utils.removeClass(this.container, 'hidden');

  this.video.currentTime = 0;

  // play() returns a promise which may be rejected
  // and throw an exception due to a bug in chromium.
  // See https://bugs.chromium.org/p/chromium/issues/detail?id=593273
  this.video.play();

  return this.video.duration * 1000;
};

VideoContainer.prototype.hide = function() {
  utils.addClass(this.container, 'hidden');

  this.video.pause();
};
