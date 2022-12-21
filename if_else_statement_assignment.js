console.log("=============Assignment 1.1=============");
var vote = function(age){
    if (age<=0 || age>120) {
        console.log(`Invalid Data: ${age}`);
    } else {
        console.log(`Valid Data: ${age}`);
        if (age>=18) {
            console.log(`Congratulation You can vote: ${age}`);
        } else {
            console.log(`Sorry you are not eligible for vote: ${age}`);
            
        }
        
    }
}
vote(45);
vote(17);
vote(8);
vote(20);
vote(-10);
vote(200);
vote(0);

console.log("=============Assignment 1.2=============");
var gradeCalculation = function (marks) {
    if (marks>=100 || marks<=0) {
        console.log(`Invalid Marks ${marks}`);
        console.log(`Please provide the valid marks`);
    } else {
        console.log(`Valid Data `);
    if (marks>=90 || marks<=100) {
        console.log(`Fantastic Marks ${marks}, Your Grade is A+`);
    }
    if (marks>=75 && marks<90) {
        console.log(`Execellent Marks ${marks}, Your Grade is A`);
    }
    if (marks>=50 && marks<=75) {
        console.log(`Good Marks ${marks}, Your Grade is B`);
    }
    if (marks>=35 && marks<=50) {
        console.log(`Marks is ${marks}, Your Grade is C, Need Improvement`);
    }
    if (marks<=0 || marks>100) {
        console.log(`Please provide the valid marks`);
    }
}
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("Eighty");