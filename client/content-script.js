var url = "http://127.0.0.1:5000/classify";

$(document).ready(function() {
    $('.content').each(function(index){
        console.log(index);
        var text = this.textContent;
        var that = this;
        
        $.ajax(
            {
             url: url,
             type:"GET",
             data: {text: "text"},
             success: function(result) {
                var probability = result["probability"]
                if (probability>0.5) {
                    $(that).css('text-decoration', 'line-through');
                }
            },
            error: function(xhr, status, error) {
                console.log("Error occurred!!!!");
                console.log(xhr.responseText);
                console.log(error);
            },

            }
        )
    });
});



console.log("Welcome to our extension!");
