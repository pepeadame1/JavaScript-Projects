
function setup() {
    createCanvas(1920,1080);
}
function draw() {
    var inicioX = random([0], [1920]);
    var inicioY = random([0], [1080]);
    var finalX = random([0],[1920]);
    var finalY = random([0], [1080]);
    stroke(random([0], [255]),random([0], [255]),random([0], [255]));
    line(inicioX, inicioY, finalX, finalY)
}