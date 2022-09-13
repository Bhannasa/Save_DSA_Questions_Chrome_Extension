document.getElementById('changeColor').onclick = () => {
    document.body.style.backgroundColor = "yellow"
}
(async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log(tab.url)
    chrome.storage.sync.get("links", ({ links }) => {
        let def = "Succesfully added";
        if(!links)  links = [];
        if(links.find(link => tab.url === link) !== undefined){
            def = "Already added."
        }else{
            links.push(tab.url);
            chrome.storage.sync.set({links})
        }
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: runOnWindow,
            args: [def],
        });
    });
})();
function runOnWindow(def) {
    console.log(def)
    chrome.storage.sync.get("links",({links})=>{
        console.log(links)
    })
}