// get url and return url to getUrl()
function getUrl() {
  var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
  return url;
}

// call api and use it
$(document).ready(function() {
  requestApi();
  $('#recipe').on('change', () => {
    var choseRecipe = $('#recipe').val();
    getAllRecipe(choseRecipe);
    // show card on the html
    $('#card').show();
  })
});

// hide card on the html
$('#card').hide();
// get api by json
function requestApi() {
  $.ajax ({
    dataType: "json",
    url: getUrl(),
    success: (data) => choseRecipe(data.recipes),
    error: () => console.log("Cannot get data"),
  });
}

// all data store array and loop recipe for choose recipe in selete option
var allData = [];
function choseRecipe(recipe) {
  allData = recipe;
  var option = "";
  recipe.forEach(element => {
    option +=`<option value="${element.id}">${element.name}</option>`;
  });
  $('#recipe').append(option);
}

// get all recipe
function getAllRecipe(id) {
  allData.forEach(el => {
    if(el.id == id){
      // get name and iconUrl from api
      otherRecipe(el.name, el.iconUrl);
      // get ingredients from api
      otherIngredient(el.ingredients);
      otherStep(el.instructions);
      otherGuest(el.nbGuests);
      otherQuantity = el;
      oldGuest = el.nbGuests;
    }
  })
}
s
// get name and img from recipes
function otherRecipe(name, img) {
  var result = "";
  result += `
    <div class="col-3"></div>
    <div class="col-3"><h3 class=" text-right mt-5">${name}</h3></div>
    <div class="col-6"><img src="${img}" width="200" class="img-fluid img-thumbnail float-left"></div>     
  `;
  $('#recipeResult').html(result);
}

// get number of guest
function otherGuest(nbGuests) {

  // show html input number of guest
  var text = "";
  text +=`
    <h5>Number of person<h5>
  `;
  $('#text').html(text);
  var result = "";
  result +=`
    <div class="input-group mb-3">
    <div class="input-group-append">
      <button type="button" id="button"> &#8722; </button>
    </div>
    <input type="number" class="form-control btn btn-outline-primary " disabled id="number" value="${nbGuests}">
    <div class="input-group-append">
      <button type="submit" id="submit"> &#43; </button>
    </div>
  `;
  $('#numberGuest').html(result);

  // when onclick on button (-) it discrease of guest and (+) it increase of guest
  $('#submit').on('click', function () {
    var number = $('#number').val();
    increaseNumber(number);
    
  });
  $('#button').on('click', function () {
    var number = $('#number').val();
    discreaseNumber(number);
  });
}

// function increase of numbers
function increaseNumber(numbers) {
  var add = parseInt(numbers) + 1;
  if (add <= 15) {
    $('#number').val(add);
    getQuest($("#number").val());
  }
}

// when increase and discrease of guest it make quantity follow
// function for new quanlity
function getQuest(quest) {
  var quantities;
  var newQuantity;
  var result = "";
  otherQuantity.ingredients.forEach(element => {
    var {quantity,iconUrl,name,unit} = element;
    quantities = quantity/oldGuest;
    newQuantity = quantities*quest;
    result += `
    <tr>
          <th><img src="${iconUrl}" width="100"></th>
          <th>${name}</th>
          <th>${newQuantity}</th>
          <th>${unit[0]}</th>
      </tr>
    `;
  });
  $("#ingredients").html(result);
}

// function discrease of numbers
function discreaseNumber(negative) {
  var minus = parseInt(negative) - 1;
  if (minus >= 0) {
    $('#number').val(minus);
    getQuest($("#number").val());
  }
}

// loop and show ingredients
function otherIngredient(ingredients){
  var result = "";
  ingredients.forEach(element => {
    const {iconUrl, name, quantity, unit} = element;
    result +=`
      <tr>
          <th><img src="${iconUrl}" width="100"></th>
          <th>${name}</th>
          <th>${quantity}</th>
          <th>${unit[0]}</th>
      </tr>
    `;
    $('#ingredient').html('Ingredients');
    $('#ingredients').html(result);
  })
}

// loop step from instruction
function otherStep(instructions){
  var split = instructions.split("<step>");
  var result = "";
  var ruler = "";
  ruler +=`
    <div class="border-primary border-right" style="height: 100%"></div>
    `;
  $('#ruler').html(ruler);
  for(i = 1; i < split.length; i++){
    result +=`
      <h6 class="text text-info">Step ${i}</h6>
      <p>${split[i]}</p>
    `;
    }
  $('#step').html(result);
  $('#instruchtion').html('Instruchtions');
}