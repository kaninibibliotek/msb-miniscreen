function ImageContainer(containerElem, imageElem) {
  this.container = containerElem;
  this.image     = imageElem;
}

ImageContainer.prototype.load = function(source, behavior) {
  console.log("loading", source);

  this.image.src = source;
  this.behavior  = behavior;
};

ImageContainer.prototype.show = function() {
  utils.removeClass(this.container, 'hidden');

  if (this.behavior) {
    utils.addClass(this.image, this.behavior);
  }
};

ImageContainer.prototype.hide = function() {
  utils.addClass(this.container, 'hidden');

  if (this.behavior) {
    utils.removeClass(this.image, this.behavior);
  }
};
