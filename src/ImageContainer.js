function ImageContainer(containerElem, imageElem) {
  this.container = containerElem;
  this.image     = imageElem;
  this.animation = null;
}

ImageContainer.prototype.load = function(source, animation) {
  this.animation = animation;
  this.image.src = source;
};

ImageContainer.prototype.show = function() {
  utils.removeClass(this.container, 'hidden');

  if (this.animation) {
    // Trigger reflow, needed in case the same image is showed twice in a row
    this.image.height;

    utils.addClass(this.image, this.animation);
  }
};

ImageContainer.prototype.hide = function() {
  utils.addClass(this.container, 'hidden');

  if (this.animation) {
    utils.removeClass(this.image, this.animation);
  }
};
