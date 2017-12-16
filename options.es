(function () {
'use strict';

document.getElementsByTagName('button')[0].addEventListener('click', async function (event) {
	try {
		console.log(await browser.permissions.request({permissions: ['clipboardWrite']})
			? 'Permission was granted'
			: 'Permission was refused');
	} catch (exception) {
		console.log(exception.toString(), exception.stack);
	}
});

})();
