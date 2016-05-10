var containers = {
  video:    video,
  image:    image,
  krumelur: krumelur
};

function showRandom() {
  var objects = [
    {
      type: 'video',
      source: '../test/movie.mp4',
      duration: 5
    },
    {
      type: 'image',
      source: '../test/image.jpg',
      duration: 3
    },
    {
      type: 'krumelur',
      source: '../test/krumelur.jpg',
      duration: 8
    }
  ];

  var toShow = objects[Math.floor(Math.random() * objects.length)];

  show(toShow.type, toShow.source);

  setTimeout(function() {
    showRandom();
  }, toShow.duration * 1000);
}

function show(type, source) {
  for (var container in containers) {
    if (container === type) {
      containers[container].show(source);
    } else {
      containers[container].hide();
    }
  }
}

showRandom();
