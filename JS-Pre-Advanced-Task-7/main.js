"use strict";
const getS = (selector) => document.querySelector(selector);
const getAl = (selector) => document.querySelectorAll(selector);
const title = [],
  rating = [],
  genre = [],
  rated = [],
  year = [],
  plot = [],
  writer = [],
  director = [],
  actors = [],
  boxOffice = [],
  awards = [],
  poster = [];
  let check = 0;

getS(".search-input").addEventListener("focus", function () {
  event.target.classList.add("focus");
});

getS(".search-input").addEventListener("input", function () {
  getS(".search-close").classList.remove("hide");

});

getS(".search-input").addEventListener("blur", function () {
  if (this.value == "") {
    event.target.classList.remove("focus");
    getS(".search-close").classList.add("hide");
  }
});

getS(".search-close").addEventListener("click", function () {
  getS(".search-input").value = "";
  event.target.classList.add("hide");
});

const getData = async () => {
  let movieSearch = getS(".search-input").value.toLowerCase();
  const response = await fetch( `http://www.omdbapi.com/?s=${movieSearch}&apikey=d9d5408e`);
  const data = await response.json();
  movieList(data.Search);
  
 try {
    for (let i = 0; i < data.Search.length; i++) {
      const responseDetalies = await fetch( `http://www.omdbapi.com/?i=${data.Search[i].imdbID}&apikey=d9d5408e`);
      const dataDetalies = await responseDetalies.json();

      title.push(dataDetalies.Title);
      rating.push(dataDetalies.Ratings);
      rated.push(dataDetalies.Rated);
      year.push(dataDetalies.Year);
      plot.push(dataDetalies.Plot);
      writer.push(dataDetalies.Writer);
      director.push(dataDetalies.Director);
      actors.push(dataDetalies.Actors);
      boxOffice.push(dataDetalies.BoxOffice);
      awards.push(dataDetalies.Awards);
      poster.push(dataDetalies.Poster);
      genre.push(dataDetalies.Genre);
     //console.log(dataDetalies);
     detaliesMovie(data.Search);
    }
    
 
  } catch (err) {
    return console.log(err);
  }
};

// /* Search movie */
function movieList(arr) {
  
  getS(".movies-container").innerHTML = '';
 
  for (let i = 0; i < (arr.length+check); i++) {
    createArr(arr[i])
  }
  
}

function createArr(movie){

  getS(".movies-container").innerHTML += `<div class="movie">
      <div class="img-movie"><img src="${movie.Poster}"></div>
      <div class="name-movie">${movie.Title}</div>
      <div class="text-movie">${movie.Type}</div>
      <div class="year-movie">${movie.Year}</div>
      <input type="button" class="btn-movie" value="More detalies">
    </div>`;
   
}

/* Movie Detalies show modal block */
function detaliesMovie(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    getAl(".btn-movie")[i].addEventListener("click", function () {
      getS(".detalis-container").classList.remove("hide");
      getS(".title").textContent = `${title[i]}`;
      getS(".detalis-img").style.backgroundImage = `url(${poster[i]})`;
      getS(".rated").textContent = `${rated[i]}`;
      getS(".year").textContent = `${year[i]}`;
      getS(".genre").textContent = `${genre[i]}`;
      getS(".writer").textContent = `${writer[i]}`;
      getS(".director").textContent = `${director[i]}`;
      getS(".actors").textContent = `${actors[i]}`;
      getS(".boxOffice").textContent = `${boxOffice[i]}`;
      getS(".awards").textContent = `${awards[i]}`;
      getS(".plot").textContent = `${plot[i]}`;
      for (let j = 0; j < rating[i].length; j++) {
        getS(".ratings").innerHTML += `
             <li>${rating[i][j].Source}&nbsp ${rating[i][j].Value}</li>`;
      }
    });
  }
}

getS('.detalis-container').addEventListener('click',closeDetaliesMovie)

function closeDetaliesMovie(){
  
    this.classList.add('hide');
    
}


