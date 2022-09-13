let color = '#aaaaaa';
let vall = "deff"
chrome.runtime.onInstalled.addListener(() => {
    // chrome.storage.sync.set({ color });
    // chrome.storage.sync.set({links:[]});
    // console.log('Default background color set to %cgreen', `color: ${color}`);

});
// const fnToRun = async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         func: ()=>{
//             console.log('this too will print?')
//             localStorage.setItem('fakefake',"thisisfake")
//         }
//     });
// }
// // chrome.runtime.onStartup.addListener(fnToRun)
// // chrome.runtime.onConnect.addListener(fnToRun)
// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//     if (changeInfo.status == 'complete') {
//         fnToRun()
//     }
//   })