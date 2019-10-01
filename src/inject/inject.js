const MULTIPLIER = 2
const DELAY = 15000

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval)
    
    tiltElements()
    setInterval(tiltElements, DELAY)

	}
	}, 10);
});

function tiltElements() {
  const elements = Array.from(document.body.getElementsByTagName('*'))

  elements.forEach(element => {
    if (!element.style.transform) {
      const rotation = (Math.random() - 0.5) * MULTIPLIER
      element.style.transform = `rotate(${rotation}deg)`
    }
  })
}