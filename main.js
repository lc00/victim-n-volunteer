var nameVictim = [];
var phoneNumVictim = [];
var streetVictim = [];

var nameVolunteer = [];
var phoneNumVolunteer = [];
var streetVolunteer = [];
// var arrayVictim = [];
// var arrayVolunteer = [];
// // var victim = {};
// var volunteer = {};


var numVictim = prompt("how many disaster victims you wish to enter?");

// for(var i =0; i<numVictim; i++){
// 	// var victm[i] = {};
// 	victim.fullName = prompt("please enter your name");
// 	victim[i].phoneNum = prompt("enter your phone number");
// 	victim[i]. street = prompt("enter your street");
// 	arrayVictim.push(victim[i]);
// }

for (var i =0; i<numVictim; i++){
	nameVictim.push(prompt("please enter your name"));
	phoneNumVictim.push(prompt("enter your phone number"));
	streetVictim.push(prompt("enter your street"));
}

var numVolunteer = prompt("how many disaster volunteers you wish to enter?")

for (var i =0; i<numVolunteer; i++){
	nameVolunteer.push(prompt("please enter your name"));
	phoneNumVolunteer.push(prompt("enter your phone number"));
	streetVolunteer.push(prompt("enter your street"));
}


var summary = numVictim + " victims;" + "\n" +
			  numVolunteer + " volunteers;" + "\n" +
			  "list of victims: " + nameVictim + "\;" + "\n" + 
			  "list of volunteers: " + nameVolunteer;

alert(summary);









