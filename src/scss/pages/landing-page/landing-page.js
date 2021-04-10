// import './landing-page-call/call-box/callback-second/__phone-input/callback-second__phone-input';
// import './landing-page-reviews/landing-page-reviews';
// import './landing-page-prices/show-prices';
// import './landing-page-map/landing-page-map';
$('#js-carousel-1').owlCarousel({
   // Показывать слайды покругу
   loop: true,
  
   // Отступ
   margin: 20,
   center: false,
   stagePadding: 30,
   // mergeFit: false,
   autoWidth: false,
   autoplayHoverPause: true,
 
   // Автоматическое проигрывание
   autoplay: false,
   autoplayTimeout: 5000,
   smartSpeed: 1000,
   nav: true,
   navText: ["", ""],
   // Количество элементов 1
 items: 3,

 // Не отображать точки
 dots: false,


 // Адаптация
 responsive: {

   // Ширина от 500 пикселей
   300: {
     // Количество элементов 2
     items: 1,
     // Включаем точки
     dots: true
   },

   // Ширина от 800 пикселей
   800: {
     // Количество элементов 3
     items: 2,
     // Включаем точки
     dots: true
   }
 }

  });

  $('#js-carousel-2').owlCarousel({

    // Показывать слайды покругу
    loop: true,
  
    // Отступ
    margin: 50,
    center: false,
    stagePadding: 30,
    // mergeFit: false,
    autoWidth: false,
    autoplayHoverPause: true,
  
    // Автоматическое проигрывание
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    nav: true,
    navText: ["", ""],
    // Количество элементов 1
  items: 1,

  // Не отображать точки
  dots: false,


  // Адаптация
  responsive: {

    // Ширина от 500 пикселей
    500: {
      // Количество элементов 2
      items: 1,
      // Включаем точки
      dots: true
    },

    // Ширина от 800 пикселей
    800: {
      // Количество элементов 3
      items: 1,
      // Включаем точки
      dots: true
    }
  }

  });