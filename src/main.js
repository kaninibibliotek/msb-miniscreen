function onReceivedPlaylist(playlist) {
  player.setPlaylist(playlist);
}

// Fake received playlist
setTimeout(function() {
  var playlist = [
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
      duration: 4,
      animation: 'squeeze'
    },
    {
      type: 'image',
      source: '../test/krumelur.jpg',
      duration: 4,
      animation: 'jump'
    }
  ];

  onReceivedPlaylist(playlist);
}, 100);
