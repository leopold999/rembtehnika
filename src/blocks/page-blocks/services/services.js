(function() {
  let elemArr = Array.from(document.querySelectorAll('.services.services-hidden-container'));
  elemArr.forEach((item, i) => {
      let childElemButton = item.querySelector('.services-hidden__button');
      let cildElemShow = item;
    
      $( childElemButton).click(function() {
     
          $( cildElemShow).toggleClass( "services-hidden-container_visible", function() {

          });
          $(childElemButton).toggleClass( "services-hidden__button_up", function() {

          });
          $(childElemButton).toggleClass( "services-hidden__button_down", function() {

        });
        });
  })
})();