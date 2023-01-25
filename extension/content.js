var thisIframe = document.getElementById('anvil-injected')
if (thisIframe == null) {
    var iframe = document.createElement('iframe'); 
    iframe.id = 'anvil-injected'
    iframe.style.colorScheme = 'normal'
    iframe.style.width = '600px'
    iframe.style.height = "100%";
    iframe.style.right = '0px'
    iframe.style.top = '0px'
    iframe.style.position = "fixed";
    iframe.style.zIndex = "9000000000000000000";
    iframe.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    iframe.frameBorder = "none"; 
    iframe.src = chrome.runtime.getURL("index.html")
    document.body.appendChild(iframe) 
} else if (thisIframe.style.width == '600px') {
    thisIframe.style.width = '0px'
} else if (thisIframe.style.width == '0px') {
    thisIframe.style.width = '600px'
}
