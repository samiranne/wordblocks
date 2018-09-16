var subjects = document.querySelectorAll('.subject');
Array.prototype.forEach.call(subjects, function(el, i){
    el.addEventListener('click', function() {
        document.getElementById('subject').innerHTML = el.innerHTML;
    });
});

var verbs = document.querySelectorAll('.verb');
Array.prototype.forEach.call(verbs, function(el, i){
    el.addEventListener('click', function() {
        document.getElementById('verb').innerHTML = el.innerHTML;
    });
});

var predicates = document.querySelectorAll('.predicate');
Array.prototype.forEach.call(predicates, function(el, i){
    el.addEventListener('click', function() {
        document.getElementById('predicate').innerHTML = el.innerHTML;
    });
});

document.querySelectorAll('.wordbank div').forEach((a)=>a.onclick = ()=> {
    var soundEnabled = document.getElementById('sound_enabled').checked;
    if (soundEnabled) speechSynthesis.speak(new SpeechSynthesisUtterance(a.innerText))
});
