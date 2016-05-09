function showRandom() {
  var types = ['video', 'image', 'krumelur'];

  show({
    type:     types[Math.floor(Math.random() * types.length)],
    duration: Math.max(1, Math.random() * 5)
  });
}

function show(showObj) {
  switch (showObj.type) {
    case 'video':
      image.hide();
      krumelur.hide();

      video.show('../test/movie.mp4');

      break;
    case 'image':
      video.hide();
      krumelur.hide();

      image.show('../test/image.jpg');

      break;
    case 'krumelur':
      video.hide();
      image.hide();

      krumelur.show();

      break;
  }

  setTimeout(function() {
    showRandom();
  }, showObj.duration * 1000);
}

showRandom();
