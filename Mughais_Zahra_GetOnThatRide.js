//variables 

//to save the rider height
var height = 0 ;
//to save the rider age
var age = 0 ;
// at least 52 inches tall 
var minHeight = 42;
// 10 years and older
var minAge = 10;


//functions

//check the height 
function checkHeight (height) {
    if (height > 52){
        console.log("Get on that ride, kiddo!");
    } else {
        console.log("Sorry kiddo. Maybe next year.")
    }
}
//Adjust the conditional statement to require both height and age.
function checkHeightAndAge (height, age) {
    if (height >= minHeight && age >= minAge){
        console.log("Get on that ride, kiddo!");
    } else {
        console.log("Sorry kiddo. Maybe next year.")
    }
}
//Adjust the conditional statement to require either height requirement or age requirement must be met
function checkHeightAndAge (height, age) {
    if (height >= minHeight || age >= minAge){
        console.log("Get on that ride, kiddo!");
    } else {
        console.log("Sorry kiddo. Maybe next year.")
    }
}
