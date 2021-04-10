$('.rate-reviews').raty({
  cancelButton: false,
  starType:     'img',
  path: '/assets/img/pictures/rate_img',
  scoreName: 'rate', 
  score: 5
});


(function() {
  let elemButtonArr = Array.from(document.querySelectorAll('.reviews-description__button'));
  let elemPopup = document.querySelector('.reviews-popup');
  
  if (elemButtonArr.length === 0) return;
  if (!elemPopup) return;


  elemButtonArr.forEach( (item, i) => {
      item.addEventListener('click', e => {
          elemPopup.classList.add('reviews-popup_visible')
          let elemCloseButton = elemPopup.querySelector('.reviews-popup__close-button');
          $('body').css("overflow","hidden");
          elemPopup.addEventListener('click', e => {
              let elemTarget = e.target;
              let elemPopupWrapper = elemPopup.querySelector('.reviews-popup-wrapper');
              if (!elemPopupWrapper.contains(elemTarget)) {
                  elemPopup.classList.remove('reviews-popup_visible')
                  $('body').css("overflow", "inherit");
              }
          })

          elemCloseButton.addEventListener('click', e => {
              elemPopup.classList.remove('reviews-popup_visible')
              $('body').css("overflow", "inherit");
          })
      })
  })
})();

$(".reviews-popup-form__phone-input").mask("+7 (999) 999 - 99 - 99");