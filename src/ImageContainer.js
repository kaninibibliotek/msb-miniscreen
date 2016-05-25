function ImageContainer(containerElem, imageElem) {
  this.container = containerElem;
  this.image     = imageElem;
}

ImageContainer.prototype.load = function(source, animation) {
  console.log("loading", source);

  this.image.src = source;
  this.animation = animation;
};

ImageContainer.prototype.show = function() {
  utils.removeClass(this.container, 'hidden');

  if (this.animation) {
    utils.addClass(this.image, this.animation);
  }
};

ImageContainer.prototype.hide = function() {
  utils.addClass(this.container, 'hidden');

  if (this.animation) {
    utils.removeClass(this.image, this.animation);
  }
};
