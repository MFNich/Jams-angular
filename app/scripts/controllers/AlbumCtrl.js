(function() {

  function AlbumCtrl(Fixtures) {
    this.albumData = Fixtures.getAlbum();
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);

})(); // IIFE – immediately invoked function expression

// orthogonality - decoupling - modular
