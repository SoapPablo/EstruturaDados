var myVariable = 'global';
myOtherVariable = 'Global';

function myFfunction() {
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log('myVariable: ' + myVariable);
console.log(myFfunction());
console.log('myOtherVariable' + myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);
