$("#getIt").on("click", function() {

  workJSON();

});

function workJSON() {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=cedarrapids&units=imperial&appID=2013d14a00c9aca02995011b965c3cfd";
  $.getJSON(url, function(json) {
    //         $(".words").html(JSON.stringify(json));
    console.log(json.main.temp);
    $(".words").html("<h1>"+json.main.temp+"</h1>");
    //-JSON.stringify(json.weather));-->

  });
}