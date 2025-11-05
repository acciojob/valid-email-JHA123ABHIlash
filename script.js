function validEmail(str) {
  //your JS code here.
	let reg=/^[\w.-]+@[\w.-]+\.\w+$/;
	return reg.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
