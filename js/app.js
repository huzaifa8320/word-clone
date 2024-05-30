var text = document.getElementById(`text`)
var btn1 = document.getElementById(`btn1`)
var res = document.getElementById(`reset`)

function bold() {
        text.classList.add(`bold`)

}
function reset() { 
        text.classList.remove('bold', 'italic', `upper`)
    
}
function italic() {
        text.classList.add(`italic`)
}
function upper() {
    text.classList.add(`upper`)
}
function capitalize() {
    text.classList.add(`capitalize`)
}