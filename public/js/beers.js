
var Search = {};

$("#beer-search").on("click", function(event){
    event.preventDefault();

    const searchterm = $("#searched-term").val()
    const searchtypestring = $("#search-type option:selected").text()
    var searchtype;
    
    function createSearchterm () {
        if (searchtypestring === "Breweries") {
            searchtype = "name"
        }
        else if (searchtypestring === "Beer") {
            searchtype = "beer_name"
        }
        else if (searchtypestring === "State"){
            searchtype = "state"
        }
    };
    createSearchterm(searchtypestring)
    
   Search = {
        searchType: searchtype,
        searchTerm: searchterm
    }

    $.post()

    console.log(searchterm + searchtype);

})

module.exports = Search;

// .get("/api/beer", function(data) {
//     console.log(data);
//     if (data.length !== 0) {
  
//       for (var i = 0; i < data.length; i++) {
  
//         var row = $("<tr>");
//         row.addClass("beer");
  
//         row.append("<td>" + data[i].beer_name + "</td>");
//         row.append("<td>" + data[i].name + "</td>");
//         row.append("<td> " + moment(data[i].created_at).format("h:mma on dddd") + "</td>");
  
//         $("#all-beerlist").append(row);
  
//       }
  
//     }
  
//   });
// });