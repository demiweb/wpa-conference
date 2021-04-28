let burgerMenu = [...document.querySelectorAll('.burger-menu')];

function checkBurger() {
    if(!burgerMenu.length) {

    } else {
        burgerMenu.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                document.querySelector('.header').classList.toggle('open');
            })
        })
    }
};
checkBurger();

let btnLogin = document.querySelector('.btn--login');

function changeLogin() {
    if (!btnLogin) {

    } else {
        btnLogin.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.modal-window__start').classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    }
};


changeLogin();

let openHallModal = document.querySelector('.open-hall');
let modalHall = document.querySelector('.modal-window__hall');

function hallModal() {
    if (!openHallModal) {

    } else {
        openHallModal.addEventListener('click', (e) => {
            e.preventDefault();
            modalHall.classList.add('open');

        })
    }
}

hallModal();