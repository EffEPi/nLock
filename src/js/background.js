chrome.runtime.onMessage.addListener(function (message, sender, sendResponse){
	var chance=Math.floor(Math.random()*100);
	if(chance<50){
		let plugins=[
			'background-img',
			'cenafy',
			'cloud-to-butt',
			'div-img',
			'ncage',
			'not-bug'
		];
		let plugin=plugins[Math.floor(Math.random()*plugins.length)];
		console.log('You just got nLocked with '+plugin);
		let filename='plugins/'+plugin+'/main.js';
		chrome.tabs.executeScript(sender.tab.id, {
			file: filename
		}, function (){
			sendResponse({
				done: true
			});
		});
		return true; // Required for async sendResponse()
	}
});
