'use strict';
// скрывающийся скрол бокового меню (aside)
$(window).scroll(function() {
    if ($(this).scrollTop() > 650) {
        $('.market__sidenav').fadeIn();
    } else {
        $('.market__sidenav').fadeOut();
        
    };


    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.screan'),
          secondTrigger = document.querySelector('.screan__offer'),
          secondModal = document.querySelector('.window'),
          secondCloseModal = document.querySelector('[data-close]'),
          modalCloseBtn = document.querySelector('[data-close]');


//==============Second modal========================================

    secondTrigger.addEventListener('click', () => {
        secondModal.classList.add('show');
        secondModal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    });

    function closeWindow() {
        secondModal.classList.add('hide');
        secondModal.classList.remove('show');
        document.body.style.overflow = '';
    }

    secondCloseModal.addEventListener('click', closeWindow);

    secondModal.addEventListener('click', (e) => {
        if (e.target === secondModal) {
            closeWindow();
        }
    });
//-------------------------------------------------------------

    /*function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }*/


    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';  // отключает скролл при открытой модалке
        });
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });



});








      