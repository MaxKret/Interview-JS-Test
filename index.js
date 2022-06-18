$(function () {
	$('.key').click(function () {
		let key = this.innerText;
		if (this.id == 'multiply') key = '*';
		if (this.id == 'divide') key = '/';
		displayKey(key);
	});
	$('#calculate').click(function () {
		solve();
	});
	$('#clear').click(function () {
		clearDisplay();
	});
});

function displayKey(keyVal) {
	if (document.getElementById("result").innerText == ' ') {
		document.getElementById("result").innerText = keyVal;
	}
	else {
		document.getElementById("result").innerText += keyVal;
	}
}

function solve() {
	let x = document.getElementById("result").innerText;
	let y = Function("return " + x)();
	document.getElementById("result").innerText = y;
}

function clearDisplay() {
	document.getElementById("result").innerHTML = '&nbsp;';
}