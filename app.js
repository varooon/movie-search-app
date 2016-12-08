$(document).ready(function(){

$("#movie-search-button").on("click", function(){

  var movieTitle = $("#movie-title").val();

  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?t="+movieTitle,
    success: function(movie){

      var imdbId = movie.imdbID;

      HANDLE.renderTemplate({
        templateSource: "#movie-template",
        data: movie,
        where: "#movie-card-container",
        clearOriginal: true
      });


      $("#search-input-box").hide();
      $(".movie-card").show(1000);

      $("#movie-reset-button").on("click", function(){
        $(".movie-card").hide();
        $("#search-input-box").show(1000);
        $("#movie-title").val("");
      });

    },
    error: function(){
      alert("Oh no!");
    }


  });

});

});
