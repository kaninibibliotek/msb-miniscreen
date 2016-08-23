function ImageContainer(containerElem, imageElem) {
  this.container = containerElem;
  this.image     = imageElem;
}

ImageContainer.prototype.isKrumelur = function() {
  return this.behavior;
}

ImageContainer.prototype.load = function(source, behavior) {
  console.log("loading", source);

  this.image.src = source;
  this.behavior  = behavior;
};

ImageContainer.prototype.show = function() {
  utils.removeClass(this.container, 'hidden');

  if (this.isKrumelur()) {
    utils.addClass(this.image, 'krumelur');
    utils.addClass(this.image, this.behavior);
  }

  return constants.IMAGE_TIMEOUT;
};

ImageContainer.prototype.hide = function() {
  utils.addClass(this.container, 'hidden');

  if (this.isKrumelur()) {
    var self = this;
    setTimeout(
      function uglyHackToFixAnimationIssue() {
        utils.removeClass(self.image, 'krumelur');
        utils.removeClass(self.image, self.behavior);
      }, 1000
    );

  }
};
