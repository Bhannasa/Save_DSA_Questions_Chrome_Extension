(async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log(tab.url)
    chrome.storage.sync.get("links", ({ links }) => {
        let def = "Succesfully added";
        let title = tab.title;
        let url = tab.url;
        if(!links)  links = [];
        if(links.find(link => url === link.url) !== undefined){
            def = "Already added."
        }else{
            links.push({url, done: false, title});
            chrome.storage.sync.set({links})
        }
        document.getElementById('text').innerText = title
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: runOnWindow,
            args: [def, title],
        });
    });
})();
function runOnWindow(def, title) {
    console.log(def)
    console.log(title)
    chrome.storage.sync.get("links",({links})=>{
        console.log(links)
    })
}