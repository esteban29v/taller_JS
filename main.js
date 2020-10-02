var str = document.getElementById('str');
var str2 = document.getElementById('str2');
var str3 = document.getElementById('str3');
var rs2 = document.getElementById('rs2');
var lng = document.getElementById('lng');
var strinv = document.getElementById('strinv');
var btn = document.getElementById('btn');
var alert = document.getElementById('alert');
var wthspcs = document.getElementById('wthspc');
var results = document.getElementById('results');
var result2 = document.getElementById('result2');
var result3 = document.getElementById('result3');
var whtSpc = 0;
var lista = [];
alert.style.display = 'none';

function op1() {
    
    if (str.value) {
        results.style.display = 'block';
        aString = Array.from(str.value);
        strinv.innerHTML = str.value.split('').reverse();
        lng.innerHTML = aString.length;
        
        for (i = 0; i < aString.length; i++){
            if (aString[i] === " ") {
                whtSpc += 1;
            }
        }
        console.log(whtSpc);
        alert.style.display = 'none';
        alert.innerHTML = '';
        wthspcs.innerHTML = whtSpc;
        whtSpc = 0;
    } else {
        results.style.display = 'none';
        alert.style.display = 'block';
        alert.innerHTML = 'Ingrese la cadena de texto';
    }
}

function op2() {
    
    if (str2.value) {
        result2.style.display = 'block';
        rs2.innerHTML = Array.from(str2.value).join("-");
        console.log(Array.from(str2.value).join("-"));
    } else {
        console.log('no hay valor');
    }
}

function op3() {
    
    if (str3.value) {
        result3.style.display = 'block';
        lista.push
        rs2.innerHTML = Array.from(str2.value).join("-");
        console.log(Array.from(str2.value).join("-"));
    } else {
        console.log('no hay valor 2');
    }
}