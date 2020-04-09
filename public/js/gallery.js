      $.get("../api/pets", function(data) {
        console.log(data)
            for(var i = 0; i < data.length; i++){
                $('#dynamic-div').append(
                    '<div class = "col-lg-4">'+
                        '<a href = "http://localhost:3000/pets/' + data[i].petName+ '">' +
                            '<img class = "img-fluid" src = "./uploads/' +data[i].img + '"/>'+
                            '<h3 class ="text-center">' +data[i].petName + '</h3>'+
                        '</a>'+
                    '</div>'        
                )  
            }
        });