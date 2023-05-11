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
    }
}

function modelLoaded() {
    console.log('PoseNet is initialized.');
}

function draw() {
    background('#9FB3AE')
}
