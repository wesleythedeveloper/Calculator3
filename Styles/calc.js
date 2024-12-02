function multiplication() {
	let number1 = document.getElementById('input1').value;
	let number2 = document.getElementById('input2').value;
	let number3 = number1 * number2;
	alert('Result:' + number3);
};
function whatToDo() {
	let x = prompt("Enter charcter");
	if (x == '+') {
		addition();
	}
	else if (x == '-') {
		subtraction();
	}
	else if (x == '*') {
		multiplication();
	}
	else if (x == '/') {
		division();
	}
	else {
		alert('wrong input')
	}
	let answer = confirm('Do you like this :)');
	answer2 = document.getElementById("P1");
	if (answer) {
		answer2.style.color = "blue";
	}
	else {
		answer2.style.color = "red";
	}
};
function subtraction() {
	let number1 = document.getElementById('input1').value;
	let number2 = document.getElementById('input2').value;
	let number3 = number1 - number2;
	alert('Result:' + number3);
};
function division() {
	let number1 = document.getElementById('input1').value;
	let number2 = document.getElementById('input2').value;
	let number3 = number1 / number2;
	alert('Result:' + number3);
};
function addition() {
	let number1 = Number(document.getElementById('input1').value);
	let number2 = Number(document.getElementById('input2').value);
	let number3 = number1 + number2;
	alert('Result:' + number3);
};
function clickzero() {
	let program = document.getElementById('input1');
	let runnerup = document.getElementById('input2');
	let number1 = 0;
	let decider = prompt('1=InputBox1,2=InputBox2');
	if (decider == 1) {
		program.value = number1;
	}
	else if (decider == 2) {
		runnerup.value = number1;
	}
	else {
		alert('Wrong Value..Try Again ')
		clickzero();
	}
}
function clickone() {
	let program = document.getElementById('input1');
	let runnerup = document.getElementById('input2');
	let number1 = 1;
	let decider = prompt('1=InputBox1,2=InputBox2');
	if (decider == 1) {
		program.value = number1;
	}
	else if (decider == 2) {
		runnerup.value = number1;
	}
	else {
		alert('Wrong Value..Try Again ')
		clickone();
	}
}
function clicktwo() {
	let program = document.getElementById('input1');
	let runnerup = document.getElementById('input2');
	let number1 = 2;
	let decider = prompt('1=InputBox1,2=InputBox2');
	if (decider == 1) {
		program.value = number1;
	}
	else if (decider == 2) {
		runnerup.value = number1;
	}
	else {
		alert('Wrong Value..Try Again ')
		clicktwo();
	}
}
function clickthree() {
	let program = document.getElementById('input1');
	let runnerup = document.getElementById('input2');
	let number1 = 3;
	let decider = prompt('1=InputBox1,2=InputBox2');
	if (decider == 1) {
		program.value = number1;
	}
	else if (decider == 2) {
		runnerup.value = number1;
	}
	else {
		alert('Wrong Value..Try Again ')
		clickthree();
	}
}
function clickfour() {
	let program = document.getElementById('input1');
	let runnerup = document.getElementById('input2');
	let number1 = 4;
	let decider = prompt('1=InputBox1,2=InputBox2');
	if (decider == 1) {
		program.value = number1;
	}
	else if (decider == 2) {
		runnerup.value = number1;
	}
	else {
		alert('Wrong Value..Try Again ')
		clickfour();
	}
}
function clickfive() {
	let program = document.getElementById('input1');
	let runnerup = document.getElementById('input2');
	let number1 = 5;
	let decider = prompt('1=InputBox1,2=InputBox2');
	if (decider == 1) {
		program.value = number1;
	}
	else if (decider == 2) {
		runnerup.value = number1;
	}
	else {
		alert('Wrong Value..Try Again ')
		clickfive();
	}
}
function clicksix() {
	let program = document.getElementById('input1');
	let runnerup = document.getElementById('input2');
	let number1 = 6;
	let decider = prompt('1=InputBox1,2=InputBox2');
	if (decider == 1) {
		program.value = number1;
	}
	else if (decider == 2) {
		runnerup.value = number1;
	}
	else {
		alert('Wrong Value..Try Again ')
		clicksix();
	}
}
function clickseven() {
	let program = document.getElementById('input1');
	let runnerup = document.getElementById('input2');
	let number1 = 7;
	let decider = prompt('1=InputBox1,2=InputBox2');
	if (decider == 1) {
		program.value = number1;
	}
	else if (decider == 2) {
		runnerup.value = number1;
	}
	else {
		alert('Wrong Value..Try Again ')
		clickseven();
	}
}
function clickeight() {
	let program = document.getElementById('input1');
	let runnerup = document.getElementById('input2');
	let number1 = 2;
	let decider = prompt('1=InputBox1,2=InputBox2');
	if (decider == 1) {
		program.value = number1;
	}
	else if (decider == 2) {
		runnerup.value = number1;
	}
	else {
		alert('Wrong Value..Try Again ')
		clickeight();
	}
}
function clicknine() {
	let program = document.getElementById('input1');
	let runnerup = document.getElementById('input2');
	let number1 = 9;
	let decider = prompt('1=InputBox1,2=InputBox2');
	if (decider == 1) {
		program.value = number1;
	}
	else if (decider == 2) {
		runnerup.value = number1;
	}
	else {
		alert('Wrong Value..Try Again ')
		clicknine();
	};
}
function Enter1() {
	let program = document.getElementById('input1');
	let me = Number(prompt('Enter Number1:'));
	input1.value = me;
}
function Enter2() {
	let program = document.getElementById('input2');
	let me = Number(prompt('Enter Number2:'));
	input2.value = me;
}
console.log('It workss');
