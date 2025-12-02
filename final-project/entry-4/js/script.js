let MyString = "I've been looking so long at these pictures of you That I almost believe that they're real";

let string1TotalCharacterNumber = MyString.length;

let string1iterationIndex = 0;

let stringInterval = setInterval(function(){
    $("#typewriting-lyric").append(MyString.charAt(string1iterationIndex)); 
    string1iterationIndex = string1iterationIndex + 1;
    console.log("1 iteration completed");
    if(string1iterationIndex == string1TotalCharacterNumber){
        clearInterval(string1Interval);
    }
}, 70); 

let MyString2 = "I've been living so long with my pictures of you That I almost beleive that the pictures are all I can feel";

let string2TotalCharacterNumber = MyString2.length;

let string2iterationIndex = 0;

let string2Interval = setInterval(function(){
    $("#typewriting-lyric2").append(MyString2.charAt(string2iterationIndex)); 
    string2iterationIndex = string2iterationIndex + 1;
    console.log("1 iteration completed");
    if(string2iterationIndex == string2TotalCharacterNumber){
        clearInterval(string2Interval);
    }
}, 70); 

let MyString3 = "Remembering you standing quiet in the rain As I ran to your heart to be near";

let string3TotalCharacterNumber = MyString3.length;

let string3iterationIndex = 0;

let string3Interval = setInterval(function(){
    $("#typewriting-lyric3").append(MyString3.charAt(string3iterationIndex)); 
    string3iterationIndex = string3iterationIndex + 1;
    console.log("1 iteration completed");
    if(string3iterationIndex == string3TotalCharacterNumber){
        clearInterval(string3Interval);
    }
}, 70); 

let MyString4 = "And we kissed as the sky fell in, holding you close How I always held close in your fear";

let string4TotalCharacterNumber = MyString4.length;

let string4iterationIndex = 0;

let string4Interval = setInterval(function(){
    $("#typewriting-lyric4").append(MyString4.charAt(string4iterationIndex)); 
    string4iterationIndex = string4iterationIndex + 1;
    console.log("1 iteration completed");
    if(string4iterationIndex == string4TotalCharacterNumber){
        clearInterval(string4Interval);
    }
}, 70); 

let MyString5 = "Remembering you running soft through the night You bigger and brighter and wider than snow";

let string5TotalCharacterNumber = MyString5.length;

let string5iterationIndex = 0;

let string5Interval = setInterval(function(){
    $("#typewriting-lyric5").append(MyString5.charAt(string5iterationIndex)); 
    string5iterationIndex = string5iterationIndex + 1;
    console.log("1 iteration completed");
    if(string5iterationIndex == string5TotalCharacterNumber){
        clearInterval(string5Interval);
    }
}, 70); 

let MyString6 = "You screamed at the make-believe, screamed at the sky And you finally found all your courage to let it all go";

let string6TotalCharacterNumber = MyString6.length;

let string6iterationIndex = 0;

let string6Interval = setInterval(function(){
    $("#typewriting-lyric6").append(MyString6.charAt(string6iterationIndex)); 
    string6iterationIndex = string6iterationIndex + 1;
    console.log("1 iteration completed");
    if(string6iterationIndex == string6TotalCharacterNumber){
        clearInterval(string6Interval);
    }
}, 70); 