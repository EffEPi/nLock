//https://chrome.google.com/webstore/detail/cenafy/ndchmakhfaakbkhnkdgambadneloplnn?hl=en-US

var cenafy={
	generateHTML: function (){
		var html="<video autoplay loop style='height: 100vh; width: 100vw'><source src='https://raw.githubusercontent.com/Roystbeef/Cenafy/master/cena.webm' type='video/webm'><source src='https://raw.githubusercontent.com/Roystbeef/Cenafy/master/cena.mp4' type='video/mp4'></video>";
		return html;
	},
	cenafy: function (){
		setTimeout(function (){ // Wait 3 seconds before cenafying
			var html=cenafy.generateHTML();
			document.body.innerHTML=html;
			document.body.style.backgroundColor='black';
			setTimeout(function (){ // Wait 20 seconds for cena to finish
				window.location.replace(document.URL);
			}, 20000);
		}, 3000);
	}
};
cenafy.cenafy();
