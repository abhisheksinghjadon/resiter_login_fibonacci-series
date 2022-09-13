
function fibo() {
    // declaration of the variables 
    var n1 = parseInt(document.getElementById("in1").value);
    var n2 = parseInt(document.getElementById("in2").value);
    var next, i;
    var num = parseInt(prompt(" Enter the limit for Fibonacci Series "));
    document.write("Fibonacci Series: ");

    for (i = 1; i <= num; i++) {
        document.write(" <br> " + n1); // print the n1  
        next = n1 + n2; // sum of n1 and n2 display fibonachi series into the next_num  

        n1 = n2; // assign the n2 value into n2  
        n2 = next; // assign the next_num into n2  

    }

}

