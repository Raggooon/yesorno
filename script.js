document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');
    const questionText = document.getElementById('questionText');
    const imageContainer = document.getElementById('imageContainer');

    btnYes.addEventListener('click', () => {
        // Change the question text to "Yes!!!!"
        questionText.textContent = "Yes!!!!!";
        // Hide the buttons
        btnYes.style.display = 'none';
        btnNo.style.display = 'none';
        // Show the images
        imageContainer.classList.remove('hidden');
    });

    btnNo.addEventListener('click', () => {
        if (window.innerWidth <= 480) { // Mobile behavior
            // Shrink the "No" button
            const currentSizeNo = parseFloat(window.getComputedStyle(btnNo).fontSize);
            btnNo.style.fontSize = `${Math.max(currentSizeNo - 2, 10)}px`;
            // Grow the "Yes" button
            const currentSizeYes = parseFloat(window.getComputedStyle(btnYes).fontSize);
            btnYes.style.fontSize = `${Math.min(currentSizeYes + 2, 30)}px`;
        } else { // Desktop behavior
            // Move the "No" button to a random position within the viewport
            btnNo.style.position = 'absolute';
            const x = Math.random() * (window.innerWidth - btnNo.clientWidth);
            const y = Math.random() * (window.innerHeight - btnNo.clientHeight);
            btnNo.style.left = `${x}px`;
            btnNo.style.top = `${y}px`;
        }
    });
});
