let body = document.getElementsByTagName('body');
let contactUs = document.getElementsByClassName('contactUs');

function setOpacity(blackBox, whiteBox)
{
	blackBox.style.opacity = "100%";
	whiteBox.style.opacity = "100%";
}

function createCUFrom()
{
	let blackBox = document.createElement('div');
	blackBox.style.position = "fixed";
	blackBox.style.left = "0";
	blackBox.style.top = "0";
	blackBox.style.width = "100vw";
	blackBox.style.height = "100vh";
	blackBox.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
	blackBox.style.opacity = "0";
	blackBox.style.transition = "opacity ease 1s";

	let whiteBox = document.createElement('form');
	whiteBox.innerHTML = "Contact us";
	whiteBox.style.boxShadow = "3px 3px 10px rgba(0,0,0,0.7), -3px -3px 10px rgba(0,0,0,0.7)";
	whiteBox.style.fontSize = "40px";
	whiteBox.style.position = "fixed";
	whiteBox.style.left = "25%";
	whiteBox.style.top = "25%";
	whiteBox.style.width = "50%";
	whiteBox.style.height = "50%";
	whiteBox.style.backgroundColor = "rgb(255, 255, 255)";
	whiteBox.style.borderRadius = "10px";
	whiteBox.style.opacity = "0";
	whiteBox.style.transition = "opacity ease 1s";
	whiteBox.style.display = "flex";
	whiteBox.style.flexDirection = "column";
	whiteBox.style.justifyContent = "space-around";
	whiteBox.style.alignItems = "center";

	let name = document.createElement("input");
		name.setAttribute("type", "text");
		name.setAttribute("placeholder", "Name");
		name.className = "inputCU";
		whiteBox.append(name);

	let sName = document.createElement("input");
		sName.setAttribute("type", "text");
		sName.setAttribute("placeholder", "Surname");
		sName.className = "inputCU";
		whiteBox.append(sName);

	let email = document.createElement("input");
		email.setAttribute("type", "text");
		email.setAttribute("placeholder", "Email");
		email.className = "inputCU";
		whiteBox.append(email);

	let buttonBox = document.createElement('div');
	buttonBox.style.display = "flex";
	buttonBox.style.width = "70%";
	buttonBox.style.justifyContent = "space-around";

	let button1 = document.createElement('input');
	button1.setAttribute("type", "submit");
	button1.setAttribute("value", "Submit");
	button1.className = "buttonCU";
	buttonBox.append(button1);

	let button2 = document.createElement('button');
	button2.className = "buttonCU";
	button2.innerHTML = "Cancel";
	buttonBox.append(button2);
	whiteBox.append(buttonBox);

	button2.addEventListener ("click", function(){blackBox.remove(); whiteBox.remove()});
	blackBox.addEventListener ("click", function(){blackBox.remove(); whiteBox.remove()});
	body[0].append(blackBox);
	body[0].append(whiteBox);
	setTimeout(setOpacity, 1, blackBox, whiteBox);
	
	whiteBox.addEventListener("submit", formSender);
	
	async function formSender(e)
	{
		e.preventDefault();
		let error = formValidate();
	}

	function formValidate()
	{
		let error = 0;
		formRemoveError(email);
		formRemoveError(name);
		formRemoveError(sName);

		if(emailTest())
		{
			formAddError(email);
			error++;
		}

		if(nameTest())
		{
			formAddError(name);
			error++;
		}

		if(sNameTest())
		{
			formAddError(sName);
			error++;
		}

		if(error === 0)
		{
			alert('Thank you for message!!!')
			blackBox.remove();
			whiteBox.remove();
		}

		return error;
	}

	function formAddError(input)
	{
		input.classList.add('_error');
	}

	function formRemoveError(input)
	{
		input.classList.remove('_error');
	}

	function emailTest()
	{
		return !/^[A-Za-z@0-9.]+$/.test(email.value);
	}

	function nameTest()
	{
		return !/^[A-Za-z]+$/.test(name.value);
	}

	function sNameTest()
	{
		return !/^[A-Za-z]+$/.test(sName.value);
	}
}
contactUs[0].addEventListener ("click", createCUFrom);