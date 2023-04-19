var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}

recognition.onresult = function (event) {

    console.log(event);
    var Content = event.results[0][0].transcript;
    if (Content == "take my selfie") {
        console.log("taking selfie -----");
        speak();
        document.getElementById("textbox").innerHTML = Content;

    }



}


Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach(camera);
var img_id = "";

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "taking You a selfie in 5 seconds";
    img_id = "";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function() {
        img_id = "1";
        take_snapshot();
        speak_data = "taking you a snapshot in 10 seconds";
       
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },5000);

    setTimeout(function () {
        img_id = "2";
        take_snapshot();
        speak_data = "taking You a selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

    setTimeout(function () {
         img_id = "3";
        take_snapshot();
    }, 15000);
}






function take_snapshot() {
    Webcam.snap(function (data_uri) {
        if (img_id == "1") {
            document.getElementById("result").innerHTML = '<img id="selfie_image1" src=" ' + data_uri + '">';
        }

        if (img_id == "2") {
            document.getElementById("result2").innerHTML = '<img id="selfie_image2" src=" ' + data_uri + '">';
        }

        if (img_id == "3") {
            document.getElementById("result3").innerHTML = '<img id="selfie_image3" src=" ' + data_uri + '">';
        }

    });
}