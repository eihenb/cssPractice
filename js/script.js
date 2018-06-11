let btns = document.querySelectorAll('.plans__btn');
let modal = document.querySelector('.modal');
let backdrop = document.querySelector('.backdrop');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

for(var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
};
// Open mobile nav
toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});
// close mobile on backdrop click.
backdrop.addEventListener('click', function() {
    closeModal();
    modal.style.display = 'none';
});
// close mobile on backdrop mobile.
mobileNav.addEventListener('click', function() {
    closeModal();
});

function closeModal() {
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
}