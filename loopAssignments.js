var monthOfYear = function (monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log("This Month is January");
            break;
        case 2:
            console.log("This Month is February");
            break;
        case 3:
            console.log("This Month is March");
            break;
        case 4:
            console.log("This Month is April");
            break;
        case 5:
            console.log("This Month is May");
            break;
        case 6:
            console.log("This Month is June");
            break;
        case 7:
            console.log("This Month is July");
            break;
        case 8:
            console.log("This Month is August");
            break;
        case 9:
            console.log("This Month is September");
            break;
        case 10:
            console.log("This Month is October");
            break;
        case 11:
            console.log("This Month is November");
            break;
        case 12:
            console.log("This Month is December");
            break;

        default:
            console.log("Please enter a Valid Value");
            break;
    }
}
monthOfYear();
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
