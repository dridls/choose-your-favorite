let inputName = document.querySelector(".input-name");
let addName = document.querySelector(".add-name");
let images = document.querySelector(".images");
let img1 = document.querySelector(".img-1");
let img2 = document.querySelector(".img-2");

let imgBox = document.querySelector(".img-box");
window.addEventListener("load", loadImg);

let playerName = inputName.value;

function loadImg() {
  const url = `https://api.unsplash.com/photos/random?topics=travel&orientation=portrait&client_id=O46G6GwsSkoGM9IKuyb6mx8REyt_8Z9EPf7W9w12S70`;

  //   &count=${numberOfPlayers}&client_id=

  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((data) => {
      //   data.results.forEach((result) => {
      //   ADDING THE IMAGES
      img1.src = data.urls.full;
      img1.alt = data.alt_description;

      img2.src = data.urls.full;
      img2.alt = data.alt_description;
    });
  // });
}

function chooseOption() {
  if (img1) {
    img2.remove();
  }
}

imgBox.addEventListener("click", chooseOption);
