
function setup() {
    createCanvas(1920,1080);
    background(0);
}
function sleep(ms){
    var initial = +new Date()           
    while(+new Date() < initial + ms){}
}
function draw() {
    
    if(mouseIsPressed){
        background(0);
        
    }
    sleep(50);
    var inicioX = random([0], [1920]);
    var inicioY = random([0], [1080]);
    var lado = floor(random([0], [3]));
    //stroke(random([0], [255]),random([0], [255]),random([0], [255]));
    stroke(255);
    strokeWeight(10);
    strokeCap(SQUARE);
    if(lado == 0){
    //0 = abajo    
    line(inicioX, inicioY,inicioX,inicioY-50);
    }else if(lado == 1){
    //1 = izq
    line(inicioX, inicioY,inicioX-50,inicioY);
    }else if(lado == 2){
    //2 = arriba
    line(inicioX, inicioY,inicioX,inicioY-(-50));
    }else if(lado == 3){
    //3 = derecha
    line(inicioX, inicioY,inicioX-(-50),inicioY);
    }
}