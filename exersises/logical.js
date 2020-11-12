ar year = 2018;

// Leap years are divisible by 400 or by 4 but not 100
if((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0))){
alert(year + " is a leap year.");
} else{
alert(year + " is not a leap year.");
}</code></pre>