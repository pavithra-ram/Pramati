var searchtext = document.getElementById("searchtext");
//console.log("name : "+searchtext.value);
$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
      let searchText = $('#searchText').val();
      getmovies(searchText);
      e.preventDefault();
    });
  });
  

   
function getmovies(searchtext) {
    //var searchtext=localStorage.getItem('searchtext');
    console.log("Movie name : " + searchtext.value);
    axios.get('http://www.omdbapi.com/?apikey=d7f6ba60&s=' + searchtext.value)
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output =[];
            var iid=[];
            //console.log(movies[i].Title);
            for(let i=0;i<movies.length;i++)
            {
            iid[i]=movies[i].imdbID;
            console.log("movies id : "+movies[i].imdbID);
            output +="<div class='col-md-3 mb-5'>"+
             "<div class='displayy text-center'>"+
             "<img src="+movies[i].Poster+"class='mt-5 mb-5'>"+
             "<h5>"+movies[i].Title+"</h5>"+
             "<a href='#' class='btn btn-primary' onclick='movieselected(\""+movies[i].imdbID+"\")'>Movie Detail</a>"+
             "</div>"+
             "</div>";                                     
             }
                //console.log(output);            
            document.querySelector('#movies').innerHTML = output;
        })
        .catch((err) => {
            console.log(err.response);
        });      
        
}
function movieselected(id)
{
    sessionStorage.setItem('movieID',id);  
    
    console.log("mmmmm : "+id.value);
    return false;
}
function getmovie()
{
    window.location='moviespecific.html';
    let movieId = sessionStorage.getItem('movieId');
    console.log("mmmmm : "+movieId.value);
    axios.get('http://www.omdbapi.com/?apikey=d7f6ba60&i='+movieId)
      .then((response) => {
        console.log(response);
        let movie = response.data;
  
        let output =
         "<div class='row'>"+
            "<div class='col-md-4'>"+
              "<img src='"+movie.Poster+"class='thumbnail'>"+
            "</div>"+
           "<div class='col-md-8'>"+
              "<h2>"+movie.Title+"</h2>"+
              "<ul class='list-group'>"+
                "<li class='list-group-item'><strong>Genre:</strong>"+movie.Genre+"</li>"+
                "<li class='list-group-item'><strong>Released:</strong>"+movie.Released+"</li>"+
                "<li class='list-group-item'><strong>Rated:</strong>"+movie.Rated+"</li>"+
                "<li class='list-group-item'><strong>IMDB Rating:</strong>"+movie.imdbRating+"</li>"+
                "<li class='list-group-item'><strong>Director:</strong>"+movie.Director+"</li>"+
                "<li class='list-group-item'><strong>Writer:</strong>"+movie.Writer+"</li>"+               
                "<li class='list-group-item'><strong>Actors:</strong>"+movie.Actors+"</li>"+
              "</ul>"+
            "</div>"+
         "</div>"+
          "<div class='row'>"+
            "<div class='well'>"+
              "<h3>Plot</h3>"+
              movie.Plot+
              "<hr>"
              "<a href='http://imdb.com/title/movie.imdbID' target='_blank' class='btn btn-primary'>View IMDB</a>"+
              "<a href='index.html' class='btn btn-default'>Go Back To Search</a>"+
            "</div>"+
          "</div>";
        
  
          document.querySelector('#movie').innerHTML = output;
      })
      .catch((err) => {
        console.log(err);
      });
}

