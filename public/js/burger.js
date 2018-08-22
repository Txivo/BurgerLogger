$(function () {

    $(".addBurger").on("submit", function (event) {

        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burgerToeat").val().trim(),
        };
       
    

        $.ajax("/api/burger", {
          type: "POST",
          data: newBurger
        }).then(

// update list
          function () {

            console.log("created new burger");
            location.reload();
          }
        );
      });


      $(".devoured").on("click", function (event) {

        event.preventDefault();
        var id=$(this).data("id");
        var devoured=$(this).data("status");
        var newStatus = {
          status:devoured
        };
      console.log(newStatus.status + "And its ID is " + id);
    
    
        $.ajax("/api/burger/" + id, {
          type: "PUT",
          data: newStatus
        }).then(

          function () {
              
            console.log("changed status to " + newStatus.status);
            location.reload();
          }
        );
      });

});