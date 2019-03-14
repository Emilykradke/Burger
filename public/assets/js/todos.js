$(function() {
    $(".complete-todo").on("click", function(event) {
        var id = $(this).data("id");
        var completed = true;

        var completedState = {
            done: completed
        };

        // Send the PUT request
        $.ajax("/api/todos/" + id, {
            type: "PUT",
            data: completedState
        }).then(
            function() {
                location.reload();
            }
        )
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newTodo = {
            todo: $("#todo-input").val().trim()
        };

        // Send the POST request
        $.ajax("/api/todos", {
            type: "POST", 
            data: newTodo
        }).then(
            function() {
                console.log("created new todo");

                location.reload();
            }
        );
    });
});