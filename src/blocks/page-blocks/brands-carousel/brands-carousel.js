$('#js-carousel-3').owlCarousel({

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

  (function() {
    let elemItem = document.querySelectorAll('.brands-carousel-item');
    


  })()