var gifList = [];
var max = 100
var i = 0;

$(document).ready(function() {
    // get a list of cat gifs (xml)
    $.get("http://thecatapi.com/api/images/get?format=xml&type=gif&results_per_page="+max,
        function(doc) {
            // parse into list of urls only for img src
            var urlList = doc.getElementsByTagName("url");
            for(var j = 0; j < max; j++) {
                gifList.push(urlList[j].textContent)
            }
        }
    );
});

$(document).on('click tap', function(e){
    // avoid double fire
    e.stopImmediatePropagation()
    // increment unless at max
    if (i < max-1) i++
    else i = 0
    // create jQuery element
    var cat = $("<img src='"+gifList[i]+"'>");
    cat.css({
        position: "absolute",
        visibility: "hidden"
    })
    // add cat to DOM
    $(".cats").append(cat)
    // hopefully cat will be in DOM by timeout
    setTimeout(function() {
        // position under cursor and show
        cat.css({
            visibility: "visible",
            left: (e.pageX-cat.width()/2),
            top: (e.pageY-cat.height()/2)
        })
    }, 200)
});