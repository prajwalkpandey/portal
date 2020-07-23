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
   name=$('#nm').val(); 
   branch=$('#branch').val();
   fine=$('#fine').val();
   window.location.href="../src/subject.html?roll="+roll+"&semester="+sem+"&name="+name+"&branch="+branch+"&fine="+fine
   //console.log(roll)
   //myFunction(roll);

});
/*$('#save_regis').submit(function(event){
		event.stopPropagation();
		event.preventDefault();
		
)
		
});*/

$('#subjectsave').click(function(){

	if(document.getElementsByName("type_radio")[1].checked==true){
		electives=document.getElementsByName("type_radio")[1].defaultValue
		}
		else{
		electives=document.getElementsByName("type_radio")[0].defaultValue
		}
	const urlParams = new URLSearchParams(window.location.search);
	const roll = urlParams.get('roll');
	const semester=urlParams.get('semester');
	const name=urlParams.get('name');
	const branch=urlParams.get('branch');
	const fine=urlParams.get('fine');

	data={
	"rollno":roll,
    	"name":name,
    	"semester":semester,
    	"branch":branch,
    	"electives":electives,
    	"status":"Successful",
    	"fine":fine
	}

	data=JSON.stringify(data);
	console.log(data)
	$.ajax({

            type: "POST",
              async: true,
              crossDomain : true,
              url: "https://ce6d17cd7cc3.ngrok.io/registration",
              dataType: "json",
              data: data,
              contentType: "application/json; charset=utf-8",
              statusCode:
              {
              200: function() {
			window.location.href="../index.html"
              	},
              }
          });
});


$('#token-form').submit(function(event){

   event.preventDefault();
   roll = $('#roll').val();
   //window.location.href="./src/form.html?roll="+roll
   //alert(roll)

   $.ajax({
  url: "https://ce6d17cd7cc3.ngrok.io/registration/"+roll,
  data: '',
  dataType: "json",
  success: function(data){console.log(data)
	alert("The generated token is: "+data.grantToken+". Please submit within 24hrs")
}
})

})

$('#admin-form').click(function(){
        
	const mail = document.getElementById("email").value
	const psw =document.getElementById("password").value

	

	data={
	"mail":mail,
    	"psw":psw,
	}

	data=JSON.stringify(data);
	console.log(data)
	$.ajax({

            type: "POST",
              async: true,
              crossDomain : true,
              url: "https://aae0755ce200.ngrok.io/login",
              dataType: "json",
              data: data,
              contentType: "application/json; charset=utf-8",
              statusCode:
              {
              200: function() {
			window.location.href="../src/admin.html"
              	},
              }
          });
});


function FillForm(){
  document.getElementById("roll").value=roll
}

