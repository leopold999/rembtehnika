(function(){
    let upElem = document.querySelector('#up-button');
    if (!upElem) return false;

    document.addEventListener('scroll', e => {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        
            
        if (scroll >= 1500 && !upElem.classList.contains('up-button_visible')) {
            upElem.classList.add('up-button_visible');
            console.log(1);



        } else if (scroll < 1500 && upElem.classList.contains('up-button_visible')) {
            upElem.classList.remove('up-button_visible');


        }
    })    

    
    

    upElem.addEventListener('click', e => {
        window.scrollTo(0, 0);

        


    })

})()