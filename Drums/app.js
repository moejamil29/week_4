// Play drum by keyboard press

const boomClick = document.getElementById('boom');
boomBtn.addEventListener("click", function(){ boomClick.play(); })

window.addEventListener('keydown', (event) => {
    if (event.key == 'a'){
    const boomAudio = document.getElementById('boom');
    boomAudio.play();
    boomAudio.currentTime = -0.5;
    console.log(event)
    }
})

const clapClick = document.getElementById('clap');
clapBtn.addEventListener("click", function(){ clapClick.play(); })

window.addEventListener('keydown', (event) => {
    if (event.key == 's'){
    const clapAudio = document.getElementById('clap');
    clapAudio.play();
    clapAudio.currentTime = -0.5;
    console.log(event)
    }
})

const hiHatClick = document.getElementById('hi-hat');
hiHatBtn.addEventListener("click", function(){ hiHatClick.play(); })

window.addEventListener('keydown', (event) => {
    if (event.key == 'd'){
    const hiHatAudio = document.getElementById('hi-hat');
    hiHatAudio.play();
    hiHatAudio.currentTime = -0.5;
    console.log(event)
    }
})

const kickClick = document.getElementById('kick');
kickBtn.addEventListener("click", function(){ kickClick.play(); })

window.addEventListener('keydown', (event) => {
    if (event.key == 'f'){
    const kickAudio = document.getElementById('kick');
    kickAudio.play();
    kickAudio.currentTime = -0.5;
    console.log(event)
    }
})

const openHatClick = document.getElementById('open-hat');
openHatBtn.addEventListener("click", function(){ openHatClick.play(); })

window.addEventListener('keydown', (event) => {
    if (event.key == 'g'){
    const openHatAudio = document.getElementById('open-hat');
    openHatAudio.play();
    openHatAudio.currentTime = -0.5;
    console.log(event)
    }
})

const rideClick = document.getElementById('ride');
rideBtn.addEventListener("click", function(){ rideClick.play(); })

window.addEventListener('keydown', (event) => {
    if (event.key == 'h'){
    const rideAudio = document.getElementById('ride');
    rideAudio.play();
    rideAudio.currentTime = -0.5;
    console.log(event)
    }
})

const snareClick = document.getElementById('snare');
snareBtn.addEventListener("click", function(){ snareClick.play(); })

window.addEventListener('keydown', (event) => {
    if (event.key == 'j'){
    const snareAudio = document.getElementById('snare');
    snareAudio.play();
    snareAudio.currentTime = -0.5;
    console.log(event)
    }
})

const tinkClick = document.getElementById('tink');
tinkBtn.addEventListener("click", function(){ tinkClick.play(); })

window.addEventListener('keydown', (event) => {
    if (event.key == 'k'){
    const tinkAudio = document.getElementById('tink');
    tinkAudio.play();
    tinkAudio.currentTime = -0.5;
    console.log(event)
    }
})

const tomClick = document.getElementById('tom');
tomBtn.addEventListener("click", function(){ tomClick.play(); })

window.addEventListener('keydown', (event) => {
    if (event.key == 'l'){
    const tomAudio = document.getElementById('tom');
    tomAudio.play();
    tomAudio.currentTime = -0.5;
    console.log(event)
    }
})

// // Play music by mouse click

