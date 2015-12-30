
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
