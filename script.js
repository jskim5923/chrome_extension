var interaval = 5000
var startButton = document.querySelector('#start')
var timer = null

function excuteMacro() {
    var dropDown = document.querySelector('#dropDown')
    var selectedItem = dropDown.options[dropDown.selectedIndex].text
    chrome.tabs.executeScript({
        code: 'var selectedItem = "'+selectedItem+'";'
    }, function() {
        chrome.tabs.executeScript({file: 'script2.js'});
    });
}

function startTimer() {
    startButton.value = '중지'
    timer = 1
    
    timer = setInterval(function(){
        interaval -= 1000
        if(interaval == 0) {
            interaval = 5000
            excuteMacro()
        }
        showTimer()
    },1000)
}

function stopTimer() {
    startButton.value = '시작'
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
        stopTimer()
    } else {
        startTimer()
    }
})


