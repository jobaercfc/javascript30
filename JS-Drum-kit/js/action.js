const playAudio = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!key) return; //stop the function

    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing');
}

const removeTransition = (e) => {
    const key = document.querySelectorAll('.playing');
    if(e.propertyName !== 'transform') return; //skip if not transform
    key[0].classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playAudio);
