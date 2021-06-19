const faBars = document.getElementById('fa-bars');
const menuContainer01 = document.getElementById('menu-container-01');
const menuContainer02 = document.getElementById('menu-container-02');
const container = document.getElementById('container');

console.log(menuContainer02.classList.contains('inactive-menu-container'));

faBars.addEventListener('click', function() {
    
    if(menuContainer02.classList.contains('inactive-menu-container')) {
        container.style.gridTemplateColumns = '5% 95%';
    } else {
        container.style.gridTemplateColumns = '20% 80%';
    }

    menuContainer01.classList.toggle('inactive-menu-container');
    menuContainer02.classList.toggle('inactive-menu-container');
});