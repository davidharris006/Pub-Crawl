
// var search = {};
$(document).ready(function () {
    $('#response-display').hide()
    $("#hidebox").hide()
    $("#beer-search").on("click", function (event) {
        event.preventDefault();
        $('#response-display').show()
        $("#response-display").empty()
        console.log("its doing this");
        const searchterm = $("#searched-term").val()


        const searchtypestring = $("#search-type option:selected").text()
        var searchtype;

        function createSearchterm() {
            if (searchtypestring === "Breweries") {
                searchtype = "name"
            }
            else if (searchtypestring === "Beer") {
                searchtype = "beer_name"
            }
            else if (searchtypestring === "State") {
                searchtype = "state"
            }
        };
        createSearchterm(searchtypestring)

        search = {
            searchType: searchtype,
            searchTerm: searchterm
        }

        console.log(search);

        $.post("/api/beers", search, function (data) {
            if (data.length > 1) {

                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i]);
                    const div = $('<div>')
                    const list = $("<li>")

                    list.addClass("listitems")
                    list.append(data[i].beer_name + " ")
                    list.append("Brewery: " + data[i].name + "  ")
                    list.append("State: " + data[i].state +"<hr>")
                    div.append(list)
                    $("#response-display").append(list)

                } 
            }
            else {
                if (typeof data.beer_name === "undefined") {
                    console.log("its getting here!");
                    throw alert("Please try agian did not find any beer!")
                }
                else {

                    const list = $("<li>")
                    list.append(data.beer_name + " " + "<br>")
                    list.append("Brewery: " + data.name + "  ")
                    list.append("State: " + data.state)
                    $("#response-display").append(list)
                }
            }

            // Grab the result from the AJAX post so that the best match's name and photo are displayed.

            // Show the modal with the best match

        });




    })

    $("#surveysubmit").on("click", function (event) {
        event.preventDefault();
        $("#hidebox").show();
        console.log("its doing this too");
        $("#displaycontainer").css("display", "block")


        const abv = $("#q1 option:selected").text()
        const state = $("#q2 option:selected").text()
        const size = $("#q3 option:selected").text()
        const name = $("#q5 option:selected").text()





        survey = {
            abv: abv,
            state: state,
            size: size,
            color: name
        }

        console.log(survey);

        $.post("/api/survey", survey, function (data) {
            if (data.length > 1) {

                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i]);
                    const list = $("<li>")
                    list.addClass("listitems")
                    list.append("<hr>" +"Beer: " + data[i].beer_name + "<br> ")
                    list.append("Brewery: " + data[i].name + "  ")
                    list.append("loacted in " + data[i].state)
                    $("#surveyresdispaly").append(list)

                }
            }
            else {
                const list = $("<li>")
                console.log(data);
                list.append(data.beer_name + " " + "<br>")
                list.append("Brewery: " + data.name + "  ")
                list.append("State: " + data.state)
                $("#surveyresdispaly").append(list)
            }

            // Grab the result from the AJAX post so that the best match's name and photo are displayed.

            // Show the modal with the best match

        });




    })
})



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