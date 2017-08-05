(function (){
	var loadJS=function (url, location){
		//url is URL of external file, implementationCode is the code
		//to be called from the file, location is the location to
		//insert the <script> element

		var scriptTag=document.createElement('script');
		scriptTag.src=url;

		location.appendChild(scriptTag);
	};

	var chance=Math.floor(Math.random()*100);
	if(chance<20){
		let plugins=[
			'cenafy',
			'cloud-to-butt',
			'ncage'
		];
		let plugin=plugins[Math.floor(Math.random()*plugins.length)];
		let url=chrome.extension.getURL('plugins/'+plugin+'/main.js');
		console.log('You just got nLocked with '+plugin);
		loadJS(url, document.body);
	}
})();