chrome.runtime.sendMessage({
	injectSpecific: true
}, function (response){
	// Script injected, we can proceed
});