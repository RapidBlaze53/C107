var gotResults;

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ojDzEmaw7/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}