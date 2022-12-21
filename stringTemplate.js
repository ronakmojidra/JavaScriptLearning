console.log("=================Assignment A================");
console.log("1.");
var myDream = function stringTemplateAssig() {
    var dream = "Google";
    console.log(`My Dream Company name is:${dream}`);
}
myDream();

console.log("2.1");
var hobbies1 = "Reading";
var hobbies2 = "Swimming";
var hobbies3 = "Karate";
console.log(`${hobbies1},${hobbies2},${hobbies3}`);
console.log("2.2");
console.log(`My Hobbies are: ${hobbies1},${hobbies2},${hobbies3}`);

console.log("=================Assignment B================");
var stringHandsOn =  function (){
    console.log("1.");
    var string = "   Hey you are doing good, keep it up   ";
    console.log(string);
    console.log("2.");
    var slength = string.length;
    console.log(`Length of the String is: ${slength}`);
    console.log("3.");
    var strim = string.trim();
    console.log(`After removing extra spaces: ${strim}`);
    console.log("4.");
    var tlength = strim.length;
    var espace = slength - tlength;
    console.log(`Total Number of Extra Spaces Count is: ${espace}`);
    console.log("5.");
    console.log("First Character:",strim.charAt(0),"Lats Character:",strim.charAt(tlength-1));
    console.log("6.");
    var tcount = strim.split(" ");
    console.log("Count of Total Words are:",tcount);
    console.log("7.");
    console.log(`Index of "Good" is:`,string.indexOf("good"));
    console.log("8.");
    console.log("Substring Starting from:", string.substring(22));
    console.log("Slice from index 22:",string.slice(22));
    console.log("9.");
    console.log(`String ends with word "up":`,string.includes("up"));
    console.log("10.");
    console.log(`String starts with word "Hey":`,string.includes("Hey"));









}
stringHandsOn();


