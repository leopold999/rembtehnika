


(function() {
    let elemButtonArr = Array.from(document.querySelectorAll('.button-callback'));
    let elemCallbackPopup = document.querySelector('.callback-popup');
    
    if (elemButtonArr.length === 0) return;
    if (!elemCallbackPopup) return;

    elemButtonArr.forEach( (item, i) => {
        item.addEventListener('click', e => {
            elemCallbackPopup.classList.add('callback-popup_visible')
            $('body').css("overflow","hidden");
            let elemCloseButton = elemCallbackPopup.querySelector('.callback-popup__close-button');
            elemCallbackPopup.addEventListener('click', e => {
                let elemTarget = e.target;
                let elemPopupWrapper = elemCallbackPopup.querySelector('.callback-popup-wrapper');
                if (!elemPopupWrapper.contains(elemTarget)) {
                    elemCallbackPopup.classList.remove('callback-popup_visible')
                    $('body').css("overflow", "inherit");
                }
            })
            let elemOrderButton = elemCallbackPopup.querySelector('.button-order');
            elemOrderButton.addEventListener('click', e => {
                elemCallbackPopup.classList.remove('callback-popup_visible')
                    $('body').css("overflow", "inherit");
            })

            elemCloseButton.addEventListener('click', e => {
                elemCallbackPopup.classList.remove('callback-popup_visible')
                $('body').css("overflow", "inherit");
            })
        })
    })
})();

$(".callback-popup-form__phone-input").mask("+7 (999) 999 - 99 - 99");