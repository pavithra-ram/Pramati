var searchtext = document.getElementById("searchtext");
var search = document.getElementById("search");

//var txt=document.getElementById("movies");
search.onclick = ((e) => {
    getmovies(searchtext);
    e.preventDefault();
});

getmovies = (searchtext) => {
    console.log("Movie name : " + searchtext.value);
    axios.get('http://www.omdbapi.com/?apikey=d7f6ba60&s=' + searchtext.value)
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = [];
            var iid = [];
            //console.log(movies[i].Title);
            for (let i = 0; i < movies.length; i++) {
                iid[i] = movies[i].imdbID;
                console.log("movies id : " + movies[i].imdbID);
                output += "<div class='col-sm-12 col-md-6 col-xl-4 mb-5'>" +
                    "<div class='displayy text-center'>" +
                    "<img src=" + movies[i].Poster + "class='mt-5 mb-5'>" +
                    "<h5>" + movies[i].Title + "</h5>" +
                    "<a href='#' class='btn btn-primary mt-lg-5' onclick='movieselected(\"" + movies[i].imdbID + "\")'>Movie Detail</a>" +
                    "</div>" +
                    "</div>";
            }
            //console.log(output);            
            document.querySelector('#movies').innerHTML = output;
        })
        .catch((err) => {
            console.log(err.response);
        });

}
movieselected = (id) => {
    sessionStorage.setItem('movieID', id);
    window.location = 'moviespecific.html';
}
