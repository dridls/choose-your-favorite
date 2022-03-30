let startBtn = document.querySelector(".start-btn");
let images = document.querySelector(".images");
let inputNumber = document.querySelector(".input-number");
let messageBox = document.querySelector(".message-box");
let firstPage = document.querySelector(".first-page");
let secondPage = document.querySelector(".second-page");
secondPage.classList.add("hidden");
startBtn.addEventListener("click", loadImg);
let message = document.querySelector(".message");
function loadImg() {
  function showHide() {
    firstPage.classList.add("hidden");
    secondPage.classList.remove("hidden");
  }
  showHide();
  const URL = `https://api.unsplash.com/photos/random?collections=FuUX4SKtTZs&client_id=E5Gk22D-ZhNqpgKivS-KAHFcI1iSsq1X4rSa6NqXclo&count=${inputNumber.value}`;

  fetch(URL)
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((data) => {
      data.forEach((imageData) => {
        let imageBox = document.createElement("div");
        imageBox.classList.add("img-box");
        imageBox.setAttribute("id", imageData.id);
        let image = document.createElement("img");
        image.classList.add("img");
        image.src = imageData.urls.regular;
        image.alt = imageData.alt_description;
        imageBox.appendChild(image);
        images.appendChild(imageBox);

        function addMessage() {
          message.textContent = "This is how you should enjoy your vacation!";
          // let message = document.createElement("p");
          // message.textContent += `This is how you should enjoy your vacations!`;
          // messageBox.appendChild(message);
        }

        function deleteImg() {
          const allImages = document.querySelectorAll(".img-box");
          if (allImages.length < 2) return;
          if (allImages[0].getAttribute("id") === imageData.id) {
            allImages[1].remove();
          } else {
            allImages[0].remove();
          }

          if (document.querySelectorAll(".img-box").length == 1) {
            addMessage();
          }
        }
        image.addEventListener("click", deleteImg);
      });
    });
}
