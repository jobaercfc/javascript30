const playAudio = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!key) return; //stop the function

    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing');
}

const removeTransition = (e) => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!key) return; //stop the function
    key.classList.remove('playing');
}

window.addEventListener('keydown', playAudio);
window.addEventListener('keyup', removeTransition);
