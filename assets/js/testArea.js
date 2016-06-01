var testAreaElem    = document.getElementsByClassName('test-area')[0];
var testButtonElem  = document.getElementsByClassName('test-button')[0];
var backButtonElem  = document.getElementsByClassName('back-button')[0];
var applyButtonElem = document.getElementsByClassName('apply-button')[0];
var clearButtonElem = document.getElementsByClassName('clear-button')[0];
var testInputElem   = document.getElementsByClassName('test-input')[0];
var testImageElem   = document.getElementsByClassName('test-image')[0];

function clearTestImageClasses() {
  testImageElem.className = 'test-image';
}

testButtonElem.addEventListener('click', function(ev) {
  testAreaElem.setAttribute('style', 'display: block;');
});

backButtonElem.addEventListener('click', function(ev) {
  testAreaElem.setAttribute('style', 'display: none;');

  clearTestImageClasses();
});

applyButtonElem.addEventListener('click', function(ev) {
  clearTestImageClasses();

  utils.addClass(testImageElem, testInputElem.value);
});

clearButtonElem.addEventListener('click', function(ev) {
  clearTestImageClasses();
});
