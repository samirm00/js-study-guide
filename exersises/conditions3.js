var now = new Date();
var dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6

if(dayOfWeek == 5) {
alert("Have a nice weekend!");
} else if(dayOfWeek == 0) {
alert("Have a nice Sunday!");
} else {
alert("Have a nice day!");
}</code></pre>