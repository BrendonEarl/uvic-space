var gifList = [];
var max = 50
var i = 0;

$(document).ready(function() {
    
    $.get("http://thecatapi.com/api/images/get?format=xml&type=gif&results_per_page="+max,
        function(doc) {
            var urlList = doc.getElementsByTagName("url");
            console.log(urlList);
            for(var j = 0; j < max; j++) {
                console.log(urlList[j].textContent)
                gifList.push(urlList[j].textContent)
            }
        }
    );
});

$(document).on('click tap', function(e){
    //TODO Separate styles into new jQuery operation
    var gifSrc = gifList[i]
    if (i < max-1) i++
    else i = 0
    $(".cats").append("<img style='position:absolute; left:"+(e.pageX)+"; top:"+(e.pageY)+";' src='"+gifList[i]+"'>");
});