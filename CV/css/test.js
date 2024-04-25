document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = -70; 
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


function changeColor(element) {
    var firstWord = document.querySelector('.nav-link');
    firstWord.style.color = 'black';


    var allWords = document.querySelectorAll('.nav-link');
    allWords.forEach(function(word) {
        word.style.color = 'white';
    });

    
    element.style.color = 'black';
}



