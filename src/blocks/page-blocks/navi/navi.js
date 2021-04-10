import ShowMenu from '../../../js/plugins/showMenu/showMenu';

let menuNavi = new ShowMenu({
    buttonElemClass: "services-button", //элемент кнопки
    menuElemClass: "navi_mobile", //элемент меню
    menuElemInvisClass: "navi_invisible", //класс убранного элемента
    menuElemVisClass: "navi_visible",// класс видимого элемента
})

// (function() {
//     let elemArr = Array.from(document.querySelectorAll('.repair-page-problems'));
//     elemArr.forEach((item, i) => {
//         let childElemButton = item.querySelector('.problem-button');
//         let cildElemShow = item.querySelector('.repair-page-problems-items-add');
      
//         $( childElemButton).click(function() {
       
//             $( cildElemShow).toggleClass( "repair-page-problems-items-add_visible", function() {
//                 // cildElemShow.style.display = 'flex';
//               // Animation complete.
//             });
//             $(childElemButton).toggleClass( "problem-button_close", function() {
//                 // cildElemShow.style.display = 'flex';
//               // Animation complete.
//             });
//           });
//     })
//   })();