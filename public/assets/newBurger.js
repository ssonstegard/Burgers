// // Changes burger status
$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devour: newDevour
        };
        console.log(newDevourState);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevour);
                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#bb").val(),
            devour: $("[name=devour]:checked").val(),
            // devour: true
        };


        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
               location.reload();
            }
        );
    });
});

// $(function() {
//     $(".change-devour").on("click", function(event) {
//       var id = $(this).data("id");
//       var newDevour = $(this).data("newdevour");
  
//       var newDevourState = {
//         devour: newDevour
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/Burgers/" + id, {
//         type: "PUT",
//         data: newDevourState
//       }).then(
//         function() {
//           console.log("changed devour to", newDevour);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//     $(".create-form").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
  
//       var newBurger = {
//         name: $("#ca").val().trim(),
//         devour: $("[name=devour]:checked").val().trim()
//       };
  
//       // Send the POST request.
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("created new Burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
// });