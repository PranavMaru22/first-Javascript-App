let show = document.getElementById(`text`)
console.log(text)
let saveText = document.getElementById(`save-txt`)
console.log(saveText)

let count=0

function add(){
    count +=1
    show.textContent=count
}
function subtract(){
    if(count>0){
        count  -=1
        show.textContent=count
    }
}
function save(){
    let display = `${count} -- `
    saveText.textContent+=display
}
function remove(){
	saveText.textContent=""
}