var a = 5;
var b = 6;
var value = (a * a) + (2 * a * b) - (b * b);

if ( value > 0 ) {
	alert('Wynik dodatni');
} else if ( value < 0 ) {
	alert('Wynik ujemny');
} else ( value == 0 ) {
	alert('Wynik to zero');
}