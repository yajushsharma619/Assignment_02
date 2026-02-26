let integer1 = parseInt(prompt("Enter the first integer:"));
let integer2 = parseInt(prompt("Enter the second integer:"));

if (integer1 > integer2) {
    document.write(integer1 + " is larger.");
} else if (integer2 > integer1) {
    document.write(integer2 + " is larger.");
} else {
    document.write("Both numbers are equal.");
}