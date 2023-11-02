let currentIndex = 0;

const galleryImages = document.querySelectorAll('.galleryImage');

function showImage(index) {

    galleryImages.forEach((image, i) => {

      if (i === index) {

        image.style.display = 'block';

      } else {

        image.style.display = 'none';

      }

    });

  }
  

function previous() {

  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);

}

function next() {

  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
  
}

showImage(currentIndex);