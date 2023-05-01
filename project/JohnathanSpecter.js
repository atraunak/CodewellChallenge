const mobileNav = () =>{
const menuButton = document.querySelector('#menu__button');
const mobileNav = document.querySelector('.mobile__nav');

menuButton.addEventListener('click', () => {
    mobileNav.Style.display = 'flex';
});
}
export default mobileNav;