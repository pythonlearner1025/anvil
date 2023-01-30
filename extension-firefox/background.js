chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        files: ['content.js'],
        target: {tabId: tab.id}
    })
});
