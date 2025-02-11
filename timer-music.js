


let countdown;


function startTimer(duration) {
    clearInterval(countdown);
    let time = duration;
    const display = document.getElementById('timer');
    countdown = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (time <= 0) {
            clearInterval(countdown);
            triggerChat();
        }
        time--;
    }, 1000);
}

function finishTaskQ() {
    console.log('Task Finished')
    setTimeout(() => {
        clearInterval(countdown);
        triggerChat();
    }, 700);
}

function removeClassFromChildDiv() {
    const parent = document.getElementById('audio-selector');
    if (parent) {
        parent.querySelectorAll(`.theme`).forEach(child => {
            child.classList.remove('selected');
        });
    }
}

let currentAudio = null; // Store the currently playing audio
let currentAudioT = null; // Store the currently playing audio
let storedAudio = null;

function playAudioSoundLoop() {
    removeClassFromChildDiv();

    document.body.addEventListener('click', function (event) {
        const forestElement = event.target.closest('#forest');
        const officeElement = event.target.closest('#office');
        const rainElement = event.target.closest('#rain');
        const cityElement = event.target.closest('#city');
        const cafeElement = event.target.closest('#cafe');

        if (forestElement) {
            forestElement.classList.add('selected');
            playSound("https://cdn.freesound.org/previews/22/22384_8043-lq.mp3");
        }

        if (officeElement) {
            officeElement.classList.add('selected');
            playSound("https://cdn.freesound.org/previews/108/108695_1779874-lq.mp3");
        }

        if (rainElement) {
            rainElement.classList.add('selected');
            playSound("https://cdn.freesound.org/previews/157/157487_2366774-lq.mp3");
        }

        if (cityElement) {
            cityElement.classList.add('selected');
            playSound("https://cdn.freesound.org/previews/387/387313_7219799-lq.mp3");
        }

        if (cafeElement) {
            cafeElement.classList.add('selected');
            playSound("https://cdn.freesound.org/previews/15/15899_444-lq.mp3");
            playSoundT("https://cdn.freesound.org/previews/54/54066_18799-lq.mp3");
        }
    });
}

function playSound(src) {
    // Stop the currently playing audio if any
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    if (currentAudioT) {
        currentAudioT.pause();
        currentAudioT.currentTime = 0;
    }

    // Create and play new audio
    currentAudio = new Audio(src);
    currentAudio.loop = true;
    currentAudio.play();
}

function playSoundT(src) {
    // Stop the currently playing audio if any
    if (currentAudioT) {
        currentAudioT.pause();
        currentAudioT.currentTime = 0;
    }

    // Create and play new audio
    currentAudioT = new Audio(src);
    currentAudioT.loop = true;
    currentAudioT.play();
}