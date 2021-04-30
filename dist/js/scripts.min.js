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
let closeModalBtn = [...document.querySelectorAll('.modal-close')];

function hallModal() {
    if (!openHallModal) {

    } else {
        openHallModal.addEventListener('click', (e) => {
            e.preventDefault();
            modalHall.classList.add('open');
            document.body.classList.add('no-scroll');

        });
        modalHall.addEventListener('click', () => {
            modalHall.classList.remove('open');
            document.body.classList.remove('no-scroll');

        });
        document.querySelector('.modal-hall').addEventListener('click', (e) => {
            e.stopPropagation();
        });
        closeModalBtn.forEach((cls) => {
            cls.addEventListener('click', () => {
                cls.closest('.modal-window').classList.remove('open');
            })
        })

    }
}

hallModal();


//----
let hallMenu = [...document.querySelectorAll('.hall-menu ul li')];
let hallTab = [...document.querySelectorAll('.hall-tab')];

function ifHallMenu() {
    if(!hallMenu.length) {

    } else {
        hallMenu.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                document.querySelector('.hall-menu ul li.active').classList.remove('active');
                document.querySelector('.hall-tab.active').classList.remove('active');
               btn.classList.add('active');
                hallTab[k].classList.add('active');

            })
        })
    }
};

ifHallMenu();

let exhibMenuBtns = [...document.querySelectorAll('.ex-menu__left > ul li')];
let exhibMenuTabs = [...document.querySelectorAll('.ex-menu__tab')];
let exhibMenuAdd = [...document.querySelectorAll('.ex-video__line .btn')];

function ifExhibMenu() {
    if(!exhibMenuBtns.length) {

    } else {
        exhibMenuBtns.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                let activeExhib = document.querySelector('.ex-menu__left > ul li.active');
                if(!activeExhib) {

                } else {
                    activeExhib.classList.remove('active');
                    document.querySelector('.ex-menu__tab.active').classList.remove('active');
                }

                btn.classList.add('active');
                exhibMenuTabs[k].classList.add('active');

            })
        });
        exhibMenuTabs.forEach((tab, j) => {
            let closeBtn = tab.querySelector('.close-tab');
            closeBtn.addEventListener('click', () => {
                closeBtn.closest('.ex-menu__tab').classList.remove('active');
                exhibMenuBtns[j].classList.remove('active');
            })
        });
        exhibMenuAdd.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
            })
        })
    }
};

ifExhibMenu();