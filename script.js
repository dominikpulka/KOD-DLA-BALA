let canvas

class Brush{
    constructor(shape){
        this.shape = shape
        this.brush = document.createElement('div')
        this.styleBrush()            
    }
    
    getBrush(){
        return this.brush
    }

    styleBrush(){
        const className = this.shape + '-brush'
        this.brush.classList.add('brush', className)
        
    }
}
let brushShape = new Brush('square')

document.addEventListener('DOMContentLoaded', appStart)

function appStart() {
    canvas = document.querySelector('#canvas')
    canvas.addEventListener('touchstart', onTouchStart)
    canvas.addEventListener('touchend', onTouchEnd)
    canvas.addEventListener('touchmove', onTouchMove)

    document
        .querySelector('#squareBtn')
        .addEventListener('touchstart', () =>{
            brushShape = new Brush('square')
        })
    document
        .querySelector('#circleBtn')
        .addEventListener('touchstart', () =>{
            brushShape = new Brush('circle')
        })    
    
}

function onTouchMove(e){
    
    // pobierz pędzel{ }
    const brush = brushShape.getBrush()    
    
    // ustal położenie
    const x = e.touches[0].clientX - canvas.offsetLeft    
    const y = e.touches[0].clientY - canvas.offsetTop
    brush.style.top = y + 'px'
    brush.style.left = x + 'px'
    // namaluj
    canvas.appendChild(brush)
}

function onTouchStart(e){}

function onTouchEnd(e){}

