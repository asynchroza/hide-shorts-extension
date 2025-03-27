const urlMatches = ["*://*.youtube.com/*", "*://*.youtu.be/*"]

chrome.runtime.onInstalled.addListener(() => {
 chrome.scripting.registerContentScripts([
  {
   id: 'hide-shorts',
   js: ['scripts/content.js'],
   matches: urlMatches,
   runAt: 'document_end'
  }
 ]);
});

chrome.webNavigation.onCompleted.addListener(() => {
 chrome.scripting.unregisterContentScripts(['hide-shorts'], () => {
  chrome.scripting.registerContentScripts([
   {
    id: 'hide-shorts',
    js: ['scripts/content.js'],
    matches: urlMatches,
    runAt: 'document_end'
   }
  ]);
 });
},
 {url: [Object.values(urlMatches).forEach(url => ({urlMatches : url}))]}
);
