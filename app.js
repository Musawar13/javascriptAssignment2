// Exercise No.21 to 25 String Methods


//TASK NO.1
// var first_name  = prompt("first name");
// var last_name   = prompt( "last name")
// var full_name   = first_name +  last_name;
// alert(full_name);

//Task no.2
var favorit_mobile = prompt("my favorit phone is:");
var str = "my favorit phone is: samsung galaxy s6 edge";
var mobile = str.lastIndexOf("edge") ;
document.write(favorit_mobile + "<br> <br>" + mobile  + "<br> <br>");

//Task no.3
var str = "Pakistani";
var lenght = str.indexOf("n");
document.write("length of 'n' :" + lenght  + "<br> <br>");

//Task no.4
var txt = "Hello World";
var segIndex = txt.lastIndexOf("l");
document.write("last index of 'l':" + segIndex  + "<br> <br>");

//Task no.5 
var text = "Pakistani";
var charch = text.charAt("i");
document.write("char at 3rd is" + charch   + "<br> <br>");

// Task no.6
var leter  = "Q1";
var  rep = leter.repeat(5);
document.write(rep  + "<br> <br>");

//Task no. 7
var city = "HYDRABAD";
var afterReplace = city.replace( "HYDRABAD" , "ISLAMABAD");
document.write("City:Hydrabad"+  "<br>" + "After replacement:"+ afterReplace + "<br> <br>");

//Task no. 8 

var message = "Ali and Sami are best friends. They play cricket and football together ."
var rep = message.replace(/and/g, "&");
document.write(rep + "<br> <br>");

//Task no. 9
var numString = "Type : String" + "&nbsp" + "42";
var num = parseInt(42);
document.write(numString + "<br>" + "Type: Number" + num  + "<br> <br>");

//Task no.10
var lowerCase = prompt("peanuts");
var uperCase = lowerCase.toLocaleUpperCase();
document.write("USER INPUT:" +"&nbsp"+ lowerCase + "<br>" + "UPPER CASE:"+ "&nbsp"+ uperCase  + "<br> <br>");

//Task no 11
var changeCase = "javascript";
var chage1stLetter = changeCase.chatAt(0).toUpperCase();
document.write(chage1stLetter  + "<br> <br>");


//Exercise no chap 26 to 30
//Task no.1 
var num = 3.45626;
var round = num.round(num);
document.write(round);









  
