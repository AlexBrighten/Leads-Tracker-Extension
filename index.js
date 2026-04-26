const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("list-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
let myLeads = []

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

saveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

function render(leads) {

    let str = ""
    for (let lead of leads) {
        str += `<li><a target="_blank" href="${lead}">${lead}</a></li>`
    }
    listEl.innerHTML = str
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.removeItem("myLeads")
    listEl.innerHTML = ""
    myLeads = []
})