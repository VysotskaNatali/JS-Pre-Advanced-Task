"use strict";
const getS = (selector) => document.querySelector(selector);
const getAl = (selector) => document.querySelectorAll(selector);

/* buttons form created */
getS(".search-input").addEventListener("focus", function (event) {
  event.target.classList.add("focus");
});

getS(".search-input").addEventListener("input", () => {
  getS(".search-close").classList.remove("hide");
});

getS(".search-input").addEventListener("blur", function (event) {
  if (this.value == "") {
    event.target.classList.remove("focus");
    getS(".search-close").classList.add("hide");
  }
});

getS(".search-close").addEventListener("click", function (event) {
  getS(".search-input").value = "";
  event.target.classList.add("hide");
});

/*function html Search Movie */
const getData = async () => {
  let movieSearch = getS(".search-input").value.toLowerCase();
  const response = await fetch(`http://www.omdbapi.com/?s=${movieSearch}&apikey=d9d5408e`);
  const data = await response.json();
  movieList(data.Search);
  try {
    for (let i = 0; i < data.Search.length; i++) {
      const responseDetalies = await fetch(`http://www.omdbapi.com/?i=${data.Search[i].imdbID}&apikey=d9d5408e`);
      const dataDetalies = await responseDetalies.json();
      getAl(".btn-movie")[i].addEventListener("click", function () {
        detaliesMovie(dataDetalies);
      });
    }
  } catch (err) {
    return console.log(err);
  }
};

/* Create Search Movie list */
function movieList(arr) {
  getS(".movies-container").innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    createArr(arr[i]);
  }
}
function createArr(movie) {
  getS(".movies-container").innerHTML += `<div class="movie">
      <div class="img-movie"><img src="${movie.Poster}"></div>
      <div class="name-movie">${movie.Title}</div>
      <div class="text-movie">${movie.Type}</div>
      <div class="year-movie">${movie.Year}</div>
      <input type="button" class="btn-movie" value="More detalies">
    </div>`;
}

/* Movie Detalies show modal block */
async function detaliesMovie(arr) {
  try {
    getS(".detalis-container").classList.remove("hide");
    getS(".title").textContent = arr.Title;
    getS(".detalis-img").style.backgroundImage = `url("${arr.Poster}")`;
    getS(".rated").textContent = arr.Rated;
    getS(".year").textContent = arr.Year;
    getS(".genre").textContent = arr.Genre;
    getS(".writer").textContent = arr.Writer;
    getS(".director").textContent = arr.Director;
    getS(".actors").textContent = arr.Actors;
    getS(".boxOffice").textContent = arr.BoxOffice;
    getS(".awards").textContent = arr.Awards;
    getS(".plot").textContent = arr.Plot;
    for (let j = 0; j < arr.Ratings.length; j++) {
      let li = document.createElement("li");
      li.textContent += arr.Ratings[j].Source + " " + arr.Ratings[j].Value;
      getS(".ratings").append(li);
    }
  } catch (err1) {
    return console.log(err1);
  }
}
/* Close modal Movie Detalies */
getS(".detalis-container").addEventListener("click", function () {
  this.classList.add("hide");
});
