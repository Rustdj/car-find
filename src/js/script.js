'use strict';
// скрывающийся скрол бокового меню (aside)
$(window).scroll(function() {
    if ($(this).scrollTop() > 650) {
        $('.market__sidenav').fadeIn();
    } else {
        $('.market__sidenav').fadeOut();
        
    };


    // Modal

    const modalTrigger = document.querySelector('[data-modal]'),
      modal = document.querySelector('.screan'),
      modalCloseBtn = document.querySelectorAll('[data-close]');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }


    modalTrigger.addEventListener('click', () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';  // отключает скролл при открытой модалке
    });


    modalCloseBtn[0].addEventListener('click', () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    });

});








      