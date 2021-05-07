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
                document.body.classList.remove('no-scroll')
            })
        })

    }
}

hallModal();

let lobbyModalOpen = document.querySelector('.lobby-modal-open');
let modalLobby = document.querySelector('.modal-window__links');

function lobbyModal() {
    if (!lobbyModalOpen) {

    } else {
        lobbyModalOpen.addEventListener('click', (e) => {
            e.preventDefault();
            modalLobby.classList.add('open');
            document.body.classList.add('no-scroll');

        });
        modalLobby.addEventListener('click', () => {
            modalLobby.classList.remove('open');
            document.body.classList.remove('no-scroll');

        });
        modalLobby.querySelector('.modal-container').addEventListener('click', (e) => {
            e.stopPropagation();
        });
        closeModalBtn.forEach((cls) => {
            cls.addEventListener('click', () => {
                cls.closest('.modal-window').classList.remove('open');
                document.body.classList.remove('no-scroll')
            })
        });

    }
}

lobbyModal();


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

//------

let cartBtn = [...document.querySelectorAll('.btn.cart')];

function ifCartOnPage() {
    if (!cartBtn.length) {

    } else {
        cartBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                document.body.classList.toggle('no-scroll');
                if (!document.querySelector('.modal-window__start')) {

                } else {
                    if (document.querySelector('.modal-window__start').classList.contains('open')) {
                        document.body.classList.add('no-scroll');

                    } else {


                    }
                }

                document.querySelector('header').classList.toggle('cart-open');

            })
        })
        document.body.addEventListener('click', (e) => {
            if (e.target.closest('.cart')) {
                console.log(e.target)
            } else {
                if (document.querySelector('header').classList.contains('cart-open')) {
                    if(!e.target.closest('.cart-mini')) {
                        document.body.classList.remove('no-scroll');
                        document.querySelector('header').classList.remove('cart-open');
                        if (!document.querySelector('.modal-window__start')) {

                        } else {
                            if (document.querySelector('.modal-window__start').classList.contains('open')) {
                                document.body.classList.add('no-scroll');

                            } else {


                            }
                        }

                    } else {

                    }


                } else {

                }

            }


        })
    }
};
ifCartOnPage();

let btnIframe = [...document.querySelectorAll('.btn.btn--iframe')];
let modalIframe = document.querySelector('.modal-window__iframe');

function ifIframeModal() {
    if(!btnIframe.length) {

    } else {
        btnIframe.forEach((btn) => {
            btn.addEventListener('click', () => {
                let frameSrc = btn.dataset.videoSrc;
                console.log(frameSrc);
                modalIframe.querySelector('iframe').src = frameSrc;
                modalIframe.classList.add('open');
                document.body.classList.add('no-scroll');
                modalIframe.addEventListener('click', () => {
                    modalIframe.classList.remove('open');
                    modalIframe.querySelector('iframe').src = '';

                });
                modalIframe.querySelector('.modal-container').addEventListener('click', (e) => {
                    e.stopPropagation();
                })
            })
        })
    }
};
ifIframeModal();