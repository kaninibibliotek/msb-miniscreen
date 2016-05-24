function ImageContainer(containerElem, imageElem) {
  this.container = containerElem;
  this.image     = imageElem;
}

ImageContainer.prototype.load = function(source) {
  this.image.src = source;
};

ImageContainer.prototype.show = function() {
  utils.removeClass(this.container, 'hidden');
};

ImageContainer.prototype.hide = function() {
  utils.addClass(this.container, 'hidden');
};
