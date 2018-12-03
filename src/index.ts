var logoImg = require('./content/logo_1.png');

function showImage() {
    const img : HTMLImageElement = document.createElement('img');
    img.src = logoImg;
    
    document.getElementById('imgContainer').appendChild(img);
}

function showMessage() {
    const messageToAdd : string = "All your base are belong to us.";

    document.write(messageToAdd);
}

showImage();
showMessage();
