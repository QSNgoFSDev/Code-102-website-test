alert ("You will need to enter your name")

let person = prompt("Please enter your name");
let errorMsg = "Invalid username, please try again";
let returntext;




if (person == null || person == "") {
  returntext = errorMsg;


}


else if (person.toLowerCase() === "sang") {


  returntext = 'Welcome back admin';
} 


else {

  returntext = "Welcome " + person + " to my site";
}

document.write(returntext)