// set up our canvas to fill the screen

let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let context = canvas.getContext('2d')


let msUntilReady = 2000 + (Math.random() * 3000) // 2-5 seconds of waiting
let msUntilLate = msUntilReady + 1000 // half a second to react


let start = new Date()
let ready = new Date(start.getTime() + msUntilReady)
let late = new Date(start.getTime() + msUntilLate)

window.addEventListener('keydown', event => {
  if (event.code == 'Enter') {
    let now = new Date()
    if (now < ready) {
      alert('too early!')
    } else if (now > late) {
      alert('too slow!')
    } else {
      alert('YOU WIN!!!')
    }
  }
})
// Square
function draw(){

	
  context.fillStyle = 'green';
  context.rect(canvas.width/2, canvas.height/2, 100, 100);
  context.fill()

}

function erase(){

  context.fillStyle = 'white';
  context.rect(canvas.width/2, canvas.height/2, canvas, canvas);
  context.fill()

}

// todo how to make this graphical?
setTimeout(draw, msUntilReady)
setTimeout(erase, msUntilLate)

