var error = (function() {
  var errorBox     = document.getElementsByClassName('error')[0];
  var errorMessage = document.getElementsByClassName('error-message')[0];

  return {
    showMessage: function(msg) {
      errorMessage.innerHTML = msg;

      utils.removeClass(errorBox, 'hidden');
    },

    hide: function() {
      utils.addClass(errorBox, 'hidden');
    }
  };
})();

