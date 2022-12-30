'use strict'
$(document).ready(() => {
//Код для меню
    $('.btn-menu').click(function () {
        let menu = $('.menu')
        // menu.toggleClass('menu_active');
        menu.css('display', 'flex');
    })

//Код для развертывания блока с картинками
    let hideBlock = $('.hiding-block');
    let arrow = $('.arrow-swipe-scroll svg');
    $('.arrow-swipe-scroll').click(function () {
        hideBlock.css('display', 'flex');
        arrow.css('transform', 'rotate(180deg)');
    })

    $('.close').click(function () {
        $('.menu').hide()
    })

//Код для просмотра фото
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {enabled: true}
    });

//Код для слайдера
    $('.slick-slider').slick({
        dots: true,
        // autoplay: true,
        autoplaySpeed: 1300,
        infinite: true,
        arrow: true,
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1040,
                settings: {
                    arrows: false,
                    // centerMode: true,
                    dots: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    dots: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    dots: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
// Код валидации

    let InputName = $('.forms-container .inputName');
    let InputPhone = $('.forms-container .inputPhone');
    let mod = $('#test-forms');
    let mods = $('.recording-container');
    let form = $('.forms-info');
    let loader = $('.loader')

    $('.submit').click(function () {

        let name = $('.forms-container .name');
        let phone = $('.forms-container .phone');
        let checkbox = $('#checked');
        let hasError = false;

        $('.error-input').hide();
        if (!name.val() /*|| name.val() !== 'itlogia'*/) {
            InputName.css('border-color', 'red');
            name.next().show();
            hasError = true;
        } else {
            InputName.css('border-color', 'rgb(236 198 107)')
        }
        if (!phone.val()) {
            InputPhone.css('border-color', 'red');
            phone.next().show();
            hasError = true;
        } else {
            InputPhone.css('border-color', 'rgb(236 198 107)')
        }

        if (!checkbox.is(':checked')) {
            checkbox.addClass('is_checked');
            hasError = true;
        } else {
            checkbox.removeClass('is_checked')
        }


        if (!hasError) {
            loader.css('display', 'flex')
            $.ajax({
                method: "POST",
                url: " https://testologia.site/checkout",
                data: {name: name.val(), phone: phone.val(), checkbox: checkbox.val()}
            })
                .done(function (msg) {
                    loader.css('display', 'none')
                    console.log(msg)
                    if (msg.success) {
                        form.hide();
                        mod.css('display', 'flex');
                        InputName.val('');
                        InputName.css('border-color', 'rgb(255,255,255)');
                        InputPhone.val('');
                        InputPhone.css('border-color', 'rgb(255,255,255)');
                    } else {
                        setTimeout(() => {
                            alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                        }, 100);
                        InputName.val('');
                        InputName.css('border-color', 'rgb(255,255,255)');
                        InputPhone.val('');
                        InputPhone.css('border-color', 'rgb(255,255,255)');
                    }
                });

        }
    })

     $('.btn-booking').click(function () {
         $('.recording').show()
    })

    // Код Валидации
    let modal = $('.recording')
    let Form = $('.form-block')
    let block =$('.recording-container');
    let AdviceName = $('.recording-content .name');
    let AdvicePhone = $('.recording-content .phone');

    $('.recordingBtn').click(function () {
        let checkbox = $('#check');
        let hasError = false;

        $('.error-input').hide();
        if (!AdviceName.val()) {
            AdviceName.css('border-color', 'red');
            AdviceName.next().show();
            hasError = true;
        } else {
            AdviceName.css('border-color', 'rgb(236 198 107)');
        }
        if (!AdvicePhone.val()) {
            AdvicePhone.css('border-color', 'red');
            AdvicePhone.next().show();
            hasError = true;
        } else {
            AdvicePhone.css('border-color', 'rgb(236 198 107)');
        }
        if (!checkbox.is(':checked')) {
            checkbox.addClass('checked');
            hasError = true;
        } else {
            checkbox.removeClass('checked')
        }


        if (!hasError) {
            loader.css('display', 'flex')
            $.ajax({
                method: "POST",
                url: " https://testologia.site/checkout",
                data: {name: AdviceName.val(), phone: AdvicePhone.val(), checkbox: checkbox.val()}
            })
                .done(function (msg) {
                    loader.hide()
                    console.log(msg)
                    if (msg.success) {
                        modal.hide();
                        Form.css('display', 'flex');
                        AdviceName.val('');
                        AdviceName.css('border-color', 'rgb(255,255,255)');
                        AdvicePhone.val('');
                        AdvicePhone.css('border-color', 'rgb(255,255,255)');
                    } else {
                        setTimeout(() => {
                            alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                        }, 100);
                        AdviceName.val('');
                        AdviceName.css('border-color', 'rgb(255,255,255)');
                        AdvicePhone.val('');
                        AdvicePhone.css('border-color', 'rgb(255,255,255)');
                    }
                });
        }
    })

    $('.btn-booking').click(function () {
        mods.css('display', 'flex')
    })

    $('#btn-forms').click(function () {
        mod.hide()
        form.show()
    })

    $('.recording-cancel').click(function () {
        mods.hide()
    })

    $('#btn-form').click(function () {
        Form.hide()
        block.hide()
    })

    let borm = $('#click-cover')
    $('#ellipse-top').click(function () {
        borm.css('display', 'block');
    })

    $('.scroll-to-block').click(function (e) {
        e.preventDefault();
        let target = $(this).data('block');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500)
    })

//     Клики по кружкам
//         let close = $('.technology-container');
        let one = $('.cover_one');
        let two = $('.cover_two');
        let tree = $('.cover_tree');
        let four = $('.cover_four');
        let five = $('.cover_five');

    $('.pointer').click(function () {
        one.show();
        two.hide();
        tree.hide();
        four.hide();
        five.hide();

    })
    $('.pointer-two').click(function () {
        one.hide();
        two.show();
        tree.hide();
        four.hide();
        five.hide()
    })
    $('.pointer-tree').click(function () {
        one.hide();
        two.hide();
        tree.show();
        four.hide();
        five.hide()
    })
    $('.pointer-four').click(function () {
        one.hide();
        two.hide();
        tree.hide();
        four.show();
        five.hide();
    })
    $('.pointer-five').click(function () {
        one.hide();
        two.hide();
        tree.hide();
        four.hide();
        five.show();
    })


// Wow
    new WOW({
        animateClass: 'animate__animated'
    }).init();

    //Маска для input
    $(".phone").mask("+(380) 999-99-99");


});

const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
    elem.style.backgroundPositionX = '0' + (0.9 * window.pageYOffset) + 'px';
})


