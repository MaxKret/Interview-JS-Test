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
		document.getElementById("result").innerHTML = '&nbsp;';
	});
});

function displayKey(keyVal) {
	if (getResText() == ' ') { // ' ' == '&nbsp;'
		setResText(keyVal);
	}
	else {
		document.getElementById("result").innerText += keyVal;
	}
}

function solve() {
	let x = getResText();
	let y = Function("return " + x)();
	setResText(y);
}

function getResText() {
	return document.getElementById("result").innerText;
}

function setResText(txt) {
	document.getElementById("result").innerText = txt;
}