(function() {
  let elemArr = Array.from(document.querySelectorAll('.page-text-hidden-container'));
  elemArr.forEach((item, i) => {
      let childElemButton = item.querySelector('.page-text-hidden__button');
      let cildElemShow = item;
    
      $( childElemButton).click(function() {
     
          $( cildElemShow).toggleClass( "page-text-hidden-container_visible", function() {

          });
          $(childElemButton).toggleClass( "page-text-hidden__button_up", function() {

          });
          $(childElemButton).toggleClass( "page-text-hidden__button_down", function() {

        });
        });
  })
})();