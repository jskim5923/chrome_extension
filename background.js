var timer = null
var interval = 5000
var enable = false
var tabId = 0
var checkedItem = []
chrome.runtime.onMessage.addListener(function handleMessage(request, sender, sendResponse) {
    tabId = request.tabId
    enable = request.enable
    selectedItem = request.selectedItem
    selectedIndex = request.selectedIndex
    checkedItem = request.checkedItem

    if(enable) {
        start()
    } else {
        stop(false)
    }
})

chrome.tabs.onRemoved.addListener(function(cloesedTabId){
    if(tabId == cloesedTabId) {
        stop(true)
    }

})

function initVariables(isTabClose) {
    if(!isTabClose) {
        chrome.browserAction.setBadgeText({
            tabId: tabId,
            text: ''
            });
    }
    clearInterval(timer)
    timer = null
    interval = 5000
    enable = false
    tabId = 0
}

function start() {
    timer = setInterval(function(){
        chrome.browserAction.setBadgeText({
            tabId: tabId,
            text: '' + (interval/1000).toString()
          });
        chrome.runtime.sendMessage({
            state : enable,
            interval: interval
        })
        interval -= 1000
        if(interval == 0) {
            interval = 5000
            excuteMacro()
        }
    },1000)
}

function stop(isTabClose) {
    initVariables(isTabClose)
    chrome.runtime.sendMessage({
        state : enable,
        interval: interval
    })
}

function excuteMacro() {
    chrome.tabs.executeScript(tabId,{
        code: 'var checkedItem = "'+checkedItem+'";'
    }, function() {
        chrome.tabs.executeScript(tabId,{file: 'script2.js'});
    });
}