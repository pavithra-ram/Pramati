
//var txt=document.getElementById("movies");

getmovie = () => {
  let movieID = sessionStorage.getItem('movieID');
  //console.log("haiii im pavithra");
  //console.log("mmovieid : "+movieID);
  axios.get('http://www.omdbapi.com/?apikey=d7f6ba60&i=' + movieID)
    .then((response) => {
      console.log(response.data);
      console.log("haii im the great pavithra !!");
      let movie = response.data;
      let output =
        "<div class='row spacee'>" +
        "<div class='col-md-4'>" +
        "<img src='" + movie.Poster + "class='imm'>" +
        "</div>" +
        "<div class='col-md-8'>" +
        "<h2 class='mt-5 mb-5 text-center hp'>" + movie.Title + "</h2>" +
        "<ul class='list-group'>" +
        "<li class='list-group-item'><strong>Genre:</strong>" + movie.Genre + "</li>" +
        "<li class='list-group-item'><strong>Released:</strong>" + movie.Released + "</li>" +
        "<li class='list-group-item'><strong>Rated:</strong>" + movie.Rated + "</li>" +
        "<li class='list-group-item'><strong>IMDB Rating:</strong>" + movie.imdbRating + "</li>" +
        "<li class='list-group-item'><strong>Director:</strong>" + movie.Director + "</li>" +
        "<li class='list-group-item'><strong>Writer:</strong>" + movie.Writer + "</li>" +
        "<li class='list-group-item'><strong>Actors:</strong>" + movie.Actors + "</li>" +
        "</ul>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<div class=''>" +
        "<h3 class='hp ml-3 mt-5 mb-3'>Plot</h3>" + "<div class='hp1 ml-3'>" +
        movie.Plot +
        "<br>" + "<br>" +
        "<a href='https://www.imdb.com/' target='_blank' class='btn btn-primary'>View IMDB</a>" +
        "<a href='index.html' class='btn btn-secondary ml-md-2'>Go Back To Search</a>" +
        "</div>" +
        "</div>";


      document.querySelector('#movie').innerHTML = output;
    })
    .catch((err) => {
      console.log(err.response);
    });
}

