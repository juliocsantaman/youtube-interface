const faBars = document.getElementById('fa-bars');
const menuContainer01 = document.getElementById('menu-container-01');
const menuContainer02 = document.getElementById('menu-container-02');
const container = document.getElementById('container');
let width;

faBars.addEventListener('click', function() {
    width = window.innerWidth;
    console.log(width);

    if(width >= 992) {
        if(menuContainer02.classList.contains('inactive-menu-container')) {
            console.log(menuContainer02.classList.contains('inactive-menu-container'));

            container.style.gridTemplateColumns = '5% 95%';
        } else {
            container.style.gridTemplateColumns = '20% 80%';
        }
    
        menuContainer01.classList.toggle('inactive-menu-container');
        menuContainer02.classList.toggle('inactive-menu-container');

    } else {
        menuContainer01.classList.toggle('active-menu-container');
    }
    
});

window.addEventListener('resize', function() {
    
    if(window.innerWidth >= 992 && menuContainer01.classList.contains('inactive-menu-container')){
        container.style.gridTemplateColumns = '5% 95%';
    }
    
    if(window.innerWidth >= 992 && menuContainer02.classList.contains('inactive-menu-container')){
        container.style.gridTemplateColumns = '20% 80%';
    }
    
    if(window.innerWidth < 992) {
        container.style.gridTemplateColumns = '100%';
        if( !(menuContainer02.classList.contains('inactive-menu-container')) ) {
            menuContainer02.classList.toggle('inactive-menu-container');
        }
    }
});