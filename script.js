document.getElementById('change-image').addEventListener('click', image)
document.getElementById('change-text').addEventListener('click', text)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('show').addEventListener('click', show)
document.getElementById('background').addEventListener('click', background)
//These five lines are all similar. They all tell the code to not do certain commands until a certain button is clicked.//

function image () {
  document.getElementById('picture').src = "images/Charles.jpg"
}

function text () {
  document.getElementById('text').innerHTML = "New Text"
}

function hide () {
  document.getElementById('text').style.display = "none"
}

function show () {
  document.getElementById('text').style.display = "block"
}

function background () {
  document.body.style.backgroundColor = "red"
}
//These five functions are similar. Each one tells the buttons what to do//
