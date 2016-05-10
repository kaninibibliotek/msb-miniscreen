var containers = {
  video:    video,
  image:    image
};

function showRandom() {
  var objects = [
    {
      type: 'video',
      source: '../test/movie.mp4',
      duration: 2
    },
    {
      type: 'video',
      source: '../test/movie2.mov',
      duration: 2
    },
    {
      type: 'image',
      source: '../test/image.jpg',
      duration: 3,
      animation: 'spin'
    },
    {
      type: 'image',
      source: '../test/image2.jpg',
      duration: 2
    },
    {
      type: 'image',
      source: '../test/krumelur.jpg',
      duration: 4,
      animation: 'jump'
    }
  ];

  var toShow = objects[Math.floor(Math.random() * objects.length)];

  show(toShow);

  setTimeout(function() {
    showRandom();
  }, toShow.duration * 1000);
}

function show(showObject) {
  for (var container in containers) {
    containers[container].hide();
  }

  containers[showObject.type].show(showObject.source, showObject.animation);
}

showRandom();
