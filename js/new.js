let student;
var roll;

function hello(e){
console.log("hello");
}

//$(document).ready(function () {
//$(document).on('click', 'input[name="Continue"]',function(event){
$('#application-form').submit(function(event) {
   //event.stopPropagation();
   event.preventDefault();
   roll = $('#roll').val();
   window.location.href="./src/form.html?roll="+roll
   //console.log(roll)
   //myFunction(roll);

});
$('#registration-form').submit(function(event) {
   //event.stopPropagation();
   event.preventDefault();
   roll = $('#roll').val();
   sem=$('#Semester').val();
   window.location.href="../src/subject.html?roll="+roll+"&semester="+sem
   //console.log(roll)
   //myFunction(roll);

});
function FillForm(){
  document.getElementById("roll").value=roll
}

