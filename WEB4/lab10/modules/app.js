import { KeyControls } from './keyControls.js'
import { Layer } from './layer.js'
import { Loop } from './loop.js'

class App {
  constructor(container) {
    this.layer = new Layer(container);
    this.keyboard = new KeyControls([`KeyA`, `KeyS`, `KeyD`, `KeyW`]);
    this.keys = this.keyboard.keys;

    this.rect = {
      x: 0,
      y: 0,
      w: 40,
      h: 40,
      vx: 40,
      vy: 40,
      
      isAir: true,
      color: `black`,
      gravity: 90,
      isCrouch: false
    }

    new Loop(this.update.bind(this), this.display.bind(this));
  }
  update() {
    

    if (this.keys.KeyD) { this.rect.x += this.rect.vx }
    if (this.keys.KeyA) { this.rect.x -= this.rect.vx }
    if (this.keys.KeyS) { this.rect.y += this.rect.vy }
    if (this.keys.KeyW) { this.rect.y -= this.rect.vy }
    /*
     //ограничение на нижниюю грань
    if (this.rect.y + this.rect.h >= this.layer.h) {
      this.rect.y = this.layer.h - this.rect.h;
      //this.rect.isAir = false
    }
    if (this.rect.y + this.rect.h <= this.rect.h) {
      this.rect.y = this.layer.h - this.layer.h;
    }
    if (this.rect.x + this.rect.w >= this.layer.w) {
      this.rect.x = this.layer.w - this.rect.w;
    }
    if (this.rect.x + this.rect.w <= this.rect.w) {
      this.rect.x = this.layer.w - this.layer.w;
    }*/

     //ограничение на нижниюю грань
     if (this.rect.y + this.rect.h >= 800) {
      this.rect.y = 800 - this.rect.h;
      //this.rect.isAir = false
    }
    if (this.rect.y + this.rect.h <= this.rect.h) {
      this.rect.y = 800 - 800;
    }
    if (this.rect.x + this.rect.w >= 400) {
      this.rect.x = 400 - this.rect.w;
    }
    if (this.rect.x + this.rect.w <= this.rect.w) {
      this.rect.x = 400 - 400;
    }
    
  }
  display() {
    this.layer.context.clearRect(0, 0, this.layer.w, this.layer.h); 
    this.layer.context.fillStyle = this.rect.color;
    this.layer.context.fillRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h); 
    for (var x = 0.5; x < 440; x += 40) {
      this.layer.context.moveTo(x, 0);
      this.layer.context.lineTo(x, 800);
    }
    
    for (var y = 0.5; y < 800; y += 40) {
      this.layer.context.moveTo(0, y);
      this.layer.context.lineTo(400, y);
    }
    
    this.layer.context.strokeStyle = "black";
    this.layer.context.stroke();
    let sprite ={
      x:0,
      y:0,
      width:40,
      heigth:40
    }

    //this.layer.context.strokeRect(440, 40, 120, 40);
    this.layer.context.moveTo(440, 80);
    this.layer.context.lineTo(565, 80);
    this.layer.context.font = "38px serif";
    this.layer.context.fillText("000000", 445, 75);
  }
}

onload = () => { new App(document.body) }