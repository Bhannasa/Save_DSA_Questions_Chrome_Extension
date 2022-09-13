chrome.storage.sync.get("links", ({ links }) => {
    console.log(links)
    localStorage.setItem("links", JSON.stringify(links))
})