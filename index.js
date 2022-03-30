let inputName = document.querySelector(".input-name");
let startBtn = document.querySelector(".start-btn");
let images = document.querySelector(".images");
let inputNumber = document.querySelector(".input-number");

startBtn.addEventListener("click", loadImg);

function loadImg() {
  const URL = `https://api.unsplash.com/photos/random?topics=travel&orientation=portrait&client_id=E5Gk22D-ZhNqpgKivS-KAHFcI1iSsq1X4rSa6NqXclo&count=${inputNumber.value}`;

  fetch(URL)
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((data) => {
      data.forEach((imageData) => {
        let imageBox = document.createElement("div");
        imageBox.classList.add("img-box");
        let image = document.createElement("img");
        image.classList.add("img");
        image.src = imageData.urls.regular;
        image.alt = imageData.alt_description;
        imageBox.appendChild(image);
        images.appendChild(imageBox);

        function deleteImg(event) {
          let tempWinner = event.target.getAttribute(data.id);
          if (image != tempWinner) {
            imageBox.remove();
          }
        }
        image.addEventListener("click", deleteImg);
      });
    });
}
