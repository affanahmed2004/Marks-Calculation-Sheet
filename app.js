
const ptr = prompt("Please enter your percentage!")

if (ptr<= 39) {
    console.log("Your are failed!")
}
 else if(ptr<= 49){
    console.log("You grade:D")
}
 else if(ptr<= 59){
    console.log("You grade:C")
}
else if(ptr<= 69){
    console.log("You grade:B")
}
else if(ptr<= 79){
    console.log("You grade:A")
}
else if(ptr<= 89){
    console.log("You grade:A-One")
}
else if(ptr<= 100){
    console.log("You grade:A-One")
}
else{
    console.log("INVALID!!! Please Input the correct data")
}