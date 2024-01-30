function startClassification()
{

navigator.mediaDevices.getUserMedia({ audio:true});
 classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VUovvmjKU/model.json', modelReady);

}

function modelReady(){

classifier.classify( gotResult);

}

function gotResult(error, results) {

if (error) {

console.error(error);

} else {

console.log(results);
random_number_r = Math.floor(Math.random() * 255 ) + 1;
random_number_g = Math.floor(Math.random() * 255 ) + 1;
random_number_b = Math.floor(Math.random() * 255 ) + 1;

document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

img = document.getElementById('gato1');
img1 = document.getElementById('gato2');
img2 = document.getElementById('gato3');
img3 = document.getElementById('gato4');

if (results[0].label == "assobio") {

img.src = 'gato1.gif';
img1.src = 'gato2.jpg';
img2.src = 'gato3.png';
img3.src = 'gato4.png';

}

else if (results[0].label == "gato") {

    img.src = 'gato1.png';
    img1.src = 'gato2.gif';
    img2.src = 'gato3.png';
    img3.src = 'gato4.png';

}

else if (results[0].label == "palma") {

    img.src = 'gato1.png';
    img1.src = 'gato2.jpg';
    img2.src = 'gato3.gif';
    img3.src = 'gato4.png';

}else{

    img.src = 'gato1.png';
    img1.src = 'gato2.jpg';
    img2.src = 'gato3.png';
    img3.src = 'gato4.gif';

}

}

}