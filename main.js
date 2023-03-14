Webcam.set({
    height: 250,
    width: 250,
    image_format:"png",
    png_quality: 90
}) ;

camera=document.getElementById("camera");

Webcam.attach("#camera")

function capture() {
    Webcam.snap(function(data_uri)
    {
        document.getElementById("Snapshot").innerHTML = "<img id='pic' src="+ data_uri +">";
    });
}

console.log('ml5 version',ml5.version);
        classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DzqRKTb9r/model.json',modeloaded);

function modeloaded() {
    console.log("Model has been loaded successfully.")
}

function identify() {
    img = document.getElementById('pic');
    classifier.classify(img, gotresults);
}

function gotresults(error, results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("obj_name").innerHTML = "Object: "+results[0].label;
        document.getElementById("obj_accuracy").innerHTML = "Accuracy: "+results[0].confidence.toFixed(2);
    }
}