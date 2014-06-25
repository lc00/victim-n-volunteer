// var nameVictim = [];
// var phoneNumVictim = [];
// var streetVictim = [];

// var nameVolunteer = [];
// var phoneNumVolunteer = [];
// var streetVolunteer = [];
// // var arrayVictim = [];
// // var arrayVolunteer = [];
// // // var victim = {};
// // var volunteer = {};


// // var numVictim = prompt("how many disaster victims you wish to enter?");

// // for(var i =0; i<numVictim; i++){
// // 	// var victm[i] = {};
// // 	victim.fullName = prompt("please enter your name");
// // 	victim[i].phoneNum = prompt("enter your phone number");
// // 	victim[i]. street = prompt("enter your street");
// // 	arrayVictim.push(victim[i]);
// // }
// var numVictim = 0;
// var numVolunteer = 0;
// var listMatchStreet = [];

// do{
// 	nameVictim.push(prompt("please enter your name as the victim"));
// 	phoneNumVictim.push(prompt("enter your phone number"));
// 	streetVictim.push(prompt("enter your street"));
// 	numVictim +=1;
// } while(confirm("Do you wish to continue"));

// // var numVolunteer = prompt("how many disaster volunteers you wish to enter?")

// do{	nameVolunteer.push(prompt("please enter your name as the volunteer"));
// 	phoneNumVolunteer.push(prompt("enter your phone number"));
// 	streetVolunteer.push(prompt("enter your street"));
// 	numVolunteer +=1;
// } while(confirm("Do you wish to continue"));


// var summary = numVictim + " victims;" + "\n" +
// 			  numVolunteer + " volunteers;" + "\n" +
// 			  "list of victims: " + nameVictim + "\;" + "\n" + 
// 			  "list of volunteers: " + nameVolunteer;

// alert(summary);

// /* bonus II */

// var victimName = prompt("please enter your name as the victim");
// var victimPhoneNum = prompt("enter your phone number");
// var victimStreet = prompt("enter your street");


// for(var j=0; j<numVolunteer; j++){
// 	if(victimStreet.indexOf(streetVolunteer[j]) >=0 ){
// 		listMatchStreet.push(streetVolunteer[j]);

// 	}
// }

// if( listMatchStreet.length > 0){
// 	alert(listMatchStreet);


// }

$(".button-victim").on('click', function(){
	$(".victim-info").show();
});
$(".button-volunteer").on('click', function(){
	$(".volunteer-info").show();
});





