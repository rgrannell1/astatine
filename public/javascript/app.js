
"use strict"





var flagEmpty = id => {

	var elem = document.getElementById(id)

}

flagEmpty.salt     = flagEmpty.bind({ }, 'salt')
flagEmpty.password = flagEmpty.bind({ }, 'password')




var collectInformation = model => {


	// -- only rerun if not currently running.
	if (model.button.isActive === true) {
		return
	}

	model.salt.errorMessage     = null
	model.password.errorMessage = null
	model.userPrompt.message    = null

	var values = {
		password: element.password.value( ),
		salt:     element.salt.value( )
	}

	if (values.salt.length === 0) {

		flagEmpty.salt( )

	} else if (values.password.length === 0) {

		flagEmpty.password( )

	} else {

		// activate the button.

	}

}





var constants = {
	charcodes: {
		enter: 13
	}
}





var utils = {
	css:  { },
	keys: { }
}



utils.css.hasClass = (id, klass) => {
	return document.getElementById(` ${id} `).className.indexOf(` ${klass} `)
}

utils.css.replaceClasses = (id, replaced, replacement) => {

	var elem = document.getElementById(id)

	replaced.forEach(klass => {
		elem.className = elem.className.replace(klass, '')
	})

	elem.className += replacement

}




utils.keys.getKeycode = event => {
	return event.keyCode
}




var model = {
	button: {
		isActive: false
	},
	salt: {
		errorMessage: null
	},
	password: {
		errorMessage: null
	},
	userPrompt: {
		message: null
	}
}




var element = {

	button: {
		setLevel: { }
	},
	salt:     { },
	password: { }

}


element.button.reactivate = ( ) => {

	var elem         = document.getElementById("get-password")
	elem.textContent = message

	if (!elem.className.test(/\bactive\b/)) {
		elem.className += 'active'
	}

}

element.button.deactivate = ( ) => {
	return document.getElementById("get-password").className.test(/\b\b/)
}

element.button.isActive = ( ) => {
	return utils.css.hasClass("get-password", 'active')
}

element.button.setLevel.info = ( ) => {
	utils.css.replaceClasses("get-password", ['failure', 'success'], 'info')
}

element.button.setLevel.failure = ( ) => {
	utils.css.replaceClasses("get-password", ['info', 'success'], 'failure')
}

element.button.setLevel.success = ( ) => {
	utils.css.replaceClasses("get-password", ['info', 'failure'], 'success')
}

element.button.setMessage = message => {
	document.getElementById("get-password").textContent = message
}





element.salt.value = ( ) => {
	return document.getElementById("salt").value
}

element.salt.setFailure = ( ) => {
	return
}

element.salt.unsetFailure = ( ) => {
	return
}





element.password.value = ( ) => {
	return document.getElementById("password").value
}

element.password.setFailure = ( ) => {
	return
}

element.password.unsetFailure = ( ) => {
	return
}





document.getElementById("get-password").addEventListener("click", collectInformation)

document.getElementById("salt").onkeyup = event => {

	if (utils.keys.getKeycode(event) === constants.charcodes.enter) {

		if (element.salt.value( )) {
			collectInformation(model)
		}

	}

}


document.getElementById("password").onkeyup = event => {

	if (utils.keys.getKeycode(event) === constants.charcodes.enter) {
		collectInformation(model)
	}

}
