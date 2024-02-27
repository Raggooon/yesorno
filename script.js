document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');
    const container = document.getElementById('questionContainer');

    btnYes.addEventListener('click', () => {
        // Remove buttons
        btnYes.classList.add('hidden');
        btnNo.classList.add('hidden');
        // Display the message
        const yesMessage = document.createElement('h2');
        yesMessage.textContent = "Yes!!!!!";
        container.appendChild(yesMessage);
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
