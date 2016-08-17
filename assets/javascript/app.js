

function articleSearch(term) {
  var query = term;
  var queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;
    $.ajax({url: queryURL, method: 'GET'})
     .done(function (response) {
       var search = response.docs[0].web_url;
       extractor(search)
     })
 }


function extractor(search) {

  var query = search
  var queryURL = 'http://boilerpipe-web.appspot.com/extract?url=' + query + '&extractor=ArticleExtractor&output=json'
  $.ajax({url: queryURL, method: 'GET'})
   .done(function (response) {
     console.log(response)
   })
  }


var input = $("#searchbutton").val().trim().split(" ").join("+");
articleSearch(input)
