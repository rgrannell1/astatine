
"use strict"





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





module.exports = element
