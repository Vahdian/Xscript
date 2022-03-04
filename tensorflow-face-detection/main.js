let video = document.getElementById("video")
let model;

const setupCamera = () => {
    
    navigator.mediaDevices.getUserMedia({
        video: { width: 300, height:300},
        audio: false,
    })
    .then((stream) => {
        video.srcObject = stream;
    })

}

setupCamera()

