function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

const words = ['Graphic Designer', 'Video Editor', 'Marketing Assistant'];
let i = 0, j = 0, deleting = false;

function type() {
    let word = words[i];
    const typewriterElement = document.getElementById('typewriter');
    
    if (typewriterElement) {
        typewriterElement.textContent = word.substring(0, j);

        if (!deleting && j === word.length) {
            deleting = true;
            setTimeout(type, 1000);
            return;
        }

        if (deleting && j === 0) {
            deleting = false;
            i = (i + 1) % words.length;
        }

        j = deleting ? j - 1 : j + 1;
        setTimeout(type, deleting ? 50 : 100);
    }
}
type();

function openWorkModal(id) {
    document.getElementById(id).style.display = "block";
    document.body.style.overflow = "hidden"; 
}

function closeWorkModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto"; 
}

function openExperience(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.style.overflow = "hidden";
}

function closeExperience(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = "auto";
}

function openSkill(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.style.overflow = "hidden";
}

function closeSkill(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay') || event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
};