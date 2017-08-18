let divs=document.getElementsByTagName('div');
let maxDiv=Math.floor(Math.random()*10);
for(var i=0; i<maxDiv; i++){
	let randomDiv=divs[Math.floor(Math.random()*divs.length)];
	randomDiv.style.background='url(http://lorempixel.com/400/200/)';
	randomDiv.style.backgroundSize='100% 100%';
}
