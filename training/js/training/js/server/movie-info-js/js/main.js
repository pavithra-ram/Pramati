var searchtext = document.getElementById("searchtext");
var search = document.getElementById("search");

search.addEventListener("click", (e) => {
    // location.reload();
    //console.log("Movie name : " + searchtext.value);
    //for(let i=0;i<10;i++)
    //{
    //  console.log("i : "+i);
    //}
    getmovies(searchtext);
    e.preventDefault();
});

function getmovies(searchtext) {
    console.log("Movie name : " + searchtext.value);
    axios.get('http://www.omdbapi.com/?apikey=d7f6ba60&s=' + searchtext.value)
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output ='';
            var i;
            // console.log("hai");
            for (i = 0; i < movies.length; i++) {
                console.log(movies[i].Title);
                
                output += 
                `<div class="col-md-3">
                    <div class="spacing text-center">
                     <img src="movie.Poster.value">
                     <h5>movie.Title.value</h5>
                     <a onclick="movieselected(movie.imdbID)" class="btn btn-primary" href="#">Movie Details</a>
                    </div>
                </div>
                `;
                
                
         console.log("console value of output : "+output);
            }
            /*  movies.forEach(() => {
                  output += 
                  `<div class="col-md-3">
                      <div class="spacing text-center">
                       <img src="movie.Poster.value">
                       <h5>movie.Title.value</h5>
                       <a onclick="movieselected(movie.imdbID)" class="btn btn-primary" href="#">Movie Details</a>
                      </div>
                  </div>
                  `;
              });*/
              //document.getElementById("movies").innerHTML=output;
              document.querySelector("movies").innerHTML = output;
        })
        .catch((err) => {
            console.log(err.response);
        });
}

