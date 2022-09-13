let lists = JSON.parse(localStorage.getItem('links')) || [];
let html = "";
lists.forEach((item, idx) => {
    html += `
    <a href="${item.url}" target="_blank" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">
                <input title="check" class="form-check-input me-1" type="checkbox" value="" id="chkbox-${idx}" checked=${item.done}/>
                ${item.title}
            </h5>
            <small>3 days ago</small>
        </div>
        <p class="mb-1"> ${item.url}</p>
    </a>
    `
})
document.getElementById('list-group').innerHTML = html;