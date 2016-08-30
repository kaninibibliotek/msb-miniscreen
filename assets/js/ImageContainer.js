function ImageContainer(containerElem, imageElem) {
  this.container = containerElem;
  this.image = imageElem;
  this.delay = utils.getQueryValue('imageDelay') || constants.IMAGE_DELAY;
}

ImageContainer.prototype.isKrumelur = function() {
  return this.behavior;
}

ImageContainer.prototype.load = function(source, behavior) {
  console.log("Loading", source);

  this.image.src = source;
  this.behavior  = behavior;
};

ImageContainer.prototype.show = function() {
  utils.removeClass(this.container, 'hidden');

  if (this.isKrumelur()) {
    var behaviorName = behaviorKeyToName(this.behavior);
    utils.addClass(this.image, 'krumelur');
    utils.addClass(this.image, behaviorName);
  }

  return this.delay;
};

ImageContainer.prototype.hide = function() {
  utils.addClass(this.container, 'hidden');

  if (this.isKrumelur()) {
    var self = this;
    var behaviorName = behaviorKeyToName(self.behavior);

    setTimeout(
      function uglyHackToFixAnimationIssue() {
        utils.removeClass(self.image, 'krumelur');
        utils.removeClass(self.image, behaviorName);
      }, 1000
    );

  }
};


// Map krumelur behavior from json to css class
function behaviorKeyToName(strKey) {
  const key = parseInt(strKey);
  
  if (key < 5) {
    return 'spin';
  } else if (key < 20) {
    return 'jump';
  } else if (key < 40) {
    return 'happyjump';
  } else if (key < 60) {
    return 'hiding';
  } else if (key < 80) {
    return 'wiggle01';
  } else if (key < 100) {
    return 'squeeze';
  } else {
    return DEFAULT_KRUMELUR_BEHAVIOR; 
  }
}
