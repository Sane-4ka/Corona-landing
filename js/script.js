window.addEventListener('DOMContentLoaded', () => {
    const openBurgerBtn= document.querySelector('.icon-open');
    const closeBurgerBtn = document.querySelector('.icon-close');

    openBurgerBtn.addEventListener('click', () => {
        document.querySelector('.menu__body').classList.add('open');
        closeBurgerBtn.style.display = 'block';
        openBurgerBtn.style.display = 'none';
    });

    closeBurgerBtn.addEventListener('click', () =>  {
        document.querySelector('.menu__body').classList.remove('open');
        closeBurgerBtn.style.display = 'none';
        openBurgerBtn.style.display = 'block';
    });
});

