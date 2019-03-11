$(function(){
    $(".btn-devoured").on("click", function(event){
        var id=$(this).data("id");
        var newDevoured=$(this).data("newdevoured");

        var newDevState ={
            devoured: newDevoured
        };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevState
        }).then(
        function() {
            location.reload();
        }
        );
    });
      
    $(".new-burger").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
        burger_name: $("#burger-input").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(function() {
            location.reload();
        }
        );
    });
});