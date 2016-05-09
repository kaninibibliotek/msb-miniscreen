function findClassIndex(element, name) {
  return element.className.search(new RegExp('\\s?' + name + '\\b'));
}

function addClass(element, name) {
  var index = findClassIndex(element, name);

  if (index === -1) {
    element.className += ' ' + name;
  }
}

function removeClass(element, name) {
  var index = findClassIndex(element, name);

  if (index !== -1) {
    var left  = element.className.substring(0, index);
    var right = element.className.substring(index + name.length + 1);

    element.className = left + right;
  }
}
