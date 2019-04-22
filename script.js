var interaval = 5000
var startButton = document.querySelector('#start')
var timer = null
var dropDown = document.querySelector('#dropDown')
function excuteMacro() {
    var selectedItem = dropDown.options[dropDown.selectedIndex].text
    chrome.tabs.executeScript({
        code: 'var selectedItem = "'+selectedItem+'";'
    }, function() {
        chrome.tabs.executeScript({file: 'script2.js'});
    });
}

function start() {
    startButton.value = '중지'
    dropDown.disabled = true
    timer = setInterval(function(){
        interaval -= 1000
        if(interaval == 0) {
            interaval = 5000
            excuteMacro()
        }
        showTimer()
    },1000)
}

function stop() {
    startButton.value = '시작'
    dropDown.disabled = false
    interaval = 5000
    hideTimer()
    clearInterval(timer)
    timer = null
}

function showTimer(interval) {
    document.querySelector('#time').style.visibility = 'visible'
    document.querySelector('#time').innerText = interaval / 1000
}

function hideTimer() {
    document.querySelector('#time').style.visibility = 'hidden'
    document.querySelector('#time').innerText = interaval / 1000
}

startButton.addEventListener('click', function(){
    if(timer != null) {
        stop()
    } else {
        start()
    }
})


