// get url and return url to getUrl()
function getUrl() {
  var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
  return url;
}

// 
$(document).ready(function() {
  requestApi();
  $('#recipe').on('change', () => {
    var choseRecipe = $('#recipe').val();
    getRecipe(choseRecipe);
  })
});

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

// get recipe
function getRecipe(id) {
  allData.forEach(item => {
    if(item.id == id){
      eachRecipe(item.name, item.iconUrl);
      eachIngredient(item.ingredients);
      eachStep(item.instructions);
      eachGuest(item.nbGuests);
    }
  })
}

// get name and img from recipes
function eachRecipe(name, img) {
  var result = "";
  result += `
    <div class="col-3"></div>
    <div class="col-3"><h3>${name}</h3></div>
    <div class="col-3"><img src="${img}" width="200" class="img-fluid"></div>     
    <div class="col-3"></div>
  `;
  $('#recipeResult').html(result);
}

// get number of guest
function eachGuest(nbGuests) {

  // show html input number of guest
  var text = "";
  text +=`
    <h5>Number of person<h5>
  `;
  $('#text').html(text);
  var result = "";
  result +=`
    <div class="input-group mb-3">
    <div class="input-group-append ">
      <button type="button" id="button"> &#8722; </button>
    </div>
    <input type="number" class="form-control btn btn-outline-primary " disabled id="number" value="${nbGuests}">
    <div class="input-group-append">
      <button type="submit" id="submit"> &#43; </button>
    </div>
  `;
  $('#numberGuest').html(result);

  // when onclick on button (-) it decrease of guest and (+) it increase of guest
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
    compute (add);
  }
}

// when increase and discrease of guest it make quantity follow


// // function discrease of numbers
function discreaseNumber(negative) {
  var minus = parseInt(negative) - 1;
  if (minus >= 0) {
    $('#number').val(minus);
    compute (minus);
  }
}

// function compute for calulate number of guest
function compute(num){
  computes = num * 5;
  
}

// loop and show ingredients
function eachIngredient(ingredients){
  var result = "";
  ingredients.forEach(element => {
    result +=`
      <tr>
          <th><img src="${element.iconUrl}" width="100"></th>
          <th>${element.name}</th>
          <th>${element.quantity}</th>
          <th>${element.unit[0]}</th>
      </tr>
    `;
    $('#ingredient').html('Ingredients');
    $('#ingredients').html(result);
  })
}

// loop step from instruction
function eachStep(instructions){
  var split = instructions.split("<step>");
  var result = "";
  for(i = 1; i < split.length; i++){
    result +=`
      <h6 class="text text-info">Step ${i}</h6>
      <p>${split[i]}</p>
    `;
    }
  $('#step').html(result);
  $('#instruchtion').html('Instruchtions');
}