function isPrime() 
{
var output = document.getElementById('output');
var n = parseInt(document.getElementById('num').value);

if (n===1){
  output.textContent = n + " is not prime";
}
  else {
for(var x = 2; x < n; x++) 
  {
if(n % x === 0) {
//output.textContent = n + " is not prime number";
document.getElementById("output").innerHTML=(n + " is not prime number");
return false;
  }
}
output.textContent = n + " is prime number";
return;
  }
}