leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(50,120)

    canvas = createCanvas(550, 440);
    canvas.position(780, 140);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on ('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
    }
}

function modelLoaded() {
    console.log('PoseNet is initialized.');
}

function draw() {
    background('#9FB3AE');
    textSize("18");
    fill("#3D4F4A");
    text("Isha, 45, 55");

    differ = leftWristX - rightWristX;
    differenceSize = floor(differ);
}