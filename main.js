var str = document.getElementById('str');
var str2 = document.getElementById('str2');
var str3 = document.getElementById('str3');
var rs2 = document.getElementById('rs2');
var lng = document.getElementById('lng');
var strinv = document.getElementById('strinv');
var btn = document.getElementById('btn');
var alert = document.getElementById('alert');
var alert4 = document.getElementById('alert4');
var wthspcs = document.getElementById('wthspc');
var results = document.getElementById('results');
var result2 = document.getElementById('result2');
var result3 = document.getElementById('result3');
var result4 = document.getElementById('result4');
var whtSpc = 0;
var lista = [];
alert.style.display = 'none';
alert4.style.display = 'none';
var n1 = document.getElementById('n1');
var n2 =  document.getElementById('n2');
var rs4 = document.getElementById('rs4');

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

function op4(op) {
    if (n1.value && n2.value) {
        n1 = parseInt(n1.value); 
        n2 = parseInt(n2.value);
        result4.style.display = 'block';
        switch (op) {
            case '+':
                rs4.innerHTML = n1 + n2;
                break;
            case '-':
                rs4.innerHTML = n1 - n2;
                break;
            case '*':
                rs4.innerHTML = n1 * n2;
                break;
            case '/':
                rs4.innerHTML = n1 / n2;
                break;
        }
    } else {
        alert4.innerHTML = 'Debe ingresar los números';
        alert4.style.display = 'block';
    }
}