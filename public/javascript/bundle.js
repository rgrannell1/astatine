(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

"use strict"





var element = require('./element')





var collectInformation = model => {


	// -- only rerun if not currently running.
	if (model.button.isActive === true) {
		return
	}

	model.salt.errorMessage     = ''
	model.password.errorMessage = ''
	model.userPrompt.message    = ''

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





module.exports = collectInformation

},{"./element":3}],2:[function(require,module,exports){

"use strict"



var constants = {
	charcodes: {
		enter: 13
	}
}




module.exports = constants

},{}],3:[function(require,module,exports){

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

},{}],4:[function(require,module,exports){

"use strict"





var utils              = require('./utils')
var element            = require('./element')
var constants          = require('./constants')
var collectInformation = require('./collect-information')





var model = {
	button: {
		isActive: false
	},
	salt: {
		errorMessage: ''
	},
	password: {
		errorMessage: ''
	},
	userPrompt: {
		message: ''
	}
}





document.getElementById("get-password").addEventListener("click", collectInformation.bind({ }, model))

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

},{"./collect-information":1,"./constants":2,"./element":3,"./utils":5}],5:[function(require,module,exports){

"use strict"





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





module.exports = utils

},{}]},{},[4]);
