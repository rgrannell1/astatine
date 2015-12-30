
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
