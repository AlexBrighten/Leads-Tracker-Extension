const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const listEl = document.getElementById("list-el")

let myLeads = ["Alex", "Job", "Brighten"]

saveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    render()
})

function render() {
    let str = ""
    for (let leads of myLeads) {
        str += `<li>${leads}</li>`
    }
    listEl.innerHTML = str
}