const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModalButton = document.querySelector('.close-modal');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.tab;

        tabButtons.forEach(btn => btn.classList.toggle('active', btn === button));
        tabPanels.forEach(panel => {
            panel.classList.toggle('active', panel.id === target);
        });
    });
});

function openImage(src) {
    if (!src) return;
    modalImage.src = src;
    modal.classList.add('active');
}

document.querySelectorAll('.clickable').forEach(item => {
    item.addEventListener('click', () => {
        const fullImage = item.dataset.full;
        if (fullImage) openImage(fullImage);
    });
});

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
        this.style.display = 'none';
        this.parentElement?.classList.add('img-fallback');
    });
});

closeModalButton.addEventListener('click', () => {
    modal.classList.remove('active');
    modalImage.src = '';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('active');
        modalImage.src = '';
    }
});
