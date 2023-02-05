const image = document.getElementById("image")

const blueImage =()=>{
    image.src = "./img/Blue umbrella.png"
}

const pinkImage =()=>{
    image.src = "./img/Pink umbrella.png"
}

const yelloImage =()=>{
    image.src = "./img/Yello umbrella.png"
}

const uploadImage = ()=>{
    document.getElementById("imageUpload").click();
    document.getElementById("upload-text").innerHTML="STARAPPS | PNG";
    document.getElementById("upload-img").src = "./img/loader_icon.svg";
}

var loadFile = function(event) {
    document.getElementById("image1").style="display:block";
    document.getElementById("image1").style="width:50px";
    document.getElementById("image").style="display:none";
    document.getElementById("output").style="display:none";
    setTimeout(()=>{
        document.getElementById("image").style="display:block";
        document.getElementById("image1").style="display:none";
        var image = document.getElementById('output');
        document.getElementById("output").style="display:block";
        image.src=URL.createObjectURL(event.target.files[0]);
    },3000)
};
