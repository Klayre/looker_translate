// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

// Listen for XHR
chrome.webRequest.onCompleted.addListener(function(stuff){
  // Make sure we are enabled
  chrome.storage.sync.get({
    isEnabled: true
  }, function(items) {
    if(items.isEnabled){
      // Send translate message
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        if(tabs[0]){
          chrome.tabs.sendMessage(tabs[0].id, {action: "translate"}, function(response) {});
        }
      });
    }
  });
}, {urls: [ "<all_urls>" ]});

//example of using a message handler from the inject scripts
// chrome.extension.onMessage.addListener(
//   function(request, sender, sendResponse) {
//   	chrome.pageAction.show(sender.tab.id);
//     sendResponse();
//   }
// );
