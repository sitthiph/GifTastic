let gifTog = false;
$('document').ready(function() {
    $("#submit").click(function () {
        let input = $('#input').val();
        $('#input').val('');
        let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=NliGqs2YnIfuapttmz9CzIeP17oGqt64&q="+ input + "&limit=10&offset=0&rating=G&lang=en"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            for(let i = 0; i < 10; i++)
                document.getElementById("gif" + i).src = response.data[i].images.original.url;
            if(!gifTog)
                $("#gif-container").show();
        });
    });
});