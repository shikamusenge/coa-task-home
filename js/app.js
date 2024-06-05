const containerDiv = document.querySelector(".container");
const setUpFunctions = () => {
  // Select all cards and add event listener to toggle active class
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      card.querySelector(".close-btn").style.visibility = "visible";
      card.classList.toggle("card-active");
    });
  });

  // Select all close buttons and add event listener to remove active class
  document.querySelectorAll(".close-btn").forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      card.querySelector(".close-btn").style.visibility =
        card.querySelector(".close-btn").style.visibility == "visible"
          ? "hidden"
          : "visible";

      closeBtn.closest(".card").classList.remove("card-active");
    });
  });
};
const fetchAndRenderData = async () => {
  try {
    const response = await fetch("../src/data.json");
    const data = await response.json();
    const cardsHtml = data
      .map((item) => {
        const { firstName, lastName, location, url } = item;
        return `
        <div class="card" data-image="${url}">
        <div class='btn-container'> <button class='close-btn'>X</button>  </div>
          <img class="card-image" src="${url}" />
          <div class="card-content">
            <h3><samp>${firstName}</samp><span>${lastName}</span></h3>
            <p>${location}</p>
          </div>
        </div>
      `;
      })
      .join("");
    console.log(cardsHtml);
    containerDiv.innerHTML = cardsHtml;
    setUpFunctions();
  } catch (error) {
    console.error(error.message);
  }
};

document.addEventListener("DOMContentLoaded", fetchAndRenderData);
