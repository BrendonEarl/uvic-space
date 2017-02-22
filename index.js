$(document).click(function(e){
    //TODO Separate styles into new jQuery operation
    //FIXME randomize cat for each click
    $(".cats").append("<img style='position:absolute; left:"+(e.pageX)+"; top:"+(e.pageY)+";' src='http://thecatapi.com/api/images/get?format=src&type=gif'>");
});