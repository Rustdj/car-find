'use strict';


// скрывающийся скрол бокового меню (aside)


    window.onscroll = () => {
        const header = document.querySelector('.block__item');
        const Y = window.scrollY;

        if (Y > 500) {
            header.classList.add('_active')
        } else {
            header.classList.remove('_active')
        }

        
    }


    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.screan'),
        modalCloseBtn = document.querySelector('[data-close]');
        //secondTrigger = document.querySelector('.screan__offer'),
        //secondModal = document.querySelector('.window'),
        //secondCloseModal = document.querySelector('.window__close'),
        

    modalTrigger.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        })
    });

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    document.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

//================ Input интерактивный ========================

// document.querySelectorAll("fieldset.with-placeholder input").forEach(function(el, idx) {
//     el.addEventListener("focus", function() {
//       this.parentNode.querySelector(".placeholder").classList.add("active");
//     });
//     el.addEventListener("blur", function() {
//       if (this.value == "") {
//         this.parentNode.querySelector(".placeholder").classList.remove("active");
//       }
//     })
//   });

// --------- скрытие окна с призраком ----------------


const showLogContent = document.querySelector('.ghost'),
    btnTrigger = document.querySelectorAll('.header__pansil'),
    btnClose = document.querySelector('.ghost__close');

    btnTrigger.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showLogContent.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    btnClose.addEventListener('click', () => {
        showLogContent.classList.remove('active');
        document.body.style.overflow = '';
    });
    document.addEventListener('click', (e) => {
        if (e.target === showLogContent) {
        showLogContent.classList.remove('active');
        }
    });

// btnTrigger.addEventListener('click', () => {
//     showLogContent.classList.add('show');
//     showLogContent.classList.remove('hide');
//     document.body.style.overflow = 'hidden';

// });

// function modalClose() {
//     showLogContent.classList.add('hide');
//     showLogContent.classList.remove('show');
//     document.body.style.overflow = '';
// }

// btnClose.addEventListener('click', modalClose);

// showLogContent.addEventListener('click', (e) => {
//     if (e.target === btnClose) {
//         modalClose();
//     }
// });









// ---------------------------------------------------
function updateMouthEyes() {
    if (email.value.length > 0) {
        if (email.value.indexOf("@") > 0 && email.value.indexOf("@") < email.value.length - 1) {
            document.querySelector("#mouth").setAttribute("d", "M 75,115 C 79,110 92,117 102,117 111,117 123,111 127,114 131,117 123,136 102,136 81,137 73,121 75,115 Z");
        } else {
            document.querySelector("#mouth").setAttribute("d", "M 75,115 C 79,110 92,119 101,119 110,119 123,111 127,114 131,117 118,131 102,132 87,132 73,121 75,115 Z");
        }
    } else {
        document.querySelector("#mouth").setAttribute("d", "M 75,115 C 79,120 91,126 101,125 110,125 126,118 127,114 125,117 117,125 101,125 85,126 79,117 75,115 Z");
    }

    let pupilRight = document.querySelector("#pupil-right");
    let pupilLeft = document.querySelector("#pupil-left");
    let movePos = email.value.length > 30 ? 13.33 : email.value.length / 2.25;
    pupilRight.setAttribute("cy", 75);
    pupilLeft.setAttribute("cy", 76);
    pupilRight.setAttribute("cx", 78 + movePos)
    pupilLeft.setAttribute("cx", 113 + movePos);
}

let email = document.querySelector("#email");
email.addEventListener("focus", updateMouthEyes);
email.addEventListener("input", updateMouthEyes);
email.addEventListener("blur", function() {
    let pupilRight = document.querySelector("#pupil-right");
    let pupilLeft = document.querySelector("#pupil-left");
    pupilRight.setAttribute("cx", 84);
    pupilRight.setAttribute("cy", 69);
    pupilLeft.setAttribute("cx", 120);
    pupilLeft.setAttribute("cy", 71);

});

// password animation: move arms to cover eyes on focus, 
// and return to original position on blur
let password = document.querySelector("#password");
password.addEventListener("focus", function() {
    document.querySelector("#ghost-arm-left").setAttribute("d", "M 155,88 C 145,68 105,51 103,62 102,74 123,117 155,116");
    document.querySelector("#ghost-arm-right").setAttribute("d", "M 45,89 C 54,64 103,48 106,64 108,80 65,121 48,119");
});
password.addEventListener("blur", function() {
    document.querySelector("#ghost-arm-left").setAttribute("d", "M 155,88 C 191,90 194,114 192,125 191,137 172,109 155,116");
    document.querySelector("#ghost-arm-right").setAttribute("d", "M 45,89 C 25,92 9,108 11,124 13,141 27,115 48,119");
})
//================================================

//Form api
const button = document.querySelector('.call');
const image = document.querySelector('.auto');
const url = 'https://jsonplaceholder.typicode.com/todos/1';


async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.file;
    } catch (error) {
        console.log(error);
    }
}
button.addEventListener('click', () => {
    fetchHandler();
});

// Поисковик

document.querySelector('#elastic').oninput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.elastic li');
    if (val != '') {
        elasticItems.forEach(function(elem){
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            }
            else {
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
            }
        });
    }
    else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerText;
        });
    }
}

function insertMark(string, pos, len ) {
    return string.slice(0, pos)+'<mark>'+string.slice(pos, pos+len)+'</mark>'+string.slice(pos+len);
}

// Menu burger

const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
    const menuBody = document.querySelector('.header__top');
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        //document.body.style.overflow = 'hidden';
        //document.body.style.overflow = '';
    });
}


//spoiler

$(document).ready(function() {
    $('.block__title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(400);
    });
});


//  Animated

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('click', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
        } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('_active');
            } 
        }
    }
}
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
    

}