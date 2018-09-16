let categories = ['subject', 'verb', 'predicate'];
for (const category of categories) {
    let words = document.querySelectorAll(`.${category}`);
    words.forEach(function(el, i) {
        el.addEventListener('click', function() {
            document.getElementById(category).innerHTML = el.innerHTML;
        });
    });
}

document.querySelectorAll('.wordbank div').forEach((a)=>a.onclick = ()=> {
    var soundEnabled = document.getElementById('sound_enabled').checked;
    if (soundEnabled) speechSynthesis.speak(new SpeechSynthesisUtterance(a.innerText))
});
