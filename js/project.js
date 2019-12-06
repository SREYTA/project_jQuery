$(document).ready(function(){
    $('#recipe').on('change', function(){
        var fruit = $('#recipe').val();
       choose(fruit);
    });
});
function choose(fruit) {
    switch(parseInt(fruit)) {
        case  1:
            console.log("Apple");
            break;
        case  2:
            console.log("Banana");
            break;
        case  3:
            console.log("Chherry");
            break;
    }
}
// get Apple
var getApple = () => {
  var apple = "I love apple";
  PrintOut(apple);
}

// get banana
var getBanana = () => {
  var banana = "I love Banana";
  PrintOut(banana);

}

// get chherry
var getChherry = () => {
  var chherry = "I love Chherry";
  PrintOut(chherry);

}

// printOut  to chherry
var printOut = (out) => {
    $('#done').html(out);
}