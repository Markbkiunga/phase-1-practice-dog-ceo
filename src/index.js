console.log('%c HI', 'color: firebrick');
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'; //Gets 4 random dog images
let imagesContainer = document.getElementById('dog-image-container');
fetch('https://dog.ceo/api/breeds/image/random/4')
  .then((response) => response.json())
  .then((data) => {
    imagesArray = data.message;
    imagesArray.forEach((image) => {
      let imageElement = document.createElement('img');
      imagesContainer.appendChild(imageElement);
      imageElement.setAttribute('src', image);
    });
  });
