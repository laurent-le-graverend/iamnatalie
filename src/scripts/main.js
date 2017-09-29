(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var firstImage = document.querySelector('.photoframe div:first-child img');

    var images = document.querySelectorAll('.photoframe div:not(:first-child) img');
    Array.prototype.forEach.call(images, function(image) {
      image.addEventListener('click', function(event) {
        var image = event.currentTarget;
        var imageSrc = image.src;
        image.src = firstImage.src;
        firstImage.src = imageSrc;
      });
    });
  });
})();
