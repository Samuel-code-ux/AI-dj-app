song = "";
song1 ="";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
righttWristY = 0;
scoreLeftWrist = 0;
function preload(){
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist =results[0].pose.keypoints[9].score;

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX + "leftWristY =" +leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX + "rightWristY =" + rightWristY);

    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("red");
    stroke("red");
    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);
        InNumberleftWristY = Number(leftWristY);
        remove_decimal = floor(InNumberleftWristY);
        volume = remove_decimal/500;
        document.getElementById("volume").innerHTML = "Volume =" + volume;
        song.setVolume(volume);
        song2.stop();
    }
    if(song1 = false)
    {
        circle(leftWristX,leftWristY,20);
        InNumberleftWristY = Number(leftWristY);
        remove_decimal = floor(InNumberleftWristY);
        volume = remove_decimal/500;
        document.getElementById("volume").innerHTML = "Volume =" + volume;
        song.setVolume(volume);
        song1.play();
    }
}
