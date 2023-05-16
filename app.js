var blueColor = document.getElementById('btn1')
var RedColor = document.getElementById('btn2')

blueColor.addEventListener('click', changeInBlueColor)
RedColor.addEventListener('click', changeInRedolor)

function changeInBlueColor(){
    document.getElementById('Main_body').style.backgroundColor = 'darkblue'
}
function changeInRedolor(){
    document.getElementById('Main_body').style.backgroundColor = 'red'
}