
// mainFunction();
// $('#home').css({display: "block"});
//
// $('#Customerload').click(function () {
//     mainFunction();
//     $('#custSec').css({display: "block"});
// });
//
// $('#Itemload').click(function () {
//     mainFunction();
//     $('#itemSec').css({display: "block"});
// });
// $('#Orderload').click(function () {
//     mainFunction();
//     $('#orderSec').css({display: "block"});
// });
//
//
// function mainFunction() {
//     $('#home,#custSec,#itemSec,#orderSec').css({display: "none"});
//
// }

hideAll();
$("#home").css('display', 'block');



$('#Homeload').click(function () {
    hideAll();
    $("#home").css('display', 'block');
    // $("#nav").text("Dashboard");
    // text = $('#nav').text();
    $('#morebtn').click(function () {

        $("#custSec").css('display', 'block');

    });
});


$('#Customerload').click(function () {

    hideAll();
    $("#custSec").css('display', 'block');
    // $("#nav").text("Customer Manage");
    // text = $('#nav').text();
});


$("#Itemload").click(function () {
    hideAll();
    $("#itemSec").css('display', 'block');
    // $("#nav").text("Item Manage");
    // text = $('#nav').text();
});

$("#Orderload").click(function () {
    hideAll();
    $("#orderSec").css('display', 'block');
    // $("#nav").text("Order Manage");
    // text = $('#nav').text();


});

function hideAll() {
    $("#home,#custSec,#itemSec,#orderSec").css('display', 'none');
}
