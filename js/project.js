var url = "https://raw.githubusercontent.com/ronanogor/jquery-project/master/database-v1.json";
$(document).ready(function(){
    $('#recipe').on('change', function(){
        var recipe = $('#recipe').val();
        choose(recipe);
        // reuest api
          $.ajax({
          dataType: 'json',
          url: url,
          success : function(myData){
            var result = "";
            myData.recipes.forEach(element => {
              getIngredient(element.ingredients);
              if( element.id == 0 ){
                result +=`
                  <div class="row" >
                    <div class="col-3"></div>
                    <div class="col-3">
                      <h2>${element.name}</h2>
                    </div>
                    <div class="col-3">
                        <img src="${element.iconUrl}" class="img-fluid">
                    </div>
                    <div class="col-3"></div>
                  </div> 
                  <div class="row mt-3">
                    <div class="col-3"></div>
                    <div class="col-3 ">
                        Number of person
                    </div>
                    <div class="col-3">
                        <div class="input-group mb-3">
                          <div class="input-group-append">
                            <button class="btn btn-danger" type="button" id="button"> - </button>
                          </div>
                          <input type="number" class="form-control" disabled id="number" value="0">
                          <div class="input-group-append">
                            <button class="btn btn-success" type="submit" id="submit"> + </button>
                          </div>
                        </div>
                        <h1 class="display-1 text-center"  id="show"></h1>
                      </div>
                      <div class="col-3"></div>
                  </div>
                  <div class="row" >
        
                    <div class="col-6">
                      <h3>ingredient</h3>
                      <table class="table table-boderedless">
                          <tr>
                            <td></td>
                          </tr>
                      </table>
                    </div>
                    <div class="col-6">
                        <h3>Instruction</h3>
                    </div>
                </div>
                `;
              }
            });
            $('#getname').html(result);
          },
        error: () => console.log("Error"),
      });     
      
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
var ge = () => {
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

// get ingredient
var getIngredient = (ing) => {
  ing.forEach(item => {
      conputeHTML(item);
  })
}

// computer to html
var conputeHTML = (display) => {
  var compute = "";
  compute +=  `             
      <tr>
          <td><img src="${display.iconUrl}" width="100"></td>
          <td>${display.name}</td>
          <td>${display.quantity}</td>
          <td>${display.unit[0]}</td>
      </tr>
  `;
  printOut(compute);
}
// print out
printOut = (out) => {
  $('#ingredient').append(out);
} 