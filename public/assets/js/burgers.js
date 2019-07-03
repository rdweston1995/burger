$(function(){
    $(".newBurger").on('click', function(event){
        event.preventDefault();
        console.log("test");
        var newBurger = {
            burger_name: $(".form-control").val().trim(),
            //devoured: 1
        };

        console.log('BURGERS: ' + newBurger.burger_name);

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function(){
            console.log("new burger added");
            location.reload();
        });

        $(".form-control").val("").trim();
    });

    $(".eatme").on('click', function(){
        console.log($(".eatme").val());
        $.ajax('/:id', {
            type: 'PUT',
            data: $(".eatme").val()
        }).then(function(){
            console.log(id + ": has been devoured");
            location.reload();
        })
    });
});