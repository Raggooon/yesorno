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
        // Implement the "No" button behavior as desired
    });
});
