var intervalText = document.querySelector('#interval')
var startButton = document.querySelector('#start')
var tabId = 0
var checkBoxList = document.getElementsByName('checkProduct');
var background = chrome.extension.getBackgroundPage()


updateUI(background.enable,background.interval)

function updateUI(state, interval) {
    startButton.value = state? '중지' : '시작'
    setCheckBox(state, background.checkedItem)
    if(state) {
        showTimer(interval)
    } else {
        hideTimer();
    }
}


chrome.runtime.onMessage.addListener(function handleMessage(request, sender, sendResponse) {
    updateUI(request.state, request.interval)
})

function showTimer(interval) {
    document.querySelector('#time').style.visibility = 'visible'
    document.querySelector('#time').innerText = interval / 1000
}

function hideTimer() {
    document.querySelector('#time').style.visibility = 'hidden'
    document.querySelector('#time').innerText = interval / 1000
}

function setCheckBox(enable, checkedItem) {
    for(var i = 0; i < checkBoxList.length; i++) {
        checkBoxList[i].disabled = enable
    }

    var checkArray = checkBoxList.values;
    for(var i =0; i < checkedItem.length; i++) {
        document.getElementById(checkedItem[i]).checked = true
    }
}

function setIntervalText(enable) {
    intervalText.disabled = enable
}

startButton.addEventListener('click', function(){
    chrome.tabs.query({active: true}, function(tabs){
        tabId = tabs[0].id
        var enable = false
        var checkedItem = []
        var interval = document.getElementById('interval').value
        var mobileNumber = document.getElementById('mobile_number').value
        console.log("interval: " + interval)
        for(var i = 0; i < checkBoxList.length; i++) {
            if(checkBoxList[i].checked) {
                checkedItem.push(checkBoxList[i].id)
            }
        }

        if(startButton.value == '시작') {
            if(checkedItem.length == 0) {
                alert('상품을 체크하세요')
                return
            }
            startButton.value = '중지'
            enable = true

        } else {
            startButton.value = '시작'
            enable = false
        }
        setCheckBox(enable,checkedItem)
        setIntervalText(enable)
        chrome.runtime.sendMessage({
            tabId: tabs[0].id,
            enable: enable,
            checkedItem : checkedItem,
            mobileNumber: mobileNumber,
            interval: interval
        })
    })
})