document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    const offScreenDealerPage = document.querySelector('.off-screen-dealer-page');
    const findDealerLink = document.getElementById('Find_dealear_link');

    findDealerLink.addEventListener('click', () => {
        offScreenDealerPage.classList.toggle('active');
        customCursor.style.backgroundColor = '#fff';
    });
});

const nav = document.querySelector('.nav');
const scrollImage = document.querySelector('.nav img');

const handleScroll = () => {
    if (window.scrollY > 0) {
        nav.style.backdropFilter = 'blur(1vw)';
        nav.style.zIndex = 3;
        scrollImage.src = 'rolls-royce_motor_cars-brandlogo.net_.png';
    } else {
        nav.style.backdropFilter = 'none';
        scrollImage.src = 'RRLogo.png';
    }
};

window.addEventListener('scroll', handleScroll);

const hamMenu = document.querySelector('.nav-1');
const offScreenMenu = document.querySelector('.off-Screen-Menu');
const textFrontPage = document.querySelector('.textFrontPage');
const menuText = document.getElementById('Sp1');
const firstLine1 = document.querySelector('.b12');
const firstLine2 = document.querySelector('.b13');
const secondLine = document.querySelector('.b2');
const thirdLine = document.querySelector('.b3');
const frontPageVideo = document.querySelector('.video1');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    textFrontPage.style.display = 'none';
    frontPageVideo.style.filter = 'brightness(0.5)';

    if (hamMenu.classList.contains('active')) {
        textFrontPage.style.display = 'none';
        menuText.innerHTML = 'Close';
        frontPageVideo.style.filter = 'brightness(0.3)';
        menuText.style.fontSize = '1.2vw';
        firstLine1.style.display = 'none';
        firstLine2.style.display = 'none';
        secondLine.style.transform = 'rotate(45deg)';
        secondLine.style.top = '0';
        thirdLine.style.transform = 'rotate(135deg)';
        thirdLine.style.bottom = '0';
        menuText.style.fontFamily = '"Riviera Nights", "Gill Alt One MT", Helvetica, Arial, -apple-system, sans-serif';
    } else {
        textFrontPage.style.display = 'block';
        menuText.innerHTML = 'Menu';
        frontPageVideo.style.filter = 'brightness(0.8)';
        secondLine.style.transform = 'rotate(0)';
        secondLine.style.top = '';
        thirdLine.style.transform = 'rotate(0)';
        thirdLine.style.bottom = '';
        firstLine1.style.display = 'block';
        firstLine2.style.display = 'block';
    }
});
