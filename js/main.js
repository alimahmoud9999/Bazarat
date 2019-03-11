$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center: false,
        items: 4,
        nav: false,
        dots: true,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.5
            },
            480: {
                items: 1.5
            },
            600: {
                items: 2
            },
            769: {
                items: 2.5
            },
            900: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
});
// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel({
//         center: true,
//         items: 1,
//         loop: true,
//         margin: 10,
//         responsive: {
//             0:{
//                 items:1
//             },
//             600: {
//                 items: 6
//             }
//         }
//     });
// });

$(document).ready(function () {
    $('#delete').hide();
    $('#add').hide();
    $('#update').hide();

    $('#btnD').click(function () {
        $('#delete').fadeIn();
    });

    $('#cancel').click(function () {
        $('#delete').fadeOut();
    });

    $('#btnAdd').click(function () {
        $('#add').fadeIn();
    });
    $('#add-cancel').click(function () {
        $('#add').fadeOut();
    });

    
    $('#btn_update').click(function () {
        // $('#update').fadeIn();
    });

    $('#update-cancel').click(function(){
        $('#update').fadeOut();
    });

    $('.area-book').click(function () {
        $('.area-book').removeClass('active');
        $(this).addClass('active');
    });
    // Choose Bazarat  page
    $('.btn-1-inc').on('click', function () {
        var input_selector = $('.input-1');
        var myVilue = parseInt(input_selector.val());

        myVilue = myVilue + 1;
        input_selector.val(myVilue);

                /**/
        var area_size=parseInt(input_selector.data('size'));


        var total_area=parseInt($('#total_area').val());
        var used_area=parseInt($('#used_area').val());
        var reminder_area=parseInt($('#reminder_area').val());
        var new_size=used_area+area_size;
        $('#used_area').val(new_size);

         var reminder_area_new=reminder_area-area_size;
        $('#reminder_area').val(reminder_area_new);

        /**/

    });

    $('.btn-1-dec').on('click', function () {
        var input_selector = $('.input-1');
        var myVilue = parseInt(input_selector.val());
        myVilue = myVilue - 1;
        input_selector.val(myVilue);

         /**/
        var area_size=parseInt(input_selector.data('size'));

        var total_area=parseInt($('#total_area').val());
        var used_area_desc=parseInt($('#used_area').val());
        var reminder_area=parseInt($('#reminder_area').val());

        var new_size=used_area_desc-area_size;
        $('#used_area').val(new_size);

         var reminder_area_new=reminder_area+area_size;
        $('#reminder_area').val(reminder_area_new);

        /**/

    });

    $('.btn-2-dec').on('click', function () {
        var input_selector2 = $('.input-2');
        var myValue2 = parseInt(input_selector2.val());
        myValue2 = myValue2 - 1;
        input_selector2.val(myValue2);


         /**/
        var area_size=parseInt(input_selector2.data('size'));

        var total_area=parseInt($('#total_area').val());
        var used_area_desc=parseInt($('#used_area').val());
        var reminder_area=parseInt($('#reminder_area').val());

        var new_size=used_area_desc-area_size;
        $('#used_area').val(new_size);

         var reminder_area_new=reminder_area+area_size;
        $('#reminder_area').val(reminder_area_new);

        /**/

    });

    $('.btn-2-inc').on('click', function () {
        var input_selector2 = $('.input-2');
        var myVilue = parseInt(input_selector2.val());
        myVilue = myVilue + 1;
        input_selector2.val(myVilue);

                  /**/
        var area_size=parseInt(input_selector2.data('size'));
        var total_area=parseInt($('#total_area').val());
        var used_area=parseInt($('#used_area').val());
        var reminder_area=parseInt($('#reminder_area').val());
        var new_size=used_area+area_size;
        $('#used_area').val(new_size);
         var reminder_area_new=reminder_area-area_size;
        $('#reminder_area').val(reminder_area_new);

        /**/

    });

    $('.btn-3-dec').on('click', function () {
        var input_selector3 = $('.input-3');
        var myValue3 = parseInt(input_selector3.val());
        myValue3 = myValue3 - 1;
        input_selector3.val(myValue3);

          /**/
        var area_size=parseInt(input_selector3.data('size'));
        var total_area=parseInt($('#total_area').val());
        var used_area_desc=parseInt($('#used_area').val());
        var reminder_area=parseInt($('#reminder_area').val());
        var new_size=used_area_desc-area_size;
        $('#used_area').val(new_size);

         var reminder_area_new=reminder_area+area_size;
        $('#reminder_area').val(reminder_area_new);

        /**/
    });

    $('.btn-3-inc').on('click', function () {
        var input_selector3 = $('.input-3');
        var myValue3 = parseInt(input_selector3.val());
        myValue3 = myValue3 + 1;
        input_selector3.val(myValue3);

                   /**/
        var area_size=parseInt(input_selector3.data('size'));
        var total_area=parseInt($('#total_area').val());
        var used_area=parseInt($('#used_area').val());
        var reminder_area=parseInt($('#reminder_area').val());
        var new_size=used_area+area_size;
        $('#used_area').val(new_size);
         var reminder_area_new=reminder_area-area_size;
        $('#reminder_area').val(reminder_area_new);

        /**/
    });

    $('.btn-4-dec').on('click', function () {
        var input_selector4 = $('.input-4');
        var myValue4 = parseInt(input_selector4.val());
        myValue4 = myValue4 - 1;
        input_selector4.val(myValue4);

          /**/
        var area_size=parseInt(input_selector4.data('size'));

        var total_area=parseInt($('#total_area').val());
        var used_area_desc=parseInt($('#used_area').val());
        var reminder_area=parseInt($('#reminder_area').val());

        var new_size=used_area_desc-area_size;
        $('#used_area').val(new_size);

         var reminder_area_new=reminder_area+area_size;
        $('#reminder_area').val(reminder_area_new);

        /**/
    });

    $('.btn-4-inc').on('click', function () {
        var input_selector4 = $('.input-4');
        var myValue4 = parseInt(input_selector4.val());
        myValue4 = myValue4 + 1;
        input_selector4.val(myValue4);

                   /**/
        var area_size=parseInt(input_selector4.data('size'));
        var total_area=parseInt($('#total_area').val());
        var used_area=parseInt($('#used_area').val());
        var reminder_area=parseInt($('#reminder_area').val());
        var new_size=used_area+area_size;
        $('#used_area').val(new_size);
         var reminder_area_new=reminder_area-area_size;
        $('#reminder_area').val(reminder_area_new);

        /**/
    });

    // nice scroll plugin
    $("body").niceScroll({
        cursorcolor: "#1ABC9C",
        cursorborder: "1px solid #67B930",
        cursorborderradius: "0"

    });

    $('.Details').niceScroll({
        cursorcolor: "#1ABC9C",
        cursorborder: "1px solid #67B930",
        cursorborderradius: "0"
    });
    $('.vr').niceScroll({
        cursorcolor: "#1ABC9C",
        cursorborder: "1px solid #67B930",
        cursorborderradius: "0"
    });
    $('.user-chat').niceScroll({
        cursorcolor: "#1ABC9C",
        cursorborder: "1px solid #67B930",
        cursorborderradius: "0"
    });

    $('.content-chat').niceScroll({
        cursorcolor: "#1ABC9C",
        cursorborder: "1px solid #67B930",
        cursorborderradius: "0"
    });

    $('.box-bazarty-tow').niceScroll({
        cursorcolor: "#1ABC9C",
        cursorborder: "1px solid #67B930",
        cursorborderradius: "0"
    });
    $('.form-pay select').niceScroll({
        cursorcolor: "#1ABC9C",
        cursorborder: "1px solid #67B930",
        cursorborderradius: "0"
    });
    
    $('.my-share').niceScroll({
        cursorcolor: "#1ABC9C",
        cursorborder: "1px solid #67B930",
        cursorborderradius: "0"
    });
    // fadin fadeout page info
    $('.box-head-edit h2:first-of-type').addClass('active');
    $('.box-head-edit h2').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    $('.fede-toggle-one').fadeIn();

    $('.pass-info').on('click', function () {
        $('.fede-toggle-one').slideUp();
        $('.fade-togle-tow').fadeIn();
    });

    $('.prs-info').on('click', function () {
        $('.fede-toggle-one').slideDown();
        $('.fade-togle-tow').fadeOut();

    });


    // $('.bazarty-fade').on('click', function () {
    //     $('.bazaraty-2-items').animate({
    //         right: 0
    //     });
    // });

    var save = $('.btn-save');
    var cancel = $('.btn-cancel');
    var edit = $('.btn-edit');
    var value = $('.box-value .btn');

    edit.on('click', function () {
        $(this).fadeOut();
        cancel.fadeIn();
        save.fadeIn();
        value.fadeIn();

    });

    cancel.on('click', function () {
        $(this).fadeOut();
        save.fadeOut();
        value.fadeOut();
        edit.fadeIn();
    });

    save.on('click', function () {
        $(this).fadeOut();
        value.fadeOut();
        cancel.fadeOut();
        edit.fadeIn();
    });


    var mysave = $('.btn-form-edit-save');
    var mycancel = $('.btn-form-edit-cancel');
    var edittype = $('.edit-info');
    var windoEdit = $('.windo-edit');

    edittype.on('click',function(){
        windoEdit.fadeIn();
    });
    mycancel.on('click',function(){
        windoEdit.fadeOut(100);
    });
});

/****** to preview uploaded image ******/
function readURL(input,id='blah') {
    if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
    $('#'+id)
    .attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
    }
    }
    
/****************************************/