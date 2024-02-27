document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');
    const questionText = document.querySelector('.question-container h1');

    btnYes.addEventListener('click', () => {
        // Change the question text to "Yes!!!!"
        questionText.textContent = "Yes!!!!!";
        // Hide the buttons
        btnYes.style.display = 'none';
        btnNo.style.display = 'none';
    });

    btnNo.addEventListener('click', () => {
        if (window.innerWidth <= 480) { // Mobile behavior
            const currentSize = parseFloat(window.getComputedStyle(btnNo).fontSize);
            btnNo.style.fontSize = `${Math.max(currentSize - 2, 10)}px`;
        } else { // Desktop behavior
            btnNo.style.position = 'absolute';
            const x = Math.random() * (window.innerWidth - btnNo.clientWidth);
            const y = Math.random() * (window.innerHeight - btnNo.clientHeight);
            btnNo.style.left = `${x}px`;
            btnNo.style.top = `${y}px`;
        }
    });
});
