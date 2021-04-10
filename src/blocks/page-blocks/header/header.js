
import ShowMenu from '../../../js/plugins/showMenu/showMenu';

let headerMenu = new ShowMenu({
    buttonElemClass: "menu-button", //элемент кнопки
    menuElemClass: "main-menu", //элемент меню
    menuElemInvisClass: "menu_invisible", //класс убранного элемента
    menuElemVisClass: "menu_visible",// класс видимого элемента
});

(function() {
    let menuItemElemArr = Array.from(document.querySelectorAll('.main-menu__item-arrow'));
    if (menuItemElemArr.length == 0) return;
    let clientWidth = document.documentElement.clientWidth;
    
    let elem;

    menuItemElemArr.forEach((item, i) => {
        item.addEventListener('click', e => {
            if (clientWidth >= 1024) return;

            let elemMenu = e.target.closest('.main-menu__item-arrow');
            let dropList = elemMenu.querySelector('.main-menu__item-drop-list');
            
            if (!elemMenu.classList.contains('main-menu__item-arrow_opened')) {
                elemMenu.classList.add('main-menu__item-arrow_opened');
                let margin = dropList.offsetHeight;
                elemMenu.style.marginBottom =  dropList.children.length*48 + 'px';
                elemMenu.style.transition = '0.1s';
                dropList.classList.add('main-menu__item-drop-list_visible');
            } else {
                elemMenu.classList.remove('main-menu__item-arrow_opened');
                elemMenu.style.marginBottom = 0;
                elemMenu.style.transition = '0.1s';
                dropList.classList.remove('main-menu__item-drop-list_visible');
 
            }
        })
    })

})()



