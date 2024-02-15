let APIKey = "";
fetch("key.json")
  .then((response) => response.json())
  .then((data) => {
    APIKey = data.API_KEY;
  });

const formElement = document.querySelector("form");
const searchInputElement = document.getElementById("search-input");
const searchResultsElement = document.querySelector(".search-results");
const showMoreButtonElement = document.getElementById("show-more-button");
let inputData = "";
let page = 1;
async function searchImages() {
  inputData = searchInputElement.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${APIKey}`;
  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResultsElement.innerHTML = "";
  }
  const results = data.results;
  results.map((result) => {
    const imageWrapper = document.createElement("div");
    const imageLink = document.createElement("a");
    const imageDescription = document.createElement("p");
    const image = document.createElement("img");
    imageWrapper.classList.add("search-result");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    image.src = result.urls.small;
    image.alt = result.alt_description;
    imageDescription.innerText = result.alt_description;
    imageLink.appendChild(image);
    imageLink.appendChild(imageDescription);
    imageWrapper.appendChild(imageLink);
    searchResultsElement.appendChild(imageWrapper);
  });
  page = 2;
  if (page > 1) {
    showMoreButtonElement.style.display = "block";
  }
}

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMoreButtonElement.addEventListener("click", () => {
  searchImages();
});
