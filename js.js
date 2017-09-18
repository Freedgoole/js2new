
console.log('test');
document.getElementById('calcYear').onclick = function () {
	var year = document.getElementById('ege');
	var out = document.getElementById('out');
	if (year.value.length < 3) {
		result = 2017 - 2000 - parseInt(year.value);
	}
	else result = 2017 - parseInt(year.value);
	out.innerHTML = result;
}

document.getElementById('comparison').onclick = function () {
	var number1 = document.getElementById('num1').value;
	var number2 = document.getElementById('num2').value;
	var out2 = document.getElementById('out2');
	if (!isNaN(parseFloat(number2)) && isFinite(number2) && !isNaN(parseFloat(number1)) && isFinite(number2)) { 
		if (number1 == number2) out2.innerHTML = "comparison";
		else if (number1>number2) out2.innerHTML = number1;
		else out2.innerHTML = number2;
	}
	else   alert("Не число!");
}


document.getElementById('Search').onclick = function () {
	var ceremonial = document.getElementById('ceremonial').value;
	var out3 = document.getElementById('out3');
	if ( ceremonial > 0&& ceremonial<=20)  out3.innerHTML = "1 ceremonial";
	else if ( ceremonial > 20&& ceremonial<=64)  out3.innerHTML = "2 ceremonial"
	else if ( ceremonial > 64&& ceremonial<=80)  out3.innerHTML = "3 ceremonial"
	else alert('no');
}

var user1 = 'ivan', user2 = 'sss', user3 = 'gibs', pass1 = '333', pass2 = '666', pass3 = '0000';
document.getElementById('loginpush').onclick = function () {
	var login = document.getElementById('login').value;
	var pass = document.getElementById('pass').value;
	if (login == user1 && pass == pass1) alert('welcome');
	else if (login == user2 && pass == pass2) alert('welcome');
	else if (login == user3 && pass == pass3) alert('welcome');
	else alert ('warning');
}

document.getElementById('maxNumber').onclick = function(){
	var num1 = document.getElementById('inpNum1').value;
	var num2 = document.getElementById('inpNum2').value;
	var num3 = document.getElementById('inpNum3').value;
	document.getElementById('out5').innerHTML = Math.max(num1, num2, num3);
}

for (i=0; i<=101; i++) {
	var mas1 = document.getElementById('mas1');
	mas1.innerHTML += i+' ';
}
for (i=200; i >=0; i--) {
	var mas2 = document.getElementById('mas2');
	mas2.innerHTML += i+' ';
}

sum = 0;
for (i=0; i<=100; i++) {
	var mas3 = document.getElementById('mas3');
	sum += i;
	mas3.innerHTML = sum;
}

document.getElementById('btn').onclick = function(){
	var num5 = document.getElementById('inp1').value;
	var num6 = document.getElementById('inp2').value;
	var result = 1;
	for ( i=0; i<num6;i++) {
	result *= num5;
		document.getElementById('mas4').innerHTML = result;
	}	
}

for (i=1; i<=9; i++) {
	document.getElementById('mas5').innerHTML += '7'+'*'+i+'='+(7*i)+'<br>'; 
}

var multiplication = 1;
for ( var i=1; i<=50; i++) {
	
	multiplication *= i;
	document.getElementById('mas6').innerHTML = multiplication; 
}

var outResult = '';
for (var i = 1000; i <= 2000; i++) outResult += '&#' + i + ';';
	document.getElementById('mas7').innerHTML = outResult;