export const burgerHeader = () => {
   const burger = document.querySelector('.burger'),
   headerNav = document.querySelector('.header__nav');

   burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      headerNav.classList.toggle('active');
   });
}