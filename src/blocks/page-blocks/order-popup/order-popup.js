//установка даты
function formatDate(date) {
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    var yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;
    return yy + '-' + mm + '-' + dd;
};

(function() {
    //Установка даты
    let tomorrowDateDefault = new Date(Date.now() + 86400000);
    let nextDateDefault = new Date(Date.now() + 86400000*15);
    let tomorrowDate = formatDate(tomorrowDateDefault);
    let nextDate = formatDate(nextDateDefault);

    let inputDate = document.querySelector(".order-popup-form__date");
    if (!inputDate) {
        return false;
    }
    inputDate.setAttribute('min', tomorrowDate);
    inputDate.setAttribute('max', nextDate);

    //установка времени
    let elemTime1 = document.querySelector(".order-popup-form__input-time1");
    let elemTime2 = document.querySelector(".order-popup-form__input-time2");


    elemTime1.addEventListener('input', e=> {
        let valueTime1 = e.target.value;
        if (parseInt(valueTime1) < 9) {
            elemTime1.value = '09:00';
            return false;

        }
        if (parseInt(valueTime1) > 17) {
                elemTime1.value = '17:00';
                return false;
            }

            if (parseInt(valueTime1) < 11) {
                elemTime2.value = (parseInt(valueTime1) + 6) + ":00";
                return false;
            } else {
                elemTime2.value = (parseInt(valueTime1) + 4) + ":00";
            }
            


        })
})();
    
(function() {
    let elemButtonArr = Array.from(document.querySelectorAll('.button-order'));
    let elemPopup = document.querySelector('.order-popup');
    
    if (elemButtonArr.length === 0) return;
    if (!elemPopup) return;

    elemButtonArr.forEach( (item, i) => {
        item.addEventListener('click', e => {
            elemPopup.classList.add('order-popup_visible')
            let elemCloseButton = elemPopup.querySelector('.order-popup__close-button');
            $('body').css("overflow","hidden");
            elemPopup.addEventListener('click', e => {
                let elemTarget = e.target;
                let elemPopupWrapper = elemPopup.querySelector('.order-popup-wrapper');
                if (!elemPopupWrapper.contains(elemTarget)) {
                    elemPopup.classList.remove('order-popup_visible')
                    $('body').css("overflow", "inherit");
                }
            })

            elemCloseButton.addEventListener('click', e => {
                elemPopup.classList.remove('order-popup_visible')
                $('body').css("overflow", "inherit");
            })
        })
    })
})();

$(".order-popup-form__phone-input").mask("+7 (999) 999 - 99 - 99");