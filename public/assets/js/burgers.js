$(function(){
    $(".btn").on('click', function(event){
        event.preventDefault();
        console.log("test");
        var newBurger = {
            burger_name: $(".form-control").val().trim(),
            devoured: 1
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function(){
            console.log("new burger added");
            location.reload();
        });

        $(".form-control").val("").trim();
    });
});