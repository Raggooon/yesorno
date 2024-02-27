document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');

    btnYes.addEventListener('click', () => {
        alert("Yay! 😊");
        // You can add any action you want here, like changing the text or navigating to another page.
    });

    btnNo.addEventListener('mouseover', (event) => {
        if (!matchMedia('(pointer: coarse)').matches) { // Check if the device has a fine pointer (not touch screen)
            const newX = Math.random() * (window.innerWidth - btnNo.offsetWidth);
            const newY = Math.random() * (window.innerHeight - btnNo.offsetHeight);
            btnNo.style.position = 'fixed'; // Use 'fixed' to ensure the button moves relative to the viewport
            btnNo.style.left = `${newX}px`;
            btnNo.style.top = `${newY}px`;
        }
    });

    btnNo.addEventListener('click', () => {
        if (matchMedia('(pointer: coarse)').matches) { // For touch screens
            btnNo.style.fontSize = '1rem'; // Example action, adjust as needed
            alert("You can't say no 😅");
        }
    });
});
