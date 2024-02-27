document.addEventListener('DOMContentLoaded', () => {
    const btnNo = document.getElementById('btnNo');

    function handleNoClick() {
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
    }

    btnNo.addEventListener('click', handleNoClick);
});
