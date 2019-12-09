$(document).ready(function () {

    $('#submit').on('click', function () {
        var number = $('#number').val();
        addNumber(number);
    });
    $('#button').on('click', function () {
        var number = $('#number').val();

        negativeNumber(number);
    });
});
function addNumber(numbers) {
    var add = parseInt(numbers) + 1;
    if (add <= 15) {
        $('#number').val(add);
        compute (add);

    }

}
function negativeNumber(negative) {
    var minus = parseInt(negative) - 1;
    if (minus >= 0) {
        $('#number').val(minus);
        compute (minus);
    }

}

function compute(num){
    computes = num * 5;
    $('h1').html(computes);
}
