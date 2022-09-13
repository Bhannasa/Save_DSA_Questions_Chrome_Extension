let color = '#aaaaaa';
let vall = "deff"
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
//   console.log(localStorage)
});