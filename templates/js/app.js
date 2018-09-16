let categories = ['subject', 'verb', 'predicate'];
for (const category of categories) {
    let words = document.querySelectorAll(`.${category}`);
    words.forEach(function(el, i) {
        el.addEventListener('click', function() {
            document.getElementById(category).innerHTML = el.innerHTML;
        });
    });
}

document.querySelectorAll('.wordbank div').forEach((a) => a.onclick = () => {
    let soundEnabled = document.getElementById('sound_enabled').checked;
    let pitchSlider = document.getElementById('pitch');

    let utterance = new SpeechSynthesisUtterance(a.innerText);
    // Our range slider works on integers, but pitch is between 0 and 2
    // according to
    // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/pitch
    utterance.pitch = pitchSlider.value / 10;

    if (soundEnabled) {
        speechSynthesis.speak(utterance);
    }
});
