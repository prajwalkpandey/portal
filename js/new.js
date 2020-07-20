
var roll;

function hello(e){
console.log("hello");
}

function myFunction(roll_number) {

//fetch("https://3b7c36c681d3.ngrok.io/student/1701046")

  //.then(response => response.json())
  //.catch(error => console.log('error', error));

$.ajax({
  url: "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6e14aa9b62dfb085e2b238e686b4d268",
  data: '',
  dataType: "json",
  success: function(data){console.log(data)}
})
};


$('#application-form').submit(function(event) {
   //event.stopPropagation();
   event.preventDefault();
   roll = $('#roll').val();
   console.log(roll)
   myFunction(roll);

});


