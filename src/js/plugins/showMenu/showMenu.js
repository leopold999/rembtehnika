export default class ShowMenu {
    constructor({buttonElemClass, menuElemClass, menuElemInvisClass, menuElemVisClass, buttonOnly}) {
        this.buttonElemClass = "." + buttonElemClass;
        this.menuElemClass = "." + menuElemClass;
        this.menuElemInvisClass = menuElemInvisClass;
        this.menuElemVisClass = menuElemVisClass;

        if (!this.buttonElemClass) return;
        if (!this.menuElemClass) return;
        

 
        let elemButton = document.querySelector(this.buttonElemClass);
        let elemMenu = document.querySelector(this.menuElemClass);
        
        document.addEventListener("click", e => {
            if (elemMenu.classList.contains(this.menuElemVisClass) && (elemButton.contains(e.target) || !elemMenu.contains(e.target)  )) {
                elemMenu.classList.remove(this.menuElemVisClass);
                elemMenu.classList.add(this.menuElemInvisClass);
                
                $('body').css("overflow", "inherit");
                
                return false;
            } else if (elemMenu.classList.contains(this.menuElemInvisClass) && elemButton.contains(e.target)) {
                
                elemMenu.classList.remove(this.menuElemInvisClass);
                elemMenu.classList.add(this.menuElemVisClass);
               
                $('body').css("overflow","hidden");
                return false;
            }
        })
    }

    _render(item, e) {
       
    }
}

//использование

// let menuNavi = new ShowMenu({
//     buttonElemClass: "services-button", //элемент кнопки
//     menuElemClass: "navi", //элемент меню
//     menuElemInvisClass: "navi_invisible", //класс убранного элемента
//     menuElemVisClass: "navi_visible",// класс видимого элемента
// })