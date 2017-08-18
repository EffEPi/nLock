let
		imgSrc=chrome.extension.getURL('/img/notbug.gif'),
		imgTop=100+Math.floor(Math.random()*400),
		imgLeft=100+Math.floor(Math.random()*800);

document.body.innerHTML+='<img src="'+imgSrc+'" style="position:fixed;top:'+imgTop+'px;left:'+imgLeft+'px" />';
