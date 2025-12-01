let MyString = "Some of my favorite songs from my overplayed playlist";

let string1TotalCharacterNumber = MyString.length;

let string1iterationIndex = 0;

let stringInterval = setInterval(function(){
    $("#lobbytitle").append(MyString.charAt(string1iterationIndex)); 
    string1iterationIndex = string1iterationIndex + 1;
    console.log("1 iteration completed");
    if(string1iterationIndex == string1TotalCharacterNumber){
        clearInterval(string1Interval);
    }
}, 70); 