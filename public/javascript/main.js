
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
