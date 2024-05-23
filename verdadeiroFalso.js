function testTruthy(val) {
    return val ? console.log('true') : console.log('false');
}
testTruthy(true); //true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (objeto é sempre true)
testTruthy(''); // false
testTruthy('Bom dia!'); //true
testTruthy(new String('')); //true (objeto é sempre true)
testTruthy(1); // true
testTruthy(-1); // true

testTruthy(NaN); // false
testTruthy(new number(NaN)); //true (objeto é sempre true)
var obj = { name: 'joão' };
testTruthy(obj); // true
testTruthy(obj.name); // true
testTruthy(obj.age); // age (propriedade não existe)
