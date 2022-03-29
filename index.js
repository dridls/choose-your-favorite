const firstPage = document.querySelector(".firs-page");
const secondPage = document.querySelector(".second-page");
const inputName = document.querySelector(".input-name");
const addName = document.querySelector(".add-name");
const images = document.querySelector(".images");

window.addEventListener("load", loadImg);

const playerName = inputName.value;
window.addEventListener("load", loadImg);
addEventListener("click", chooseOption);
function loadImg() {
  const url = `https://api.unsplash.com/photos/random?topics=travel&orientation=portrait&count=2&client_id=O46G6GwsSkoGM9IKuyb6mx8REyt_8Z9EPf7W9w12S70`;

  //   &count=${numberOfPlayers}&client_id=

  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((data) => {
      //   data.results.forEach((result) => {
      //   ADDING THE IMAGES
      const imgBox = document.createElement("div");
      imgBox.classList.add("img-box");
      const img1 = document.createElement("img");
      img1.src =
        //   data.urls.full;
        img1.classList.add("img-1");
      img1.alt = data.alt_description;
      const img2 = document.createElement("img");
      img2.src =
        //   data.urls.full;
        img2.classList.add("img-2");
      img2.alt = data.alt_description;

      imgBox.appendChild(img1);
      imgBox.appendChild(img2);
      images.appendChild(imgBox);
    });
  // });
}

function chooseOption() {}
