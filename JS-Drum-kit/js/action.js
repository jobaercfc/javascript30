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

const onClickKey = (e) => {
    let keyValue = 0;
    if(e.target.className === 'key') {
        keyValue = e.target.dataset.key;
    } else if(e.target.parentElement.className === 'key') {
        keyValue = e.target.parentElement.dataset.key;
    }

    const audio = document.querySelector(`audio[data-key="${keyValue}"]`);
    const key = document.querySelector(`.key[data-key="${keyValue}"]`);

    if(!key) return; //stop the function

    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing');
    setTimeout(() => {
        key.classList.remove('playing');
    }, 500)
}

document.addEventListener('click', onClickKey);

window.addEventListener('keydown', playAudio);
window.addEventListener('keyup', removeTransition);
