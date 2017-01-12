alert("refer to the form y = a * log[b(x-c)]^ex + d");
var aVal = prompt("Please enter your A value", "A value here");
aVal = parseInt(aVal);

var base = prompt("Please enter your base value", "base value here");
if (base == 'e'){
  base == Math.E;
}
base = parseInt(base);

var hStretch = prompt("Please enter your B value", "B value here");
hStretch = parseInt(hStretch);
hStretch = 1/hStretch;

var hShift = prompt("Please enter your C value", "C value here");
hShift = parseInt(hShift);

var vShift = prompt("Please enter your D value", "D value here");
vShift = parseInt(vShift);

var exVal = prompt("Please enter your ex value", "ex value here");
exVal = parseInt(exVal);


var x = 1;
var y = 0;
x = x*hStretch + hShift;
y = y + vShift;
document.write("your transformed point is at " + x + "," + y + "<br/>");
y = -vShift;
y = y/(exVal*aVal);
y = base**y;
y = y*hStretch;
y = y+hShift;
y = Math.pow(y, exVal);
document.write("your  x intercept is " + y + "<br/>");
document.write("your equation of the asymptote is x = " + hShift + "<br/>");
if (exVal%2 == 0){
document.write("your other x intercept is " + (-y);
}
