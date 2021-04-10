// Отображение карточек с неиспрановстами
(function() {
  let elemArr = Array.from(document.querySelectorAll('.repair-page-problems'));
  elemArr.forEach((item, i) => {
      let childElemButton = item.querySelector('.problem-button');
      let cildElemShow = item.querySelector('.repair-page-problems-items-add');
    
      $( childElemButton).click(function() {
     
          $( cildElemShow).toggleClass( "repair-page-problems-items-add_visible", function() {
              // cildElemShow.style.display = 'flex';
            // Animation complete.
          });
          $(childElemButton).toggleClass( "problem-button_close", function() {
              // cildElemShow.style.display = 'flex';
            // Animation complete.
          });
        });
  })
})();


//отображение прайс-листа
(function() {
  let elemArr = Array.from(document.querySelectorAll('.table-container'));
  elemArr.forEach((item, i) => {
      let childElemButton = item.querySelector('.table-container__button');
      let cildElemShow = item;
    
      $( childElemButton).click(function() {
     
          $( cildElemShow).toggleClass( "table-container_visible", function() {

          });
          $(childElemButton).toggleClass( "table-container__button_up", function() {

          });
          $(childElemButton).toggleClass( "table-container__button_down", function() {

        });
        });
  })
})();


//отображение преимуществ в конце страницы

(function() {
  let elemArr = Array.from(document.querySelectorAll('.repair-page-questions-item'));
  

  elemArr.forEach((item, i) => {
      let childElemButton = item.querySelector('.repair-page-questions-item__title');
      let cildElemShow = item.querySelector('.repair-page-questions-list');
    
      
      $( childElemButton).click(function() {
       
          $( cildElemShow).toggleClass( "repair-page-questions-list_active", function() {
              // cildElemShow.style.display = 'flex';
            // Animation complete.
          });
          $(childElemButton).toggleClass( "repair-page-questions-item__title_active", function() {
              // cildElemShow.style.display = 'flex';
            // Animation complete.
          });
        });
  })


})();


