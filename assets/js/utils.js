var utils = (function() {
  function findClassIndex(element, name) {
    return element.className.search(new RegExp('\\s?' + name + '\\b'));
  }

  return {
    getQueryValue: function(name) {
      var matches = (new RegExp('[?&;]' + name + '=*([^&;#]*)')).exec(document.URL);

      if (matches) {
        var match = decodeURI(matches[1]);
        // '?foo' return true, "?foo=bar' returns 'bar'
        return match === '' ? true : match; 
      } else {
        return null; 
      }
    },

    shuffle: function(array) {
      for (var i = array.length; i > 0; i--) {
        var randIdx = Math.floor(Math.random() * i);
        var value   = array[i - 1];

        array[i - 1]   = array[randIdx];
        array[randIdx] = value;
      }
    },

    addClass: function(element, name) {
      var index = findClassIndex(element, name);

      if (index === -1) {
        element.className += ' ' + name;
      }
    },

    removeClass: function(element, name) {
      var index = findClassIndex(element, name);

      if (index !== -1) {
        var left  = element.className.substring(0, index);
        var right = element.className.substring(index + name.length + 1);

        element.className = left + right;
      }
    }
  };
})();
