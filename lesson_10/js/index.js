var num = 10;
var str = 'text';
var bool = true;
var undef;
var empty = null;
var int = 64737n;
var sym = Symbol("$");
var myCurrentEge = 36;
console.log('num variable is typeof: ' + typeof num);
console.log('str variable is typeof: ' + typeof str);
console.log('bool variable is typeof: ' + typeof bool);
console.log('undef variable is typeof: ' + typeof undef);
console.log('empty variable is typeof: ' + typeof empty);
console.log('int variable is typeof: ' + typeof int);
console.log('sym variable is typeof: ' + typeof sym);
document.write('Result of IF/ELSE operator: ');
if (myCurrentEge >= 25) {
    document.write('<mark>I am over 25 years old</mark>');
} else {
    document.write('<mark>I am under 25</mark>');
}
document.write('<br/>Result of ternary operator: ');
(myCurrentEge >= 25) ? document.write('<mark>I am over 25 years old</mark>') : document.write('<mark>I am under 25</mark>');
